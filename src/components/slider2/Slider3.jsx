import React from 'react';
import './Slider3.css';
import i1 from "../../assets/AED.png"
import i2 from "../../assets/CHF.png"
import i3 from "../../assets/CZK.png"
import i8 from "../../assets/ROMANIZ.png"
import i11 from "../../assets/ZLOTY.png"
import i12 from "../../assets/dkk.png"

const Slider3 = () => {
  return (
    <div className="slider3">
      <div className="slider-track3 flex gap-[10px] lg:gap-[100px] lg:text-xl md:text-[16px] text-sm font-light ">
      <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i2} alt="" />
        <h1>Swiss Franc (CHF)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i11} alt="" />
        <h1>Polish Zloty (PLN)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'>    <img src={i3} alt="" />
        <h1>Czech Koruna (CZK)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i8} alt="" />
        <h1>Romanian Leu (RON)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'>   
       <img src={i12} alt="" />
    <h1>Danish Krone (DKK)
    </h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> 
        <img src={i1} alt="" />
<h1>United Arab Emirates Dirham (AED)
</h1></div>
 
     
      
        {/* Duplicate items for seamless looping */}  
        
        <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i2} alt="" />
        <h1>Swiss Franc (CHF)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i11} alt="" />
        <h1>Polish Zloty (PLN)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'>    <img src={i3} alt="" />
        <h1>Czech Koruna (CZK)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i8} alt="" />
        <h1>Romanian Leu (RON)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'>   
       <img src={i12} alt="" />
    <h1>Danish Krone (DKK)
    </h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> 
        <img src={i1} alt="" />
<h1>United Arab Emirates Dirham (AED)
</h1></div>
      </div>
    </div>
  );
};

export default Slider3;
