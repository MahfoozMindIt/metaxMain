import React, { Fragment } from 'react';
import "../styles/home.css";
import ecom1 from "../assets/ecom1.png"
import CorRight from "../assets/CorRight.png"
import ecom3 from "../assets/ecom3.png"
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const Corporates = () => {
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
        
    <p className='text-center text-xl font-semibold uppercase'>Set up Business Accounts for </p>
<h1 className='text-7xl text-center font-bold leading-20'>YOUR CLIENTS
</h1>
    </div>
<div className='flex justify-center w-full'>
    
<p className='text-center w-[80%] opacity-[0.8]'>We make it easy to open local accounts for operating, investment, and holding entities.
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
        <h1 className='text-5xl font-semibold leading-12'>Secure global payment 
        solutions for your clients
        </h1>
        <p>security is our top Empower your clients with seamless, secure, and globally accessible payment solutions designed for fast, reliable, and hassle-free transactions—ensuring trust, efficiency, and convenience every step of the way.priority.
        </p>
        
<div className='flex gap-7'>
    
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
    </div>
      </div>
      <div className='w-[48%]'>
        
      <img src={CorRight} alt="" className=''/>
      </div>
      
      </section>
    </main>
{/* section starts here */}
<section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pt-44 widthHome xl:w-[70%]'>

<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>A payment platform designed  with purpose.</h1>
    
  </div></div>
  </section>



<section className='flex flex-col justify-center w-full items-center'>
  
  <main className='flex justify-between w-[90%] items-center py-32 widthHome'>
  <div className='flex justify-center w-[40%]'>
  <img src={ecom1} alt="" />
  </div>
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>Open a client account in days, <br /> not weeks.</h2>
    <p className='w-[85%] font-light pb-10'>Easily create local client-named accounts all through a fully digital onboarding process.
  </p>
    
<div className='flex w-full gap-7'>
    
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
    </div>
  </div>
  </main>


  {/* 2nd section */}
  <main className='flex justify-between w-[90%] items-center pb-44 widthHome'>
  
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>International Payments: Leverage global banking infrastructure and payment networks.</h2>
    <p className='w-[85%] font-light pb-10'>Effortlessly receive and hold funds in 11 major currencies, offering you the flexibility to operate internationally. Send payments to over 50 countries, unlocking new opportunities and building strong global partnerships.
  </p>
    
<div className='flex w-full gap-7'>
    
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
    </div>
  </div>
  <div className='flex justify-center w-[47%]'>
  <img src={ecom3} alt="" />
  </div>
  </main>
  {/* 2nd section ends*/}

  
  </section>

  
  {/* last section */}
  <section className='xl:w-[70%] lg:w-[80%] w-[90%] widthProductLess flex-col flex items-center justify-between pb-44
  
  
  
  '>
  <div className='text-center w-full'>
   <div className='flex flex-col justify-center w-full gap-5 items-center'>
      <h2 className='text-5xl text-center w-[80%] font-semibold leading-16 pb-5'>The all-in-one online solution for Cross-Border payments.
      </h2>
      
    </div></div>
    
    <div className='grid grid-cols-3 gap-7 pt-28'>
  
  
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={onePurple} alt="" className='h-20 w-20 object-verntain'/>
  <h2 className='text-3xl text-center font-semibold'>Enhanced visibility</h2>
  <p className='text-center font-light opacity-[0.7]'>Real-time display of balances and transactions, along with customized reporting delivery.
  
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Empower your stakeholders</h2>
  <p className='text-center font-light opacity-[0.7]'>Create tailored user authorization levels to match existing signatory lists and policies.
  
  </p>
  
  <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
  
      </div>
      <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
  <img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
  <h2 className='text-3xl text-center font-semibold'>Expert support</h2>
  <p className='text-center font-light opacity-[0.7]'>Our experienced onboarding and client management team is committed to supporting your cross-border business growth.
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

export default Corporates;
