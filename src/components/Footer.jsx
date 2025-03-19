import React from 'react'
import logo from '../assets/Logo.png';
import '../styles/footer.css';
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <div >
    <div className='back w-full flex justify-center py-20'>
      <div className='w-[90%] widthFooter text-white'>
  
  <div className='w-full flex gap-52'>

<div>
  <h3 className='font-bold text-primary'>Products</h3>
  <ul>
    <li>
AED Payments
</li>
<li>SEPA Payments
</li>
<li>
UK Faster Payments</li>
<li>
USD Payments</li>
<li>
Bulk Payouts</li>
<li>
Apple Pay</li>
<li>
Metax Mobile App</li>
<li>
Metax Cards</li>
  </ul>
</div>
<div>
  <h3 className='font-bold text-primary'>Account Types</h3>
  <ul>
    <li>

    Business
</li>
<li>
Personal
</li>
  </ul>
</div>
<div>
  <h3 className='font-bold text-primary'>Business Accounts
</h3>
  <ul>
    <li>
AED Business Account
</li>
<li>
Euro Business Account
</li>
<li>
GBP Business Account</li>
<li>
USD Business Account</li>
<li>
Multi-currency Account</li>

  </ul>
</div>
<div>
  <h3 className='font-bold text-primary'>Industries
</h3>
  <ul>
    <li>
Construction Industry
</li>
<li>
Corporates Industry
</li>
<li>
Ecommerce Industry</li>
<li>
Import & Export Industry</li>
<li>
Oil & Gas Industry</li>
<li>
Real Estate Industry</li>
<li>
Technology Industry</li>
<li>
Travel & Tourism Industry</li>
  </ul>
</div>
<div>
  <h3 className='font-bold text-primary'>General</h3>
  <ul>
    <li>
About Us
</li>
<li>
Blog
</li>
<li>
Careers</li>
<li>
Contact Us</li>

  </ul>
</div>


  </div>
  <div>
  <div className='w-full flex justify-between items-center py-10'>
    <img src={logo} alt="" />
   
    <div className='flex text-4xl pt-5 gap-4'>
<FaLinkedin/>
<FaFacebookSquare />
<RiInstagramFill />
<FaSquareXTwitter />
    </div>
  </div>
  </div>
  <p className='w-[90%]'>
    Metax Payments Ltd, incorporated in Canada (BC1406436), is Registered at 28 19628, 55A Avenue, Langley, British Columbia, V3A 3X2. The company is duly registered as a Money Services Business with FINTRAC under registration number M23579425, ensuring adherence to Canadian financial laws and regulations.
    </p>
<p className=' w-[60%]'><span className='font-bold'>Disclaimer: </span> The author assumes no responsibility or liability for any errors or omissions in the content of this site. The information contained in this site is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness, or timeliness</p>
      </div>

    </div>

    <div className='w-full flex justify-center py-5'>
      <div className='w-[90%] widthFooter font-bold text-xl flex justify-center'>

      Copyright © 2022-2024 Metax Payments. All Rights Reserved.

</div></div>
    </div>
  )
}

export default Footer
