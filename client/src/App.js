import './App.css';
import React, {useState} from "react"
import {useMutation, useQuery} from "@apollo/client";
import taskQueryDef from "./queries/task-query-def";
import createTaskDef from "./mutation/task-mutation";


function App() {
    const {loading, error, data, refetch} = useQuery(taskQueryDef);
    const [createTaskMutation, createTaskResp] = useMutation(createTaskDef);
    const [newTask, setNewTask] = useState({title: '', message: ''})

    // function createTask() {
    //     if (newTask.title !== '' && newTask.message !== '') {
    //         client.query({
    //             mutation: gql`
    //                 mutation createTask {
    //                     tasks {
    //                         title
    //                         message
    //                     }
    //                 }
    //             `,
    //         })
    //         .catch((err) => console.log(err));
    //     }
    // }

    return (
        <div className='container'>
            <table>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Message</td>
                </tr>
                </thead>
                <tbody>

                {!loading && data.tasks.map(({id, title, message}) =>
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{message}</td>
                    </tr>
                )}
                </tbody>
            </table>

            <form onSubmit={(e) => {
                e.preventDefault()
                createTaskMutation({variables: newTask})
                    .then(() => setNewTask({title: '', message: ''}))
                    .then((() => refetch({})));
            }}>
                <h1>Create Task</h1>

                <input placeholder='Title' value={newTask.title} onChange={(e) => setNewTask({...newTask, title: e.target.value})}/>
                <input placeholder='Message' value={newTask.message} onChange={(e) => setNewTask({...newTask, message: e.target.value})}/>
                <button type='submit'> Create Task</button>
            </form>
        </div>
    );
}

export default App;
