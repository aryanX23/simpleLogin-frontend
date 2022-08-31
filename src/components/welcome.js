import React from 'react';
import './welcome.css';
import 'tachyons';
import axios from 'axios';
export default function Welcome(){
    axios.defaults.withCredentials = true;
        const user = async () => {
            const temp = await axios.get('http://localhost:5000/login');
            return temp.name;
          };
    function handleClick(){
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:5000/logout");
        window.location.reload();
    }
    return(
        <div className='welcome tc center'>
            <h1>Welcome {user}!!</h1>
            <button onClick={handleClick}>LOG OUT</button>
        </div>
    );
}