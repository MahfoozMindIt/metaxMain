import React, { Fragment } from 'react';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const AED = () => {
  return (
    <div className='  flex flex-col items-center font-primary'>
<div className='w-full homeMain flex flex-col items-center bg-[#030B15] font-primary pb-32'>
<section className='w-[90%] widthHome flex items-center flex-col py-5 text-white'>
         {/* navBar */}
        
<NavbarComponent/>
{/* nabar ends */}
{/* banner section starts */}

<section className='flex w-full justify-center pt-20 '>
  <main className='w-[55%] flex flex-col gap-10'>
<h1 className='text-7xl text-center font-bold leading-20'>
AED Account
</h1>
<p className='opacity-[0.8] text-center'>Metax offers fast and secure AED (UAE Dirham) account setup with seamless digital onboarding. Effortlessly manage UAE local payment rails and consolidate all your corporate banking transactions in one centralized platform.
</p>
<div className='flex gap-5 justify-center'>
<button className='bg-primary py-2 px-5 rounded w-fit '>Open Account</button>
<button className='bg-primary py-2 px-5 rounded w-fit '>Learn More</button>
</div>
  </main>
</section>
    
    </section>
</div>
{/* last section */}
<section className='xl:w-[70%] lg:w-[80%] w-[90%] widthProductLess flex-col flex items-center justify-between py-52



'>
<div className='w-full text-center'>
 <div className=' w-full flex flex-col items-center justify-center gap-5'>
    <p className='text-center w-[80%] text-3xl pb-5 font-semibold italic'>It’s time to grow your business with simplicity and efficiency.
    </p>
    
  </div></div>
  
  <div className='grid grid-cols-3 gap-20 pt-28'>


  <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={onePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Easy Control With Single Center</h2>
<p className='opacity-[0.7] font-light text-center'>International transactions are no longer difficult. Grow your business, manage all your transactions from a single center.

</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>
    <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={twoPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Safe and Secure Account</h2>
<p className='opacity-[0.7] font-light text-center'>All transactions you make in your business are completely secure. Your account is safe with Metax.

</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>
    <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={threePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Money Transfer 
Between Businesses</h2>
<p className='opacity-[0.7] font-light text-center'>Enter B2B banking, where all business-to-business transactions are possible. Count on us to grow your business.
</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>

  </div>





  </section>
{/* last section ends ....*/}








{/* 6th section */}
<section className='lg:w-[70%] md:w-[70%] w-full sec6 flex widthProductLess items-center justify-between  rounded-xl mb-44'>
  <div className='text-white flex flex-col items-center justify-center p-20 w-full'>
    <h2 className='text-5xl font-bold text-center leading-16'>Unlock more financial opportunities for your business with <span className='text-primary'>Metax's AED</span> business account</h2>
    <p className='pt-5 pb-10 text-center'>Talk directly to our dedicated banking expert to get your final offer

    </p>
    
<button className='bg-white py-3 px-5  rounded w-fit text-black text-xl font-medium'>Open Account</button>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default AED;
