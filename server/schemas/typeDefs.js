const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        sheets: [Sheet]
    }

    type Sheet {
        name: String
        class: String
        multiclass: String
        level: String
    }

    type Query {
        user: [User]
        sheet: [Sheet]
    }

`

module.exports = typeDefs;