import React from "react";

// .... FIREBASE .... DATABASE .... SECTION ....//
import { 
    getAuth,
    sendPasswordResetEmail
} from "firebase/auth";
/**********************************************/

import { useNavigate } from "react-router-dom";
import './forget.css';
import Guideylogo2 from "../../Guideylogo2.png";
import Guideyit from "../../guideyit.png";

const Forget1 = () => {
    let navigate = useNavigate();

    let email = "";
    

    const auth = getAuth();    

    const resetPassword = () => {
        return sendPasswordResetEmail(auth, email);
    }    

    return(
        <>
            <div>
                <div className = 'header'>
                    <div className = 'head1'><img src={Guideylogo2} alt='logo'/><img src={Guideyit} alt = 'logo' className="guidey-logo"/></div>
                    <div className = "head2-forget">Forgot Password</div>
                    <div className = "head3"><button className = "back-to-login-button" onClick={
                        () => {
                            navigate('/');
                        }
                    }>Back to Login</button></div>
                </div>
            </div>

            <div className="text">
                <center>We are sorry to hear that you have forgotten your password</center>
                <center>Please type in your email to reset your password</center>
            </div>

            <div className="box">
                <div>
                    <input type="text" placeholder="Email Address" className="text-box" onChange={ (event) => { email = event.target.value } }/>
                </div>                

                <div>
                    <button className="calculation-button" onClick={
                        () => {
                            resetPassword();
                            navigate('/');
                            alert("please wait until you recieve the reset email");
                        }
                    }>Send Message</button>
                </div>
            </div>
            
        </>
    )
}

export default Forget1;