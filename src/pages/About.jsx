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
import bulk from "../assets/about2.png"
import one from "../assets/01.png"
import one1 from "../assets/01white.png"
import two2 from "../assets/02white.png"
import three3 from "../assets/03white.png"
import two from "../assets/02.png"
import three from "../assets/03.png"
import four from "../assets/04.png"
import map from "../assets/mapFinal.png"
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='  flex flex-col items-center font-primary'>
<div className='w-full homeMain flex flex-col items-center bg-[#030B15] font-primary pb-32'>
<section className='w-[90%] widthHome flex items-center flex-col py-5 text-white'>
         {/* navBar */}
         <nav className='flex justify-between items-center w-full '>
<img src={logo} alt="" className=''/>
<ul className='flex items-center gap-10'>
    
 <Link to='/'>
     <li>Home</li></Link>
        <Link to='/business'> <li>Business</li></Link>
               <Link to='/personal'> <li>Personal</li></Link>
     <li>Blog</li> 
     <Link to='/about'>
     
     <li>About Us</li></Link>
     <Link to='/contact'>
     
     <li>Contact Us</li></Link> 
    
</ul>

<div className='flex items-center gap-7'>
    <button className='bg-primary py-2 px-5 rounded'>Login</button>
    <button className='bg-white text-primary font-medium py-2 px-5 rounded'>Sign Up</button>
</div>
</nav>

{/* nabar ends */}
{/* banner section starts */}

<section className='flex flex-col w-full justify-center  pt-20 items-center'>
  <main className='w-full flex flex-col gap-10'>
<h1 className='text-7xl font-bold leading-20 text-center'>
About Us
</h1><div className='w-full flex justify-center'>
    
<p className='text-center w-[60%]'>

Our platform delivers diverse payment solutions tailored to suit the demands of contemporary businesses, allowing them to simplify their financial operations and concentrate on business expansion.
</p>
</div>
<div className='flex gap-5 w-full justify-center'>
    
<button className='bg-primary py-2 px-5 rounded w-fit '>Open Account</button>
<button className='bg-primary py-2 px-7 rounded w-fit '>Learn More</button>
</div>
  </main>
</section>
    
    </section>
</div>
{/* last section */}
<main className='w-full flex justify-center'>
<section className='w-[90%] flex widthHome  items-center justify-between  '>
  
  <div id='about1' className='sec5 h-[1000px] w-[1300px] flex justify-center relative items-center'>
  <img src={bulk} alt="" className='h-[300px] absolute top-[330px] left-70'/>
  </div>
  <div className='w-[60%]'>
    <span className='text-primary uppercase font-semibold'>What we offer</span>
    <h2 className='text-6xl font-semibold pb-5 pt-2'>Secure and intuitive Payment Platform</h2>
    <p className='pb-10 w-[85%]'>Managing payments for a large, distributed team doesn’t have to be complicated. With Metax Payments, you can effortlessly process bulk payments to employees, contractors, and partners worldwide.Welcome to Metax, a secure and intuitive payment platform crafted to assist businesses in effortlessly managing their transactions. Our platform delivers diverse payment solutions tailored to suit the demands of contemporary businesses, allowing them to simplify their financial operations and concentrate on business expansion.</p>
    
 
  
<button className='bg-primary py-2 px-5  rounded w-fit text-white  font-medium'>Open Account</button>
  <button className='bg-primary ml-5 py-2 px-5 rounded w-fit text-white'>Learn More</button>
  </div>
  
  </section>
</main>
{/* last section ends ....*/}


{/* 5th section bulk payments */}
<main className='w-full flex justify-center sec6 mb-44'>
<section className='w-[70%] flex flex-col py-32 gap-20 widthHome text-white items-center justify-center  '>
  <h1 className='text-center font-bold text-6xl'>Our Mission</h1>
  <div className='grid grid-cols-3 gap-20'>
  <div className='flex flex-col justify-center rounded-xl  items-center gap-5 box py-14 p-5 border-primary border-[1px] missionBox' >
    <div className='flex items-center gap-5' >
        
<img src={one1} alt="" className='h-16 w-16 object-contain'/>
<h2 className='text-2xl font-semibold'>Driving Business Success</h2>
    </div>
