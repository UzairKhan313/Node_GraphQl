const { buildSchema } = require("graphql");
module.exports = buildSchema(`
input UserInputData {
    email : String!
    name : String!
    password : String!
}
    type User {
        _id : ID!
        email : String!
        name : String!
        password : String
        status : String!
        posts: [Post!]!

    }
    type Post {
        _id:ID!
        title : String!
        content : String!
        imageUrl : String!
        creator : User!
        createdAt : String!
        updatedAt : String!
    }
    type AuthData {
        token : String!
        userId : String!
    }
    input PostInputData {
        title : String!
        content : String!
        imageUrl : String!
    }
    type PostData {
        posts : [Post!]!
        totalPosts : Int!
    }
    
    
    type RootQuery {
        login(email : String!, password : String!): AuthData!
        getPosts(page:Int) : PostData!
        getSinglePost(id:ID!): Post!
        user: User!
    }

    type RootMutation {
        CreateUser(userInput : UserInputData) : User!
        createPost(postInput : PostInputData) : Post!
        updatePost(id:ID!, postInput:PostInputData) : Post!
        deletePost(id:ID!): Boolean
        updateStatus(status : String!): User!

    }
    schema {
        query : RootQuery
        mutation : RootMutation
    }
`);
