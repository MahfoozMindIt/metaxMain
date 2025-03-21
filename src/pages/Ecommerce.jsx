import React, { Fragment } from 'react';
import "../styles/home.css";
import ecom1 from "../assets/ecom1.png"
import ecom2 from "../assets/ecom2.png"
import ecom3 from "../assets/ecom3.png"
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const ApplePay = () => {
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
<h1 className='text-7xl text-center font-bold leading-20'>ONLINE BUSINESSES
</h1>
    </div>
<div className='flex justify-center w-full'>
    
<p className='text-center w-[80%] opacity-[0.8]'>Global payment solutions designed for the modern digital economy.
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
{/* last section */}
<section className='xl:w-[70%] lg:w-[80%] w-[90%] widthProductLess flex-col flex items-center justify-between py-52



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h2 className='text-5xl text-center w-[80%] font-semibold leading-16 pb-5'>The all-in-one online solution for Cross-Border payments.
    </h2>
    
  </div></div>
  
  <div className='grid grid-cols-3 gap-10 pt-28'>


  <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
<img src={onePurple} alt="" className='h-20 w-20 object-verntain'/>
<h2 className='text-3xl text-center font-semibold'>Sell locally, receive payments globally.</h2>
<p className='text-center font-light opacity-[0.7]'>Expand your reach by selling in any market and offering seamless multi-currency checkout options for local customers.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
<img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-3xl text-center font-semibold'>Increase conversion rates and margins.</h2>
<p className='text-center font-light opacity-[0.7]'>Effortlessly receive and hold funds in 11 major currencies, offering you the flexibility to operate internationally. Send payments to over 50 countries.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
<img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Solutions designed for the digital age</h2>
<p className='text-center font-light opacity-[0.7]'>Gain access to customized e-commerce payment services & collaborate with a dedicated Client Manager who understands your business needs.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>

  </div>





  </section>
{/* last section ends ....*/}


{/* section starts here */}
<section className='flex flex-col justify-between w-[90%] items-center lg:w-[80%] pt-10 widthHome xl:w-[70%]'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>How we support <br /> the Ecommerce Business</h1>
    
  </div></div>
  </section>



<section className='flex flex-col justify-center w-full items-center'>
  
  <main className='flex justify-between w-[90%] items-center py-32 widthHome'>
  <div className='flex justify-center w-[40%]'>
  <img src={ecom1} alt="" />
  </div>
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>Effortlessly expand into new markets</h2>
    <p className='w-[85%] font-light pb-10'>Sell on any marketplace with local IBANs in your company name. Collect customer payments, pay suppliers, and settle shipping costs in 11 currencies.
  </p>
    
<div className='flex w-full gap-7'>
    
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
    </div>
  </div>
  </main>


  {/* 2nd section */}
  <main className='flex justify-between w-[90%] items-center pb-32 widthHome'>
  
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>Gain control over your cash flow</h2>
    <p className='w-[85%] font-light pb-10'>Eliminate hidden fees that cut into your margins with free marketplace collections, instant multi-currency payouts, and same-day transfers to any linked accounts, all with no transaction limits.
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

  {/* 3rd section starts */}
  
  <main className='flex justify-between w-[90%] items-center pb-32 widthHome'>
  <div className='flex justify-center w-[40%]'>
  <img src={ecom2} alt="" className=''/>
  </div>
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>Simplify payment workflows</h2>
    <p className='w-[85%] font-light pb-10'>Work with a dedicated Relationship Manager specializing in e-commerce payments, manage multiple entities, suppliers, and marketplace accounts from a single dashboard, and scale your operations seamlessly.
  </p>
    
<div className='flex w-full gap-7'>
    
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>
    <button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>
    </div>
  </div>
  </main>
  {/* 3rd section ends */}
  
  </section>

  <section className='flex justify-between rounded-xl w-full items-center lg:w-[85%] mb-44 md:w-[70%] mt-24 sec6 widthHome'>
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

export default ApplePay;
