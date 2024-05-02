const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        sheets: [Sheet]
    }

    type Sheet {
        player_name: String
        char_name: String
        char_class: String
        char_multiclass: String
        char_level: String
    }

    type Query {
        user: [User]
        sheet: [Sheet]
    }

    type Mutation {
        addSheet(
            player_name: String!
            char_name: String!
            ): Sheet
    }

`;

module.exports = typeDefs;