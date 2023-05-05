import React from 'react';
import NavBar from "../../navbar/NavBar";
import './CollegeMaterials.css'
import Algo from './materialphotos/algo.png'
import AlgoBook from './materialphotos/algobook.png';
import CplusBook from './materialphotos/cplusbook.png';
import CplusDossier from './materialphotos/cplusdossier.png';
import Data1 from './materialphotos/data1.png';
import DiscreteDos from './materialphotos/discretedosier.png';
import DiscrteteBook from './materialphotos/discretebook.png';

const CollegeMaterials =  () => {
    return(
        <>
        <NavBar />
        <div className="text-collegematerials">
            <center>The college materials section will provide you information</center>
            <center>about all the needed information regarding course materials</center>
            <center>and with all the resoursces that you need for the courses</center>
        </div>
        

        <div className='cards-div'>
            <div>
            <div className='first-card'>
                <div className='first-resource'><center>ALGORITHMS RESOURCES</center></div>
                <div className='algo-card'>                    
                    <div className='dossier-section'>
                        <a href='https://drive.google.com/open?id=1jguoW9mR4vTGuLmbC1Cf9sHKN0GwR5mq&authuser=0&usp=drive_link'><img src={Algo} alt='Algo photo' className='algo-dossier'/></a>                        
                    </div>

                    <div className='book-section'>
                        <a href='https://drive.google.com/open?id=1vP3pMBDf4nzrsWb0VSpvWKaXW-RPx1qO&authuser=0&usp=drive_link'><img src={AlgoBook} alt='Algo photo' className="algo-book"/></a>                        
                    </div>                    
                </div>
            </div>
            </div>

            <div>
            <div className='first-card'>
                <div className='first-resource'><center>C++ RESOURCES</center></div>
                <div className='cplus-card'>                    
                    <div className='dossier-section'>
                        <a href='https://drive.google.com/open?id=1QLl7VnDlvgW-YezP7wetiQjgG4Pfjbjs&authuser=0&usp=drive_link'><img src={CplusDossier} alt='Algo photo' className='cplus-dossier'/></a>                        
                    </div>

                    <div className='book-section'>
                        <a href='https://drive.google.com/open?id=1rlqqkxpThHq9QeQ1F8t-SWUBq8OOBOZT&authuser=0&usp=drive_link'><img src={CplusBook} alt='Algo photo' className="algo-book"/></a>
                    </div>                    
                </div>
            </div>
            </div>
        </div>

        <div className='cards-div'>
            <div>
            <div className='first-card'>
                <div className='first-resource'><center>DATA STRUCTURES 1 RESOURCES</center></div>                
                <div className='algo-card'>                    
                    <div className='dossier-section'>
                        <a href='https://drive.google.com/open?id=1Z2aO6LwLBrmRJNi4TUrDMflYAAuk3zyt&authuser=0&usp=drive_link'><img src={Data1} alt='Algo photo' className='data1-dossier'/></a>                        
                    </div>

                    <div className='book-section'>
                    <a href='https://drive.google.com/open?id=1rlqqkxpThHq9QeQ1F8t-SWUBq8OOBOZT&authuser=0&usp=drive_link'><img src={CplusBook} alt='Algo photo' className="algo-book"/></a>
                    </div>                    
                </div>
            </div>
            </div>

            <div>
            <div className='first-card'>
                <div className='first-resource'><center>DISCRETE RESOURCES</center></div>                
                <div className='algo-card'>                    
                    <div className='dossier-section'>
                        <a href='https://drive.google.com/open?id=1BGpspL50AT5Td4wOoY7xCMSMhzaIe_pV&authuser=0&usp=drive_link'><img src={DiscreteDos} alt='Algo photo' className='algo-dossier'/></a>                        
                    </div>

                    <div className='book-section'>
                        <a href='https://drive.google.com/open?id=1OL054KXeRkd8A-ubbMmVBlZttlZeOZTO&authuser=0&usp=drive_link'><img src={DiscrteteBook} alt='Algo photo' className="algo-book"/></a>
                    </div>
                </div>                
            </div>
            </div>
        </div>

            
        </>
    )
}

export default CollegeMaterials;