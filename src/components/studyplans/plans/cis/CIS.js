import React, { useEffect, useState } from "react";

// .... FIREBASE .... DATABASE .... SECTION ....//
import { 
    app,
    database
} from "../../../../firebase-config";

import { 
    getAuth, 
    onAuthStateChanged,     
} from "firebase/auth";

import {    
    collection,        
    getDocs,
    doc,
    updateDoc,    
} from "firebase/firestore"
/**********************************************/

import './CIS.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import NavBar from '../../../navbar/NavBar';


const CIS = () => { 
    // .... USER .... DATA .... SECTION ....//
    const [array, setArray] = useState([]);
    const [user, setUser] = useState({});    
    const auth = getAuth();
    const dbUsers = collection(database, 'users');
    /****************************************/

    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    });
     
    const updateDiscrete = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            discrete: "done-faculty-req"            
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }
    
    const updateCalculus1 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            calculus1: "done-calculus1"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }
    
    const updateComputerSkills99 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            computerskills99: "done-faculty-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateStatistics = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            statistics: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateFund = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            fund: "done-faculty-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateTheory = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            theory: "done-elective-req"
        })
        .then(() => {
            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updatejava2 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            java2: "done-major-req"
        })
        .then(() => {

            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateJava1 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            java1: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateCPlus = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            cplus: "done-faculty-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateVP = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            vp: "done-vp"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateERP = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            erp: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateMIS = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            mis: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateWeb1 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            web1: "done-web1-cis"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateDOC = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            doc: "done-faculty-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateAdvMultimedia = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            advmultimedia: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateMultimedia = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            multimedia: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateData1 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            data1: "done-faculty-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateCAL = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            cal: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateWeb2 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            web2: "done-web2-cis"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateCertified = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            certified: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateData2 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            data2: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }
    const updateDatabase = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            database: "done-faculty-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateOS = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            os: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }
    const updateAlgo = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            algo: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateGraphics = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            graphics: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }
    const updateSpecialTopics = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            specialtopics: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateNLP = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            nlp: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateSystem = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            system: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateSecurity = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            security: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateSoftware = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            software: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateInnovation = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            innovation: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateAdvDatabase = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            advdatabase: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateGIS = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            gis: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateNetwork1 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            network1: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateDataMining = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            datamining: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateAdvSoftware = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            advsoftware: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateISAudit = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            isaudit: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateISPM = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            ispm: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateDistributedDB = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            distributeddb: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateHCI = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            hci: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateNP = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            np: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateBioinformatics = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            bioinformatics: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateImage = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            image: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateAI = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            ai: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateMachine = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            machine: "done-elective-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateTraining = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            training: "done-training-cis"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateProject1 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            project1: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const updateProject2 = (id) => {
        let dataToUpdate = doc(database, 'users', id);
        updateDoc(dataToUpdate, {                        
            project2: "done-major-req"
        })
        .then(() => {            
            getData();
        })
        .catch( (err) => {            
            alert(err + '\nFalied To Grant Request');
        })
    }

    const getData = async () => {        
        const data = await getDocs(dbUsers);
        setArray(data.docs.map((item) => {
            return{ ...item.data(), id: item.id}
        }));
    }

    useEffect( () => {        
        getData();
    }, [])
    
    return(
        <>            
            <NavBar />
            
            <div className='text-cis'>
                <center>Computer Information Systems Plan</center>
            </div>

            {array.map( (item) => {            
            if(item.email === user.email){
            return(
            <>
            <div className='study-plan-cis'>
                <div className='upper-div-cis'>
                    <div className='div1-cis'>
                        <div className='div1-1-cis'>
                        
                            <div>
                            <Tippy content="This course covers mathematical topics relevant to computer science, including propositional and predicate logic, proof techniques, set theory, number theory, matrices, sequences and summations, functions, relations, graph theory, and trees.">
                                <button className={item.discrete} onClick={ () => {updateDiscrete(item.id);}}>Discrete</button>
                            </Tippy>    
                            </div>
                            <div><center>&#8595;</center></div>
                        

                            <div>
                            <Tippy content='This course covers formal language concepts including finite automata, regular and context-free languages, pushdown automata, and Turing machines. It also introduces complexity classes.'>
                                <button className={item.theory} onClick={() => {updateTheory(item.id)}}>Theory</button>
                            </Tippy>
                            </div>
                        
                        </div>

                            <div>
                                <Tippy content= "This course covers functions, limits, continuity, differentiation, integration, inverse functions, logarithmic and exponential functions, and hyperbolic functions." >
                                <button className={item.calculus1} onClick = { () => {updateCalculus1(item.id)}}>Calculus 1</button>
                                </Tippy>
                            </div>
                        
                    </div>
                    
                    <div className='div3-cis'>
                        <div className='div3-1-cis'>
                        <Tippy content="This course introduces first-year students to basic concepts in information technology and provides practical skills for using computers and common applications. It covers topics such as types of computers, computer components, and the use of operating systems, word processing and presentation applications, and email etiquette.">
                            <center><button className={item.computerskills99} onClick = { () => {updateComputerSkills99(item.id)}}>Computer skills 99</button></center>
                        </Tippy>
                        </div>
                        
                        <div className='margin-skills-cis'><center>________________|________________</center></div>

                        <div className='space-between-cis'>
                            <div className='padding-left'>&#8595;</div><div>&#8595;</div><div className='padding-right'>&#8595;</div>
                        </div>

                        <div className='div3-2-cis'>
                            <div className='java'>
                                
                                <div>
                                <Tippy content='This course covers computer graphics topics, including drawing methods, graphical user interface, exception handling, multithreading, and strings.'>
                                    <button className={item.java2} onClick={() => {updatejava2(item.id)}}>Java 2</button>
                                </Tippy>
                                </div>
                                
                                <div>&#8592;</div>
                                
                                <div>
                                <Tippy content='This course covers object-oriented programming concepts such as methods, data structures, inheritance, and polymorphism. It also covers applet development.'>
                                    <button className={item.java1} onClick = {() => {updateJava1(item.id)}}>Java 1</button>
                                </Tippy>
                                </div>
                            </div>

                            <div>
                            <Tippy content="This course introduces the foundations of C++ programming, including variables, data types, control structures, arrays, functions, and the enumeration data type.">
                                <button className={item.cplus} onClick={()=> {updateCPlus(item.id)}}>C++</button>
                            </Tippy>
                            </div>

                            <div>
                            <Tippy content='This course covers the Visual Basic and Visual Studio environment, language constructs and structures, advanced controls, and graphics in computer programming.'>
                                <button className={item.vp} onClick={() => {updateVP(item.id)}}>VP</button>
                            </Tippy>
                            </div>  
                        </div>
                        
                        <div className='flex1'>
                            <div className='margin-left1'>&#8595;</div>
                            <div className='margin-right1'>&#8595;</div>
                        </div>

                        <div className='div3-3-cis'>
                            <div className='multimedia'>
                                <div>
                                <Tippy content='This course teaches students about multimedia and how to use software tools to create and edit multimedia content.'>
                                    <button className={item.advmultimedia} onClick = { () => {updateAdvMultimedia(item.id)}}>ADV Multimedia</button>
                                </Tippy>
                                </div>
                                
                                <div>&#8592;</div>
                                
                                <div>
                                <Tippy content='This course covers digital media concepts, including encoding, decoding, and compression techniques, and introduces file formats. It also covers hardware and software issues.'>
                                    <button className={item.multimedia} onClick = { () => {updateMultimedia(item.id)}}>Multimedia</button>
                                </Tippy>
                                </div>
                            </div>

                            <Tippy content = "example teste">

                            <div className="OOP-CIS">
                                <center>
                                    <button className="faculty-req">
                                        OOP
                                    </button>
                                </center>
                            </div>
                            </Tippy>


                            <div>
                            <Tippy content='This course covers the basics of data structures including records, classes, inheritance, templates, contiguous lists, stacks, and queues, with a focus on implementation using arrays.'>                                
                                <div>                                    
                                    <button className={item.data1} onClick = {() => {updateData1(item.id)}}>Data Structures 1</button>
                                </div>
                            </Tippy>
                            </div>
                        </div>
                    </div>
                    
                    <div className='div4-cis'>
                        <div className='div4-1-cis'>
                        <Tippy content='This course covers statistical data analysis techniques including probability, distributions, sampling, and statistical inference.'>
                            <button className={item.statistics} onClick = { () => { updateStatistics(item.id)}}>Principles of Statistics</button>
                        </Tippy>
                        </div>
                        <center>&#8595;</center>
                        <div className='div4-2-cis'>
                        <Tippy content='This course teaches students about using ERP Systems in manufacturing.'>
                            <button className={item.erp} onClick = { () => {updateERP(item.id)}}>ERP</button>
                        </Tippy>
                        </div>
                    </div>

                    <div className='div5-cis'>
                        <div className='div5-1-cis'>
                            <center>
                            <Tippy content='This course provides an introduction to information technologies and covers careers in IT, cloud computing, and web technologies. It also includes technical skills such as hardware maintenance'>
                                <button className={item.fund} onClick={()=>{updateFund(item.id)}}>Fundementals</button>
                            </Tippy>
                            </center>
                            <div className='margin-fund-cis'><center>__________________|_________________</center></div>
                            
                            <div className='space-between-cis'>
                                <div className='padding-left-fund'>&#8595;</div>
                                <div>&#8595;</div>
                                <div className='padding-right-fund'>&#8595;</div>
                            </div>
                        </div>

                        <div className='div5-2-cis'>
                            <div>
                            <Tippy content="This course covers the use of information technology and management information systems in business.">
                                <button className={item.mis} onClick={()=>{updateMIS(item.id)}} >MIS</button>
                            </Tippy>
                            </div>
                            
                            <div>
                            <Tippy content='This course teaches students to develop web applications using Client-Side programming and covers web development tools and the World Wide Web.'>
                                <button className={item.web1} onClick={()=>{updateWeb1(item.id)}}>Web 1</button>
                            </Tippy>    
                            </div>

                            <div>
                            <Tippy content='this course encourages knowledge sharing, which empowers your team to understand how processes work and what finished projects typically look like.'>
                                <button className={item.doc} onClick={()=>{updateDOC(item.id)}}>DOC</button>
                            </Tippy>    
                            </div>
                        </div>
                        
                        <div className='margin-right-fund'>|_________________</div>

                        <div className='div5-3-cis'>
                            <div className='flex-cal'>
                                <div className='margin-cal'>&#8595;</div>
                                <div className='margin-web2-cis'>&#8595;</div>
                            </div>

                            <div className='flex-cal'>
                            <Tippy content='This course covers the use of computers in teaching, including authoring tools, human-computer interaction, and task design. It also includes a case study.'>
                                <button className={item.cal} onClick={()=>{updateCAL(item.id)}}>CAL</button>
                            </Tippy>

                            <Tippy content='This course teaches students how to use PHP and MySQL to build interactive websites with a database. It includes website project development and may use a development platform such as Tomcat, XAMPP, or WampServer.'>
                                <button className={item.web2} onClick={() => {updateWeb2(item.id)}}>Web 2</button>
                            </Tippy>    
                            </div>
                        </div>
                    </div>

                </div>
                
                <div>_________________________________________________________________________|_______________________________________________________</div>

                <div className='lower-div-cis'>
                    <div className='lower1'>
                        <div>
                            <div>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                            <div className='margin-top-4px'>|</div>
                        </div>
                        <div className='lower1-1'>
                            <div className='lower1-1-1'>
                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course teaches students to develop and design web and mobile applications using various software tools, with a focus on achieving an international certification.'>
                                    <button className={item.certified} onClick={() => {updateCertified(item.id)}}>Certified SW</button>
                                    </Tippy>
                                </div>

                                <div className='data2-cis'>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content="This course covers advanced topics in data structures including pointers, virtual functions and abstract classes, overloading, recursion, linked lists, stacks and queues implemented as linked lists, and trees, with a focus on binary trees.">
                                    <button className={item.data2} onClick ={() => {updateData2(item.id)}}>Data 2</button>
                                    </Tippy>
                                </div>

                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course is an introduction to database systems for graduate students. It covers the foundations of database systems, including the relational algebra, query optimization, and transactions.'>
                                    <button className={item.database} onClick={() => {updateDatabase(item.id)}}>Database</button>
                                    </Tippy>
                                </div>

                                <div className='os-cis'>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course covers various concepts and functions of operating systems, including hardware and software, scheduling, memory management, I/O device management, performance, security, and distributed systems.'>
                                    <button className={item.os} onClick = {() => {updateOS(item.id)}}>OS</button>
                                    </Tippy>
                                </div>

                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course covers algorithm design and analysis techniques, including complexity analysis, recurrence equations, and graph algorithms.'>
                                    <button className={item.algo} onClick = {() => {updateAlgo(item.id)}}>Algo</button>
                                    </Tippy>
                                </div>
                            </div>
                            <div className='margin-left-2px'>__________________________________________|__________________________________________</div>
                            <div className='lower1-1-2'>
                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course covers systems development topics, including the development life cycle, feasibility, and fact finding methods. It also includes a case study.'>
                                    <button className={item.system} onClick = {() => {updateSystem(item.id)}}>Systems</button>
                                    </Tippy>
                                </div>
                                
                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course teaches security and compliance professionals how to implement controls in an existing network through automation for cost-effectiveness.'>
                                    <button className={item.security} onClick={() => {updateSecurity(item.id)}}>Security</button>
                                    </Tippy>
                                </div>
                                
                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course covers software engineering concepts and processes, including requirements and specification, design, and documentation. It also introduces UML and includes weekly lab practice.'>
                                    <button className={item.software} onClick = {() => {updateSoftware(item.id)}}>Software</button>
                                    </Tippy>
                                </div>

                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course acquaints students with various aspects of innovation and entrepreneurship, broadly understood. Topics cover methodologies, theories, and history of innovation '>
                                    <button className={item.innovation} onClick={() => {updateInnovation(item.id)}}>Innovation</button>
                                    </Tippy>
                                </div>
                                
                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course covers advanced topics in databases, including data mining, data warehousing, distributed databases, client-server architecture, and DBMS implementation.'>
                                    <button className={item.advdatabase} onClick = {() => {updateAdvDatabase(item.id)}}>ADV Database</button>
                                    </Tippy>
                                </div>

                                <div className='closer'>
                                    <div>|</div>                                    
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                    <div className='margin-top-4px'>|</div>
                                </div>
                            </div>

                            <div className='margin-adv-audit-ispm-cis-line'>________________|_______________</div>
                            
                            <div className='lower1-1-3'>
                                <div className='margin-datamining-button-cis'>
                                   &#8594;
                                   <Tippy content='This course covers data mining, which involves using algorithms to find patterns in databases and improve performance by extracting useful knowledge from raw data.'>
                                   <button className={item.datamining} onClick = {() => {updateDataMining(item.id)}}>Data Mining</button>
                                   </Tippy>
                                </div>

                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course covers the different phases of the software development lifecycle (SDLC) and their role in developing, delivering, and maintaining software products.'>
                                    <button className={item.advsoftware} onClick={() => {updateAdvSoftware(item.id)}}>ADV software</button>
                                    </Tippy>
                                </div>

                                <div className='margin-audit-button-cis'>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='The Information Systems Auditor course covers the IS audit process and related topics such as governance, IT management, and IS operations.'>
                                    <button className={item.isaudit} onClick = {() => {updateISAudit(item.id)}}>IS Audit</button>
                                    </Tippy>
                                </div>

                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='The ISPM program covers topics in management, personal development, economics, research, and events, and includes a combination of courses that relate to these topics each year.'>
                                    <button className={item.ispm} onClick = {() => {updateISPM(item.id)}}>ISPM</button>
                                    </Tippy>
                                </div>

                                <Tippy content='This course covers the fundamental concepts and practical aspects of large distributed database systems.'>
                                <div className='margin-distributed-button-cis'>
                                    <button className={item.distributeddb} onClick={() => {updateDistributedDB(item.id)}}>Distributed DB</button>&#8592;
                                </div>
                                </Tippy>
                            </div>


                            <Tippy content='This course teaches students how to use computational, statistical, and mathematical knowledge to solve complex problems in the life sciences. It covers concepts in bioinformatics, including genomics, DNA sequencing, and techniques for manipulating genomics data. Students will present case studies on one of the covered topics.'>
                            <div className='lower1-1-4'>
                                <button className={item.bioinformatics} onClick = {() => {updateBioinformatics(item.id)}}>Bioinformatics</button>&#8592;
                            </div>
                            </Tippy>        
                        </div>
                        
                        <div className='lower1-2'>
                            <div className='lower1-2-1'>
                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course covers computer graphics concepts and techniques, including 2D and 3D geometric transformations, graphical user interface, and OpenGL programming using C++.'>
                                    <button className={item.graphics} onClick = {() => {updateGraphics(item.id)}}>Graphics</button>
                                    </Tippy>
                                </div>
                                
                                <div className='margin-gis-cis'>                                    
                                    <div>
                                        <div className='margin-top-4px'>|</div>
                                        <div className='margin-top-4px'>|</div>                                        
                                        <div className='margin-top-4px'>|</div>
                                        <div className='margin-top-4px'>|</div>
                                        <div className='margin-top-4px'>|</div>
                                        <div className='margin-top-4px'>|</div>
                                        <div className='margin-top-4px'>|</div>
                                        <div className='margin-top-4px'>|</div>                                        
                                    </div>
                                    
                                    <div className='margin-left-2px'>                                        
                                        &#8594;
                                        <Tippy content='This course is an introduction to Geographic Information Systems (GIS) and its concepts and applications.'>
                                        <button className={item.gis} onClick = { () => {updateGIS(item.id)}}>GIS</button>
                                        </Tippy>
                                    </div>
                                </div>                                

                                <div className='margin-hci-cis'>
                                    <div>
                                        <div className='margin-top-4px'>|</div>                                        
                                        <div className='margin-top-4px'>|</div>
                                        <div className='margin-top-4px'>|</div>
                                        <div className='margin-top-4px'>|</div>
                                    </div>
                                    
                                    <div className='margin-left-2px'>
                                        &#8594;
                                        <Tippy content='This course covers human-computer interaction design, implementation, and evaluation, including ergonomics, prototyping, evaluation techniques, universal design principles, and various types of interfaces.'>
                                        <button className={item.hci} onClick = {() => {updateHCI(item.id)}}>HCI</button>
                                        </Tippy>
                                    </div>
                                </div>

                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>

                                <div className='margin-image-cis'>
                                    &#8594;
                                    <Tippy content='This course covers techniques for digital image processing, including transforms, convolution and filtering, feature identification, image encoding, and image enhancement.'>
                                    <button className={item.image} onClick = {() => {updateImage(item.id)}}>Image</button>
                                    </Tippy>
                                </div>
                            </div>
                            
                            <div className='lower1-2-2'>
                                <div>
                                    <div><center>&#8595;</center></div>
                                    <Tippy content='This course teaches students about the tools and methods used in the development of applications using client-side programming languages.'>
                                    <button className={item.specialtopics} onClick = { () => {updateSpecialTopics(item.id)}}>Special Topics</button>
                                    </Tippy>
                                </div>
                                
                                <div className='network-cis'>
                                    <Tippy content='This course covers various concepts and technologies in computer networking, including protocols and architecture at different layers.'>
                                    <div>
                                        <button className={item.network1} onClick={ () => {updateNetwork1(item.id)}}>Network 1</button>&#8592;
                                    </div>
                                    </Tippy>

                                    <center>&#8595;</center>
                                    <div>
                                    <Tippy content='This course covers network programming concepts and implementation using the Java API, including sockets, communication primitives, and multithreaded applications.'>
                                        <button className={item.np} onClick={ () => {updateNP(item.id)}}>NP</button>
                                    </Tippy>
                                    </div>
                                </div>

                                <div className='ai-section-cis'>
                                    <div>
                                        <Tippy content="This course covers artificial intelligence concepts, including logic, search methods, and expert systems.">
                                        <button className={item.ai} onClick={ () => {updateAI(item.id)}}>AI</button>
                                        </Tippy>
                                        &#8592;
                                    </div>
                                    
                                    <center>&#8595;</center>
                                    
                                    <div>
                                    <Tippy content='Machine learning is the study of algorithms and software that can make predictions based on data, and is a subfield of artificial intelligence and computer science that includes supervised and unsupervised learning.'>
                                        <button className={item.machine} onClick = {() => {updateMachine(item.id)}}>ML</button>
                                    </Tippy>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div> 
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>                                
                            </div>
                        </div>
                    </div>

                    <div className='lower2'>
                        <div className='lower2-1'>
                        <Tippy content='This course introduces students to natural language processing techniques, strategies, and toolkits.'>
                            <button className={item.nlp} onClick ={() => {updateNLP(item.id)}}>NLP</button>
                        </Tippy>
                        </div>

                        <div className='lower2-2'>
                            <div>
                                <center><button className='passed-hours'>Passing 90 Hours</button></center>
                            </div>

                            <div className='training-project1'><center>________|________</center></div>

                            <div className='flex-training'>
                                <div className='margin-training-arrow'>&#8595;</div>
                                <div className='margin-project1-arrow'>&#8595;</div>
                            </div>
                            
                            <div className='flex-training'>
                            <Tippy content='To fulfill this requirement, a student must complete at least 6 weeks of training at an organization and present a report, or hold a specialized certificate in a technological information subject.'>
                                <button className={item.training} onClick={() => {updateTraining(item.id)}}>Training</button>
                            </Tippy>

                            <Tippy content='The project for this course includes both theoretical and practical aspects of IT and consists of three stages: project proposal, analysis and preparation, and project design. At the end of each stage, a report must be submitted to the department and supervisor.'>
                                <button className={item.project1} onClick={ () => {updateProject1(item.id)}}>Project 1</button>
                            </Tippy>
                            </div>

                            <div className='flex-project2'>
                                <center>&#8595;</center>
                                <Tippy content='This course covers the implementation, testing, and evaluation stages of the graduation project. The final version of the project and documentation must be submitted, and the project will be examined.'>
                                <button className={item.project2} onClick ={() => {updateProject2(item.id)}}>Project 2</button>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='plan-manual-cis'>
                <div className='plan-manual-cis-top'>
                    <div>
                        Faculty Requirment
                    </div>

                    <div className='faculty-req-manual'></div>
                </div>

                <div className='plan-manual-cis-middle'>
                    <div>
                        Major Requirment
                    </div>
                    <div className='major-req-manual'></div>
                </div>

                <div className='plan-manual-cis-bottom'>
                    <div>
                        Eelective Requirment
                    </div>

                    <div className='elective-req-manual'></div>
                </div>
            </div>
            </>
            )
            }
            })}
        </>
    )
}

export default CIS;