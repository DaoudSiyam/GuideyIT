import React from "react";
import NavBar from "../../navbar/NavBar.js";
import Row from "./Row/Row.js";
import Udemy from './Assets/Udemy.png';
import Roadmap from './Assets/roadmap.jpeg';
import { useParams } from "react-router-dom";

const SelfStudyCard = ()=>{
    
const {route} = useParams();

const links = {
    'webdev':'https://roadmap.sh/frontend/',
    'java': 'https://roadmap.sh/java/',
    'mobile':'https://roadmap.sh/android/',
}

       console.log(links[route],route);

        const rows = [
            {
                id: 1,  
                 name: 'RoadMap', 
                 des:'Here is a Roadmap to help you with your learning journey',
                 img: Roadmap,
                 href: links[route]
                },
            {
                id: 2, 
                 name: 'Udemy Courses', 
                 des:'Here are a couple of Udemy courses to help you with your learing',
                img: Udemy,
                link: 'courses'
                },
       
          
          ]
        return(
            <div>
                <NavBar />
                <Row field={rows}  />              
            </div>

        );
    }

export default SelfStudyCard;