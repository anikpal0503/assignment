import React from "react";
import image1 from '../images/image1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header=()=>{
    return (
        <div className="d-flex justify-content-center align-items-center header">
            <div >
                <img className="image-1" src={image1} alt="required"/>
            </div>
            <div className="header-info">
                <h2 className="">C.R.I FLUID SYSTEMS</h2>
                <h5 className="text-center">Pumping trust, Worldwide</h5>
            </div>
        </div>
    );
}
export default Header;