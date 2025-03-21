import React, { Fragment } from 'react';
import "../styles/home.css";
import importExport from "../assets/construction.png"
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const Construction = () => {
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
<h1 className='text-7xl text-center font-bold leading-20'>CONSTRUCTION
</h1>
    </div>
<div className='flex justify-center w-full pb-5'>
    
<p className='text-center w-[80%] opacity-[0.8]'>Multi-Currency payment solutions for construction, real estate, and property companies
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
        <h1 className='text-5xl font-semibold leading-16'>Reliable financial foundations
        </h1>
        <p>Building a reliable financial foundation for import and export businesses with secure, transparent, and globally connected solutions. Ensuring seamless transactions, optimized cash flow, and risk mitigation—empowering businesses with the stability and confidence needed to navigate the complexities of international trade.
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
    <h1 className='text-6xl text-center font-semibold leading-20'>How we support the Construction Sector</h1>
    
  </div></div>
  </section>



  
  {/* last section */}
  <section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pb-44 widthProductLess xl:w-[70%]'>
    
    <div className='grid grid-cols-3 gap-7 pt-28'>
  
  
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={onePurple} alt="" className='h-20 w-20 object-verntain'/>
  <h2 className='text-3xl text-center font-semibold'>Pay contractors in over 50 countries</h2>
  <p className='text-center font-light opacity-[0.7]'>Find top talent and partners globally. Pay local salaries, expenses, and taxes in 11 currencies using local banking details from a single business account
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Tap into emerging markets</h2>
  <p className='text-center font-light opacity-[0.7]'>Purchase materials and sell services globally with confidence. Trade like a local and safeguard against FX risk with fair, locked-in rates and domestic collection accounts.ns.
  
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Customized client support</h2>
  <p className='text-center font-light opacity-[0.7]'>Scale your operations with the support of a Relationship Manager who has expertise in the construction industry. Our team offers customized payment solutions tailored to wherever you do business.
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

export default Construction;
