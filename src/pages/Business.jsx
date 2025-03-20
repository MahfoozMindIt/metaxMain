import React, { Fragment } from 'react';
import logo from '../assets/Logo.png';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import businessFrame from '../assets/businessFrame.png'
import map from "../assets/mapFinal.png"
import { Link } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent'

const Business = () => {
  return (
    <div className='  flex flex-col items-center font-primary'>
<div className='w-full homeMain flex flex-col items-center bg-[#030B15] font-primary pb-32'>
<section className='w-[90%] widthHome flex items-center flex-col py-5 text-white'>
         {/* navBar */}
       <NavbarComponent/>

{/* nabar ends */}
{/* banner section starts */}

<section className='flex w-full justify-center pt-20 '>
  <main className='w-[50%] flex flex-col gap-10'>
<h1 className='text-7xl text-center font-bold leading-20'>
Business Needs
</h1>
<p className='opacity-[0.8] text-center'>
Metax offers a range of payment solutions tailored to the specific needs of today's businesses, helping them simplify their financial operations and focus on growth.
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
<section className='xl:w-[65%] lg:w-[80%] w-[90%] widthProductLess flex-col flex items-center justify-between py-52



'>
<div className='w-full text-center'>
 
<span className='text-primary text-center uppercase text-xl font-semibold'>We’re Regulated & Authorized</span>
  <h2 className='text-6xl font-bold pb-10 pt-2'>Meet All Your Business Needs with Metax </h2><div className=' w-full flex flex-col items-center justify-center gap-5'>
    <p className='text-center w-[80%] pb-5 font-light'>Now, Metax offers a range of payment solutions tailored to the specific needs of today's businesses, helping them simplify their financial operations and focus on growth. This provides you with access to a comprehensive set of financial tools for easy cash flow management:
    </p>
    
<div className='flex gap-5 justify-center'>
<button className='bg-primary py-2 px-5 text-white rounded w-fit '>Open Account</button>
<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>
</div>
  </div></div>
  
  <div className='grid grid-cols-3 gap-20 pt-28'>


  <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={onePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>EUR Business Account</h2>
<p className='opacity-[0.7] font-light text-center'>Open a Euro account for swift, hassle-free transactions, free from extra fees. Choose from various account options to convert funds at optimal exchange rates or maintain savings in Euros.

</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>
    <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={twoPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>GBP Business Account</h2>
<p className='opacity-[0.7] font-light text-center'>With Metax, setting up a British Pound account is quick and simple, allowing you to begin receiving payments and sending money abroad within minutes. Our fully digital onboarding and verification process ensures ease and convenience for you.

</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>
    <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={threePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>USD Business Account</h2>
<p className='opacity-[0.7] font-light text-center'>Start a business account in USD with Metax for handling and accepting USD payments. Receive funds in US Dollars and utilize them, with Metax supporting your business objectives.

</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>

  </div>





  </section>
{/* last section ends ....*/}

{/* 3rd section currencies we suppport */}
<main className='flex justify-center w-full py-20 sec6 mb-44'>
<section className='w-[90%] flex widthHome text-white items-center justify-between py-20'>
<div className='w-[50%]'>
  <span className='text-primary uppercase font-semibold'>Multi-Currency</span>
  <h2 className='text-6xl font-semibold pb-5'>Dedicated Multi-Currency IBAN Account</h2>
  <p className= 'py-3 text-xl style-italic'>Make and receive payments in multiple currencies within a single account!</p>
  <span className='text-primary text-xl  font-semibold'>
  Tired of managing several bank accounts?
  </span>
  <p className='pt-3 pb-10'>
  With Metax Payments, you can send, convert, and receive money in 11 currencies. You can switch between currencies, transaction types, and payment methods — all without the administrative hassle. Simplify your financial management and focus on what truly matters: growing your business.

  </p>
  <div className='flex gap-5'>
    
<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Open Account</button>
  
<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

</div>
</div>
<div className='relative'>
    
<img src={map} alt="" />
<img src={businessFrame} alt="" className='absolute top-20 right-0 '/>
    </div>
</section>
</main>
{/* 3rd section currencies we suppport ends... */}

{/* 2nd section one iban for all */}
<section className='w-[80%] widthProduct2  flex items-center flex-col pb-10  '>
    
  <span className='text-primary uppercase text-xl font-semibold pb-3'>Pricing Plan</span>
  <h2 className='text-5xl font-semibold'>Pricing for Business Account</h2>
  <div className="overflow-x-auto p-4 mt-5 md:w-[70%] widthProductLessTable w-full">
      <table className="w-full border-collapse text-[#7D7D7D]">
        <thead>
          <tr>
            <th className="text-left px-4 py-3 font-semibold bg-[#EAEAEA]">
            Transparent Pricing
            </th>
            <th className="text-left px-4 py-3 bg-[#EAEAEA] font-semibold">
            Price
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Onboarding (KYC/KYB)
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Starting from EUR 150    
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Monthly Maintenance Fee
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Starting from EUR 30     
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            SEPA Instant/SEPA Incoming
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            0.20%    
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            SEPA Instant/SEPA Outgoing*
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            0.20%  
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            USD Incoming
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            0.20%   
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            USD Outgoing***
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            0.50%     
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            GBP Outgoing (Faster Payments)**
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            0.20%    
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            FX
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            0.50%     
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Other Currencies
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Price on Application    
            </td>
        
          </tr>
        </tbody>
      </table>
    </div>
 
</section>
{/* 2nd section one iban for all ends....... */}






{/* 6th section */}
<section className='lg:w-[55%] md:w-[70%] w-full sec6 flex widthProductLess items-center justify-between  rounded-xl mb-44'>
  <div className='text-white flex flex-col items-center justify-center p-20 w-full'>
    <h2 className='text-5xl font-bold text-center'>Contact us to get your tailored offer</h2>
    <p className='pt-5 pb-10 text-center'>Talk directly to our dedicated banking expert to get your final offer

    </p>
    
<button className='bg-white py-3 px-5  rounded w-fit text-black text-xl font-medium'>Contact Us</button>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default Business
