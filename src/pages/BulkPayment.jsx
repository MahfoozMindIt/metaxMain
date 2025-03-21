import React, { Fragment, useState } from 'react';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import gbpRight from '../assets/gbpRight.png'
import threePurple from '../assets/03purple.png'
import fourPurple from '../assets/04 purple.png'
import fivePurple from '../assets/05purple.png'
import sixPurple from '../assets/06purple.png'
import NavbarComponent from '../components/NavbarComponent';
import { RiArrowDropDownLine } from 'react-icons/ri';

const BulkPayment = () => {
 

  return (
    <div className='flex flex-col font-primary items-center'>
<div className='flex flex-col bg-[#030B15] w-full font-primary homeMain items-center pb-32'>
<section className='flex flex-col text-white w-[90%] items-center py-5 widthHome'>
         {/* navBar */}
        
<NavbarComponent/>
{/* nabar ends */}
{/* banner section starts */}

<section className='flex justify-center w-full pt-20'>
  <main className='flex flex-col w-[55%] gap-10'>
<h1 className='text-7xl text-center font-bold leading-20'>
Bulk Payments
</h1>
<p className='text-center opacity-[0.8]'>With Metax, setting up a account for bulk payments is quick and simple, enabling you to process multiple transactions effortlessly. Our fully digital onboarding and verification process ensures a seamless and efficient experience.
</p>
<div className='flex justify-center gap-5'>
<button className='bg-primary rounded w-fit px-5 py-2'>Open Account</button>
<button className='bg-primary rounded w-fit px-5 py-2'>Learn More</button>
</div>
  </main>
</section>
    
    </section>
</div>




{/* last section */}
<section className=' w-[90%] widthHome flex-col flex items-center justify-between py-44



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-5xl text-center font-semibold leading-20'>Advantages of Opening a Sterling Account</h1>
    <p className='text-center w-[70%] font-light py-5'>Metax provides a variety of financial services, such as your personal IBAN, international payments, currency exchange, and more. Registering for a sterling business account is fast and straightforward, enabling you to effectively manage your finances.
    </p>
    
  </div></div>
  
  <div className='grid grid-cols-4 gap-5 pt-20'>


  <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={onePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-[25px] text-center font-semibold'>Efficient, Scalable, and Cost-Effective</h2>
<p className='text-center font-light opacity-[0.7]'>Our platform ensures that every payment is delivered quickly, accurately, and securely, no matter where your team is located.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-[25px] text-center font-semibold'>Seamless Money Transfers and Payment Management</h2>
<p className='text-center font-light opacity-[0.7]'>Metax Payments handle the complexities of bulk payments, so you can focus on what truly matters: driving your business forward.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-[25px] text-center font-semibold'>One Platform, Endless Possibilities</h2>
<p className='text-center font-light opacity-[0.7]'>Our user-friendly platform allows you to upload payment lists, schedule payouts, and track transactions—all from a single dashboard. Whether you’re paying employees, freelancers, or vendors, Metax Payments makes it simple to manage everything in one place.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center'>
<img src={fourPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-[25px] text-center font-semibold'>Pay in Local Currency, Every Time</h2>
<p className='text-center font-light opacity-[0.7]'>Metax Payments handles the complexities of cross-border transactions, so you don’t have to. With competitive exchange rates and low fees, you can pay your global workforce with confidence.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
   

  </div>





  </section>
{/* last section ends ....*/}





{/* 6th section */}
<section className='flex justify-between rounded-xl w-full items-center lg:w-[70%] mb-44 md:w-[70%] sec6 widthProductLess'>
  <div className='flex flex-col justify-center p-20 text-white w-full items-center'>
    <h2 className='text-5xl text-center font-bold leading-16'>Unlock more financial opportunities for your account with Metax's Bulk Payments</h2>
    <p className='text-center pb-10 pt-5'>Open a Sterling account and access a range of financial services from a single platform
    </p>
    
<button className='bg-white rounded text-black text-xl w-fit font-medium px-5 py-3'>Open Account</button>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default BulkPayment;
