import React from 'react';
import i4 from "../../assets/euro.png"
import i5 from "../../assets/gbp.png"
import i6 from "../../assets/huf.png"
import i7 from "../../assets/nok.png"
import i9 from "../../assets/SEK.png"
import i10 from "../../assets/usd.png"
import './Slider2.css';

const Slider2 = () => {
  return (
    <div className="slider">
      <div className="slider-track lg:text-xl font-light ">
       <div className='slidebg px-4 py-2 flex items-center gap-5 rounded-full border-1 border-primary'> <img src={i4} alt="" /> <h1>Euro (EUR)</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1  flex items-center gap-5 border-primary'> <img src={i10} alt="" />
       <h1>US Dollar (USD)</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i6} alt="" />
        <h1>Hungarian Forint (HUF)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'><img src={i5} alt="" />  <h1>
        UK Sterling (GBP)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i9} alt="" />  <h1>Swedish Krona (SEK)
       </h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i7} alt="" />
       <h1>Norwegian Krone (NOK)</h1></div>
       
 
     
      
        {/* Duplicate items for seamless looping */}  
        <div className='slidebg px-4 py-2 flex items-center gap-5 rounded-full border-1 border-primary'> <img src={i4} alt="" /> <h1>Euro (EUR)</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1  flex items-center gap-5 border-primary'> <img src={i10} alt="" />
       <h1>US Dollar (USD)</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i6} alt="" />
        <h1>Hungarian Forint (HUF)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'><img src={i5} alt="" />  <h1>
        UK Sterling (GBP)
</h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i9} alt="" />  <h1>Swedish Krona (SEK)
       </h1></div>
       <div className='slidebg px-4 py-2 rounded-full border-1 flex items-center gap-5 border-primary'> <img src={i7} alt="" />
       <h1>Norwegian Krone (NOK)</h1></div>
       
 
      </div>
    </div>
  );
};

export default Slider2;
