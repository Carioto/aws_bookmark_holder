const { Bookmark, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth')
const mongoose = require("mongoose");

const resolvers = {
    Query: {
               
        getAUsersBookmarks:async(parent, {username}) => {
          const allBooks=  await Bookmark.find(
            {username:username}
            ).sort("category");
            return allBooks;
          },         
        getAggBookmarks:async(parent, {username}) => {
          console.log("🚀 ~ getAggBookmarks:async ~ username:", username)
          const uName = new mongoose.Types.ObjectId(username)
          const allBooks=  await Bookmark.aggregate([
            {$match:{username:uName}},
            {$sort: {category:1}},
            {$group: {_id:"$category"}},

          ]);
            console.log("🚀 ~ getAUsersBookmarks:async ~ allBooks:", allBooks);
            return allBooks;
          },         

          getAllUsers:async() => {
          const allUsers =  await User.find();
            return allUsers
          },
    },

    Mutation: {
      
      login:async (parent, { username, password }) => { const user = await User.findOne({username});
      if (!user){
        throw AuthenticationError;
      } 
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
      },

      addUser: async (parent, { firstName, lastName, username, password }) => {  
        const profile = await User.create({firstName, lastName, username, password});
        return profile;
      },

      addBookmark: async (parent,{_id,url, description, category}) => {
        console.log("🚀 ~ addBookmark: ~ username,url, description, category:", _id,url, description, category)
        const username = _id;
        const newUrl = await Bookmark.create({description, url, category,username})
        await User.findOneAndUpdate({_id:_id}, {$addToSet:{bookmarks:newUrl.id}})
        return newUrl;
      },
      
      changeName: async (parent,{_id,firstName, lastName}) => {        
        const newName = await User.findOneAndUpdate({_id:_id}, {$set:{firstName:firstName,lastName:lastName}})
        return newName;
      },

      updateBookmark: async (parent, {_id, url, description, category}) => {
        const updBookmark = await Bookmark.findByIdAndUpdate({_id:_id}, { $set:{url:url, description:description, category:category}})
        return updBookmark;
      },

      deleteBookmark: async (parent,{_id}) => {
        console.log("🚀 ~ deleteBookmark: ~ _id:", _id)
        const delBookmark = await Bookmark.findByIdAndDelete({_id:_id})
        
        return delBookmark;
      }
    }
}

module.exports = resolvers;