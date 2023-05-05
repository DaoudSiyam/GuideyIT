import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

// .... FIREBASE .... DATABASE .... SECTION ....//
import { 
    app,
    database
} from "../../firebase-config";

import { 
    getAuth, 
    onAuthStateChanged, 
    signOut 
} from "firebase/auth";

import {
    collection,        
    getDocs,
} from "firebase/firestore"
/**********************************************/


//visuals and UI
import './Account.css';
import homePhoto from "../../icons/home.png"
import UserPhoto from "../../icons/user.png"
import LogoutPhoto from "../../icons/logout.png"
import Guideylogo2 from "../../Guideylogo2.png";
import Guideyit from "../../guideyit.png";


const Account = () => {
    let navigate = useNavigate();
    
    
    // .... USER .... DATA .... SECTION ....//
    const [array, setArray] = useState([]);    
    const [user, setUser] = useState({});
    const auth = getAuth();
    const dbUsers = collection(database, 'users');
    /****************************************/

    
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    });


    const getData = async () => {
        const data = await getDocs(dbUsers);
        setArray(data.docs.map((item) => {
            return{ ...item.data(), id: item.id}
        }));
    }    

    useEffect( () => {
        getData();
    }, [])

    const logout = async () => {
        await signOut(auth);
        navigate('/')
    }
    
    return(
        <>
        <nav>
            <div className = 'header'>
                <div className = 'head1'><img src={Guideylogo2} alt='logo'/><img src={Guideyit} alt='logo' className="guidey-logo"/></div>                
                <div className = "head3">
                    <Link to="/home">
                        <img src={homePhoto} alt='Home Icon' className="homephoto-profile"/>
                    </Link>
                    <img src={UserPhoto} alt='User Icon' className="userphoto-profile"/>
                    <img src={LogoutPhoto} alt='Logout Icon' className="logoutphoto-profile" onClick={ () => { logout() }}/>
                </div>    
            </div>
        </nav>

        <div className="text-account">
            <center>In this page you can check out your information</center>            
        </div>

        {array.map( (item) => {
            if(item.email === user.email){                
                return(
                    <div className="information-div">
                        <div className="structure">                                                        
                            <div className="name-div">
                                Name: { item.name }
                            </div>                                
                            <div className="major-div">
                                Major: { item.major }                                
                            </div>

                            <div className="number-div">
                                Phone Number: { item.phoneNumber }                                
                            </div>

                            <div className="button-div">
                                <center>
                                    <button className="update-info" onClick={() => { navigate('/updateinfo') }}>Update Info</button>
                                </center>                                
                            </div>                                                         
                        </div>
                    </div>
                );
            }
        })}

        </>
    )
}

export default Account;