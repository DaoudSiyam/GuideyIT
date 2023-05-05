import React from "react";
import NavBar from "../../../../navbar/NavBar";
import Reserve from "./communityphotos/7jz nsha6.png";
import Apply from "./communityphotos/23tmad nsha6.png";
import Done from "./communityphotos/done activities.png";
import Login from "./communityphotos/log in.png";
import Main from './communityphotos/main page.png';

import './CommunityService.css'

const CommunitySerivce = () => {
    return(
        <>
        <NavBar />

        <div>
            <center>
            <img src={Login} className = "community-login" alt=""/>
    <h1 className="reg-text">
        يمكن الدخول إلى الموقع الرسمي لخدمة المجتمع الجامعة الأردنية عن طريق الذهاب إلى         
        https://eservices.ju.edu.jo/jucs/login.aspx
        <br></br> 
        <a href="https://eservices.ju.edu.jo/jucs/login.aspx"> أو انقر هنا</a>
    </h1>
                          <br></br>
                          <br></br>

    <img src={Main} className = "reg-images" alt=""/>
    <h1 className="reg-text">الصفحة الرئيسية لخدمة المجتمع الجامعة الأردنية</h1>
                          <br></br>
                          <br></br>

    <img src={Reserve} className = "reg-images" alt=""/>
    <h1 className="reg-text">يمكنك من هنا حجز الأنشطة</h1>
                          <br></br>
                          <br></br>
                          
    <img src={Apply} className = "reg-images" alt=""/>
    <h1 className="reg-text">يمكنك من هنا اعتماد الأنشطةالمنجزة</h1>
                          <br></br>
                          <br></br>
                                                    
    <img src={Done} className = "reg-images" alt=""/>
    <h1 className="reg-text">يمكنك من هنا اعتمادالخدمات المنجزة</h1>
                          <br></br>
                          <br></br>
            </center>
        </div>
        </>
    )
}

export default CommunitySerivce;