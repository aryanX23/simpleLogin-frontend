import React from "react";
import './register.css';
import 'tachyons';
import axios from "axios";
import Header from "./header";
export default function Register(){
    const [data,setData]=React.useState({name:"",email:"",pass:"",npass:""});
    const [status,setStatus]=React.useState(false);
    function handleChange(event){
        setData(prev=>({
            ...prev,
            [event.target.name]:event.target.value
        }));
    }
    function registerUser(){
        if(data.pass===data.npass){
            axios({
                method: 'post',
                url: 'http://localhost:5000/register',
                headers: {'Content-Type': 'application/json'}, 
                data: {
                    name:data.name,
                    email:data.email,
                    password:data.pass
                }
              }).then(response=>response.json())
            .then(console.log);
            setStatus(prev=>false);
        }
        else{
            setStatus(prev=>true);
            setData(prev=>({
            name:"",
            email:"",
            pass:"",
            npass:""
        }));
        }
    }
    return(
        <>
        <Header/>
        <div className="bodyStyle tc">
            <form className="w-25 center pa5 formStyle">
            <h1>Register</h1>
            <br />
            <h1 className="lgnd">Name</h1>
            <br />
            <br />
            <input className="submit-text" type="text" name="name" id="name"
            onChange={handleChange}
            value={data.name}
            />
            <br />
            <h1 className="lgnd">Email</h1>
            <br />
            <br />
            <input className="submit-text" type="text" name="email" id="email" 
            onChange={handleChange}
            value={data.email}
            />
            <br />
            <h1 className="lgnd">Password</h1>
            <br />
            <br />
            <input className="submit-text" type="text" name="pass" id="pass" 
            onChange={handleChange}
            value={data.pass}
            />
            <br />
            <h1 className="lgnd">Confirm Password</h1>
            <br />
            <br />
            <input className="submit-text" type="text" name="npass" id="npass" 
            onChange={handleChange}
            value={data.npass}
            />
            <br />
            <br />
            <input className="submit" type="submit" name="submit" id="submit" 
            onClick={registerUser}
            />
            <br />
            {status && <h1 className="lgnd">Passwords do not Match!</h1> } 
            </form>
        </div>
        </>
    );
}