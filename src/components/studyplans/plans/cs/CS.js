import React, { useEffect, useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


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

import NavBar from "../../../navbar/NavBar";
import "./CS.css"

const CS = () => {
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

        <div className='text-gpa'>
            <center>Computer Science Study Plan</center>
        </div>
        
        {array.map( (item) => {
            if(item.email === user.email){
                return(
                    <>
                        <div className="statistics-upper-line">
            <div>________________________</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|________________________</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>

        </div>

        <div className="cs-study-plan">
            <div className="cs-plan-upper">
                <div className="upper-left-cs-plan">                    
                    <div className="upper-left-cs-1">
                        <div>
                            <button className="physics-lab">Physics lab</button>____                          
                        </div>

                        <div>
                            <button className="physics-cs">Physics CS</button>                            
                        </div>
                        
                        <Tippy content="This course covers mathematical topics relevant to computer science, including propositional and predicate logic, proof techniques, set theory, number theory, matrices, sequences and summations, functions, relations, graph theory, and trees.">
                        <div>
                            <button className="faculty-req">Discrete</button>                            
                        </div></Tippy>
                    </div>
                    
                    <div className="three-sub-logic-cs">
                        <div className="physics-lab-logic-cs-line">
                            |___________
                        </div>

                        <div className="physics-logic-cs-line">|</div>

                        <div className="discrete-logic-cs-line">
                            ____________|
                        </div>
                    </div>

                    <div className="upper-left-cs-2">
                    <Tippy content='This course covers the use of quantitative methods for business decision-making and emphasizes hands-on learning using computer packages.'>
                        <div>
                            &#8594;<button className="elective-req">OR</button>
                        </div></Tippy>

                        <div>
                            <div className="logic-cs-arrows">
                                <div>&#8595;</div>
                                <div className="logic-middle-arrow-cs">&#8595;</div>
                                <div>&#8595;</div>
                            </div>
                            <Tippy content='This course covers the main concepts of logic design, including Boolean algebra, digital logic gates, minimization methods, and combinational and sequential logic.'>
                            <button className="logic-cs">Digital Logic</button></Tippy>
                            <center><div>&#8595;</div></center>
                        </div>

                        <div>
                            <center><div>&#8595;</div></center>
                            <Tippy content='This course covers formal language concepts including finite automata, regular and context-free languages, pushdown automata, and Turing machines. It also introduces complexity classes.'>
                            <button className="faculty-req">Theory</button></Tippy>
                            <center><div>&#8595;</div></center>
                        </div>
                    </div>
                    
                    <div className="upper-left-cs-3">
                        <div className="upper-left-cs-3-1">
                            <div className="upper-left-cs-3-1-1">                                
                                <div className="cs-cp-div">
                                    &#8594;
                                    <button className="elective-req">CP</button>&#8592;
                                </div>
                                <Tippy content='This course covers the main concepts of computer architecture, including hardware components, instruction set and formats, execution unit design, control unit design and implementation, memory unit components, and input/output processors.'>
                                <div>
                                    <button className="major-req">ORG</button>
                                    <div><center>&#8595;</center></div>
                                </div></Tippy>
                            </div>

                            <div className="upper-left-cs-3-1-2">  
                            <Tippy content='This course covers the fundamental concepts of graph theory and advanced topics such as spanning trees and searching algorithms, with the goal of equipping students with the basic knowledge needed to understand and analyze problems in the field.'>                              
                                <div>
                                    <button className="major-req">Graph Theory</button>
                                </div></Tippy>

                                <Tippy content='This course covers algorithm design and analysis techniques, including complexity analysis, recurrence equations, and graph algorithms.'>
                                <div>
                                    &#8592;<button className="major-req">Algo</button>&#8594;                                   
                                </div></Tippy>
                                <Tippy content='This course covers the concepts and principles of parallel and distributed systems, including current trends and their societal impact. It introduces students to the field.'>
                                <div>
                                    <button className="major-req">Parallel & DS</button>
                                </div></Tippy>
                            </div>
                        </div>
                        
                        <div className="org-sp-cs-line">
                            _
                            <div className="org-sp-cs-hor-line">
                                <div className="margin">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>                  
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-sp-cs-arrow">&#8594;</div>
                            </div>
                        </div>

                        <div className="upper-left-cs-3-2">
                            <Tippy content='This course covers the basics of high-performance computing, including processor architectures and memory systems, and introduces the PRAM model and sample applications.'>
                            <div>
                                <button className="pl-cs">PL</button>
                                <div><center>&#8595;</center></div>
                            </div></Tippy>
                                 
                            <Tippy content=" This course covers assemblers, loaders and linkers, macro processors, and advanced concepts such as virtual machines and runtime environments. It also covers lexical analysis, syntax analysis, and code generation, with weekly lab practice.">                    
                              <div className="upper-left-cs-3-2-2">  
                                <button className="major-req">SP & Compiler</button> 
                            </div></Tippy>
                        </div>
                    </div>                    
                </div>

                <div className="upper-middle-cs-plan">
                    <div>
                        <Tippy content='This course introduces first-year students to basic concepts in information technology and provides practical skills for using computers and common applications. It covers topics such as types of computers, computer components, and the use of operating systems, word processing and presentation applications, and email etiquette.'>
                        <button className="margined-faculty-req">Computer Skills 99</button>
                       </Tippy> 
                       <div className="margin-top-4px">
                            <center>
                                <div>|</div>
                                <div className="margin-top-5px">&#8595;</div>
                            </center>
                        </div>
                    </div>

                    <div>
                        &#8592;
                        <Tippy content="This course introduces the foundations of C++ programming, including variables, data types, control structures, arrays, functions, and the enumeration data type.">
                        <button className="faculty-req">C++</button></Tippy>
                    </div>
                    

                    <div className="data1-lab-cs-div">
                        <div className="lab-data1-horline-margin">
                            <div>|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>                            
                        </div>
                        
                        <div>
                            _<button className="data1-lab">Data 1 Lab</button>
                            <div>
                                <center>
                                    <div className="margin-top-4px">|</div>
                                    <div className="margin-top-4px">|</div>                                    
                                </center>
                            </div>
                            
                            <div>
                            <Tippy content='This course covers the basics of data structures including records, classes, inheritance, templates, contiguous lists, stacks, and queues, with a focus on implementation using arrays.'>
                                <button className="data1-cs">Data Structures 1</button></Tippy>
                                <div className="margin-top-4px"><center>|</center></div>
                                <div className="margin-top-4px"><center>|</center></div>
                                <div className="margin-top-4px"><center>|</center></div>
                            </div>
                        </div>
                        
                        <div className="c-data-cs-line">
                            <div>|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|____</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="c-data-cs-arrow">&#8595;</div>                                                        
                        </div>
                    </div>                    
                </div>

                <div className="c-numerical-cs-line">
                    <div className="margin-top-4px">|</div>
                    <div className="margin-top-4px">|</div>
                    <div className="margin-top-4px">|</div>
                    <div className="margin-top-4px">|</div>
                    <div className="margin-top-4px">|</div>                    
                </div>

                <div className="upper-right-cs-plan">
                    <div className="upper-right-cs1">
                    <Tippy content='This course provides an introduction to information technologies and covers careers in IT, cloud computing, and web technologies. It also includes technical skills such as hardware maintenance'>
                        <button className="faculty-req">Fundementals</button></Tippy>
                    </div>
                    
                    <div className="fund-web-doc-line">|________________</div>

                    <div className="upper-right-cs2">
                        <div className="margin-top-5px">
                            <div><center>&#8595;</center></div>
                            <Tippy content='This course teaches students to develop web applications using Client-Side programming and covers web development tools and the World Wide Web.'>
                            <button className="faculty-req">Web 1</button></Tippy>
                        </div>

                        <div className="margin-top-5px">
                            <div><center>&#8595;</center></div>
                            <Tippy content='this course encourages knowledge sharing, which empowers your team to understand how processes work and what finished projects typically look like.'>
                            <button className="margined-faculty-req">Doc</button></Tippy>
                        </div>

                        <Tippy content= "This course covers functions, limits, continuity, differentiation, integration, inverse functions, logarithmic and exponential functions, and hyperbolic functions." >
                        <div>
                            <button className="calculus1-cs">Calculus 1</button>
                        </div></Tippy>

                    </div>

                    <div className="margin-cal-linear-cs-line">
                        <div className="margin-web-cs">
                            |
                        </div>

                        <div className="margin-cal-linear-cs">
                            ________________|
                        </div>
                    </div>

                    <div className="upper-right-cs3">
                        <div className="">                            
                            <div><center>&#8595;</center></div>
                            <Tippy content='This course teaches students how to use PHP and MySQL to build interactive websites with a database. It includes website project development and may use a development platform such as Tomcat, XAMPP, or WampServer.'>
                            <button className="elective-req">Web 2</button></Tippy>
                        </div>

                        <div className="">
                            <div><center>&#8595;</center></div>
                            <button className="margined-major-req">Linear 1</button>
                        </div>
                        
                        <div>
                            <div><center>&#8595;</center></div>
                            <button className="major-req">Calculus 2</button>
                        </div>
                    </div>

                    <div className="upper-right-cs4">
                        <div className="margin-numerical-arrows-left">

                            &#8594;
                            <Tippy content='This course is an introduction to numerical methods, including error analysis, function roots, linear and nonlinear systems, and approximation and interpolation. There is weekly lab practice.'>
                            <button className="major-req">Numerical</button></Tippy>&#8592;
                        </div>
                        
                        <div className="margin-lin-num-cs-line">
                            <div>|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                        </div>
                        <div className="margin-dot-lin-num-cs">_</div>
                    </div>
                </div>
            </div>

            <div className="flex-long-lines-cs">
                <div className="cs-algo-prob-line">
                    <div className="cs-algo-line-margin">
                        <div>|</div>
                        <div className="margin-top-4px">|</div>
                    </div>
                    <div>___________</div>
                </div>

                <div className="cs-data-labs-line">
                    ___________________________________________
                </div>

                <div className="cs-longest-line">
                    ___________________________________________________________________________________________
                </div>
            </div>

            <div className="cs-plan-lower">
                <div className="cs-plan-lower-left">
                    <div className="cs-lower-left1">
                    <Tippy content='This course covers statistical data analysis techniques including probability, distributions, sampling, and statistical inference.'>
                        <button className="major-req">Principles of Statistics</button></Tippy>                      
                     </div>

                    <div className="cs-lower-left2">
                        <div className="cs-lower-left2-1">
                            <div className="cs-lower-left2-1-1">
                                <div>
                                    <center>
                                        <div>|</div>
                                        <div className="margin-top-4px">|</div>
                                        <div className="margin-top-5px">
                                            &#8595;
                                        </div>
                                    </center>
                                </div>
                                <Tippy content='This course teaches students how to solve problems using programming techniques and critical thinking, covering topics such as problem-solving approaches, advanced data structures, and the representation of graphs. Students will complete programming assignments and have their solutions discussed in class.'>
                                <button className="lab">Problem Solving Lab</button>                                
                           </Tippy> </div>

                            <div className="cs-lower-left2-1-2">
                                <div>
                                    <center>
                                        <div>|</div>
                                        <div className="margin-top-4px">|</div>
                                        <div className="margin-top-5px">
                                            &#8595;
                                        </div>
                                    </center>
                                </div>

                                <div>                        
                                    &#8592;
                                    <Tippy content='This course teaches students how to analyze problems and identify appropriate computer requirements for their solutions using different data structures. It covers topics such as pointers, linked lists, stacks, queues, and binary search trees. The course includes practical quizzes and exams to assess student progress.'>
                                        <button className="lab">Data 2 Lab</button>
                                        </Tippy>___
                                </div>
                            </div>
                        </div>

                        <div className="bio-DS-prob-line-cs">
                            _________|_________
                        </div>

                        <div className="cs-lower-left2-2">
                            <div className="cs-lower-left2-2-1">
                                <div><center>&#8595;</center></div>
                                <Tippy content='This course teaches students how to use computational, statistical, and mathematical knowledge to solve complex problems in the life sciences. It covers concepts in bioinformatics, including genomics, DNA sequencing, and techniques for manipulating genomics data. Students will present case studies on one of the covered topics.'>
                                <button className="elective-req">Bioinformatics</button></Tippy>
                                <div className="margin-top-5px">
                                    <center>
                                        &#8593;
                                        <div className="margin-top-5px">|</div>                                    
                                    </center>
                                </div>
                            </div>

                            <div>
                                <div><center>&#8595;</center></div>
                                <Tippy content='This course covers the fundamentals of data sciences, including types of data, data manipulation techniques, data analysis, deep learning, data communication, big data, and data governance. There are weekly labs to provide hands-on experience with tools.'>
                                <button className="elective-req">Data Science</button></Tippy>
                                <div className="margin-top-5px">
                                    <center>
                                        &#8593;
                                        <div className="margin-top-5px">|</div>                                    
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cs-lower-left3">
                        <div className="cs-data2-div">
                            <div><center>                                
                                &#8595;
                            </center></div>
                            <Tippy content='Pointers. Classes. Virtual functions and abstract classes. Overloading. Recursion. Linked list: singly, doubly, circular. Stacks, Stack operations and Implementation of Stacks as linked-list. Queues, Queue operations and Implementation of Queues as linked-list. Trees, Binary Trees'>
                            <button className="major-req">Data 2</button></Tippy>
                            <div className="margin-top-4px"><center>&#8595;</center></div>
                        </div>

                        <div>
                            <Tippy content='This course introduces students to numerical methods, including error analysis, finding roots of a function, solving systems of linear equations, nonlinear systems, approximation and interpolation, numerical integration and differentiation, and programming languages. There is weekly practice in the lab.'>
                            <button className="major-req">Simulation CS</button></Tippy>
                            <div className="margin-top-4px">
                                <center>
                                    &#8593;
                                    <div className="margin-top-5px">|</div>
                                    <div className="margin-top-5px">|</div>
                                    <div className="margin-top-5px">|</div>
                                </center>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className="cs-plan-lower-middle">
                    <div className="cs-lower-middle-top">
                        <div>
                            <div><center>&#8595;</center></div>
                            <Tippy content='This course covers various concepts and technologies in computer networking, including protocols and architecture at different layers.'>
                            <button className="major-req">Network 1</button></Tippy>
                        </div>

                        <div className="cs-database-div">
                            <div><center>&#8595;</center></div>
                            <Tippy content='This course is an introduction to database systems for graduate students. It covers the foundations of database systems, including the relational algebra, query optimization, and transactions.'> 
                            <button className="faculty-req">Database</button></Tippy>
                        </div>
                    </div>

                    <div className="cs-lower-middle-bottom">
                        <div className="cs-lower-middle-bottom1">
                            <div className="cs-commutive-div">
                                <Tippy content='This course covers mobile computing, including application development, networking, and technology for cellular and wireless networks. It also covers topics such as energy efficiency for mobile devices and mobile security. Recent advances and emerging topics are also covered.'>
                                <button className="elective-req">Mobile Computing</button></Tippy>&#8592;
                            </div>

                                <Tippy content='This course covers the basics of wireless networks, including different types of technologies and systems, key commercial systems, and wireless voice, data, and broadcast services. It also covers specific technologies such as Wi-Fi and GSM, as well as mobile routing. The course also covers transport layers over wireless networks.'>
                            <div className="cs-wireless-div">
                                <button className="elective-req">Mobile Wireless Networks</button>&#8592;
                            </div></Tippy>
                                <Tippy content='This course covers key concepts of multimedia networking, including digital audio, graphics, and video, voice over IP, compression standards, real-time and non-real-time multimedia applications, transport layer protocols, quality of service, multicasting, and multimedia programming. It also discusses future trends in the field.'>
                            <div className="cs-multimedia-net-div">
                                <button className="elective-req">Multimedia Networking</button>&#8592;
                            </div></Tippy>
                        </div>

                        <div className="cs-network-arrows-line">
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>                            
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                        </div>

                        <div className="cs-lower-middle-bottom2">
                            <div className="cs-software-div">
                                <div><center>&#8595;</center></div>
                                <Tippy content='This course covers software engineering concepts and processes, including requirements and specification, design, and documentation. It also introduces UML and includes weekly lab practice.'>
                                <div>
                                    <button className="major-req">Intro to Software Engineering</button>
                                </div></Tippy>
                            </div>
                            <Tippy content='This course teaches security and compliance professionals how to implement controls in an existing network through automation for cost-effectiveness.'>
                            <div className="cs-security-div">
                                &#8594;
                                <button className="major-req">Security</button> &#8594;
                            </div></Tippy>
                            <Tippy content='This course covers network programming concepts and implementation using the Java API, including sockets, communication primitives, and multithreaded applications.'>
                            <div className="cs-np-div">
                                &#8594;<button className="major-req">Network Programming</button>
                            </div></Tippy>
                            <Tippy content='This course covers the architecture, components, and operations of routers and switches in small networks. Students learn how to configure routers and switches for basic functionality.'>
                            <div className="cs-network2-div">
                                &#8594;<button className="major-req">Network 2</button>
                            </div></Tippy>
                        </div>
                    </div>
                </div>

                <div className="cs-plan-lower-right">
                    <div className="cs-lower-right-left">
                        <div className="cs-lower-right-left-left">
                            <div>
                                <button className="major-req">AI</button>&#8592;
                            </div>
                            <Tippy content='This course teaches students how to build robust programs using defensive techniques, current programming trends, code testing and tuning strategies, and problem solving techniques. It also covers object-oriented programming concepts using C++, Java, or Python.'>
                            <div className="cs-special-programming-div">
                                <button className="elective-req">Programming in Specialized Languages</button>&#8592;
                            </div></Tippy>

                            <div className="cs-digital-crimes-div">
                                <button className="major-req">Digital Crimes</button>
                            </div>
                        </div>
                        
                        <div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                            <div className="margin-top-4px">|</div>
                        </div>

                        <div className="cs-lower-right-left-right">
                        <Tippy content='This course covers various concepts and functions of operating systems, including hardware and software, scheduling, memory management, I/O device management, performance, security, and distributed systems.'>
                            <div>
                                &#8594;<button className="major-req">OS</button>
                            </div></Tippy>

                            <Tippy content='This course teaches students about the tools and methods used in the development of applications using client-side programming languages.'>
                            <div className="cs-special-programming-div">
                                &#8594;<button className="elective-req">Special Topics</button>
                            </div></Tippy>
                        </div>
                    </div>

                    <div className="cs-lower-right-right">
                        <div className="cs-lower-right-right-top">

                            <div className="cs-graphics-div">
                                <div><center>&#8595;</center></div>
                                 <Tippy content='This course covers computer graphics concepts and techniques, including 2D and 3D geometric transformations, graphical user interface, and OpenGL programming using C++.'>
                               <button className="major-req">Graphics</button></Tippy>
                            </div>
                        </div>

                        <div className="cs-lower-right-right-bottom">
                            <div className="cs-graphics-line-margin">
                                <div>|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>                                
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>                                                                
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                                <div className="margin-top-4px">|</div>
                            </div>

                            <div className="cs-lower-right-right-bottom-right">
                                <div>
                                    &#8594;
                                <Tippy content='This course introduces students to pattern recognition, including preprocessing and feature extraction, supervised and unsupervised learning, object classification and recognition, and artificial neural networks. It is suitable for undergraduate students in computer science and engineering'>
                                    <button className="elective-req">Pattern Recognition</button>
                               </Tippy> </div>

                               <Tippy content='This course covers techniques for digital image processing, including transforms, convolution and filtering, feature identification, image encoding, and image enhancement.'>
                                <div className="cs-image-div">
                                    &#8594;<button className="elective-req">Image</button>
                                </div></Tippy>

                                <div>
                                    &#8594;<button className="elective-req">GDV</button>
                                </div>

                                <div className="cs-game-dev-div">
                                    &#8594;<button className="elective-req">Game Development</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="statitics-lower-line">
            <div className="margin-top-5px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|</div>
            <div className="margin-top-4px">|_________________________________________________</div>            
        </div>

        <div className="final-cs-div">
            <div className='plan-manual-cs'>
                <div className='plan-manual-cs-top'>
                    <div>
                        Faculty Requirment
                    </div>

                    <div className='faculty-req-manual'></div>
                </div>

                <div className='plan-manual-cs-middle'>
                    <div>
                        Major Requirment
                    </div>
                    <div className='major-req-manual'></div>
                </div>

                <div className='plan-manual-cs-bottom'>
                    <div>
                        Eelective Requirment
                    </div>

                    <div className='elective-req-manual'></div>
                </div>
            </div>

            <div className="cs-project-training">                
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
                    <button className='training-cis'>Training</button></Tippy>
                    <Tippy content='The project for this course includes both theoretical and practical aspects of IT and consists of three stages: project proposal, analysis and preparation, and project design. At the end of each stage, a report must be submitted to the department and supervisor.'>
                    <button className='major-req'>Project 1</button></Tippy>
                </div>

                <Tippy content='This course covers the implementation, testing, and evaluation stages of the graduation project. The final version of the project and documentation must be submitted, and the project will be examined.'>
                <div className='flex-project2'>
                    <center>&#8595;</center>
                    <button className='major-req'>Project 2</button>
                </div></Tippy>
                </div> 
                </div>
                    </>
                )
            }
        })}
        </>
    )
}

export default CS;