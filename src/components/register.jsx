import React, {useState} from "react";
import {Link} from "react-router-dom";
import LoginForm from "./loginForm";

function RegisterForm(){
    const[username,  setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!username){
            newErrors.username = "This field is required";
        }
        if (!email){
            newErrors.email = "This field is required";
        }
        if (!password){
            newErrors.password = "This field is required";
        }
        if (Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            return;
        }
        console.log("Creating user account....", {username, email, password});
        window.location.href = "/loginForm";
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}/>

            {errors.username && <p>{errors.username}</p>}

            <label htmlFor="email">Email</label>
            <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}/>

            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password">password</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}/>

            {errors.password && <p>{errors.password}</p>}

            <button type="submit">Create Account</button>
            <Link to = "/loginForm">Already have an account? Login here</Link>

        </form>
    );
}

export default RegisterForm;