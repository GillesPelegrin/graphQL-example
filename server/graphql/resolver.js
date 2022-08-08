const db = require('./db')

module.exports = {
    Query: {
        tasks: () => db.tasks,
    },
};