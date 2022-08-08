import {gql} from "@apollo/client";


const taskQueryDef = gql`
    query getTasks {
        tasks {
            id
            title
            message
        }
    }
`

export default taskQueryDef
