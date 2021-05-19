import React from 'react'
import ytbImg from '../style/ytb.png'

const Footer = () => {
    
    return ( 
        <div className='footer'>
            <p className='name'>Esrafil Elahi</p>
            <img src ={ytbImg} alt = "ytb logo" className="ytb-logo" />
            <p className='subfooter'>2021 - TURKIYE SCHOLARSHIPS</p>
        </div>
     );
}
 
export default Footer;