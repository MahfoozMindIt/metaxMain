import React, { Fragment, useState } from 'react';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import fourPurple from '../assets/04 purple.png'
import NavbarComponent from '../components/NavbarComponent';

const MobileApp = () => {
 

  return (
    <div className='flex flex-col font-primary items-center'>
<div className='flex flex-col bg-[#030B15] w-full font-primary homeMain items-center pb-32'>
<section className='flex flex-col text-white w-[90%] items-center py-5 widthHome'>
         {/* navBar */}
        
<NavbarComponent/>
{/* nabar ends */}
{/* banner section starts */}

<section className='flex justify-center w-full pt-20'>
  <main className='flex flex-col w-[80%] gap-10'>
<h1 className='text-7xl text-center font-bold leading-20'>
Seamless banking at your fingertips with our app
</h1>
<p className='text-center opacity-[0.8]'>Check your balance, make payments and manage your cards directly from your smartphone.
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
    <h1 className='text-5xl text-center font-semibold leading-20'>Banking in your pocket wherever you go</h1>
    <p className='text-center w-[50%] font-light opacity-[0.8] py-5'>With the MetaX app, you can easily meet all your daily banking needs – from checking your account balance to sending payments on the fly, and much more.
    </p>
    
  </div></div>
  
  <div className='grid grid-cols-4 gap-7 pt-20'>


  <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={onePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-[25px] text-center font-semibold'>Stay on top of your finances with a real-time payments list</h2>
<p className='text-center font-light opacity-[0.7]'>With a convenient interface, get the full picture by tracking all incoming and outgoing payments in real-time.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-[25px] text-center font-semibold'>Send payments effortlessly</h2>
<p className='text-center font-light opacity-[0.7]'>A colleague paid for your lunch? Get even immediately. With just a few taps, send money from any of your accounts.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-[25px] text-center font-semibold'>Manage your business and private cards</h2>
<p className='text-center font-light opacity-[0.7]'>Seamlessly access and manage all your Metax VISA Debit cards via the app. Check the card’s PIN, status, and validity, or freeze the card, if you need to.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center'>
<img src={fourPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-[25px] text-center font-semibold'>Get secure authentication</h2>
<p className='text-center font-light opacity-[0.7]'>The Metax app ensures secure and hassle-free authentication for logging in to your Online Banking system: receive an authentication code and easily approve it via the app.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
   

  </div>





  </section>
{/* last section ends ....*/}





{/* 6th section */}
<section className='flex justify-between rounded-xl w-full items-center lg:w-[70%] mb-44 md:w-[70%] sec6 widthProductLess'>
  <div className='flex flex-col justify-center p-20 text-white w-full items-center'>
    <h2 className='text-5xl text-center font-bold leading-16'>Unlock more financial opportunities for your account with Metax's App </h2>
    <p className='text-center pb-10 pt-5'>Download an App Now and access a range of financial services from a single platform
    </p>
    
<button className='bg-white rounded text-black text-xl w-fit font-medium px-5 py-3'>Open Account</button>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default MobileApp;
