import React, {Component} from "react";
import NavBar from "../../navbar/NavBar.js";
import Row from "./Row/Row.js";
import webImg from './Assets/webimg.jpeg';
import mobileImg from './Assets/mobile.png';
import javaImg from './Assets/java.jpeg';

class SelfStudy extends Component{
    
    render(){
        const rows = [
            {
                id: 1,  
                 name: 'Web Development', 
                 des:'Web development is the creation and maintenance of websites, including design, functionality, and content management. It can involve front-end and back-end work and uses various programming languages and frameworks. It is an important part of modern business and communication.',
                 img: webImg,
                 link: 'webdev'
                },
            {
                id: 2, 
                 name: 'Java Development', 
                 des:'Java development is the creation and maintenance of software using the Java programming language. It involves design, implementation, testing, and maintenance of Java-based systems, and requires a strong understanding of the language and related technologies, as well as problem-solving and communication skills.' ,
                img: mobileImg,
                link:'java'
                },
            {
                id: 3, 
                 name: 'Mobile Development',
                 des:'Mobile development is the creation and maintenance of software applications for mobile devices. It involves designing, building, testing, and maintaining native or cross-platform mobile apps, and requires a strong understanding of mobile platforms and technologies, as well as problem-solving and communication skills.',
                img:javaImg,
                link:'mobile'
                },
          
          ];
        return(
            
            <div>
                <NavBar />
                <Row field={rows}  />              
            </div>

        );
    }
}
export default SelfStudy;