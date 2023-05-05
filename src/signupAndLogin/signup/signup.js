//React hooks and APIs
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

//firebase database section
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import { 
    app,    
    database 
} from '../../firebase-config';

import { 
    collection, 
    addDoc 
} from "firebase/firestore";

//visuals and UI
import "./signup.css"
import Guideylogo2 from "../../Guideylogo2.png";
import Guideyit from "../../guideyit.png";

const Signup = () => {
    let navigate = useNavigate();


    //USER .... DATA .... SECTION ....//
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        major: '',
        password: '',
        discrete: 'faculty-req',
        calculus1: 'calculus1',
        computerskills99: 'faculty-req',
        statistics: 'major-req',
        fund: 'faculty-req',
        theory: 'elective-req',
        java2: 'major-req',
        java1: 'major-req',
        cplus: 'faculty-req',
        vp: 'vp',
        erp: 'elective-req',
        mis: 'major-req',
        web1: 'web1-cis',
        doc: 'faculty-req',
        advmultimedia: 'elective-req',
        multimedia: 'major-req',
        data1: 'faculty-req',
        cal: 'major-req',
        web2: 'web2-cis',
        certified: 'elective-req',
        data2: 'elective-req',
        database: 'faculty-req',
        os: 'major-req',
        algo: 'major-req',
        graphics: 'major-req',
        specialtopics: 'elective-req',
        nlp: 'elective-req',
        system: 'major-req',
        security: 'major-req',
        software: 'major-req',
        innovation: 'major-req',
        advdatabase: 'major-req',
        gis: 'major-req',
        network1: 'major-req',
        datamining: 'elective-req',
        advsoftware: 'major-req',
        isaudit: 'elective-req',
        ispm: 'major-req',
        distributeddb: 'major-req',
        hci: 'major-req',
        np: 'elective-req',
        bioinformatics: 'elective-req',
        image: 'major-req',
        ai: 'major-req',
        machine: 'elective-req',
        training: 'training-cis',
        project1: 'major-req',
        project2: 'major-req',        
    });
    /**********************************/
    

    //authentication and adding data
    const auth = getAuth(app);
    const dbUsers = collection(database, 'users');

    const handleInputs = (event) => {
        let inputs = {[event.target.name] : event.target.value}
        setData({...data ,...inputs})
        console.log(data);
    }

    const handleSubmit = () => {
        //email and password creation and promise
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            console.log(response.user)

            //User's data creation and their promise
            addDoc(dbUsers, data)
            .then(() => {
                alert('Welcome to Guidey ..... Thank you for Joining us');
                navigate('/home');
            })
            .catch((err) => {
                alert(err.message);
            })         
        })
        .catch((err) => {
            alert(err.message +"\n\nSignup unsuccessful ...... Please try again")
            navigate('/');
        })
        /**********************************************/                    
    }

    
    return (
        <div>
            <div className = 'header'>
                <div className = 'head1'><img src={Guideylogo2} alt='logo'/><img src={Guideyit} className = "guidey-logo" alt='logo'/></div>
                <div className = "head2-signup">Sign Up</div>
                <div className = "head3"><button className = "back-to-login-button-signup" onClick={
                    () => {
                        navigate("/");
                    }
                }>Back to Login</button></div>
            </div>

            <div className="text">
                <center>Welcome to Guidey!</center>
                <center>The best website for helping students with their graduations process!</center>
                <center>Please fill in all the fields below</center>
            </div>

            <div className="box">
                <input 
                    type = "name" 
                    name = "name"
                    className = "input-box" 
                    placeholder = "Name" 
                    onChange={ (event) => handleInputs(event) }
                />

                <input 
                    type="email"
                    name="email"
                    className="input-box" 
                    placeholder = "Email Address" 
                    onChange ={ (event) => handleInputs(event) }
                />

                <input 
                    type = "text"
                    className = "input-box"
                    name = "phoneNumber"                   
                    placeholder = "Phone Number" 
                    onChange ={ (event) => handleInputs(event) }
                />
                    
                <select 
                    name = "major" 
                    id = "Major"                    
                    className = "option-box"                     
                    onChange ={ (event) => handleInputs(event) }
                >
                    <option>Choose Your Major</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Computer Information Systems">Computer Information Systems</option>
                    <option value="Business Information Technology">Business Information Technology</option>            
                </select>
            
                <input 
                    type = "password"
                    name = "password"
                    className = "input-box" 
                    placeholder = "Password" 
                    onChange = { (event) => handleInputs(event) }
                />
                <button 
                    type="button" 
                    className="signup-button" 
                    onClick={ () => handleSubmit() }
                >Sign Up</button>
            </div>
        </div>
    );
}
        
export default Signup;