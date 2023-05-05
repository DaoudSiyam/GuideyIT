import React from 'react';
import NavBar from '../../../../navbar/NavBar';
import ErasmusLogo from './erasmusphotos/erasmus.png'
import Screenshot from './erasmusphotos/Screenshot.png'
import './Erasmus.css'



const Erasmus = () => {
    return(
        <>
        <NavBar />
        
        

        <center>
      <img className="erasmus-logo" src={ErasmusLogo} alt=""/>
        <h3 className='reg-text'>Erasmus Programme  <br></br>
        هو برنامج تعاون وتنقل في مجال التعليم
         العالي الذي يهدف إلى تحسين نوعية التعليم العالي الأوروبي <br/>
         وتعزيز الحوار والتفاهم بين الشعوب والثقافات من خلال التعاون مع البلدان الأخرى<br/> وبالإضافة إلى ذلك، فإنه
         يساهم في تنمية الموارد البشرية وقدرة التعاون الدولي من مؤسسات التعليم العالي<br/>
        في دول العالم الأخرى عن طريق زيادة التنقل بين الإتحاد الاوروبي وهذه الدول
        </h3>

        <h1 className='reg-text'>يمكنك الاستفسار أكثر عن الخدمة بالذهاب إلى </h1>
        <p className='reg-text'>
            <a href="https://offices.ju.edu.jo/en/oir/Lists/ErasmusPlus/AllUni.aspx/">
                https://offices.ju.edu.jo/en/oir/Lists/ErasmusPlus/AllUni.aspx
            </a>
        </p>
        <p className='reg-text'>
            حيث يمكنك أن تجد كل الأجوبة على استفساراتك المتعلقة بالخدمة
        </p>
        <img className='screenshot' src={Screenshot} alt=""/>
        <p className='reg-text'>
            Erasmus programme هنا يمكنك البحث عن الجامعات المشتركة ب
        </p>
      
      <select className='eras-select-bar'>
          <option>Sciences Po </option>
          <option>Catholic University of Leuven</option>
          <option>Charles University in Prague</option>
          <option>Bocconi University</option>
          <option>VU Amsterdam</option>
          <option>Stockholm School of Economics</option>
          <option>Yildiz Technical University</option>
          <option>London School of Economics and Political Science</option>
          <option>The Graduate Institute of International and Development Studies</option>
          <option>Hertie School</option>
          <option>University of Aegen</option>
          <option>National School of Political and Administrative Studies</option>
          <option>University of Lund</option>
          <option>University of Manchester</option>
          <option>Sofia University St. Kliment Ohridski</option>
          <option>Ruhr University Bochum</option>
          <option>Goethe University Frankfurt</option>
          <option>University of Granada</option>
          <option>University of Oviedo</option>
          <option>Lumière University Lyon 2 </option>
          <option>University of Bologna</option>
          <option>University of Padova</option>
          <option>Utrecht University</option>
          <option>Uppsala University</option>
          <option>University of York</option>
          <option>University Saint-Louis Brussels</option>
          <option>Humboldt University of Berlin</option>
          <option>New University Lisbon</option>
          <option>Eotvos Lorand University </option>
          <option>European University Institute</option>
          <option>University of Florence</option>
          <option>Ca' Foscari University of Venice</option>
          <option>University of Bazel </option>
          <option>Open University of Cyprus</option>
          <option>Roma Tre University</option>
          <option>Bielefeld University</option>
          <option>University of Barcelona</option>
          <option>University Pompeu Fabra</option>
          <option>Eötvös Loránd University</option>
          <option>University of Pavia</option>
          <option>Université de Neuchâtel </option>
          <option>George August University Göttingen</option>
          <option>LUISS University</option>
          <option>University of Turin</option>
          <option>Graduate School for Social Research</option>
          <option>School of Advanced Studies in Nova Gorica</option>
          <option>University of Bern</option>
          <option>University of Geneva</option>
          <option>University of Zurich</option>
          <option>Erfurt University</option>
          <option>Technical University of Kosice</option>
          <option>Erasmus University Rotterdam</option>
          <option>Catholic University of Louvain</option>
          <option>American University in Bulgaria </option>
          <option>UNIVERSITÉ PARIS- PANTHÉON-ASSAS</option>
          <option>Science Po</option>
          <option>Trinity College Dublin</option>
          </select>
    </center>
        </>
    )
}

export default Erasmus;