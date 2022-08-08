import './App.css';
import client from './apollo-client'
import React, {useEffect, useState} from "react"
import {gql} from "@apollo/client";


function App() {

    const [tasks, setTasks] = useState([])

    function getTasks() {
        client.query({
            query: gql`
                query getTasks {
                    tasks {
                        id
                        title
                        message
                    }
                }
            `,
        })
        .then(({data}) => {
            setTasks(data.tasks)
        });
    }

    useEffect(() => {
        getTasks()
    }, [])

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

                {tasks.map(task =>
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.message}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default App;
