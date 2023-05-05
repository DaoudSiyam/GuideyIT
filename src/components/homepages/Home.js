import React from "react";
import { useNavigate, Link } from 'react-router-dom';

import { 
    getAuth,     
    signOut 
} from "firebase/auth";

import "./Home.css";
import Guideylogo2 from "../../Guideylogo2.png";
import Guideyit from "../../guideyit.png";
import HomePhoto from "../../icons/home.png"
import UserPhoto from "../../icons/user.png"
import LogoutPhoto from "../../icons/logout.png"


const Home = () => {        
    let navigate = useNavigate();

    // .... ESTABLISH .... AUTHENTICATION .... FOR .... CURRENT .... USER ....//
    const auth = getAuth();    
    /**************************************************************************/

    // .... LOGOUT .... USER ....//
    const logout = async () => {
        await signOut(auth);
        navigate('/')
    }
    /*****************************/

    return (
        <>
        <nav>
            <div className = 'header'>
                <div className = 'head1'><img src={Guideylogo2} alt='logo'/><img src={Guideyit} className = "guidey-logo" alt='logo'/></div>                
                <div className = "head3">
                <img className="homephoto-home" src={HomePhoto} alt='User Icon'/>
                    <Link to="/account">
                        <img className="userphoto-home" src={UserPhoto} alt='User Icon'/>
                    </Link>
                    <img className="logoutphoto-home" src={LogoutPhoto} alt='Logout Icon' onClick={ () => {logout()}}/>
                </div>
            </div>
        </nav>

        <div className="text-home">
            <center>Welcome to Guidey IT</center>
            <center>What would you like to do today?</center>
        </div>

        <div>
            <div className="button-line1">
                <div><button className="blue-button" onClick={
                    () => {
                        navigate("/gpa");
                    }
                }>Calculate<br />GPA</button></div>
                
                <div><button className="orange-button" onClick={
                    () => {
                        navigate("/studyplan");
                    }
                }>Study<br />Plan</button></div>

                <div><button className="yellow-button" onClick={ () => {
                    navigate('/collegematerials')
                }}>College<br />Materials</button></div>
                
                <div><button className="blue-button" onClick={ () => {
                    navigate("/regprocess");
                }}>Registration Process</button></div>
            </div>

            <div className="button-line2">
                <div><button className="yellow-button" onClick={() => {
                    navigate('/selfstudy');
                }}>Self<br />Learning</button></div>
                
                <div className="E-Services"><button className="blue-button" onClick={
                    () => {
                        navigate('/eservices');
                    }
                }>JU<br />E-Services</button></div>
                
                <div><button className="orange-button" onClick={ () => {
                    navigate('/kasitmap');
                }}>KASIT<br />Map</button></div>
            </div>
        </div>
        </>
    )
}

export default Home;