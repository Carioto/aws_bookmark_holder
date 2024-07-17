const typeDefs = `

type Bookmark {
    _id:ID
    description: String
    url:String
    category:String
    username:ID
  }
    
type User {
    _id:ID
    firstName:String
    lastName:String
    username:String
    password:String
    bookmarks:[Bookmark]
  } 

type Auth {
    token:ID!
    user:User

}

type Query {
    # get all usernames
    getAllUsers:[User]

    # get return one user's bookmarks
    getAUsersBookmarks(username:ID):[Bookmark]
}

type Mutation {
  # add a user
     addUser(firstName:String, lastName:String, username:String, password:String):User
  
  # change first and/or last name
     changeName(_id:ID, firstName:String, lastName:String):User
     
  # add a bookmark
     addBookmark (_id:ID,url:String, description: String,category:String):Bookmark
    
  # login user
     login(username:String, password:String): Auth

  # update a bookmark
     updateBookmark(_id:ID, url:String, description: String,category:String):Bookmark

  # delete a bookmark
      deleteBookmark(_id:ID):Bookmark

}
`;

module.exports = typeDefs;