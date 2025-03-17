import React, { Fragment } from 'react';
import logo from '../assets/Logo.png';
import "../styles/home.css";
import a1 from "../assets/a1.png"
import a2 from "../assets/a2.png"
import a3 from "../assets/a3.png"
import a4 from "../assets/a4.png"
import a5 from "../assets/a5.png"
import a6 from "../assets/a6.png"
import banner from "../assets/banner.png";
import sectionFour from "../assets/sec4.png"
import sec5Bg from "../assets/sec5Bg.png"
import sec6 from "../assets/sec6.png"
import timeline from "../assets/timeline.png"
import back from "../assets/back.png"
import bulk from "../assets/bulk.png"
import one from "../assets/01.png"
import two from "../assets/02.png"
import three from "../assets/03.png"
import four from "../assets/04.png"
import map from "../assets/map.png"
import { TiTick } from "react-icons/ti";

const Home = () => {
  return (
    <div className='  flex flex-col items-center font-primary'>
<div className='w-full homeMain flex flex-col items-center bg-[#030B15] font-primary h-[85vh] relative'>
<section className='w-[90%] widthHome flex items-center flex-col py-5 text-white'>
         {/* navBar */}
         <nav className='flex justify-between items-center w-full '>
<img src={logo} alt="" className=''/>
<ul className='flex items-center gap-10'>
    <li>Home</li>
    <li>Business</li>
    <li>Personal</li>
    <li>Blog</li>
    <li>Contact Us</li>
    
</ul>

<div className='flex items-center gap-7'>
    <button className='bg-primary py-2 px-5 rounded'>Login</button>
    <button className='bg-white text-primary font-medium py-2 px-5 rounded'>Sign Up</button>
</div>
</nav>

{/* nabar ends */}
{/* banner section starts */}

<section className='flex w-full justify-between pt-20 items-center'>
  <main className='w-[50%] flex flex-col gap-10'>
<h1 className='text-6xl font-bold leading-18'>
Global Payment Solutions for Business Owners
</h1>
<div className='flex items-center gap-20'>
  
<ul className='flex flex-col gap-3'>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>Payouts</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>Collection accounts</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>vIBANs</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>FX</li>
</ul>
<ul className='flex flex-col gap-3'>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>EUR SEPA INST and SEPA CT</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>GBP FPS, BACS, CHAPS</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>USD ACH, Fedwire, SWIFT</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>AED Dirham Accounts</li>
</ul>
</div>
<button className='bg-primary py-2 px-5 rounded w-fit '>Open Account</button>
  </main>
  <main className='w-[47%] flex justify-center'>
<div className=''>
<img src={banner} alt="" />
</div>
  </main>
</section>
    
    </section>
    <div className='bg-primary flex items-center justify-center flex-col gap-3 py-7 text-white rounded-xl w-[65%] absolute -bottom-30'>
<h2 className='text-4xl font-bold'>We’re Regulated & Authorized</h2>
<p>Want to setup a call with one of our experts?</p>
<button className='bg-white text-black font-medium py-2 px-5 rounded'>Book Now</button>

    </div>
</div>

{/* 2nd section one iban for all */}
<section className='w-[80%] widthHome2 flex items-center flex-col pb-44 pt-52 '>
  <h2 className='text-6xl font-bold'>One <span className='text-primary '>IBAN</span>  for All </h2>
  <p className='pt-4'>One IBAN for all your business needs—seamless transactions, global reach</p>
  <div className='grid grid-cols-3 gap-10 pt-14'>
<div className='flex flex-col items-center justify-center gap-5 p-5 border-primary border-[1px] rounded hover:scale-[1.1] hover:rotate-12 transition-all duration-500 hover:bg-primary hover:text-white'>
  <img src={a1} alt="" />
  <h3 className='text-3xl font-semibold'>Fast and Reliable</h3>
  <p className='text-center'>Expand into new global markets with ease using our fast and reliable payment solutions.</p>

</div>
<div className='flex flex-col items-center justify-center gap-5 p-5 border-primary border-[1px] rounded  hover:scale-[1.1] hover:rotate-12 transition-all duration-500 hover:bg-primary hover:text-white'>
  <img src={a2} alt="" />
  <h3 className='text-3xl font-semibold'>11 Major Currencies</h3>
  <p className='text-center'>Effortlessly receive and hold funds in 11 major currencies, offering you the flexibility to operate internationally.</p>

</div><div className='flex flex-col items-center justify-center gap-5 p-5 border-primary border-[1px] rounded  hover:scale-[1.1] hover:rotate-12 transition-all duration-500 hover:bg-primary hover:text-white'>
  <img src={a3} alt=""/>
  <h3 className='text-3xl font-semibold'>Global Network</h3>
  <p className='text-center'>Increase your reach and improve your treasury management using our global network.</p>

</div><div className='flex flex-col items-center justify-center gap-5 p-5 border-primary border-[1px] rounded  hover:scale-[1.1] hover:rotate-12 transition-all duration-500 hover:bg-primary hover:text-white'>
  <img src={a4} alt="" />
  <h3 className='text-3xl font-semibold'>Over 50 Countries</h3>
  <p className='text-center'>Send payments to over 50 countries, unlocking new opportunities and building strong global partnerships</p>

</div><div className='flex flex-col items-center justify-center gap-5 p-5 border-primary border-[1px] rounded  hover:scale-[1.1] hover:rotate-12 transition-all duration-500 hover:bg-primary hover:text-white'>
  <img src={a5} alt="" />
  <h3 className='text-3xl font-semibold'>Optimal Financial Workflow</h3>
  <p className='text-center'>We're bridging access between traditional and innovative payment rails under the same platform to ensure an optimal financial workflow.</p>

</div><div className='flex flex-col items-center justify-center gap-5 p-5 border-primary border-[1px] rounded  hover:scale-[1.1] hover:rotate-12 transition-all duration-500 hover:bg-primary hover:text-white'>
  <img src={a6} alt="" />
  <h3 className='text-3xl font-semibold'>Fast Transfers</h3>
  <p className='text-center'>Enjoy same-day and next-business-day transfers that keep your business ahead.</p>

</div>

  </div>
</section>
{/* 2nd section one iban for all ends....... */}

{/* 3rd section currencies we suppport */}
<section className='w-[90%] flex widthHome items-center justify-between pb-44 '>
<div className='w-[50%]'>
  <span className='text-primary uppercase font-semibold'>Supported Currency</span>
  <h2 className='text-6xl font-semibold pb-5'>Currencies We Support</h2>
  <p className='pb-10 w-[85%]'>We support a diverse range of currencies, ensuring seamless, secure, and hassle-free global transactions for businesses and individuals worldwide.</p>
  <div className='flex justify-between'>
  
<ul className='flex flex-col w-[35%]  gap-5 text-sm'>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>Euro (EUR)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
UK Sterling (GBP)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
US Dollar (USD)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
  United Arab Emirates Dirham (AED)</li>
</ul>
<ul className='flex flex-col w-[35%] gap-5 text-sm'>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>Norwegian Krone (NOK)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
Swedish Krona (SEK)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
Swiss Franc (CHF)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
  Polish Zloty (PLN)</li>
</ul>
<ul className='flex flex-col gap-5 w-[35%] text-sm'>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>Czech Koruna (CZK)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
Romanian Leu (RON)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
Danish Krone (DKK)</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
  Hungarian Forint (HUF)</li>
</ul>
</div>
</div>

<img src={map} alt="" />
</section>
{/* 3rd section currencies we suppport ends... */}
{/* section4 get your own UAE */}
<section className='w-[90%] widthHome flex-col flex items-center justify-between pb-44 '>
<div className='w-full text-center'>
  <span className='text-primary text-center uppercase font-semibold'>Get Your Own UAE</span>
  <h2 className='text-6xl text-center font-semibold pb-5'>
  Dirham (AED) IBAN Now Available Worldwide!</h2><div className=' w-full flex justify-center'>
    <p className='text-center w-[70%]'>Expand your financial reach with a dedicated AED IBAN, designed for businesses and individuals seeking fast, cost-effective, and seamless international transactions. With our multi-currency account, you can settle payments in 50+ currencies across 33 countries, simplifying cross-border banking like never before.</p>
  </div>
</div>
<main className='pt-28 flex items-center gap-44'>
  {/* 1st div */}
  <div className='flex flex-col gap-20  '>

    <div className='flex flex-col justify-center items-center gap-5 box p-5'>
<img src={one} alt="" className='h-16 w-16 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Fast & Cost-Effective Transfers</h2>
<p className='opacity-[0.7] font-light text-center'>
Experience seamless international transactions with competitive exchange rates and minimal fees, ensuring faster and more affordable money transfers worldwide.
</p>
    </div>
    <div className='flex flex-col justify-center items-center gap-5 box p-5'>
<img src={three} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Local AED Collections</h2>
<p className='opacity-[0.7] font-light text-center'>Easily collect and process AED payments locally with our efficient payment solutions, enabling businesses to operate smoothly in the UAE without currency conversion hassles.
</p>
    </div>

  </div>
  {/* 1st div ends ...*/}
  {/* img */}
  <img src={sectionFour} alt="" />
  {/* img */}
  {/* 2nd div */}
  <div className='flex flex-col gap-20  '>

    <div className='flex flex-col justify-center items-center gap-5 box p-5'>
<img src={two} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Secure Virtual Accounts</h2>
<p className='opacity-[0.7] font-light text-center'>Manage your global finances effortlessly with our secure multi-currency virtual accounts, designed to provide a safe and reliable way to send, receive, and store funds.
</p>
    </div>
    <div className='flex flex-col justify-center items-center gap-5 box p-5'>
<img src={four} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Instant Payouts</h2>
<p className='opacity-[0.7] font-light text-center'>Access your funds instantly with our rapid payout solutions, allowing businesses and individuals to receive money quickly and efficiently without unnecessary delays.
</p>
    </div>

  </div>
  {/* 2nd div ends ...*/}
</main>

</section>
{/* section4 get your own UAE ends ......*/}
{/* mini sec */}
<section className='w-[90%] widthHome flex-col flex items-center justify-between pt-32 '>
<div className='w-full text-center'>
 
  <h2 className='text-xl font-light pb-3'>No more waiting. No hidden fees. Just seamless global banking at your fingertips. </h2><div className=' w-full flex flex-col items-center justify-center gap-5'>
  <span className='text-primary text-2xl text-center uppercase font-extrabold'>
  Open Your AED IBAN Today!</span>
    <p className='text-center w-[70%] pb-5 font-light'>Expand your financial reach with a dedicated AED IBAN, designed for businesses and individuals seeking fast, cost-effective, and seamless international transactions. With our multi-currency account, you can settle payments in 50+ currencies across 33 countries, simplifying cross-border banking like never before.</p>
    
<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Open Account</button>
  </div></div></section>
{/* mini sec ends ....*/}




{/* 3rd section currencies we suppport */}
<section className='w-[90%] flex widthHome items-center justify-between  '>
  
<div id='sec5' className='sec5 h-[1300px] w-[1300px] flex justify-center relative items-center'>
<img src={bulk} alt="" className='h-[300px] animate-bounce absolute top-[400px]'/>
</div>
<div className='w-[50%]'>
  <span className='text-primary uppercase font-semibold'>Bulk Payments</span>
  <h2 className='text-6xl font-semibold pb-5 pt-2'>Simplify Bulk Payments for Your Global Workforce</h2>
  <p className='pb-10 w-[85%]'>Managing payments for a large, distributed team doesn’t have to be complicated. With Metax Payments, you can effortlessly process bulk payments to employees, contractors, and partners worldwide.</p>
  
<ul className='flex flex-col gap-5 pb-10'>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>Efficient, Scalable, and Cost-Effective
</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>

  Empower Your Business with Seamless Payments</li>
  <li className='flex gap-5 items-center'><span className='border-[2px] border-primary rounded-full bg-transparent p-1'><TiTick/></span>
  
One Platform, Endless Possibilities</li>
</ul>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>
</div>

</section>
{/* 5th section currencies we suppport ends... */}

{/* 6th section */}
<section className='w-[90%] sec6 flex widthHome items-center justify-between  rounded-xl mb-44'>
  <div className='text-white w-[50%] p-20'>
    <h2 className='text-5xl font-bold'>Cross-Border Payments to over <span className='text-primary'>50+</span> Countries</h2>
    <p className='pt-5 pb-10'>
    Metax Payments is integrated with international payment networks such as USD and SEPA, ensuring wide-reaching coverage and fast money transfers across 50% countries. You can enjoy the convenient process for smooth cross-border transactions, no matter your location or currency.

    </p>
    
<button className='bg-white py-3 px-5  rounded w-fit text-black text-xl font-medium'>Open Account</button>
  </div><div className='flex justify-center w-[50%] items-end h-full pt-32'>
    
  <img src={sec6} alt="" />
  </div>
</section>
{/* 6th section ends ...*/}

{/* last section */}
<section className='w-[90%] widthHome flex-col flex items-center justify-between pb-28 '>
<div className='w-full text-center'>
 
<span className='text-primary text-center uppercase text-xl font-semibold'>Why Choose Us</span>
  <h2 className='text-6xl font-bold pb-10 pt-5'>Meet All Your Business Needs with Metax </h2><div className=' w-full flex flex-col items-center justify-center gap-5'>
    <p className='text-center w-[60%] pb-5 font-light'>Now, Metax offers a range of payment solutions tailored to the specific needs of today's businesses, helping them simplify their financial operations and focus on growth. This provides you with access to a comprehensive set of financial tools for easy cash flow management:
    </p>
  </div></div>
  


<div className='py-32 pt-72 relative '>
  <img src={timeline} alt="" />
  <div className='flex flex-col justify-center  w-[400px] pt-10 gap-5 '>
    <div className='flex items-center gap-10'>
<img src={one} alt="" className='h-10 w-10 object-contain'/>
<h2 className='text-xl font-semibold text-center'>Fully digital</h2></div>
<p className='opacity-[0.7] font-light'>The registration of business start-up accounts and onboarding process is fully digital, from anywhere in the world
</p>
    </div>

    <div className='flex flex-col justify-center  w-[400px] pt-10 gap-5 absolute top-19 left-90'>
    <div className='flex items-center gap-10'>
<img src={two} alt="" className='h-10 w-10 object-contain'/>
<h2 className='text-xl font-semibold text-center'>Secured</h2></div>
<p className='opacity-[0.7] font-light'>All funds are secured so your capital is always fully protected.
</p>
    </div>
    <div className='flex flex-col justify-center  w-[400px] pt-10 gap-5 absolute bottom-32 left-200'>
    <div className='flex items-center gap-10'>
<img src={three} alt="" className='h-10 w-10 object-contain'/>
<h2 className='text-xl font-semibold text-center'>Mobile</h2></div>
<p className='opacity-[0.7] font-light'>Ability to make payments, export transaction history, and more on the go using the iOS/android app or your smartphone browser
</p>
    </div>
    
    <div className='flex flex-col justify-center  w-[400px] pt-10 gap-5 absolute top-19 left-300'>
    <div className='flex items-center gap-10'>
<img src={four} alt="" className='h-10 w-10 object-contain'/>
<h2 className='text-xl font-semibold text-center'>Secure software</h2></div>
<p className='opacity-[0.7] font-light'>The most secure software, developed by professionals according to ISO 9001:2015 and ISO/IEC 27001:2013.
</p>
    </div>
</div>



  </section>
{/* last section ends ....*/}


       </div>

  )
}

export default Home
