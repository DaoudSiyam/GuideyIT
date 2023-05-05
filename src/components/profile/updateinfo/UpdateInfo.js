import React, { useEffect, useState } from "react";

// .... FIREBASE .... DATABASE .... SECTION ....//
import { 
    database
} from "../../../firebase-config";

import { 
    getAuth, 
    onAuthStateChanged,
    sendPasswordResetEmail
    //signOut 
} from "firebase/auth";

import {
    //addDoc,
    collection,        
    getDocs,
    doc,
    updateDoc,
    //deleteDoc
} from "firebase/firestore"
/**********************************************/
import NavBar from "../../navbar/NavBar";
import './UpdateInfo.css';

const UpdateInfo = () => {
    // .... USER .... DATA .... SECTION ....//
    const [array, setArray] = useState([]);    
    const [user, setUser] = useState({});
    let newName = "";
    let newPhoneNumber = "";
    let newMajor = "";
    const auth = getAuth();
    const dbUsers = collection(database, 'users');
    /***************************************/

    
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    });
    
    const getData = async () => {
        const data = await getDocs(dbUsers);
        setArray(data.docs.map((item) => {
            return{ ...item.data(), id: item.id}
        }));
    }    

    const upadateName = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            name: newName
        })
        .then(() => {
            alert('Name Changed Successfully');
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Change Name');
        })
    }    

    const upadateNumber = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            phoneNumber: newPhoneNumber
        })
        .then(() => {
            alert('Phone Number Changed Successfully');
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Chnage Phone Number');
        })
    }

    const upadateMajor = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            major: newMajor
        })
        .then(() => {
            alert('Major Changed Successfully');
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Change Major');
        })
    }

    const updatePassword = (id) =>{
        return sendPasswordResetEmail(auth, user.email);
    }

    const resetMap = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {
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
        })
        .then( () => {
            alert('Study Plan Has Been Reset')
        })
        .catch ( () => {
            alert('error reseting plan');
        })
    }    

    useEffect( () => {
        getData();
    }, [])
    
    return(
        <>
        <NavBar />        
        <div className="text-info">
            <center>What would you like to change?</center>
        </div>


        {array.map( (item) => {
            if(item.email === user.email){                
                return(
                    <div className="update-div">
                        <div className="structure-update">
                            <div>
                                Change Your Name Here
                            </div>

                            <div>
                                <input 
                                    type = "name" 
                                    name = "nName"
                                    className = "input-box" 
                                    placeholder = "New Name" 
                                    onChange={ (event) =>{ newName = event.target.value }}
                                />
                            </div>

                            <div>
                                <center>
                                    <button className="submission" onClick={() => { upadateName(item.id) }}>Change Name</button>
                                </center>
                            </div>                            
                        </div>

                        <div className="structure-update">
                            <div>
                                Change Your Phone Number Here
                            </div>

                            <div>
                                <input 
                                    type = "name" 
                                    name = "nNum"
                                    className = "input-box" 
                                    placeholder = "New Phone Number" 
                                    onChange={ (event) => { newPhoneNumber = event.target.value}}
                                />
                            </div>

                            <div>
                                <center>
                                    <button className="submission" onClick={() => { upadateNumber(item.id) }}>Change Number</button>
                                </center>
                            </div>                            
                        </div>

                        <div className="structure-update">
                            <div>
                                Change Your Major Here
                            </div>

                            <div>
                                <select 
                                    name = "nMajor" 
                                    id = "Major"                    
                                    className = "option-box"                     
                                    onChange ={ (event) => { newMajor = event.target.value } }
                                >
                                    <option>Choose Your Major</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Computer Information Systems">Computer Information Systems</option>
                                    <option value="Business Information Technology">Business Information Technology</option>            
                                </select>
                            </div>

                            <div>
                                <center>
                                    <button className="submission" onClick={() => { upadateMajor(item.id) }}>Change Major</button>
                                </center>
                            </div>                            
                        </div>

                        <div className="reset">
                            <center>
                                <button className="submission" onClick={ () => { resetMap(item.id) }}>Reset <br />Study Plan</button>
                            </center>

                            <center>
                                <button className="submission1" onClick={ () => { 
                                    updatePassword();
                                    alert('Password Reset Email Sent');
                                }}>Send Reset <br /> Password Email</button>
                            </center>
                        </div>
                    </div>
                );
            }
        })}
        </>
    )
}

export default UpdateInfo;