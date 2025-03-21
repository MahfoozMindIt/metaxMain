import React, { Fragment } from 'react';
import "../styles/home.css";
import ecom1 from "../assets/ecom1.png"
import CorRight from "../assets/CorRight.png"
import ecom3 from "../assets/ecom3.png"
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const Technology = () => {
  return (
    <div className='flex flex-col font-primary items-center'>
<div className='flex flex-col bg-[#030B15] w-full font-primary homeMain items-center pb-32'>
<section className='flex flex-col text-white w-[90%] items-center py-5 widthHome'>
         {/* navBar */}
        
<NavbarComponent/>
{/* nabar ends */}
{/* banner section starts */}

<section className='flex justify-center w-full pt-20'>
  <main className='flex flex-col w-[75%] gap-10'>
    <div>
        
    <p className='text-center text-xl font-semibold uppercase'>Multi-currency Accounts for </p>
<h1 className='text-7xl text-center font-bold leading-20'>TECH BUSINESSES
</h1>
    </div>
<div className='flex justify-center w-full'>
    
<p className='text-center w-[80%] opacity-[0.8]'>Flexible international payment solutions for the modern digital landscape.
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

{/* section starts here */}
<section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pt-44 widthHome xl:w-[70%]'>

<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>How we support the IT & SaaS companies</h1>
    
  </div></div>
  </section>



  
  {/* last section */}
  <section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pb-44 widthProductLess xl:w-[70%]'>
    
    <div className='grid grid-cols-3 gap-7 pt-28'>
  
  
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={onePurple} alt="" className='h-20 w-20 object-verntain'/>
  <h2 className='text-3xl text-center font-semibold'>Disburse salaries in over 50 countries.</h2>
  <p className='text-center font-light opacity-[0.7]'>Pay your remote IT teams, settle invoices, and cover expenses in 11 currencies with customized local payment solutions tailored to your needs.
  
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Offer IT services globally</h2>
  <p className='text-center font-light opacity-[0.7]'>Collect payments globally with no transaction limits, regardless of where you, your clients, or contractors are based. Effortlessly open business accounts and local IBANs to manage and track expenses.
  
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Expand outsourcing to emerging markets</h2>
  <p className='text-center font-light opacity-[0.7]'>Compensate top talent and pursue new contracts in developing economies. With the assistance of your personal Client Manager, you can rest assured that payment security and currency fluctuations will be expertly managed.
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
  
    </div>
  
  
  
  
  
    </section>
  {/* last section ends ....*/}

  <section className='flex justify-between rounded-xl w-full items-center lg:w-[85%] mb-44 md:w-[70%] sec6 widthHome'>
  <div className='flex flex-col justify-center p-20 text-white w-full items-center'>
    <h2 className='text-5xl text-center font-bold'>Ready to streamline your international payments?</h2>
    <p className='text-center text-xl font-light pb-10 pt-5'>Apply for an account in just 15 minutes

    </p>
    
<button className='bg-white rounded text-black text-xl w-fit font-medium px-5 py-3'>Sign Up</button>
  </div>
</section>

       </div>

  )
}

export default Technology;
