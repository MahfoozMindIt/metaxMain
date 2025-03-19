import React from 'react';
import logo from '../assets/Logo.png';
import "../styles/home.css";
import { MdEmail } from "react-icons/md";
import banner from "../assets/about.png";
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
    <div className='  flex flex-col items-center font-primary'>
<div className='w-full homeMain flex flex-col items-center bg-[#030B15] font-primary pb-32'>
<section className='w-[90%] widthHome flex items-center flex-col py-5 text-white'>
         {/* navBar */}
       <NavbarComponent/>

{/* nabar ends */}
{/* banner section starts */}

<section className='flex w-full justify-between pt-20 items-center'>
  <main className='w-[50%] flex flex-col gap-10'>
<h1 className='text-7xl font-bold leading-20'>Contact Us For All Your Needs
</h1>
<p className=''>
  
<span className='text-2xl font-semibold text-primary'>Need Additional Assistance?</span>
<p className='pt-3 w-[65%]'>
    
Have queries, complaints, or feedback? We are here to help and look forward to serving you.
</p>
</p>
<button className='bg-primary py-2 px-9 rounded w-fit '>Book Now</button>
  </main>
  <main className='w-[47%] flex justify-center'>
<div className=''>
<img src={banner} alt="" className=''/>
</div>
  </main>
</section>
    
    </section>
</div>
{/* last section */}


<section className='py-32 w-full flex justify-center'>
<section className='w-[90%] widthHome border-[1px] justify-between  border-black rounded-xl flex  p-20'>
<div className='w-[40%] flex flex-col justify-between'>
   <main className='flex gap-20 flex-col'>
   <h2 className='text-5xl font-bold'>
    Need <span className='text-primary leading-16'>Additional Assistance?</span> Let’s Discuss it on a Call.
    </h2>
    <div className='flex flex-col gap-5'>
        <div className='flex gap-3 items-center'>
            <span><MdEmail className='text-primary text-xl'/></span><p>support@metaxpayments.com</p>
        </div>
        <div className='flex gap-3 items-center'>
            <span><FaPhoneAlt className='text-primary text-xl'/></span><p>+1 (778) 745 3531</p>
        </div>
        <div className='flex gap-3 items-center'>
            <span><SiImessage className='text-primary text-xl font-black'/></span><p>Monday to Friday <br />
            Timings: 10:00 AM to 05:00 PM (CET)</p>
        </div>
    </div>
   </main>
<main className='flex gap-14 items-center text-primary text-3xl'>
<FaFacebookF/>
<RiInstagramFill/>
<FaSquareXTwitter/>
</main>
</div>
<div className='bg-[whitesmoke] p-10 w-[50%] rounded-xl border-[1px] border-black flex flex-col gap-10'>
<input type="text" placeholder='Your name' name="" id=""  className='outline-none border-b-[1px] border-primary w-full '/>
<input type="text" placeholder='Your email' name="" id=""  className='outline-none border-b-[1px] border-primary w-full '/>
<input type="text" placeholder='Select a date' name="" id=""  className='outline-none border-b-[1px] border-primary w-full '/>
<input type="text" placeholder='Select a time' name="" id=""  className='outline-none border-b-[1px] border-primary w-full '/>
<input type="text" placeholder='Your Phone' name="" id=""  className='outline-none border-b-[1px] border-primary w-full '/>
<input type="text" placeholder='Your Company' name="" id=""  className='outline-none border-b-[1px] border-primary w-full '/>
<input type="text" placeholder='Your message' name="" id=""  className='outline-none border-b-[1px] border-primary w-full '/>

<button className='bg-primary  py-2 px-8 rounded w-fit text-white flex items-center gap-3'><span><BsFillSendFill className='text-xl'/></span> Book Now</button>
</div>
</section>
</section>



       </div>

  )
}

export default Contact
