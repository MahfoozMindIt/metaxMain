import React, { Fragment } from 'react';
import "../styles/home.css";
import importExport from "../assets/realEstate.png"
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const RealEstate = () => {
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
<h1 className='text-7xl text-center font-bold leading-20'>REAL ESTATE
</h1>
    </div>
<div className='flex justify-center w-full pb-5'>
    
<p className='text-center w-[80%] opacity-[0.8]'>The ultimate global payment solution for real estate transactions.
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
        <h1 className='text-5xl font-semibold leading-16'>The Comprehensive Global Payment Solution for Real Estate
        </h1>
        <p>A secure and comprehensive global payment solution tailored for the real estate industry. Enabling seamless international transactions, transparent fund transfers, and financial stability—empowering real estate professionals with a reliable foundation for cross-border investments and property dealings.
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
    <h1 className='text-6xl text-center font-semibold leading-20'>How we support the Real Estate Sector</h1>
    
  </div></div>
  </section>



  
  {/* last section */}
  <section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pb-44 widthProductLess xl:w-[70%]'>
    
    <div className='grid grid-cols-3 gap-7 pt-28'>
  
  
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={onePurple} alt="" className='h-20 w-20 object-verntain'/>
  <h2 className='text-3xl text-center font-semibold'>Expand Your Market Reach </h2>
  <p className='text-center font-light opacity-[0.7]'>Seamlessly manage real estate transactions and investments in over 50 countries. Simplify cross-border property dealings by handling local taxes, fees, and currency conversions with ease, ensuring efficient processing and no transaction limits.
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Optimize Financial Management</h2>
  <p className='text-center font-light opacity-[0.7]'>Streamline your finances with our comprehensive platform. Monitor transactions, manage business accounts, automate reconciliation, and handle multi-currency payments effortlessly. Enhance your capital management with tailored trade finance and fixed currency exchange options.
  
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Enhance Global Operations</h2>
  <p className='text-center font-light opacity-[0.7]'>Protect your real estate investments from market fluctuations and FX risk. Confidently navigate emerging markets and scale your operations with bespoke payment solutions designed to meet the unique needs of the real estate industry.
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

export default RealEstate;


