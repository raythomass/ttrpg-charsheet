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
        char_strength: String
        char_dexterity: String
        char_constitution: String
        char_intelligence: String
        char_wisdom: String
        char_charisma: String
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