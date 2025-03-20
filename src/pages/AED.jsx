import React, { Fragment } from 'react';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const AED = () => {
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
AED Account
</h1>
<p className='text-center opacity-[0.8]'>Metax offers fast and secure AED (UAE Dirham) account setup with seamless digital onboarding. Effortlessly manage UAE local payment rails and consolidate all your corporate banking transactions in one centralized platform.
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
<section className='xl:w-[70%] lg:w-[80%] w-[90%] widthProductLess flex-col flex items-center justify-between py-52



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <p className='text-3xl text-center w-[80%] font-semibold italic pb-5'>It’s time to grow your business with simplicity and efficiency.
    </p>
    
  </div></div>
  
  <div className='grid grid-cols-3 gap-20 pt-28'>


  <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center'>
<img src={onePurple} alt="" className='h-20 w-20 object-verntain'/>
<h2 className='text-2xl text-center font-semibold'>Easy Control With Single Center</h2>
<p className='text-center font-light opacity-[0.7]'>International transactions are no longer difficult. Grow your business, manage all your transactions from a single center.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center'>
<img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Safe and Secure Account</h2>
<p className='text-center font-light opacity-[0.7]'>All transactions you make in your business are completely secure. Your account is safe with Metax.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center'>
<img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Money Transfer 
Between Businesses</h2>
<p className='text-center font-light opacity-[0.7]'>Enter B2B banking, where all business-to-business transactions are possible. Count on us to grow your business.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>

  </div>





  </section>
{/* last section ends ....*/}








{/* 6th section */}
<section className='flex justify-between rounded-xl w-full items-center lg:w-[70%] mb-44 md:w-[70%] sec6 widthProductLess'>
  <div className='flex flex-col justify-center p-20 text-white w-full items-center'>
    <h2 className='text-5xl text-center font-bold leading-16'>Unlock more financial opportunities for your business with <span className='text-primary'>Metax's AED</span> business account</h2>
    <p className='text-center pb-10 pt-5'>Talk directly to our dedicated banking expert to get your final offer

    </p>
    
<button className='bg-white rounded text-black text-xl w-fit font-medium px-5 py-3'>Open Account</button>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default AED;
