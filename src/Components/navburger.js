import React, {useState} from 'react';
import './navburger.scss';

const Navburger = () => {
    const [active,toggleActive] = useState(null);

    return (
        <div>
        <div className={`nav-burger ${active ? "" : "reverse"}`} 
            onClick={()=>{active ? toggleActive(!active) : toggleActive(true)}}>
            <div className={`line1${active==null ? " no-animation" : ""}`}></div>
            <div className={`line2${active==null ? " no-animation" : ""}`}></div>
            <div className={`line3${active==null ? " no-animation" : ""}`}></div>
        </div>
        <div className={`navbar-mobile${active ? "" : " disabled"}`} >
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contact</a> </li>
            </ul>
        </div>
        </div>
    );
}

export default Navburger;