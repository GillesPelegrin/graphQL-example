import {gql} from "@apollo/client";

export const createTaskDef = gql`
    mutation CreateTask($title: String!, $message: String!) {
        createTask(title: $title, message: $message) {
            id
        }
    }
`;

export const deleteTaskDef = gql`
    mutation DeleteTask($taskId: String!) {
        deleteTask(taskId: $taskId) {
            id
        }
    }
`;