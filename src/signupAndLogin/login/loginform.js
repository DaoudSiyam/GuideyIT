import React, { useState } from "react";
import {Link , useNavigate} from 'react-router-dom';
import {  getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./loginform.css";
import Guideylogo from "../../Guideylogo.png";

const LoginForm = () => {
    let navigate = useNavigate();
    
    let [data, setData] = useState({
        email: '',
        password: ''
    });        

    const auth = getAuth();

    const handleInputs = (event) => {
        let inputs = {[event.target.name] : event.target.value}
        setData({...data ,...inputs})        
    }

    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            console.log(response.user)
            navigate('/home')            
        })
        .catch((err) => {
            alert(err.message +"\n\nLogin unsuccessful ...... Please try again")
        })
    }
    
    return (
    <>
        <div className="page">
            <img src={Guideylogo} className="image" alt="logo"/>

            <div className=" cover" >
            <h1  className="logbox">Log In</h1>
            <h4 className = "text1">Log in to access the best website for helping students with their graduation road.</h4>

                <div className="cover__inner">
                    <input 
                        type = "email"
                        name = "email"
                        placeholder = "Email"
                        className = "text-box-login"
                        onChange = { (event) => handleInputs(event) }
                    />

                    <input 
                        type="password"
                        name = "password"
                        placeholder="Password" 
                        className="text-box-login"
                        onChange={(event) => handleInputs(event)}
                    />

                    <Link to = "/forget1">forgot password</Link>
                    <div> 
                        <button className="loginButton" onClick={
                            () => handleSubmit()
                        }>Log In</button>
                    </div>
                    <Link to = "/signup">Don't have an account? Sign Up</Link>
                

                </div>
   
            </div>
    
        </div>
    </>
    )
}

export default LoginForm;