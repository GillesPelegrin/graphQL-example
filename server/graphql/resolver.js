const db = require('./db')
const {v4: uuidv4} = require('uuid');

module.exports = {
    Query: {
        tasks: () => db.tasks,
    },
    Mutation: {
        createTask: (root, args) => {
            db.tasks.push({id: uuidv4(), title: args.title, message: args.message})
        },
        deleteTask: (root, args) => {
            db.tasks = db.tasks.filter(task => task.id !== args.taskId)
        },
    },
};