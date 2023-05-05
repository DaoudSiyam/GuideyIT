import React, { useState } from "react";
import NavBar from "../../navbar/NavBar";
import "./GPA.css";

const GPA = () => {    
    const [previous, setPrevious] = useState({
        previousGPA : 0,
        creditedHours: 0,
    });


    let newGPA = 0;
    

    const [grades, setGrades] = useState({     
        grade1: 0,        
        grade2: 0,
        grade3: 0,
        grade4: 0,
        grade5: 0,
        grade6: 0,
        grade7: 0,
    });

    const [credits, setCredits] = useState({
        credit1: 0,
        credit2: 0,
        credit3: 0,
        credit4: 0,
        credit5: 0,
        credit6: 0,
        credit7: 0,
    });


    const handlePrevious = (event) => {
        let inputs = {[event.target.name] : event.target.value}
        setPrevious({...previous ,...inputs})        
    }

    const handleGrades = (event) => {
        let inputs = {[event.target.name] : event.target.value}
        setGrades({...grades ,...inputs})        
    }

    const handleCredits = (event) => {
        let inputs = {[event.target.name] : event.target.value}
        setCredits({...credits ,...inputs})        
    }


    const calculateGPA = () => {

        // GRADES .... TO .... FLOATING .... POINTS .... CONVERTOR
        for(let x in grades){
            if(!(0 <= grades[x] && grades[x] <= 4.00)){
                switch (grades[x]) {              
                    case "A":
                        grades[x] = 4.00;
                        break;
                    case "A-":
                        grades[x] = 3.75;
                        break;
                    case 'B+':
                        grades[x] = 3.50;
                        break;
                    case 'B':
                        grades[x] = 3.00;
                        break;
                    case 'B-':
                        grades[x] = 2.75;
                        break;
                    case 'C+':
                        grades[x] = 2.50;
                        break;
                    case 'C':
                        grades[x] = 2.00;
                        break;
                    case 'C-':
                        grades[x] = 1.75;
                        break;
                    case 'D+':
                        grades[x] = 1.50;
                        break;
                    case 'D':
                        grades[x] = 1.00;
                        break;
                    case 'D-':
                        grades[x] = 0.75;
                        break;
                    case 'F':
                        grades[x] = 0.00;
                        break;
                    default:
                        grades[x] = 0;                
                }
            }
        }
        console.log(grades);
        /****************************************/
        

        //TOTAL ..... Credits ..... CALCULATOR
        let totalCredits = 0;        
        for( let x in credits){
            totalCredits += parseInt(credits[x]);            
        }
        /***************************************/        
        console.log(totalCredits);
        
        //PREVIOUS .... OBJECT ... PARSING .... SECTION
        let parsedPrevGPA = parseFloat(previous.previousGPA);
        let parsedCreditedHours = parseInt(previous.creditedHours);
        /**************************************/        

        
        //TOTAL .... GPA .... CALCULATION .... SECTION
        let sumGradesCredits1 = grades.grade1 * credits.credit1 + grades.grade2 * credits.credit2 + grades.grade3 * credits.credit3;
        let sumGradesCredits2 = grades.grade4 * credits.credit4 + grades.grade5 * credits.credit5 + grades.grade6 * credits.credit6;
        let sumFinalGradesCredits = sumGradesCredits1 + sumGradesCredits2 + grades.grade7 * credits.credit7;
        console.log(sumFinalGradesCredits);
        
        let calculatedGPA = (( sumFinalGradesCredits + (parsedPrevGPA * parsedCreditedHours))/ (totalCredits + parsedCreditedHours)).toFixed(2);
        return(calculatedGPA);            
    }
        
    newGPA = calculateGPA();

    return (
        <>
        <NavBar />                

        <div className="gpa">
            <div className="gpa-head">
                Calculate GPA
            </div>

            <div className="gpa-body">
                <div className="calculated-gpa-div">
                    <center>
                        Your New GPA Is : {newGPA}
                    </center>
                </div>

                <div>
                    <input type='text' name="previousGPA" placeholder="GPA before this semester" className="text-box-gpa" onChange={ (event) => { handlePrevious(event) }}/>
                </div>

                <div>
                    <input type='text' name="creditedHours" placeholder="Credited Hours" className="text-box-gpa" onChange={ (event) => { handlePrevious(event) }}/>
                </div>

                <datalist id="grade">
                    <option value="A"/>
                    <option value="A-"/>
                    <option value="B+"/>
                    <option value="B"/>
                    <option value="B-"/>
                    <option value="C+"/>
                    <option value="C"/>
                    <option value="C-"/>
                    <option value="D+"/>
                    <option value="D"/>
                    <option value="D-"/>
                    <option value="F"/>
                </datalist>

                <datalist id="hours">
                    <option value="1"/>
                    <option value="2"/>
                    <option value="3"/>
                </datalist>

                <div className="material">
                    <div className="subject">
                        Course 1
                    </div>
                    
                    <div>
                        <input type="text" name="grade1" list="grade" placeholder="Grade" className="grade" onChange={ (event) => { handleGrades(event) }}/>
                    </div>

                    <div>
                        <input type="text" name="credit1" list="hours" placeholder="Hours" className="hours" onChange={ (event) => { handleCredits(event) }}/>
                    </div>
                </div>

                <div className="material">
                    <div className="subject">
                        Course 2
                    </div>
                    
                    <div>
                        <input type="text" name="grade2" list="grade" placeholder="Grade" className="grade" onChange={ (event) => { handleGrades(event) }}/>
                    </div>

                    <div>
                        <input type="text" name="credit2" list="hours" placeholder="Hours" className="hours" onChange={ (event) => { handleCredits(event) }}/>
                    </div>
                </div>

                <div className="material">
                    <div className="subject">
                        Course 3
                    </div>
                    
                    <div>
                        <input type="text" name="grade3" list="grade" placeholder="Grade" className="grade" onChange={ (event) => { handleGrades(event) }}/>
                    </div>

                    <div>
                        <input type="text" name="credit3" list="hours" placeholder="Hours" className="hours" onChange={ (event) => { handleCredits(event) }}/>
                    </div>
                </div>

                <div className="material">
                    <div className="subject">
                        Course 4
                    </div>
                    
                    <div>
                        <input type="text" name="grade4" list="grade" placeholder="Grade" className="grade" onChange={ (event) => { handleGrades(event) }}/>
                    </div>

                    <div>
                        <input type="text" name="credit4" list="hours" placeholder="Hours" className="hours" onChange={ (event) => { handleCredits(event) }}/>
                    </div>
                </div>

                <div className="material">
                    <div className="subject">
                        Course 5
                    </div>
                    
                    <div>
                        <input type="text" name="grade5" list="grade" placeholder="Grade" className="grade" onChange={ (event) => { handleGrades(event) }}/>
                    </div>

                    <div>
                        <input type="text" name="credit5" list="hours" placeholder="Hours" className="hours" onChange={ (event) => { handleCredits(event) }}/>
                    </div>
                </div>

                <div className="material">
                    <div className="subject">
                        Course 6
                    </div>
                    
                    <div>
                        <input type="text" name="grade6" list="grade" placeholder="Grade" className="grade" onChange={ (event) => { handleGrades(event) }}/>
                    </div>

                    <div>
                        <input type="text" name="credit6" list="hours" placeholder="Hours" className="hours" onChange={ (event) => { handleCredits(event) }}/>
                    </div>
                </div>

                <div className="material">
                    <div className="subject">
                        Course 7
                    </div>
                    
                    <div>
                        <input type="text" name="grade7" list="grade" placeholder="Grade" className="grade" onChange={ (event) => { handleGrades(event) }}/>
                    </div>

                    <div>
                        <input type="text" name="credit7" list="hours" placeholder="Hours" className="hours" onChange={ (event) => { handleCredits(event) }}/>
                    </div>
                </div>                
            </div>
        </div>
        
        </>
    )
}

export default GPA;