<p className='opacity-[0.7] font-light leading-9'>Our goal is to deliver exceptional service to our customers, aiding them in expanding their business and achieving their best potential.</p>
    </div>
    <div className='flex flex-col justify-center rounded-xl  items-center gap-5 box py-14 p-5 border-primary border-[1px] missionBox' >
    <div className='flex items-center gap-5' >
        
<img src={two2} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold'>Passion Fuels Excellence</h2>
    </div>
<p className='opacity-[0.7] font-light leading-9'>We prioritize hiring passionate individuals, as their enthusiasm enables them to surmount any challenge and gain the required knowledge.
</p>
    </div>
    <div className='flex flex-col justify-center rounded-xl  items-center gap-5 box py-14  p-5 border-primary border-[1px] missionBox' >
    <div className='flex items-center gap-5' >
        
<img src={three3} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold'>Your Money, Our Priority</h2>
    </div>
<p className='opacity-[0.7] font-light leading-9'>Our top priority is the safety and security of your money. Every aspect of our service is designed to safeguard and enhance your funds!
</p>
    </div>
  </div>
  
  </section>
</main>
{/* 5th section currencies we suppport ends... */}
{/* section4 get your own UAE */}
<section className='w-[90%] widthHome flex-col flex items-center justify-between pb-44 '>
<div className='w-full text-center'>
  <span className='text-primary text-center text-xl uppercase font-semibold'>Our Core Values </span>
  <h2 className='text-5xl text-center font-semibold pb-5'> The Foundation of Trust and Excellence</h2><div className=' w-full flex justify-center'>
    <p className='text-center w-[70%]'>At Metax, we are committed to delivering a seamless and secure payment experience by embracing simplicity, transparency, security, and innovation. Our user-friendly platform ensures effortless transactions, our transparent policies build trust, our advanced security measures protect your financial data, and our dedication to innovation drives continuous improvement for your success</p>
  </div>
</div>
<main className='pt-28 flex items-center gap-44'>
  {/* 1st div */}
  <div className='flex flex-col gap-20  '>

    <div className='flex flex-col justify-center rounded items-center gap-5 box p-5'>
<img src={one} alt="" className='h-16 w-16 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Simplicity</h2>
<p className='opacity-[0.7] font-light text-center'>Our onboarding process and streamlined interface allow customers to complete their transactions quickly and easily. Metax is user-friendly, enabling you to manage your payments on the go.
</p>
    </div>
    <div className='flex flex-col justify-center rounded items-center gap-5 box p-5'>
<img src={three} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Security</h2>
<p className='opacity-[0.7] font-light text-center'>At Metax, we are dedicated to safeguarding the security and privacy of our customers' data. We employ the latest encryption technologies and fraud prevention strategies to protect our customers' financial information and transactions.
</p>
    </div>

  </div>
  {/* 1st div ends ...*/}
  {/* img */}
  <img src={sectionFour} alt="" />
  {/* img */}
  {/* 2nd div */}
  <div className='flex flex-col gap-20  '>

    <div className='flex flex-col rounded justify-center items-center gap-5 box p-5'>
<img src={two} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Transparency</h2>
<p className='opacity-[0.7] font-light text-center'>We hold the belief that transparency is essential for building trust between business partners. Metax maintains openness and honesty about fees, pricing, and policies, ensuring that you will never face hidden fees or unexpected charges.
</p>
    </div>
    <div className='flex flex-col rounded justify-center items-center gap-5 box p-5'>
<img src={four} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Innovation</h2>
<p className='opacity-[0.7] font-light text-center'>We hold the belief that continuous improvement is essential for success in today's fast-paced business world. Innovation extends beyond merely creating new products or services; it encompasses creativity, willingness to take risks, and a steadfast dedication to discovering new ideas and solutions.
</p>
    </div>

  </div>
  {/* 2nd div ends ...*/}
</main>

</section>
{/* section4 get your own UAE ends ......*/}
{/* mini sec */}
<section className='w-[90%] widthHome flex-col flex items-center justify-between pb-24 '></section>
{/* mini sec ends ....*/}









       </div>

  )
}

export default Home
