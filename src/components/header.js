import React from "react";
import './header.css';
import {
  Link,
} from "react-router-dom";
export default function Header(){
    return(
        <div className="headerStyle">
            <Link to="/">
                <button className="btn">Sign In</button>
            </Link>
            <Link to="/Register">
                <button className="btn">Register</button>
            </Link>
        </div>
    );
}