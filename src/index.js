import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import SignIn from './components/signin.js';
import Particle from "./components/particles";
import Welcome from "./components/welcome.js"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";
import Register from "./components/register.js";
function App(){
    const [status,setStatus]=React.useState(async()=>{
        return false;
    });
    React.useEffect(()=>{
        axios.get("http://localhost:5000/login",{withCredentials:true}).then(res=>setStatus(prev=>res.data.isLoggedIn)).catch(setStatus(prev=>false));
        },[]);
    return (
        <div>
            <Particle className="qw" />
            <Routes>
                <Route exact path="/Register" element={status?<Welcome/>:<Register/>} />
                <Route exact path="/" element={status?<Welcome/>:<SignIn/>} />
                <Route exact path="/welcome" element={status?<Welcome/>:<SignIn/>} />
            </Routes>
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
);