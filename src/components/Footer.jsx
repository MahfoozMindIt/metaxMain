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
<section className='flex gap-32'>
  <div className='w-[27%]'>
    <img src={logo} alt="" />
    <p>
    Metax Payments Ltd, incorporated in Canada (BC1406436), is Registered at 28 19628, 55A Avenue, Langley, British Columbia, V3A 3X2. The company is duly registered as a Money Services Business with FINTRAC under registration number M23579425, ensuring adherence to Canadian financial laws and regulations.
    </p>
    <div className='flex text-4xl pt-5 gap-4'>
<FaLinkedin/>
<FaFacebookSquare />
<RiInstagramFill />
<FaSquareXTwitter />
    </div>
  </div>
  <div className='w-[72%] flex justify-between'>

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


  </div>
</section>
<p className='pt-10 w-[60%]'><span className='font-bold'>Disclaimer: </span> The author assumes no responsibility or liability for any errors or omissions in the content of this site. The information contained in this site is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness, or timeliness</p>
      </div>

    </div>

    <div className='w-full flex justify-center py-5'>
      <div className='w-[90%] widthFooter font-bold text-2xl flex justify-center'>

      Copyright © 2022-2024 Metax Payments. All Rights Reserved.

</div></div>
    </div>
  )
}

export default Footer
