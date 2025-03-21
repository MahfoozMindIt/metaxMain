import React, { Fragment } from 'react';
import "../styles/home.css";
import importExport from "../assets/oilGas.png"
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const OilGas = () => {
  return (
    <div className='flex flex-col font-primary items-center'>
<div className='flex flex-col bg-[#030B15] w-full font-primary homeMain items-center pb-32'>
<section className='flex flex-col text-white w-[90%] items-center py-5 widthHome'>
         {/* navBar */}
        
<NavbarComponent/>
{/* nabar ends */}
{/* banner section starts */}

<section className='flex justify-center w-full pt-20'>
  <main className='flex flex-col w-[75%] gap-5'>
    <div>
        
    <p className='text-center text-xl font-semibold uppercase'>Business Accounts for  </p>
<h1 className='text-7xl text-center font-bold leading-20'>OIL & GAS
</h1>
    </div>
<div className='flex justify-center w-full pb-5'>
    
<p className='text-center w-[80%] opacity-[0.8]'>Multi-currency payment solutions for oil and gas companies
</p>
</div>

<div className='flex justify-center w-full gap-7'>
    
<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
</div>
  </main>
</section>
    
    </section>
</div>

<main className='flex justify-center w-full mt-44'>
    <section className='flex justify-between w-[70%] items-center widthProductLess'>
      
      <div className='flex flex-col w-[40%] gap-10'>
        <h1 className='text-5xl font-semibold leading-16'>The complete online cross-border payment solution
        </h1>
        <p>A trusted and secure online cross-border payment solution, ensuring fast, seamless, and compliant transactions. Empowering businesses with reliable financial infrastructure, transparent processes, and global connectivity for hassle-free international payments.
        </p>
        
<div className='flex gap-7'>
    
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
    </div>
      </div>
      <div className='w-[48%]'>
        
      <img src={importExport} alt="" className=''/>
      </div>
      
      </section>
    </main>

{/* section starts here */}
<section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pt-44 widthHome xl:w-[70%]'>

<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>How we support the Oil & Gas Sector</h1>
    
  </div></div>
  </section>



  
  {/* last section */}
  <section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pb-44 widthProductLess xl:w-[70%]'>
    
    <div className='grid grid-cols-3 gap-7 pt-28'>
  
  
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={onePurple} alt="" className='h-20 w-20 object-verntain'/>
  <h2 className='text-3xl text-center font-semibold'>Scale New Markets</h2>
  <p className='text-center font-light opacity-[0.7]'>Expand your reach by paying contractors in over 50 countries. Discover top talent and form strategic partnerships globally. Manage salaries, expenses, and taxes in 11 currencies using local banking details from a unified business account.
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Take Control of Cash Flow</h2>
  <p className='text-center font-light opacity-[0.7]'>Tap into emerging markets and operate with confidence. Purchase materials and manage global transactions while mitigating FX risk with competitive, locked-in rates and domestic collection accounts.
  
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Streamline Payment Processes</h2>
  <p className='text-center font-light opacity-[0.7]'>Benefit from customized client support with a dedicated Relationship Manager who understands the oil and gas industry. Our team provides tailored payment solutions designed to support and enhance your global operations.
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
  
    </div>
  
  
  
  
  
    </section>
  {/* last section ends ....*/}



  

  <section className='flex justify-between rounded-xl w-full items-center lg:w-[70%] mb-44 md:w-[70%] sec6 widthProductLess'>
  <div className='flex flex-col justify-center p-20 text-white w-full items-center'>
    <h2 className='text-4xl text-center font-semibold'>Ready to streamline your international payments?</h2>
    <p className='text-center text-xl font-light pb-10 pt-5'>Apply for an account in just 15 minutes

    </p>
    
<button className='bg-white rounded text-black text-xl w-fit font-medium px-5 py-3'>Sign Up</button>
  </div>
</section>

       </div>

  )
}

export default OilGas;
