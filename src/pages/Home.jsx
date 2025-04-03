import React, { Fragment } from 'react';
import b from '../assets/bullet.png';
import "../styles/home.css";
import Slider from '../components/Slider'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pricingIcon from "../assets/pricingIcon.png"
import correctIcon from "../assets/correctIcon.png"
import banner from "../assets/videoBanner.mp4";
import Slider2 from "../components/slider2/Slider2"
import sec6 from "../assets/sec6.png"
import bulk from "../assets/bulk.png"
import NavbarComponent from "../components/NavbarComponent"
import sec2Res from "../assets/sec2HomeRes.png"
import { TiTick } from "react-icons/ti";
import { FaNetworkWired } from 'react-icons/fa';
import { MdNoEncryptionGmailerrorred } from 'react-icons/md';
import { GiSmartphone } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { SiFsecure } from 'react-icons/si';
import Slider3 from '../components/slider2/Slider3';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  
  // Gsap
  useGSAP(() => {
    const tl = gsap.timeline();
    const tl2=gsap.timeline({
      scrollTrigger:{
  trigger:".section1",
  scroller:"body",
  start:"top 100%",
  end:"top 0%",
  
      }
    })
    const tl6=gsap.timeline({
      scrollTrigger:{
  trigger:".pricingSection",
  scroller:"body",
  start:"top 80%",
  end:"top 0%",
  
      }
    })
     const tl7=gsap.timeline({
      scrollTrigger:{
  trigger:".lastSec",
  scroller:"body",
  start:"top 80%",
  end:"bottom 0%"
      }
    })
  
    const tl3=gsap.timeline({
      scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 70%",
        // markers:true,
        end:"top 0",
        
            }
    })
    const tl4=gsap.timeline({
      scrollTrigger:{
        trigger:".sec3",
        scroller:"body",
        start:"top 80%",
        // markers:true,
        end:"top 0%"
            }
    })
    
    const tl5=gsap.timeline({
      scrollTrigger:{
        trigger:".section4",
        scroller:"body",
        start:"top 95%",
        // markers:true,
        end:"top 0%"
            }
    })
  
    tl.from('.bannerMainContent', {
      y: -30,
      opacity: 0,
      delay: 1,
      duration: 1,
      stagger:0.2
    },"anim"),
    tl.from('.bannerMainUl1',{
      x:-10,
      opacity:0,
      delay:1,
      duration:0.7,
    },"anim"),  tl.from('.bannermainUl2,.bannerButton',{
      x:10,
      opacity:0,
      delay:1,
      duration:0.7,
    },"anim"),
    tl3.from('.b1,.b2,.b3',{
      x:-20,
      opacity:0,
      delay:1,
      duration:0.5,
      delay:1,
      stagger:0.2
    }),
    tl3.from('.b4,.b7',{
      x:-100,
      opacity:0,
      delay:1,
      duration:0.5,
    },"sectionNo3"),tl3.from('.b5,.b6',{
      x:100,
      opacity:0,
      delay:1,
      duration:0.5
    },"sectionNo3"),
    tl4.from('.c1,.c2',{
      y:40,
      opacity:0,
      delay:3,
      duration:2,
      stagger:0.2
    }),
    tl2.from('.d7',{
      y:40,
      opacity:0,
      delay:1,
      duration:1,
      stagger:0.2
    }),
    tl2.from('.d1,.d2,.d3,.d4',{
      y:-40,
      opacity:0,
      delay:1,
      duration:0.5,
      stagger:0.2
    }),
    tl2.from('.d5,.d6',{
      y:40,
      opacity:0,
      delay:1,
      duration:1,
      stagger:0.2
    }),
    tl5.from('.e1,.e2',{
      y:40,
      opacity:0,
      delay:1,
      duration:1,
      stagger:0.2
    }),
    tl6.from('.f1,.f2,.f3,.f4,.f5,.f6,.f7,.f8,.f9,.f0',{
      y:-10,
      opacity:0,
      delay:0.5,
      duration:0.5,
      stagger:0.2
    }),
    tl6.from('.g0,.g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.g9',{
      x:40,
      opacity:0,
      delay:0.5,
      duration:0.2,
      stagger:0.2
    }),
    tl7.from('.h1,.h2,.h3',{
      x:-90,
      opacity:0,
      delay:1,
      duration:1.5,
      stagger:0.2
    },"myLastSec"),
    tl7.from('.h4',{
      x:90,
      opacity:0,
      delay:1,
      duration:1.5,
      stagger:0.2
    },"myLastSec")
  });
  //Gsap ends here



  return (
    <div className='  flex flex-col items-center font-primary' style={{overflowX:"hidden"}}>
<div className='w-full relative  flex flex-col items-center bg-[#030B15] font-primary pb-32 '>
<video
    autoPlay
    muted
    loop
    playsInline
    className='w-full backgroundVideo'
  >
    <source src={banner} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='absolute top-0 homeMain flex justify-center'>
<section className='md:w-[90%] w-[95%] widthHome   flex items-center flex-col py-5 text-white' style={{zIndex:"100000"}}>
         {/* navBar */}
        <NavbarComponent/>

{/* nabar ends */}
{/* banner section starts */}

<section className='flex w-full justify-between xl:mt-24 mt-10  bannerContent items-center'>
  <main className='w-full flex justify-center flex-col items-center lg:gap-7 gap-10 md:gap-5 xl:gap-20 ' style={{zIndex:"-1"}}>
<h1 className='xl:text-8xl text-4xl md:text-5xl lg:text-6xl lg:w-[80%] font-bold text-center bannerMainContent xl:leading-27 mainHeading'>
Global Payment Solutions for Business Owners
</h1>
<div className=' md:items-center w-[75%] xl:w-[60%] flex flex-col md:flex-row gap-5  md:gap-24 text-sm  lg:gap-32 tracking-wider text-secondary xl:text-3xl'>
  
<ul className='flex flex-col gap-5 bannerMainUl1'>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>Payouts</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>Collection accounts</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>vIBANs</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>FX</li>
</ul>
<ul className='flex flex-col gap-5 bannermainUl2'>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>EUR SEPA INST and SEPA CT</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>GBP FPS, BACS, CHAPS</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>USD ACH, Fedwire, SWIFT</li>
  <li className='flex gap-5 items-center'><span className=''><img src={b} alt="" /></span>AED Dirham Accounts</li>
</ul>
</div>
<div className='flex gap-5 md:gap-20 bannerButton'>
  
<button className='bg-primary xl:h-16 xl:w-52 h-10 w-40  rounded xl:text-xl font-light  '>Open Account</button>
<button className='bg-transparent border-2 border-primary  tracking-wider xl:text-xl rounded xl:h-16 xl:w-52 h-10 w-40 '>Learn More</button>
</div>
  </main>
</section>
    
    </section>
</div>
    <div className=' border-t-white section1 d7   border-t-4 border-r-4 border-l-4 rounded-xl   regulateWidth  text-white lg:w-[75%] w-[90%]  absolute lg:-bottom-36 -bottom-38 xl:-bottom-55'>
      <div className=' w-full  inner_regulateWidth  sec2 rounded-xl flex items-center justify-center flex-col gap-4 lg:gap-6 md:p-7 p-5 '>
<h2 className='xl:text-6xl text-2xl md:text-3xl lg:text-4xl text-center font-bold'> <span className='d1'>We’re</span> <span className='d2'>Regulated</span> <span className='d3'>&</span> <span className='d4'>Authorized</span> </h2>
<p className='lg:text-xl text-center font-light d5'>Want to setup a call with one of our experts?</p>
<button className='bg-white text-black font-medium py-2 px-16 rounded d6'>Book Now</button></div>

    </div>
</div>
{/* last section */}
<section className='w-[90%] section2 flex flex-col xl:flex-row widthHome  justify-center  items-center  pb-44 pt-72'>
{/* 1st part */}
<section className='flex flex-col xl:flex-row  items-center relative md:w-[80%] w-full justify-center'>
<div className='h-[200px] w-[200px] -top-24 b1 lg:-top-17 xl:-left-9 xl:top-55 absolute rounded-full sec2 text-white font-bold flex flex-col justify-center items-center p-10'>
<h2 className='text-3xl'>Why</h2>
<h2 className='text-3xl'>Choose</h2>
<h2 className='text-3xl'>Us</h2>
</div>
<div className='lg:h-[800px] lg:w-[800px] md:h-[600px] md:w-[600px] w-full rounded-xl md:rounded-full bg-[#E1E1E1]  font-bold flex flex-col gap-6 justify-center items-center md:p-24 p-5 py-36'>
<h2 className='lg:text-5xl text-4xl leading-12 b2'>Meet All Your Business
Needs with Metax</h2>
<p className='opacity-[0.7] leading-7 lg:text-xl b3 font-light'>Now, Metax offers a range of payment solutions tailored to the specific needs of today's businesses, helping them simplify their financial operations and focus on growth. This provides you with access to a comprehensive set of financial tools for easy cash flow management:</p>
</div>


</section>
{/* 2nd part */}
<section className='xl:w-[50%] mt-24 xl:mt-0  flex flex-col gap-20  '>

{/* 1st div */}
<div className='w-full flex justify-start'>
  <div className='md:w-[50%] flex gap-5'>
    <div className='bg-[#371B4B] w-fit h-fit p-3 text-4xl rounded-full text-white'><FaNetworkWired /></div>
    <div className='flex flex-col gap-3 b4'>
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
<div className='md:w-[50%] flex gap-5'>
    <div className='bg-[#371B4B] w-fit h-fit p-4 text-3xl rounded-full text-white'><SiFsecure /></div>
    <div className='flex flex-col gap-3 b5'>
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
<div className='md:w-[50%] flex gap-5'>
    <div className='bg-[#371B4B] w-fit h-fit p-3 text-4xl rounded-full text-white'><GiSmartphone /></div>
    <div className='flex flex-col gap-3 b6'>
      <h3 className='text-primary font-bold text-2xl'>Mobile
      </h3>
      <p>Ability to make payments, export transaction history, and more on the go using the iOS/android app or your smartphone browser
      </p>
    </div>
  </div>
</div>
{/* 3rd div */}
<div className='w-full flex justify-start'>
<div className='md:w-[50%] flex gap-5'>
    <div className='bg-[#371B4B] w-fit h-fit p-3 text-4xl rounded-full text-white'><GrSecure /></div>
    <div className='flex flex-col gap-3 b7' >
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
  <span className='text-primary md:text-xl xl:text-2xl md:pb-5 pb-2 text-sm c1 uppercase font-semibold'>Supported Currency</span>
  <div >
    
    <div className='w-full flex justify-center'>
      
  <h2 className='xl:text-8xl md:text-5xl text-4xl w-[95%] text-center lg:text-6xl font-semibold pb-5 c2'>Currencies We Support</h2>
    </div>
  </div>
 <div className='w-full flex justify-center pt-10 flex-col items-center gap-10'>
  <Slider2/>
  <Slider3/>
 </div>
<div className='flex gap-7 flex-col md:flex-row md:gap-20 pt-20'>
  
<button className='bg-primary md:h-16 md:w-52 h-10 w-44 py-1 px-3  cursor-pointer rounded md:text-xl font-light  '>Open Account</button>
<button className='bg-transparent border-2 cursor-pointer border-primary  tracking-wider md:text-xl rounded md:h-16 md:w-52 h-10 w-44'>Learn More</button>
</div>
</div>

</section>
</div>
</main>
{/* 3rd section currencies we suppport ends... */}

{/* 4rth section one iban for all */}
<section className='w-[80%] widthHome2 section4 flex items-center flex-col md:pb-44 pb-10  '>
  <h2 className='xl:text-8xl md:text-5xl text-4xl text-center font-bold e1'>One <span className='text-primary '>IBAN</span>  for All </h2>
  <p className='pt-4 xl:text-xl text-center font-light e2'>One IBAN for all your business needs—seamless transactions, global reach</p>
  {/* carosel */}
  <div className='w-full flex justify-center'>
  <Slider/>
  </div>
  {/* carosel ends here ........*/}
  
  
</section>
{/* 4rth section one iban for all ends....... */}

{/* 5th section bulk payments */}
<main className='w-full flex  justify-center  sec6 mb-44'>
<section className='w-[90%] flex flex-col-reverse xl:flex-row widthHome bulkPaySec text-white items-center justify-between  xl:pb-24'>
  
  <div id='sec5' className=' h-[550px] w-[700px] md:w-[1000px] xl:w-[1300px] flex justify-center relative items-center'>
  <img src={bulk} alt="" className='md:h-[250px] h-[200px] animate-bounce absolute top-[180px] md:top-[190px] left-50'/>
  </div>
  <div className='xl:w-[50%] flex flex-col items-center xl:items-start xl:justify-start justify-center gap-3 mt-28'>
    <span className='text-primary uppercase font-semibold'>Bulk Payments</span>
    <h2 className='xl:text-6xl md:text-5xl text-4xl text-center xl:text-start font-semibold pb-5 pt-2'>Simplify Bulk Payments for Your Global Workforce</h2>
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

<section className='w-[90%] bg-[#E5DAEB] flex widthHome xl:flex-row flex-col pricingSection justify-between md:p-20 p-5 py-20  rounded-xl mb-44'>
  {/* 1st main div */}
  <div className='flex flex-col gap-10 md:gap-16 xl:w-[50%] w-full'>
  <div className='flex flex-col md:gap-3 gap-1'>
  <h3 className='lg:text-5xl text-2xl md:text-3xl font-semibold'>Get Your Own UAE</h3>
    <h2 className='font-bold text-3xl md:text-5xl text-primary lg:text-7xl'> <span className='f1'>D</span><span className='f2'>i</span><span className='f3'>r</span><span className='f4'>h</span>a<span className='f5'>m</span>  (<span className='f6'>AED</span>) <span className='f7'>I</span><span className='f8'>B</span><span className='f9'>A</span><span className='f0'>N</span> </h2>
    <h3 className='lg:text-5xl text-2xl md:text-3xl font-semibold'>

Now Available Worldwide!
    </h3>
  </div>
  <div className='flex flex-col gap-5 opacity-[0.7] md:w-[85%] text-[18px]'>
<p>
Expand your financial reach with a dedicated AED IBAN, designed for businesses and individuals seeking <span className='text-primary font-semibold'>fast, cost-effective,</span> and <span className='text-primary font-semibold'>seamless international transactions.</span>

</p>
<p>
  
With our multi-currency account, you can settle payments in <span className='text-primary font-semibold'>50+ currencies</span> across <span className='text-primary font-semibold'>33 countries</span>, simplifying cross-border banking like never before.
</p>
  </div>
  
<div className='flex gap-10'>
  
  <button className='bg-primary h-14 w-48 rounded text-[18px]  text-white  g8'>Open Account</button>
  <button className='bg-transparent border-2 border-primary text-[18px] text-primary font-semibold tracking-wider text-xl rounded h-14 w-48 g9'>Learn More</button>
  </div>
</div>
{/* 2nd main div */}
<div className='xl:w-[50%] mt-24 xl:mt-0 w-full flex justify-center'>
  
<div className='bg-primary py-10 px-5 md:p-10 text-white rounded-xl w-[100%] md:w-[85%] lg:-[70%] relative'>
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

<div className='flex flex-col gap-5 '>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" className=''/><span className='opacity-[0.7] font-light md:text-[18px]  g0'>43 currencies</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light md:text-[18px]  g1'>Instant Payouts</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light md:text-[18px]  g2 '>Local AED Collections</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light md:text-[18px]  g3'>Named Virtual IBAN AED</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light md:text-[18px]  g4'>No monthly volume limit</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light md:text-[18px]  g5'>Secure Virtual Accounts</span>
  </div>
  <div className='flex items-center gap-3'>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light md:text-[18px]  g6'>Fast & Cost-Effective Transfers</span>
  </div>
  <div className='flex items-center gap-3 '>
    <img src={correctIcon} alt="" /><span className='opacity-[0.7] font-light md:text-[18px]  leading-7 g7'>Additional currency account available in USD, GBP, EUR</span>
  </div>
</div>

  </div>
</div>
</section>


{/* 6th section */}
<section className='w-[90%] sec6 flex flex-col xl:flex-row widthHome items-center lastSec justify-between  rounded-xl mb-44'>
  <div className='text-white sec6Home xl:w-[50%] md:p-20 p-10'>
    <h2 className='md:text-5xl text-3xl font-bold h1'>Cross-Border Payments to over <span className='text-primary'>50+</span> Countries</h2>
    <p className='pt-5 pb-10 h2'>
    Metax Payments is integrated with international payment networks such as USD and SEPA, ensuring wide-reaching coverage and fast money transfers across 50% countries. You can enjoy the convenient process for smooth cross-border transactions, no matter your location or currency.

    </p>
    
<button className='bg-white py-3 px-5   rounded w-fit text-black text-xl font-medium h3'>Open Account</button>
  </div><div className='flex justify-center sec6HomeImg w-[50%] items-end h-full xl:pt-32'>
    
  <img src={sec6} alt="" className='h4'/>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default Home
