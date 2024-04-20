import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFilterCard from "./components/UserFilterCard/UserFilterCard.jsx";
import axios from "axios";

function App() {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:3000/users')
              .then((response) => {
                setUsers(response.data);
              })
              .catch((error) => {
                console.error('Error fetching data: ', error);
              });
    }, []);


    return (
        <>
            <div>
                <h1>Users</h1>
                <div className="users">
                    {users.map((user) => (
                        <UserFilterCard key={user.id} name={user.name} email={user.email} profile_picture={user.profile_picture}/>
                    ))}
                </div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
