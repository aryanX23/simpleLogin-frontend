import React from "react";
import './signin.css';
import 'tachyons';
import axios from "axios";
import Header from "./header";
import { Link } from "react-router-dom";
export default function SignIn(){
    const [data,setData]=React.useState({email:"",pass:""});
        function handleChange(event){
        setData(prev=>({
            ...prev,
            [event.target.name]:event.target.value
        }));
    }
    function handleClick(){
        axios({
            method: 'post',
            url: 'http://localhost:5000/signin',
            headers: {'Content-Type': 'application/json'}, 
            withCredentials:true,
            data: {
                email:data.email,
                password:data.pass
            }
          }).then(()=>{
            setTimeout(()=>{
                window.location.reload();
            },1000);
          });
    }
    return(
        <>
        <Header/>
        <div className="bodyStyle tc">
            <form className="w-25 center pa5 formStyle">
            <h1>Sign In</h1>
            <br />
            <h1 className="lgnd">Email</h1>
            <br />
            <br />
            <input className="submit-text" 
            type="text" 
            name="email" 
            id="email" 
            onChange={handleChange}
            value={data.email}
            />
            <br />
            <h1 className="lgnd">Password</h1>
            <br />
            <input className="submit-text" 
            type="text" 
            name="pass" 
            id="pass"
            onChange={handleChange}
            value={data.pass}
            />
            <br />
            <br />
            <Link to="/welcome">
            <input className="submit" type="submit" name="submit" id="submit" 
            onClick={handleClick}
            />
            </Link>
            <br />
            </form>
        </div>
        </>
    );
}