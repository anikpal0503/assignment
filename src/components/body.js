import React from 'react'
import image2 from '../images/image2.png';
import image4 from '../images/image4.jpeg';
import image3 from '../images/image3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const Body=()=> {
  return (
    <div style={{borderBottom:"2px solid red"}}>
    <div className='row  body-container'>
        <div className='col-4 body-container-image' >
            <img className='image-2' src={image2} alt='required'/>
        </div>
        <div className='col-8 d-flex flex-column body-container-desc' >
            <div>
                <div className='desc-header fw-bold'>
                    <h6> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
                </div>
                <div className='desc-list'>
                    <ul className='list'>
                        <li >
                            <p>    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
                        </li>
                        <li>
                            <p>    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div  className='desc-image text-center' >
                <img className='image-4' src={image4} alt='required'/>
            </div>
            <div className='desc-footer' >
                <p>
                Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>
            </div>
        </div>
    </div>
    <div className='mt-3 body-2'>
        <div>
            <p className='fw-normal'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        </div>
        <div>
            <div className='text-center'>
            <img className='image-3' src={image3} alt='required'/>
            </div>
            <div className='text-center'>
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Body;