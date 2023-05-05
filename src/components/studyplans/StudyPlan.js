import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import CS from "./plans/cs/CS";
import CIS from "./plans/cis/CIS";
import BIT from "./plans/bit/BIT";
import './StudyPlan.css';


// .... FIREBASE .... DATABASE .... SECTION ....//
import { 
    app,
    database
} from "../../firebase-config";

import {
    collection,        
    getDocs
} from "firebase/firestore";

import { 
    getAuth, 
    onAuthStateChanged,     
} from "firebase/auth";



const StudyPlan = () => {
    const [array, setArray] = useState([]);
    const dbUser = collection(database, 'users');
    const [user, setUser] = useState({});
    const auth = getAuth();


    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    });

    const getData = async () => {
        const data = await getDocs(dbUser);
        setArray(data.docs.map((item) => {
            return{ ...item.data(), id: item.id}
        }));
    }
    getData();
    
    
    return(
        <>  
            {array.map( (item) => {
                if(item.email === user.email && item.major === "Computer Information Systems"){
                    return(
                        <>
                            <CIS />
                        </>    
                    );
                }else if(item.email === user.email && item.major === "Computer Science"){
                    return(
                        <>
                            <CS />
                        </>
                    )
                }else if(item.email === user.email && item.major === "Business Information Technology"){
                    return(
                        <>
                            <BIT />
                        </>
                    )
                }else if(item.email === user.email && item.major === ""){
                    return(
                        <>
                            <NavBar />

                            <div className="text-studyplan">
                                <center>
                                    Your StudyPlan Is Not Available Due to Not Filling Essential Data Upon Regestration
                                    <br />
                                    Please Visit Your Profile page and Update your Information
                                </center>
                            </div>
                        </>
                    )
                }
            })}
        </>
    )    
}

export default StudyPlan;