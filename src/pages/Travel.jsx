import React, { Fragment } from 'react';
import "../styles/home.css";
import travel1 from "../assets/travel1.png"
import travel3 from "../assets/travel3.png"
import travel2 from "../assets/travel2.png"
import NavbarComponent from '../components/NavbarComponent';

const Travel = () => {
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
        
    <p className='text-center text-xl font-semibold uppercase'>Business Accounts for </p>
<h1 className='text-7xl text-center font-bold leading-20'>TRAVEL & TOURISM
</h1>
    </div>
<div className='flex justify-center w-full'>
    
<p className='text-center w-[80%] opacity-[0.8]'>The ultimate online payment solution for travel companies.
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
        <h1 className='text-5xl font-semibold leading-16'>Designed for the travel and tourism industry
        </h1>
        <p>Empowering travel and tourism businesses with seamless, secure, and globally connected solutions, ensuring hassle-free transactions, effortless bookings, and enhanced customer experiences—designed to meet the unique needs of a dynamic and fast-paced industry.
        </p>
        
<div className='flex gap-7'>
    
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
    </div>
      </div>
      <div className='w-[48%]'>
        
      <img src={travel1} alt="" className=''/>
      </div>
      
      </section>
    </main>
{/* section starts here */}
<section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pt-44 widthHome xl:w-[70%]'>

<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>How we support the Travel & Tourism Industry</h1>
    
  </div></div>
  </section>



<section className='flex flex-col justify-center w-full items-center'>
  
  <main className='flex justify-between w-[90%] items-center py-32 widthHome'>
  <div className='flex justify-center w-[40%]'>
  <img src={travel2} alt="" />
  </div>
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>Manage expenses with your <br /> business accounts</h2>
    <p className='w-[85%] font-light pb-10'>Transact with travel partners globally. Pay local salaries, expenses, and taxes in 11 currencies using local banking details from a single business account.
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
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>Address FX risk <br /> head-on</h2>
    <p className='w-[75%] font-light pb-10'>With fair rates, real-time conversion, and a dedicated Relationship Manager, you can provide competitive services in emerging markets while safeguarding your margins.
  </p>
    
<div className='flex w-full gap-7'>
    
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
    </div>
  </div>
  <div className='flex justify-center w-[47%]'>
  <img src={travel3} alt="" />
  </div>
  </main>
  {/* 2nd section ends*/}

  
  </section>

  

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

export default Travel;
