const {gql} = require("apollo-server-core");


module.exports = gql`
    type Task {
        id: String!,
        title: String!,
        message: String!
    }

    type Query {
        tasks: [Task]
    }

    type Mutation {
        createTask(title: String!, message: String!): Task
        deleteTask(taskId: String!): Task
    }
`