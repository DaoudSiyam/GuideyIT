import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../../navbar/NavBar";
import "./Eservices.css";

const Eservices = () => {
    let navigate = useNavigate();
    
    return(
        <>
        <NavBar />

        <div className="text-eservices">            
            <center>What service would you like to inquire about?</center>
        </div>

        <div className="mainbody-eservices">
            <div className="upper-part">
                <div className="community-service-div">
                    <button className="buttons" onClick={
                        () => {
                            navigate('/communityservice');
                        }
                    }>Community Service</button>
                </div>

                <div className="ju-clinic-div">
                    <button className="buttons" onClick={ () => {
                        navigate('/clinic');
                    }}>JU <br /> Clinic</button>
                </div>
            </div>

            <div className="lower-part">
                <button className="buttons" onClick={ () => {
                    navigate('/erasmus');
                }}>Erasmus Scholarship</button>
            </div>
        </div>
        </>
    )
}

export default Eservices;