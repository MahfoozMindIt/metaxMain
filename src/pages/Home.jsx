import React, { Fragment } from 'react';
import b from '../assets/bullet.png';
import "../styles/home.css";
import Slider from '../components/Slider'

import pricingIcon from "../assets/pricingIcon.png"
import correctIcon from "../assets/correctIcon.png"
import banner from "../assets/videoBanner.mp4";
import Slider2 from "../components/slider2/Slider2"
import sectionFour from "../assets/sec4.png"
import sec6 from "../assets/sec6.png"
import timeline from "../assets/timelineHome.png"
import bulk from "../assets/bulk.png"
import one from "../assets/01.png"
import two from "../assets/02.png"
import three from "../assets/03.png"
import four from "../assets/04.png"
import map from "../assets/mapFinal.png"
import NavbarComponent from "../components/NavbarComponent"
import sec2Res from "../assets/sec2HomeRes.png"
import { TiTick } from "react-icons/ti";
import { FaNetworkWired } from 'react-icons/fa';
import { MdNoEncryptionGmailerrorred } from 'react-icons/md';
import { GiSmartphone } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { SiFsecure } from 'react-icons/si';
import Slider3 from '../components/slider2/Slider3';

const Home = () => {
  return (
    <div className='  flex flex-col items-center font-primary' style={{overflowX:"hidden"}}>
<div className='w-full relative  flex flex-col items-center bg-[#030B15] font-primary pb-32 '>
<video
    autoPlay
    muted
    loop
    playsInline
    className='w-full'
  >
    <source src={banner} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='absolute top-0 homeMain flex justify-center'>
<section className='w-[90%] widthHome  flex items-center flex-col py-5 text-white'>
         {/* navBar */}
        <NavbarComponent/>

{/* nabar ends */}
{/* banner section starts */}

<section className='flex w-full justify-between mt-24 bannerContent items-center'>
  <main className='w-full flex justify-center flex-col items-center gap-20'>
<h1 className='text-8xl w-[80%] font-bold text-center leading-27 mainHeading'>
Global Payment Solutions for Business Owners
</h1>
<div className='flex items-center gap-32 tracking-wider text-secondary text-3xl'>
  
<ul className='flex flex-col gap-5'>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>Payouts</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>Collection accounts</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>vIBANs</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>FX</li>
</ul>
<ul className='flex flex-col gap-5'>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>EUR SEPA INST and SEPA CT</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>GBP FPS, BACS, CHAPS</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>USD ACH, Fedwire, SWIFT</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>AED Dirham Accounts</li>
</ul>
</div>
<div className='flex gap-20'>
  
<button className='bg-primary h-16 w-52 rounded text-xl font-light  '>Open Account</button>
<button className='bg-transparent border-2 border-primary  tracking-wider text-xl rounded h-16 w-52'>Learn More</button>
</div>
  </main>
</section>
    
    </section>
</div>
    <div className=' border-t-white border-t-4 border-r-4 border-l-4 rounded-3xl   regulateWidth  text-white  w-[65%] absolute -bottom-25'>
      <div className=' w-full   sec2 rounded-3xl flex items-center justify-center flex-col gap-6 py-14'>
<h2 className='text-6xl text-center font-bold'>We’re Regulated & Authorized</h2>
<p className='text-xl font-light'>Want to setup a call with one of our experts?</p>
<button className='bg-white text-black font-medium py-2 px-16 rounded'>Book Now</button></div>

    </div>
</div>
{/* last section */}
<section className='w-[90%] flex widthHome  justify-center  items-center  pb-44 pt-72'>
{/* 1st part */}
<section className='flex  items-center relative w-[50%] justify-center'>
<div className='h-[200px] w-[200px] -left-3 absolute rounded-full sec2 text-white font-bold flex flex-col justify-center items-center p-10'>
<h2 className='text-3xl'>Why</h2>
<h2 className='text-3xl'>Choose</h2>
<h2 className='text-3xl'>Us</h2>
</div>
<div className='h-[600px] w-[600px] rounded-full bg-[#E1E1E1]  font-bold flex flex-col gap-6 justify-center items-center p-24'>
<h2 className='text-4xl leading-12'>Meet All Your Business
Needs with Metax</h2>
<p className='opacity-[0.7] leading-7 font-light'>Now, Metax offers a range of payment solutions tailored to the specific needs of today's businesses, helping them simplify their financial operations and focus on growth. This provides you with access to a comprehensive set of financial tools for easy cash flow management:</p>
</div>


</section>
{/* 2nd part */}
<section className='w-[50%]  flex flex-col gap-20  '>

{/* 1st div */}
<div className='w-full flex justify-start'>
  <div className='w-[50%] flex gap-5'>
    <div className='bg-[#371B4B] w-fit h-fit p-3 text-4xl rounded-full text-white'><FaNetworkWired /></div>
    <div className='flex flex-col gap-3'>
      <h3 className='text-primary font-bold text-2xl'>
      Fully digital
      </h3>
      <p>
      The registration of business start-up accounts and onboarding process is fully digital, from anywhere in the world.
      </p>
    </div>
  </div>
</div>

{/* 2nd div */}
<div className='w-full flex justify-center'>
<div className='w-[50%] flex gap-5'>
    <div className='bg-[#371B4B] w-fit h-fit p-4 text-3xl rounded-full text-white'><SiFsecure /></div>
    <div className='flex flex-col gap-3'>
      <h3 className='text-primary font-bold text-2xl'>
      Secured
      </h3>
      <p>All funds are secured so your capital is always fully protected.
      </p>
    </div>
  </div>
</div>

{/* 3rd div */}
<div className='w-full flex justify-center'>
<div className='w-[50%] flex gap-5'>
    <div className='bg-[#371B4B] w-fit h-fit p-3 text-4xl rounded-full text-white'><GiSmartphone /></div>
    <div className='flex flex-col gap-3'>
      <h3 className='text-primary font-bold text-2xl'>Mobile
      </h3>
      <p>Ability to make payments, export transaction history, and more on the go using the iOS/android app or your smartphone browser
      </p>
    </div>
  </div>
</div>
{/* 3rd div */}
<div className='w-full flex justify-start'>
<div className='w-[50%] flex gap-5'>
    <div className='bg-[#371B4B] w-fit h-fit p-3 text-4xl rounded-full text-white'><GrSecure /></div>
    <div className='flex flex-col gap-3'>
      <h3 className='text-primary font-bold text-2xl'>Secure software
      </h3>
      <p>The most secure software, developed by professionals according to ISO 9001:2015 and ISO/IEC 27001:2013.
      </p>
    </div>
  </div>
</div>
{/* \\\\\\\\\\\\\\\.divs ends .......//././../////////... */}
</section>
{/* section ends /......... */}
  </section>
{/* last section ends ....*/}

{/* 3rd section currencies we suppport */}
<main className='flex justify-center w-full sec3 mb-44'>
<div className='flex justify-center  py-20 bg-[rgba(0,0,0,0.3)] '>
<section className='w-full thirdSecHome flex flex-col  text-white items-center justify-between py-16'>

<div className='w-full flex justify-center flex-col items-center'>
  <span className='text-primary text-2xl pb-5 uppercase font-semibold'>Supported Currency</span>
  <div >
    
  <h2 className='text-8xl font-semibold pb-5'>Currencies We Support</h2>
  </div>
 <div className='w-full flex justify-center pt-10 flex-col items-center gap-10'>
  <Slider2/>
  <Slider3/>
 </div>
<div className='flex gap-20 pt-20'>
  
<button className='bg-primary h-16 w-52 cursor-pointer rounded text-xl font-light  '>Open Account</button>
<button className='bg-transparent border-2 cursor-pointer border-primary  tracking-wider text-xl rounded h-16 w-52'>Learn More</button>
</div>
</div>

</section>
</div>
</main>
{/* 3rd section currencies we suppport ends... */}

{/* 4rth section one iban for all */}
<section className='w-[80%] widthHome2 flex items-center flex-col pb-44  '>
  <h2 className='text-8xl font-bold'>One <span className='text-primary '>IBAN</span>  for All </h2>
  <p className='pt-4 text-xl font-light'>One IBAN for all your business needs—seamless transactions, global reach</p>
  {/* carosel */}
  <div className='w-full flex justify-center'>
  <Slider/>
  </div>
  {/* carosel ends here ........*/}
  
  
</section>
{/* 4rth section one iban for all ends....... */}

{/* 5th section bulk payments */}
<main className='w-full flex justify-center  sec6 mb-44'>
<section className='w-[90%] flex widthHome bulkPaySec text-white items-center justify-between  '>
  
  <div id='sec5' className='sec5 h-[900px] w-[1300px] bulkPaySecDiv1 flex justify-center relative items-center'>
  <img src={bulk} alt="" className='h-[300px] animate-bounce absolute top-[250px]'/>
  </div>
  <div className='w-[50%] bulkPaySecDiv2'>
    <span className='text-primary uppercase font-semibold'>Bulk Payments</span>
    <h2 className='text-6xl  text-center xl:text-start font-semibold pb-5 pt-2'>Simplify Bulk Payments for Your Global Workforce</h2>
    <p className='pb-10 text-center xl:text-start w-[85%]'>Managing payments for a large, distributed team doesn’t have to be complicated. With Metax Payments, you can effortlessly process bulk payments to employees, contractors, and partners worldwide.</p>
    
  <ul className='flex flex-col gap-5 pb-10'>
    <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>Efficient, Scalable, and Cost-Effective
  </li>
    <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
  
    Empower Your Business with Seamless Payments</li>
    <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
    
  One Platform, Endless Possibilities</li>
  </ul>
  <div className='flex gap-5'>
    
<button className='bg-white py-2 px-5  rounded w-fit text-black  font-medium'>Open Account</button>
  <button className='bg-primary ml-5 py-2 px-5 rounded w-fit text-white'>Learn More</button>
  </div>
  </div>
  
  </section>
</main>
{/* 5th section currencies we suppport ends... */}
{/* section6 get your own UAE */}




{/* section6 get your own UAE ends ....*/}

<section className='w-[90%] bg-[#E5DAEB] flex widthHome lg:flex-row flex-col  justify-between p-20  rounded-xl mb-44'>
  {/* 1st main div */}
  <div className='flex flex-col gap-16 lg:w-[50%] w-full'>
  <div className='flex flex-col gap-3'>
  <h3 className='text-5xl font-semibold'>Get Your Own UAE</h3>
    <h2 className='font-bold text-primary text-7xl'>Dirham (AED) IBAN </h2>
    <h3 className='text-5xl font-semibold'>

Now Available Worldwide!
    </h3>
  </div>
  <div className='flex flex-col gap-5 opacity-[0.7] w-[85%] text-[18px]'>
<p>
Expand your financial reach with a dedicated AED IBAN, designed for businesses and individuals seeking <span className='text-primary font-semibold'>fast, cost-effective,</span> and <span className='text-primary font-semibold'>seamless international transactions.</span>

</p>
<p>
  
With our multi-currency account, you can settle payments in <span className='text-primary font-semibold'>50+ currencies</span> across <span className='text-primary font-semibold'>33 countries</span>, simplifying cross-border banking like never before.
</p>
  </div>
  
<div className='flex gap-10'>
  
  <button className='bg-primary h-14 w-48 rounded text-[18px]  text-white  '>Open Account</button>
  <button className='bg-transparent border-2 border-primary text-[18px] text-primary font-semibold tracking-wider text-xl rounded h-14 w-48'>Learn More</button>
  </div>
</div>
{/* 2nd main div */}
<div className='lg:w-[50%] w-full flex justify-center'>
  
<div className='bg-primary p-10 text-white rounded-xl w-[70%] relative'>
<span className='font-light px-7 py-2 rounded-xl bg-[#986DAF] top-5 right-5 text-white absolute text-sm'>
  POPULAR
</span>

<div className='flex items-center gap-5'>
  <div className='bg-white p-4 rounded-xl w-fit'>
    <img src={pricingIcon} alt="" />
  </div>
  <p className='font-medium text-xl'>Starter</p>
</div>
<p className='opacity-[0.7] font-light py-7 text-sm'>
For startups & small businesses
</p>

<div>
  <h1 className='text-4xl font-semibold'>AED 99 <span className='text-[16px] opacity-[0.7] font-light py-7 '>/monthly</span></h1>
</div>
<p className='  py-7 text-sm'>
What’s included
</p>

<div className='flex flex-col leading-0'>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" className=''/><span className='opacity-[0.7] font-light text-[18px] py-7 '>43 currencies</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light text-[18px] py-7 '>Instant Payouts</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light text-[18px] py-7 '>Local AED Collections</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light text-[18px] py-7 '>Named Virtual IBAN AED</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light text-[18px] py-7 '>No monthly volume limit</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light text-[18px] py-7 '>Secure Virtual Accounts</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light text-[18px] py-7 '>Fast & Cost-Effective Transfers</span>
  </div>
  <div className='flex items-center gap-3 '>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light text-[18px] py-7 leading-7'>Additional currency account available in USD, GBP, EUR</span>
  </div>
</div>

  </div>
</div>
</section>


{/* 6th section */}
<section className='w-[90%] sec6 flex widthHome items-center justify-between  rounded-xl mb-44'>
  <div className='text-white sec6Home w-[50%] p-20'>
    <h2 className='text-5xl font-bold'>Cross-Border Payments to over <span className='text-primary'>50+</span> Countries</h2>
    <p className='pt-5 pb-10'>
    Metax Payments is integrated with international payment networks such as USD and SEPA, ensuring wide-reaching coverage and fast money transfers across 50% countries. You can enjoy the convenient process for smooth cross-border transactions, no matter your location or currency.

    </p>
    
<button className='bg-white py-3 px-5   rounded w-fit text-black text-xl font-medium'>Open Account</button>
  </div><div className='flex justify-center sec6HomeImg w-[50%] items-end h-full pt-32'>
    
  <img src={sec6} alt="" />
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default Home
