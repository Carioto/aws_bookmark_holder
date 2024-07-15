const { Movie, Bookmark, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
               
        getAUsersBookmarks:async(parent, {_id}) => {
          const allBooks=  await User.findById(
              {_id:_id}
              ).populate('bookmarks');
            return allBooks
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
        return User.create({firstName, lastName, username, password})
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
        const delBookmark = await Bookmark.findByIdAndDelete({_id:_id})
        return delBookmark;
      }
    }
}

module.exports = resolvers;