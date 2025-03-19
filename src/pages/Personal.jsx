import React, { Fragment } from 'react';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import fourPurple from '../assets/04 purple.png'
import fivePurple from '../assets/05purple.png'
import NavbarComponent from '../components/NavbarComponent';

const Personal = () => {
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
Personal Needs
</h1>
<p className='opacity-[0.8] text-center'>Metax offers a range of payment solutions tailored to the specific individual needs, helping them simplify their financial operations and focus on growth.
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
<section className='xl:w-[65%] lg:w-[80%] w-[90%] widthHome flex-col flex items-center justify-between py-52



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
<h2 className='text-2xl font-semibold text-center'>Fast & Affordable Transfers</h2>
<p className='opacity-[0.7] font-light text-center'>We offer SEPA accounts that allow you to send and receive Euro payments across 36 European countries at low fees, and ensuring fast transactions.

</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>
    <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={twoPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>One-stop solution for money management</h2>
<ul className='opacity-[0.7] font-light ml-5 text-sm flex flex-col gap-3 list-disc'>
    <li>Open account remotely in 15 minutes.</li>
    <li>Unique European IBAN.</li>
    <li>
    Personalized pricing plans, no hidden fees.</li>
    <li>
    Enjoy fully-digital money management with 24/7 access to your funds.</li>


</ul>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>
    <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={threePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Remote account opening</h2>
<p className='opacity-[0.7] font-light text-center'>Open your account and get a unique European IBAN in just a few simple steps, from wherever you are. All you need is two personal documents (Passport/ID card, Proof of Address) and 10 minutes of your time.

</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>

  </div>
  <div className='grid grid-cols-2 w-[63%] gap-20 pt-20'>


  <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={fourPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Intuitive mobile interface</h2>
<ul className='opacity-[0.7] font-light ml-5 text-sm flex flex-col gap-3 list-disc'>
    <li>24/7 access to your funds.</li>
    <li>
Wide range of available transactions.</li>
    <li>
    
Transaction history overview and reports.</li>
    <li>
    Human customer support.</li>


</ul>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>
    <div className='flex flex-col justify-center rounded-xl items-center border-[1px] border-primary gap-7 box p-5'>
<img src={fivePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl font-semibold text-center'>Safe & Sound</h2>
<p className='opacity-[0.7] font-light text-center'>We adhere to highest EMI security standards to keep your money and personal data safe. Your funds protection using 3D secure and 2FA.


</p>

<button className='bg-primary py-2 px-5 rounded w-fit text-white'>Learn More</button>

    </div>

  </div>





  </section>
{/* last section ends ....*/}


{/* 2nd section one iban for all */}
<section className='w-[80%] widthHome2 flex items-center flex-col pb-10  '>
    
  <span className='text-primary uppercase text-xl font-semibold pb-3'>Pricing Plan</span>
  <h2 className='text-5xl font-semibold'>Pricing for Individual Account</h2>
  <div className="overflow-x-auto p-4 mt-5 md:w-[70%] w-full">
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
            €55   
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Monthly Maintenance Fee
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            €25    
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            SEPA Instant/SEPA Incoming
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Free 
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
            Instant transfers between users
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Free  
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Mobile banking APP
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            Free  
            </td>
        
          </tr>
          <tr>
            <td className="px-4 py-4 bg-[#F4F4F4]">
            In-app live chat support
            </td>
            <td className="px-4 py-4 bg-[#F4F4F4]">
           Free  
            </td>
        
          </tr>
      
        </tbody>
      </table>
    </div>
 
</section>
{/* 2nd section one iban for all ends....... */}






{/* 6th section */}
<section className='lg:w-[55%] md:w-[70%] w-full sec6 flex widthHome items-center justify-between  rounded-xl mb-44'>
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

export default Personal;
