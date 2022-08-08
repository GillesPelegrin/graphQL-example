const db = require('./db')

module.exports = {
    Mutation: {
        createTask: () => {
            db.tasks
        },
    },
};