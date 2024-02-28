import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Telephone} from '../../node_modules/bootstrap-icons/icons/telephone.svg';
import { ReactComponent as Facebook} from '../../node_modules/bootstrap-icons/icons/facebook.svg';
import { ReactComponent as Globe}  from '../../node_modules/bootstrap-icons/icons/globe.svg';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-info '>
                <div className='text-center fw-bold'>
                    <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
                </div>
                <div className='d-flex flex-wrap justify-content-center footer-type'>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>CHEMICALS & PROCESS</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>POWER</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>WATER & WASTE WATER</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>OILS & GAS</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>PHARMA</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>SUGARS & DISTILLERIES</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>PAPER & PULP</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>MARINE & DEFENCE</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>METAL & MINING</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>FOOD & BEVERAGE</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>PETROCHEMICAL & REFINERIES</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>SOLAR</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>BUILDING</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>HVAC</div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px", borderRight: "2px solid red" }}>FIRE FIGHTING </div>
                    <div className="flex-item txt"style={{ marginRight: "8px", paddingRight: "8px"}}>AGRICULTURE & RESIDENTIAL</div>
                </div>
            </div>
            <div className='d-flex justify-content-around align-items-center footer-conatct' style={{ backgroundColor: "red" }}>
                <a href='#' style={{ color: "white",textDecoration:"none" }}><Telephone className="tele" />{" "}Toll free 1800{" "}200{" "}1234</a>
                <a href='#' style={{ color: "white",textDecoration:"none"  }}><Facebook className="face" />{" "}www.facebook.com/cripumps</a>
                <a href='#' style={{ color: "white",textDecoration:"none"  }}><Globe className="glob" />{" "}www.crigroups.com</a>
            </div>
        </div>
    )
}

export default Footer;
