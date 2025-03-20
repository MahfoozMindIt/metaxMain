import React from 'react';
import logo from '../assets/Logo.png';
import "../styles/home.css";
import { MdEmail } from "react-icons/md";
import banner from "../assets/cardMain.png";
import card1 from "../assets/card2.png";
import card2 from "../assets/card4.png";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { SiImessage } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { BsFillSendFill } from 'react-icons/bs';
import NavbarComponent from '../components/NavbarComponent'

const Contact = () => {
  return (
    <div className='flex flex-col w-full font-primary items-center'>
<div className='flex flex-col bg-[#030B15] w-full font-primary homeMain items-center pb-32'>
<section className='flex flex-col text-white w-[90%] items-center py-5 widthHome'>
         {/* navBar */}
       <NavbarComponent/>

{/* nabar ends */}
{/* banner section starts */}

<section className='flex justify-between w-full items-center pt-20'>
  <main className='flex flex-col w-[50%] gap-10'>
<h1 className='text-7xl font-bold leading-20'>Virtual & Physical Card for Business
</h1>
<p className=''>
  
<span className='text-xl font-semibold italic'>YOUR All-IN-ONE VIRTUAL & PHYSICAL CARD SOLUTION</span>
<p className='w-[65%] pt-3'>
What truly matters—expanding your business
Our virtual debit cards enable you to manage payments effortlessly
</p>
</p>
<button className='bg-primary rounded w-fit px-9 py-3'>Get Your Card</button>
  </main>
  <main className='flex justify-center w-[47%]'>
<div className=''>
<img src={banner} alt="" className=''/>
</div>
  </main>
</section>
    
    </section>
   
</div>
{/* last section */}


 {/* slider */}
 <section className='bg-[#BC9FCB] h-[100px] w-full'>

</section>
{/* slider ends */}

{/* last section starts */}
<section className='flex flex-col justify-center w-full items-center'>
<section className='xl:w-[70%] lg:w-[80%] w-[90%] widthHome flex-col flex items-center justify-between  pt-52



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>USE YOUR CARDS LIKE CASH</h1>
    <p className='text-center w-[70%] font-light opacity-[0.8] py-5'>Effortlessly convert your assets into everyday purchases with our virtual and physical debit cards
    </p>
    
  </div></div>
  </section>
  
  <main className='flex justify-between w-[90%] items-center widthHome'>
  <div className='flex justify-center'>
  <img src={card1} alt="" />
  </div>
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>VIRTUAL CARD</h2>
    <p className='font-light pb-10'>Any Time, Any Where
    <ul className='flex flex-col list-decimal gap-3 ml-4 py-5'>
        <li> 
Instant transaction</li>
 <li>  
Widely accepted
 </li>


<li> 
Compatible with Apple Pay/Google Pay </li>
    </ul></p>
    
 
  
  </div>
  </main>


  {/* 2nd section */}
  <main className='flex justify-between w-[90%] items-center widthHome'>
  
  <div className='flex flex-col w-[50%] items-center'>
   <div>
   <h2 className='text-5xl font-semibold pb-5 pt-2'>PHYSICAL CARD</h2>
    <p className='font-light pb-10'> <ul className='flex flex-col list-decimal gap-3 ml-4 py-5'>
        <li> Tap and Pay</li>
 <li>  
Real-time transaction
 </li>


<li> 
ATM withdrawal. </li>
    </ul></p>
   </div>
    
 
  
  </div> <div className='flex justify-center'>
  <img src={card2} alt="" className='object-contain'/>
  </div>
  </main>
  {/* 2nd section ends*/}
  
  </section>
{/* last section ends*/}

       </div>

  )
}

export default Contact
