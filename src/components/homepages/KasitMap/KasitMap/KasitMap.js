import { useNavigate } from "react-router-dom";
import NavBar from "../../../navbar/NavBar";
import GFMap from '../assets/images/maps/GF-MAP.PNG';
import CISMap from '../assets/images/maps/CIS-MAP.PNG';
import CSMap from '../assets/images/maps/CS-MAP.PNG';
import BITMap from '../assets/images/maps/BIT-MAP.PNG';
import './KasitMap.css';
import Marker from '../assets/images/maps/MAP-PIN.png';
import { useState } from "react";
import Select, { components } from 'react-select';

const Group = (props) => (
    <div>
        <components.Group {...props} />
    </div>
);

const KasitMap = () => {
    const rooms = [
        {
            label: 'الطابق الارضي',
            options: [
                {
                    label: 'مختبر الدراسات العليا',
                    value: '01',
                    top: '23%',
                    left: '21%',
                    floor: 0,
                },
                {
                    label: 'IEEE',
                    value: '02',
                    top: '34%',
                    left: '15%',
                    floor: 0,
                },
                {
                    label: 'غرفة التحكم',
                    value: '03',
                    top: '45%',
                    left: '44%',
                    floor: 0,
                },
                {
                    label: 'مكتب المراقبة',
                    value: '04',
                    top: '44.5%',
                    left: '54%',
                    floor: 0,
                },
                {
                    label: 'قاعه 001',
                    value: '05',
                    top: '70.5%',
                    left: '79%',
                    floor: 0,
                },
                {
                    label: 'مختبر 001',
                    value: '06',
                    top: '68.5%',
                    left: '69%',
                    floor: 0,
                },
                {
                    label: 'مختبر 002',
                    value: '07',
                    top: '66.5%',
                    left: '61%',
                    floor: 0,
                },
                {
                    label: 'مدرج احمد اللوزي  ',
                    value: '08',
                    top: '60.5%',
                    left: '8.7%',
                    floor: 0,
                },
            ],
        },
        {
            label: 'الطابق الاول',
            options: [
                {
                    label: 'مختبر 101',
                    value: '1O1',
                    top: '48%',
                    left: '41%',
                    floor: 1,
                },
                {
                    label: 'قاعه 101',
                    value: '102',
                    top: '47%',
                    left: '55%',
                    floor: 1,
                },
                 {
                    label: 'مصلى النساء',
                    value: '103',
                    top: '35%',
                    left: '55.5%',
                    floor: 1,
                },
                {
                    label: 'حمام رجال',
                    value: '104',
                    top: '34%',
                    left: '38.5%',
                    floor: 1,
                },
                {
                    label: 'حمام النساء',
                    value: '105',
                    top: '40%',
                    left: '38.5%',
                    floor: 1,
                },
                {
                    label: 'مختبر البرمجة الابداعية',
                    value: '106',
                    top: '36%',
                    left: '17.5%',
                    floor: 1,
                },
                {
                    label: 'مختبر 104',
                    value: '107',
                    top: '25%',
                    left: '17.5%',
                    floor: 1,
                },
                {
                    label: 'قاعه 103',
                    value: '108',
                    top: '13%',
                    left: '17.5%',
                    floor: 1,
                },
                {
                    label: 'مختبر 103',
                    value: '109',
                    top: '11%',
                    left: '34.5%',
                    floor: 1,
                },
                {
                    label: 'مختبر 102',
                    value: '110',
                    top: '11%',
                    left: '43%',
                    floor: 1,
                },
                {
                    label: 'قاعه 102',
                    value: '111',
                    top: '13%',
                    left: '52%',
                    floor: 1,
                },
                {
                    label: 'مكاتب دكاترة ',
                    value: '112',
                    top: '48%',
                    left: '18%',
                    floor: 1,
                },



            ],
        },
        {
            label: 'الطابق الثاني',
            options: [
                {
                    label: 'مختبر 202',
                    value: '201',
                    top: '10%',
                    left: '43%',
                    floor: 2,
                },
                {
                    label: 'قاعه 202',
                    value: '202',
                    top: '11%',
                    left: '52%',
                    floor: 2,
                },
                {
                    label: 'مختبر 203',
                    value: '203',
                    top: '11%',
                    left: '35%',
                    floor: 2,
                },
                {
                    label: 'قاعه 203',
                    value: '204',
                    top: '12%',
                    left: '17%',
                    floor: 2,
                },
                {
                    label: 'مختبر 204',
                    value: '205',
                    top: '25%',
                    left: '18%',
                    floor: 2,
                },
                {
                    label: 'مختبر 205',
                    value: '206',
                    top: '37%',
                    left: '17.5%',
                    floor: 2,
                },
                {
                    label: 'مكاتب دكاترة',
                    value: '207',
                    top: '48%',
                    left: '17.5%',
                    floor: 2,
                },
                {
                    label: 'حمام رجال',
                    value: '208',
                    top: '34%',
                    left: '38%',
                    floor: 2,
                },
                {
                    label: 'حمام النساء',
                    value: '209',
                    top: '41%',
                    left: '38.5%',
                    floor: 2,
                },
                {
                    label: 'مختبر 201',
                    value: '210',
                    top: '48%',
                    left: '40.5%',
                    floor: 2,
                },
                {
                    label: 'قاعه 201',
                    value: '211',
                    top: '46.5%',
                    left: '55%',
                    floor: 2,
                },
                {
                    label: 'مصلى رجال',
                    value: '212',
                    top: '36%',
                    left: '55.5%',
                    floor: 2,
                },
            ],
        },
        {
            label: 'الطابق الثالث',
            options: [
                {
                    label: 'قاعه 303',
                    value: '301',
                    top: '9%',
                    left: '16%',
                    floor: 3,
                },
                {
                    label: '303 مختبر',
                    value: '302',
                    top: '7%',
                    left: '33%',
                    floor: 3,
                },
                {
                    label: '302 مختبر',
                    value: '303',
                    top: '7%',
                    left: '42%',
                    floor: 3,
                },
                {
                    label: '302 قاعه',
                    value: '304',
                    top: '9%',
                    left: '51%',
                    floor: 3,
                },
                {
                    label: 'مختبر 304',
                    value: '305',
                    top: '22%',
                    left: '15%',
                    floor: 3,
                },
                {
                    label: 'مختبر 305',
                    value: '306',
                    top: '34%',
                    left: '15%',
                    floor: 3,
                },
                {
                    label: 'مكاتب دكاترة',
                    value: '307',
                    top: '46%',
                    left: '17.5%',
                    floor: 3,
                },
                {
                    label: 'مختبر 301',
                    value: '308',
                    top: '45%',
                    left: '40%',
                    floor: 3,
                },
                {
                    label: 'قاعه 301',
                    value: '309',
                    top: '45%',
                    left: '54%',
                    floor: 3,
                },
                {
                    label: 'قاعه 301',
                    value: '310',
                    top: '33%',
                    left: '47%',
                    floor: 3,
                },
            ],
        },
    ]
    const maps = [
        GFMap,
        CSMap,
        CISMap,
        BITMap
    ];

    let navigate = useNavigate();
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [currentMap, setCurrentMap] = useState(0);

    const onRoomSelect = (value) => {
        setSelectedMarker(value);
        setCurrentMap(value?.floor)
    }

    return (
        <>
            <NavBar />

            <div className='text-gpa'>
                <center>KASIT MAP</center>                       
                <center>Through this page you are able to locate classrooms, labs and other facilities <br /> in Kasit collage by either searching for a class/lab number or browsing through a list.</center>
            </div>

            <div className="root-container">
                <Select options={rooms} styles={{
                    container:(baseStyles)=>({
                        ...baseStyles,
                        width:'50%',
                        marginBottom:'20px'
                    })
                }} onChange={onRoomSelect} components={{ Group }} />
                <div className="map-container">
                    <img
                        className="map"
                        src={maps[currentMap]}
                    />
                    {
                        selectedMarker && (
                            <img className="map-marker" src={Marker} style={{ top: selectedMarker?.top, left: selectedMarker?.left }} />
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default KasitMap;