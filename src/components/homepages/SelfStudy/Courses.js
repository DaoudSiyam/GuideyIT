import React from "react";
import Row from "./Row/Row.js";
import NavBar from "../../navbar/NavBar.js";
import reactimg from './Assets/React.png';
import webBootCamp from './Assets/webdevbootcamp.jpeg';
import jsBootCamp from './Assets/JavascriptBootcamp.jpeg';
import FlutterDart from './Assets/flutterDart.jpeg';
import iosSwift from './Assets/iOSSwift.jpeg';
import androidK from './Assets/android12.jpeg';
import java17 from './Assets/Java17.jpeg';
import javaDesign from './Assets/JavaDesign.jpeg';
import javaBootCamp from './Assets/javaBootCamp.jpeg';
import { useParams } from "react-router-dom";



const Courses = ()=>{
   const {route} = useParams();

    const mobileCourses = [
        {
            id: 1,  
             name: 'Mobile App Development with Flutter & Dart (iOS and Android))', 
             des: 'The Complete iOS and Android Mobile App Development Course with Flutter and Dart (2022).',
             img: FlutterDart,
             href: 'https://www.udemy.com/course/mobile-app-development-with-flutter'
            },
        {
            id: 2, 
             name: 'The Complete Android 12 & Kotlin Development Masterclass',                      
             des:'Learn Android 12 App Development From Beginner to Advanced Developer. Build Apps like Trello, 7Min Workout, Weather App' ,
             img: androidK,
             href:'https://www.udemy.com/course/android-kotlin-developer'
            },
        {
            id: 3, 
             name: 'iOS & Swift - The Complete iOS App Development Bootcamp',
             des: 'From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!',
             img: iosSwift,
             href:'https://www.udemy.com/course/ios-13-app-development-bootcamp'
            },
      
      ];

    const webCourses = [
            {
                id: 1,  
                 name: 'React - The Complete Guide (incl Hooks, React Router, Redux)', 
                 des:'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
                 img: reactimg,
                 href: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/'
                },
            {
                id: 2, 
                 name: 'The Web Developer Bootcamp 2023',             
                 des:'COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!' ,
                 img: webBootCamp,
                 href:'https://www.udemy.com/course/the-web-developer-bootcamp/'
                },
            {
                id: 3, 
                 name: 'The Modern Javascript Bootcamp Course (2022)',
                 des:' The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!',
                 img:jsBootCamp,
                 href:'https://www.udemy.com/course/javascript-beginners-complete-tutorial/'
                },
          
          ];
    const javaCourse = [
            {
                id: 1,  
                 name: 'Java Programming Masterclass updated to Java 17', 
                 des: 'Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification',
                 img: java17,
                 href: 'https://www.udemy.com/course/java-the-complete-java-developer-course/'
                },
            {
                id: 2, 
                 name: 'Complete Java Design Patterns masterclass 2023',                      
                 des:'Improve your coding skills by learning Software Design Patterns applied to Java development' ,
                 img: javaDesign,
                 href:'https://www.udemy.com/course/javadesignpatterns/'
                },
            {
                id: 3, 
                 name: 'The Complete Java Development Bootcamp',
                 des: 'Become an Experienced Java Developer with Just One Course. Fully Updated with 100+ Coding Challenges!',
                 img: javaBootCamp,
                 href:'https://www.udemy.com/course/the-complete-java-development-bootcamp'
                },
          
          ];

          const rows = {
            'webdev':webCourses,
            'mobile':mobileCourses,
            'java':javaCourse
          }
        return(
            <div>
                <NavBar />                
                <Row field={rows[route]} />              
            </div>

        );
    }

export default Courses;