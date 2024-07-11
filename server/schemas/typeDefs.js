const typeDefs = `

type Bookmark {
    _id:ID
    description: String
    url:String
    category:String
  }
    
type User {
    firstName:String
    lastName:String
    username:String
    password:String
  } 

type Auth {
    token:ID!
    user:User

}

type Query {
    # get return one user's bookmarks
    getBookmarks(user:String):Bookmark
}

type Mutation {
    # add a user
    addUser(firstName:String, lastName:String, username:String, password:String)
    # add a bookmark
    addBookmark(username:String):User
    #login user
    login(username:String, password:String): Auth

}
`;

module.exports = typeDefs;