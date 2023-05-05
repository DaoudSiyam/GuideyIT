import React from "react";
import NavBar from "../../../../navbar/NavBar";
import Login from './clinicphotos/log in.png';
import Main from './clinicphotos/main page.png';
import Reservations from "./clinicphotos/my 7joozat.png"
import clinic from "./clinicphotos/s7yeh.png"
import Teeth from "./clinicphotos/my 7joozat.png"


const Clinic = () => {
    return(
        <>
        <NavBar />

        <div className="reg-text">
            <center>Welcome to the clinic website manual</center>
            <center>JU is notorious for it's health services, especially for it's students</center>
            <center>one of the benefits of being a JU student is</center>
            <center>that you will be offered health care through your student health insurance</center>
            <center>below, we will provide all the information you need</center>
            <center>about regestering a reservation through the clinic website</center>
        </div>

        <div>
            <center>
                <img src={Login} className = "reg-images" alt=""/>
                <h1 className="reg-text">
                    يمكن الدخول إلى الموقع الرسمي للتسجيل الذاتي لعيادة الجامعة الأردنية عن طريق الذهاب إلى                 
                    https://eservices.ju.edu.jo/ClinicApp/
                    <br></br> 
                    <a href="https://eservices.ju.edu.jo/ClinicApp/"> أو انقر هنا</a>
                    <br></br>
                    <br></br>
                </h1>

                <img src={Main} className = "reg-images" alt=""/>
                <h1 className="reg-text">الصفحة الرئيسية لعيادة الجامعة الأردنية</h1>
                <br></br>
                <br></br>

                <img src={clinic} className = "reg-images" alt=""/>
                <h1 className="reg-text">يمكنك من هنا حجز مواعيد للعيادة الصحية</h1>
                <br></br>
                <br></br>
                          
                <img src={Teeth} className = "reg-images" alt=""/>
                <h1 className="reg-text">يمكنك من هنا حجز مواعيد لعيادة الأسنان</h1>
                <br></br>
                <br></br>
                                                    
                <img src={Reservations} className = "reg-images" alt=""/>
                <h1 className="reg-text">يمكنك من هنا الاستفسار عن حجوزاتك</h1>
                <br></br>
                <br></br>

            </center>
        </div>
        
        </>
    )
}

export default Clinic;