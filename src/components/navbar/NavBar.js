import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { 
    getAuth,     
    signOut 
} from "firebase/auth";

import "./NavBar.css"
import Guideylogo2 from "../../Guideylogo2.png";
import Guideyit from "../../guideyit.png";
import UserPhoto from "../../icons/user.png"
import homePhoto from "../../icons/home.png"
import LogoutPhoto from "../../icons/logout.png"

const NavBar = () => {
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
            <div className = 'head1'><img src={Guideylogo2} alt='logo'/><img src={Guideyit} alt='logo' className="guidey-logo"/></div>            
            <div className = "head3">
                <Link to="/home"><img className="homephoto-navbar" src={homePhoto} alt='Home Photo'/></Link>
                <Link to="/account"><img className="userphoto-navbar" src={UserPhoto} alt='User Photo'/></Link>
                <img className="logoutphoto-navbar" src={LogoutPhoto} alt='User Photo' onClick={ () => {
                    logout();
                }}/>
            </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar