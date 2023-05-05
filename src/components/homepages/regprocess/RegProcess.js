import React from "react";
import NavBar from "../../navbar/NavBar";


//      IMPORTED IMAGES SECTION         //
import Abscense from './abscense.png';
import Cancelled from './cancelled classes.png';
import ClassNotAvailable from './class not available.png';
import Clearance from './clearance.png';
import Closed from './closed classes.png';
import Ctraining from './course training.png';
import Ftraining from './field training.png';
import Main from './main page.png';
import Schedule from './schedule.png';
import Data from './student data.png';
import Information from './student information.png';
import Courses from './submitted courses.png';
import Total from './total 50.png';
import Trans from './transferable.png';
import Mtransfer from './transfer major.png';
//*************************************//


import './RegProcess.css';


const RegProcess = () => {
    return(
        <>
        <NavBar />

        <div className="reg-text">
            <center>Welcome to the registration manual page</center>
            <center>JU has it's own registration website, that you can</center>
            <center>register you courses through, fill your information for the university</center>
            <center>apply E-requests, take a look at your marks, etc ...</center>
            <center>below you will find a complete guide about the website</center>
            <center>that explains everything about it with sufficient knowledge</center>
        </div>

        <div className="margin-main-div">
          <center>  
                <img src={Main} className = "reg-images" alt=""/>
                <h1 className="reg-text">
                    يمكن الدخول إلى الموقع الرسمي للتسجيل الذاتي للجامعة الأردنية عن طريق الذهاب إلى 
                    <br></br>    
                    https://regapp.ju.edu.jo/selfregapp/home.xhtml
                    <br></br>
                    <a href="https://regapp.ju.edu.jo/selfregapp/home.xhtml"> أو انقر هنا</a>
                </h1>
                <br></br> 
                <br></br>   
                <img src={Abscense} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">
                    يمكنك هنا الاستطلاع عن الغيابات المترتبة عليك أثناء الفصل الدراسي                    
                    <br></br>
                </h1>
                <img src={Cancelled} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text"> يمكنك هنا الاطلاع على الشعب التي التغت</h1>
                <br></br>
                <img src={ClassNotAvailable} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">يمكنك هنا إلغاء طلب فتح الشعب</h1>
                <br></br>
                <img src={Clearance} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">يمكنك الاستطلاع عن خدمة براءة الذمة</h1>
                <br></br>
                <img src={Closed} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">يمكنك هنا الاستفسار عن طلبات الشعب المغلقة</h1>
                <br></br>  
                <img src={Ctraining} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">يمكنك هنا إيجاد نموذج التدريب الميداني</h1>
                <br></br>  
                <img src={Ftraining} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text"> يمكنك هنا إيجاد نموذج التدريب المتعلق بالدورات التعليمية بشرك أن تعادل 90 ساعة</h1>
                <br></br>  
                <img src={Schedule} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">الجدول الدراسي</h1>
                <br></br> 
                <img src={Data} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">معلومات الطالب الجامعية</h1>
                <br></br> 
                <img src={Information} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">بيانات الطالب الشخصية</h1>
                <br></br> 
                <img src={Courses} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">المواد المطروحة</h1>
                <br></br> 
                <img src={Total} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">المجموع من 50</h1>
                <br></br> 
                <img src={Trans} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">التخصصات التي يسمح لك الانتقال لها</h1>
                <br></br> 

                <img src={Mtransfer} className = "reg-images" alt=""/>
                <br></br>
                <h1 className="reg-text">نموذج الانتقال</h1>
                <br></br> 
          </center>
        </div>
        </>
    );
}

export default RegProcess;