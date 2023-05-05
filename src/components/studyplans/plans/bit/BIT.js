import React, { useState, useEffect}from 'react';
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

import NavBar from '../../../navbar/NavBar';
import './BIT.css';


const BIT = () => {
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


    const getData = async () => {        
        const data = await getDocs(dbUsers);
        setArray(data.docs.map((item) => {
            return{ ...item.data(), id: item.id}
        }));
    }    

    useEffect( () => {        
        getData();
    }, [])
    return (
    <>
        <NavBar />

        <div className='text-bit'>
            <center>Business Information Technology Plan</center>
        </div>

        {array.map ( (item) => {
            if(item.email === user.email){
                return(
                    <>
                                <div className='bit-studyplan'>
            <div className='bit-left'>
                <div className='bit-left-1'>
                    <div><button className='major-req'>Principles of Microeconomics</button></div>
                    <div><button className='accounting-bit'>Principles of Accounting 1</button></div>
                    <Tippy content='This course provides an introduction to information technologies and covers careers in IT, cloud computing, and web technologies. It also includes technical skills such as hardware maintenance'>
                    <div>
                        <button className='faculty-req'>Fundementals</button> 
                    </div></Tippy>
                    
                    <div><button className='general-management-bit'>General Management</button></div>                  
                </div>
                <div className='display-web1-bit'><center>________________|________________</center></div>
                <div className='bit-left-2'>
                    
                    <div>
                        <div className='margin-mis-bit'><center>&#8595;</center></div>
                        <Tippy content='This course covers knowledge management systems and topics such as knowledge types, technologies, cultural issues, transfer, and implementation.'>
                        <button className='elective-req'>KMS</button></Tippy>
                        &#8592;                       
                        <Tippy content="This course covers the use of information technology and management information systems in business.">
                        <button className='major-req'>MIS</button>
                        </Tippy>
                    </div>
                    
                        <Tippy content='This course teaches students to develop web applications using Client-Side programming and covers web development tools and the World Wide Web.'>
                        <div> <div><center>&#8595;</center></div>                        
                        <button className='web1-bit'>Web 1</button>   </div></Tippy>    
                        <Tippy content='this course encourages knowledge sharing, which empowers your team to understand how processes work and what finished projects typically look like.'>
                    <div>
                        <div><center>&#8595;</center></div>
                        <button className='faculty-req'>DOC</button>
                    </div>
                    </Tippy>
                </div>

                <div className='bit-left-3'>
                    <div>
                        <div><center>_______________|</center></div>
                        <div className='margin-minus-irm'><span className='margin-irm'>&#8595;</span><span className='margin-ethics'>&#8595;</span></div>
                       <Tippy content='This course covers the role of information systems in organization management and current issues in MIS.'>
                        <button className='elective-req'>IRM</button>
                       </Tippy>
                       <Tippy content='This course covers ethical issues related to the use of computers, including technical topics and practical issues such as privacy and liability.'>
                        <button className='ethics-bit'>Ethics</button></Tippy>
                    </div>

                    <div>
                        <div><center>|________________</center></div>
                        <div className='margin-minus-web2'><span className='margin-web2'>&#8595;</span><span className='margin-web-publishing'>&#8595;</span></div>
                        <Tippy content='This course teaches students how to use PHP and MySQL to build interactive websites with a database. It includes website project development and may use a development platform such as Tomcat, XAMPP, or WampServer.'>
                        <button className='web2-bit'>Web 2</button>
                        </Tippy>  
                        <Tippy content='This course teaches students how to design, implement, and configure Internet services and applications using client-side and server-side programming. It is relevant for information technology students interested in e-commerce.'>             
                        <button className='major-req'>Web Publishing</button></Tippy>    
                    </div>
                </div>

                <div className='margin-line4-bit'>________________________________|_________________________</div>
                
                <div className='bit-left-4'>
                    <div>
                        <div><center>&#8595;</center></div>
                        <Tippy content='E-Business refers to business conducted via the Internet, including e-commerce which involves billions of dollars in transactions. It has a significant impact on the development of a new industrial order.'>
                        <button className='major-req'>E-Business</button></Tippy>
                    </div>
                    
                    <div>
                        <div><center>&#8595;</center></div>
                        <Tippy content='This course teaches security and compliance professionals how to implement controls in an existing network through automation for cost-effectiveness.'>
                        <button className='security-bit'>Security</button></Tippy>
                    </div>

                    <div>
                        <div><center>&#8595;</center></div>
                        <Tippy content='This course covers the use of internet technologies in government and the benefits of e-government. It also covers the skills and concepts needed to manage e-government projects.'>
                        <button className='elective-req'>E-Government</button></Tippy>
                    </div>

                    <div>
                        <div><center>&#8595;</center></div>
                        <button className='tp-bit'>TP</button>
                    </div>

                    <div>|</div>
                </div>
                
                <div className='margin-minus-elearning'>
                    <center>
                        <div className='margin-top-3px'>|</div>
                        <div className='margin-top-4px'>|</div>
                        <div className='margin-top-4px'>|</div>
                        <div className='margin-top-4px'>|</div>
                        <div className='margin-top-4px'>|</div>
                        <div className='margin-top-4px'>|</div>
                        <div className='margin-top-4px'>|</div>
                    </center>                    
                </div>
                
                <div className='bit-left-5'>
                    <Tippy content='This course introduces students to the concept of Electronic Learning and its applications within today’s fast-paced, dynamic, and global environment'>
                    <div><button className='elective-req'>E-Learning</button></div>
                   </Tippy> <div>&#8592;</div>
                </div>
            </div>

            <div className='bit-right'>
                <div className='bit-right-1'>
                <Tippy content="This course introduces the foundations of C++ programming, including variables, data types, control structures, arrays, functions, and the enumeration data type.">
                    <button className='faculty-req'>C++</button></Tippy>
                    &#8592;
                    <Tippy content='This course introduces first-year students to basic concepts in information technology and provides practical skills for using computers and common applications. It covers topics such as types of computers, computer components, and the use of operating systems, word processing and presentation applications, and email etiquette.'>
                    <button className='faculty-req'>Computer skills 99</button>
                  </Tippy>  &#8594;
                    <Tippy content='This course covers object-oriented programming concepts such as methods, data structures, inheritance, and polymorphism. It also covers applet development.'>
                    <button className='elective-req'>Java 1</button></Tippy>
                    &#8594;
                    <Tippy content='This course covers digital media concepts, including encoding, decoding, and compression techniques, and introduces file formats. It also covers hardware and software issues.'>
                    <button className='elective-req'>Multimedia</button></Tippy>
                    <div className='calculus1-bit-margin'>
                    <Tippy content= "This course covers functions, limits, continuity, differentiation, integration, inverse functions, logarithmic and exponential functions, and hyperbolic functions." >
                        <button className='faculty-req'>Calculus 1</button></Tippy>
                    </div>
                </div>

                <div className='data1-line-bit-margin'>|_________________________________</div>
                <div className='margin-bit-whole-lower'><center>&#8595;</center></div>

                <div className='bit-right-2'>
                    <div className='bit-right-2-1'>
                        <div className='bit-right-2-1-1'>                        
                         <div>
                                <Tippy content='This course teaches students to develop and design web and mobile applications using various software tools, with a focus on achieving an international certification.'>
                                 <button className='elective-req'>Certified Software</button>
                                </Tippy> <div><center>&#8593;</center></div>
                            </div>

                            <Tippy content='This course teaches students about the tools and methods used in the development of applications using client-side programming languages.  '>
                             <div>
                                <button className='special-topics-bit'>Special Topics</button> 
                                <div><center>&#8593;</center></div>
                            </div></Tippy>

                            <Tippy content='This course covers the basics of data structures including records, classes, inheritance, templates, contiguous lists, stacks, and queues, with a focus on implementation using arrays.'>
                            <div>
                                <button className='faculty-req'>Data Structures 1</button>&#8594;
                                <div><center>|</center></div>
                            </div>
                            </Tippy>
                        </div>

                        <div className='major-line-bit-margin'>_________________________________________</div>
                        
                        <div className='flex-lower-bit'>
                            <div className='flex-lower-bit-part'>
                                <div className='bit-right-2-1-2'>  
                                <Tippy content='This course covers various concepts and functions of operating systems, including hardware and software, scheduling, memory management, I/O device management, performance, security, and distributed systems.'>                      
                                    <div>
                                        <div><center>&#8595;</center></div>
                                        <button className='major-req'>OS</button>                                
                                    </div></Tippy>
                                    
                                    <Tippy content='This course covers simulation model design and computer simulation, including different types of simulation and software for simulating systems. Arena and MS Excel software will be used.'>
                                    <div>
                                        <div><center>&#8595;</center></div>
                                        <button className='simulation-bit'>Simulation</button>                                
                                    </div></Tippy>

                                    <Tippy content='This course covers various concepts and technologies in computer networking, including protocols and architecture at different layers.'>
                                    <div>
                                        <div><center>&#8595;</center></div>
                                        <button className='major-req'>Network 1</button>
                                    </div></Tippy>
                                </div>

                                <div className='network-line-bit-margin'>
                                    <div className='os-line-bit-margin'>|</div>
                                    <div className='rest-line-bit-margin'>________________|</div>
                                </div>

                                <div className='bit-right-2-1-3'>  
                                <Tippy content='This course covers advanced application development techniques for use in a large enterprise, including distributed object technologies, multi-tier applications, and transaction processing. It includes a weekly lab session.'>                     
                                    <div>
                                        <div><center>&#8595;</center></div>
                                        <button className='elective-req'>Enterprise Application Development</button>
                                    </div></Tippy> 

                                    <div>
                                        <div><center>&#8595;</center></div>
                                        <button className='special-topics-bit'>Network 2</button>                                
                                    </div>
                                    <Tippy content='This course covers managing information security risks and includes a weekly lab session. Upon completion, students will have a working knowledge of the concepts and methodologies needed to manage these risks.'>
                                    <div>
                                        <div><center>&#8595;</center></div>
                                        <button className='elective-req'>Risk Management</button>
                                    </div></Tippy>
                                </div>

                                <div className='bit-right-2-1-4'>
                                <Tippy content='This course covers systems development topics, including the development life cycle, feasibility, and fact finding methods. It also includes a case study.'>
                                    <div>
                                        <button className='major-req'>Systems Analysis and Design</button>&#8592;
                                    </div></Tippy>

                                    <Tippy content='This course is an introduction to database systems for graduate students. It covers the foundations of database systems, including the relational algebra, query optimization, and transactions.'> 
                                    <div className='bit-database-div'>
                                        <button className='faculty-req'>Database</button>
                                        <div className='margin-databse-bit-arrow'>&#8592;</div>
                                    </div></Tippy>
                                </div>
                        
                                <div className='database-bit-line-margin'>_______________|</div>

                                <div className='bit-right-2-1-5'>
                                    <Tippy content='This course teaches students to develop database applications using Oracle Developer 10g utilities and the SQL language. It also covers understanding database administration activities.'>
                                    <div>
                                        <div><center>&#8595;</center></div>
                                        <button className='elective-req'>DB Tools</button>
                                    </div></Tippy>

                                    <div className='software-div-bit'>
                                        <div><center>&#8595;</center></div>
                                             <Tippy content='This course covers software engineering concepts and processes, including requirements and specification, design, and documentation. It also introduces UML and includes weekly lab practice.'>
                                            <button className='major-req'>Intro to Software Engineering</button></Tippy>
                                        <div>
                                            <center>
                                                <div className='margin-top-4px'>|</div>
                                                <div className='margin-top-5px'>|</div>
                                                <div className='margin-top-5px'>|</div>
                                            </center>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='margin-bit-flex-lower-database'>
                                |
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
                    
                    <div className='bit-right-2-2'>
                        <div className='bit-right-2-2-1'>
                        <Tippy content='This course covers algorithm design and analysis techniques, including complexity analysis, recurrence equations, and graph algorithms.'>
                            <div>
                                <button className='major-req'>Algo</button>                                
                            </div></Tippy>

                            <div className='flex-bit-discrete-line'>
                                |
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                            </div>
                            <Tippy content="This course covers mathematical topics relevant to computer science, including propositional and predicate logic, proof techniques, set theory, number theory, matrices, sequences and summations, functions, relations, graph theory, and trees.">
                            <div>_<button className='faculty-req'>Discrete</button></div></Tippy>
                        </div>
                        
                        <div className='bit-right-2-2-2'>
                            <Tippy content='This course covers digital image processing techniques, including analysis and enhancement, and includes practical experience using MATLAB for document analysis and recognition.'>
                            <div>
                                <div><center>&#8595;</center></div>
                                <button className='doc-analysis-bit'>DOC Analyisis</button>&#8592;
                            </div></Tippy>
                            <Tippy content='This course introduces statistical and probabilistic concepts and their use in business intelligence and decision support systems. It uses MATLAB to apply these concepts and techniques.'>
                            <div>
                                <div><center>&#8595;</center></div>
                                <button className='statistical-packages-bit'>Statistical Packages</button>____
                            </div></Tippy>
                        </div>

                        <div className='or-bi-bit-line'>____________________|</div>

                        <div className='bit-right-2-2-3'>
                            <Tippy content="This course covers the use of Business Intelligence technologies to improve a company's business and includes practical exercises and a weekly lab session">
                            <div>
                                <div><center>&#8595;</center></div>
                                <button className='major-req'>BI</button>
                            </div></Tippy>
                            <Tippy content='This course covers the use of quantitative methods for business decision-making and emphasizes hands-on learning using computer packages.'>
                            <div>
                                <div><center>&#8595;</center></div>
                                <button className='or-bit'>OR</button>
                            </div></Tippy>
                        </div>
                        
                        <div className='bit-right-2-2-4'>
                            <div className='bit-bi-line'>
                                <div className='margin-top-5px'>|</div>
                                <div className='margin-top-5px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-5px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-5px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>                                
                                <div className='margin-top-4px'>|</div>
                            </div>

                            <div>
                                <div>
                                    &#8594;<button className='elective-req'>Information Retreiving</button>
                                </div>
                                <Tippy content='This course covers decision support systems, including management support systems and data mining.'>
                                <div>
                                    &#8594;<button className='dss-bit'>DSS</button>
                                </div></Tippy>

                                <div>
                                {/* The Web Semantic course will introduce the notion of the Web Semantic, provide an overview of the underlying theory and technology, cover existing technologies and practices, and highlight current and potential applications. */}
                                    &#8594;<button className='major-req'>Semantic Web</button>
                                </div>
                            </div>

                            <div className='software-ispm-bit-line'>
                                |
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                            </div>

                            <div>
                                <div>
                                    <div className='or-bit-erp-line'>
                                        |_________
                                    </div>

                                    <div>
                                        <div><center>&#8595;</center></div>
                                        <button className='major-req'>ERP</button>
                                    </div>

                                    <div>
                                    <Tippy content='The ISPM program covers topics in management, personal development, economics, research, and events, and includes a combination of courses that relate to these topics each year.'>
                                        <div>
                                            &#8594;<button className='ispm-bit'>ISPM</button>&#8592;
                                        </div></Tippy>
                                        
                                        <div className='bit-tqm-div'>
                                            &#8594;<button className='major-req'>TQM</button>
                                            <div>&#8592;</div>
                                            <div className='margin-tqm-line'>__</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='erp-ispm-bit-line'>
                                |
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-5px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-5px'>|</div>
                                <div className='margin-top-4px'>|</div>
                                <div className='margin-top-5px'>|</div>
                            </div>
                        </div>
                    </div>

                    <div className='bit-right-2-3'>
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
                        <div className='margin-top-4px'>|</div>
                        <div className='margin-top-4px'>|</div>
                        <div className='margin-top-4px'>|</div>
                        <div className='margin-top-4px'>|</div>
                    </div>
                </div>

                <div className='bit-right-3'>
                    <center><div className='margin-top-3px'>|_______________________________</div></center>
                </div>
            </div>
        </div>

        <div className='manual-projects'>
            <div className='plan-manual-bit'>
                <div className='plan-manual-bit-top'>
                    <div>
                        Faculty Requirment
                    </div>

                    <div className='faculty-req-manual'></div>
                </div>

                <div className='plan-manual-bit-middle'>
                    <div>
                        Major Requirment
                    </div>
                    <div className='major-req-manual'></div>
                </div>

                <div className='plan-manual-bit-bottom'>
                    <div>
                        Eelective Requirment
                    </div>

                    <div className='elective-req-manual'></div>
                </div>
            </div>

            <div>
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

                <div className='flex-project2'>
                    <center>&#8595;</center>
                    <Tippy content='This course covers the implementation, testing, and evaluation stages of the graduation project. The final version of the project and documentation must be submitted, and the project will be examined.'>
                    <button className='major-req'>Project 2</button></Tippy>
                </div>
            </div>
        </div>
                    </>
                )
            }
        })}    
    </>
  )
}

export default BIT