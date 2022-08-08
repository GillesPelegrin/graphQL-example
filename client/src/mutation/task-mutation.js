import {gql} from "@apollo/client";

const createTaskDef = gql`
    mutation CreateTask($title: String!, $message: String!) {
        createTask(title: $title, message: $message) {
            id
        }
    }
`;

export default createTaskDef;