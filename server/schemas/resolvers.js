const { User, Sheet } = require('../models')

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            return await User.find({})
        },
        sheet: async (parents, args, context) => {
            return await Sheet.find({})
        }
    },

    Mutation: {
        addSheet: async (parent, { player_name, char_name }) => {
            return Sheet.create({ player_name, char_name });
          },
    }
}

module.exports = resolvers;