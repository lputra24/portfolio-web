import React, {useState} from 'react';
import './navburger.scss';

const Navburger = () => {
    const [active,toggleActive] = useState(null);

    return (
        
        <div className={`nav-burger ${active ? "" : "reverse"}`} 
            onClick={()=>{active ? toggleActive(!active) : toggleActive(true)}}>
            <div className={`line1${active==null ? " no-animation" : ""}`}></div>
            <div className={`line2${active==null ? " no-animation" : ""}`}></div>
            <div className={`line3${active==null ? " no-animation" : ""}`}></div>
        </div>

    );
}

export default Navburger;