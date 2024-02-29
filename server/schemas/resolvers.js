const { User, Sheet } = require('../models')

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            return await User.find({})
        },
        sheet: async (parents, args, context) => {
            return await Sheet.find({})
        }
    }
}

module.exports = resolvers;