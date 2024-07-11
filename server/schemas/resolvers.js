const { Movie, Bookmark } = require('../models');

const resolvers = {
    Query: {
               
        getAUsersBookmarks:async(parent, {id}) => {
          const allBooks=  await Bookmark.findById(
              {_id:_id}
              );
            return moviepick
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

      addBookmark: async (parent,{username,url, description, category}) => {
        const newUrl = await User.findOneAndUpdate({username:username}, {$addToSet:{bookmarks:{url, description,category}}})
        return newUrl;
      },

    }
}

module.exports = resolvers;