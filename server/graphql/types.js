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
        createTask: Task
    }
`