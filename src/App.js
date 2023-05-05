import React, {useState} from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoginForm from './signupAndLogin/login/loginform';
import Home from './components/homepages/Home';
import Account from './components/profile/Account';
import UpdateInfo from './components/profile/updateinfo/UpdateInfo';
import GPA from './components/homepages/gpa/GPA';
import StudyPlan from './components/studyplans/StudyPlan';
import Courses from './components/homepages/SelfStudy/Courses';
import SelfStudyCard from './components/homepages/SelfStudy/SelfStudyCard';
import CollegeMaterials from './components/homepages/collegematerials/CollegeMaterials';
import SelfStudy from './components/homepages/SelfStudy/SelfStudy';
import Eservices from './components/homepages/Eserivces/Eservices'
import RegProcess from './components/homepages/regprocess/RegProcess';
import KasitMap from './components/homepages/KasitMap/KasitMap/KasitMap';
import ErrorPage from './components/errospage';
import Forget1 from './signupAndLogin/validation/forget1';
import Signup from './signupAndLogin/signup/signup';
import CommunitySerivce from './components/homepages/Eserivces/Eservicescomponents/communityservice/CommunityService';
import Clinic from './components/homepages/Eserivces/Eservicescomponents/clinic/Clinic';
import Erasmus from './components/homepages/Eserivces/Eservicescomponents/erasmus/Erasmus';



// arrow left &#8592;
// arrow up &#8593;
// arrow right &#8594;
// arrow down &#8595;

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  
  onAuthStateChanged(auth, (currentUser) => {
    setCurrentUser(currentUser)
  });

  if(!currentUser)
    return (
      <Router>
        <Routes>
          <Route path = "/" element = {<LoginForm />}/>
          <Route path = "/signup" element = {<Signup />}/>
          <Route path = "/forget1" element = {<Forget1 />}/>          
          <Route path = "*" element = {<LoginForm />}/>
        </Routes>
      </Router>
      
    )
  return (
    <Router>
      <Routes>
        <Route path = "/account" element = {<Account />}/>
        <Route path = "/updateinfo" element = {<UpdateInfo />}/>
        <Route path = "/eservices" element = {<Eservices />}/>
        <Route path = "/communityservice" element = {<CommunitySerivce />}/>
        <Route path = "/clinic" element = {<Clinic />}/>
        <Route path = "/erasmus" element = {<Erasmus />}/>
        <Route path ="/home" element = {<Home />}/>
        <Route path ="/studyplan" element = {<StudyPlan />}/>
        <Route path ="/collegematerials" element = {<CollegeMaterials />}/>
        <Route path ="/selfstudy" element = {<SelfStudy />}/>
        <Route path ="/selfstudy/:route" element = {<SelfStudyCard />}/>
        <Route path ="/selfstudy/:route/courses" element = {<Courses />}/>
        <Route path ="/kasitmap" element = {<KasitMap />}/>
        <Route path ="/gpa" element = {<GPA />}/>
        <Route path ="/regprocess" element = {<RegProcess />}/>        
        <Route path ="*" element = {<ErrorPage />}/>
      </Routes>
    </Router>
    
  );
}

export default App;