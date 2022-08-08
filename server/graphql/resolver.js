const db = require('./db')
const {v4: uuidv4} = require('uuid');

module.exports = {
    Query: {
        tasks: () => db.tasks,
    },
    Mutation: {
        createTask: (root, args) => {
            console.log(args)
             db.tasks.push({id: uuidv4(), title: args.title, message: args.message})
        },
    },
};