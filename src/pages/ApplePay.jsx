import React, { Fragment } from 'react';
import "../styles/home.css";
import applePay1 from "../assets/applePay1.png"
import applePay2 from "../assets/applePay2.png"
import applePay3 from "../assets/applePay3.png"
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import threePurple from '../assets/03purple.png'
import NavbarComponent from '../components/NavbarComponent';

const ApplePay = () => {
  return (
    <div className='flex flex-col font-primary items-center'>
<div className='flex flex-col bg-[#030B15] w-full font-primary homeMain items-center pb-32'>
<section className='flex flex-col text-white w-[90%] items-center py-5 widthHome'>
         {/* navBar */}
        
<NavbarComponent/>
{/* nabar ends */}
{/* banner section starts */}

<section className='flex justify-center w-full pt-20'>
  <main className='flex flex-col w-[75%] gap-10'>
<h1 className='text-7xl text-center font-bold leading-20'>
Easily Add Your Metax Corporate Card to Apple Pay
</h1>
<div className='flex justify-center w-full'>
    
<p className='text-center w-[80%] opacity-[0.8]'>Experience unparalleled convenience and security with Metax Corporate Debit Cards seamlessly integrated with Apple Pay. Simplify your business payments with the perfect synergy of efficiency and security, making managing your business finances easier than ever before!
</p>
</div>
  </main>
</section>
    
    </section>
</div>
{/* last section */}
<section className='xl:w-[70%] lg:w-[80%] w-[90%] widthProductLess flex-col flex items-center justify-between py-52



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h2 className='text-5xl text-center w-[80%] font-semibold leading-16 pb-5'>Maximize the Benefits of Your Metax Corporate Card with Apple Pay Integration
    </h2>
    
  </div></div>
  
  <div className='grid grid-cols-3 gap-7 pt-28'>


  <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
<img src={onePurple} alt="" className='h-20 w-20 object-verntain'/>
<h2 className='text-2xl text-center font-semibold'>Unparalleled Security</h2>
<p className='text-center font-light opacity-[0.7]'>With Apple Pay, advanced security measures like Face ID or Touch ID verification, unique transaction codes, and device-specific numbers are employed, ensuring the protection of your Metax Corporate Card details against fraud and unauthorized usage.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
<img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Seamless Transactions</h2>
<p className='text-center font-light opacity-[0.7]'>Managing your Metax Corporate Card is a breeze with Apple Pay. Simply utilize your iPhone or Apple Watch to swiftly and easily make payments, whether you're in-store or shopping online. Enjoy a streamlined process for maximum convenience.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-14'>
<img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Contactless Convenience</h2>
<p className='text-center font-light opacity-[0.7]'>With Apple Pay, your business finances are accessible wherever contactless payments are accepted. Simply hold your device near a payment terminal, and your transaction is securely and swiftly completed.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Learn More</button>

    </div>

  </div>





  </section>
{/* last section ends ....*/}


{/* section starts here */}
<section className='xl:w-[70%] lg:w-[80%] w-[90%] widthHome flex-col flex items-center justify-between  pt-10



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>How to Add Metax Card to Apple Pay?</h1>
    <p className='text-center w-[70%] font-light opacity-[0.8] py-5'>Apple Pay is compatible with all your Apple devices, including iPhone, Apple Watch, iPad, and Mac. You have the option to add your Metax Card to Apple Pay either through the Apple Wallet app or using Metax's own application.
    </p>
    
  </div></div>
  </section>



<section className='flex flex-col justify-center w-full items-center'>
  
  <main className='flex justify-between w-[90%] items-center widthHome'>
  <div className='flex justify-center'>
  <img src={applePay1} alt="" />
  </div>
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>Using Apple Wallet</h2>
    <p className='font-light pb-10'>
    To add your Metax Corporate Card to Apple Pay, follow these steps:
    <ul className='flex flex-col list-decimal gap-3 ml-4 py-5'>
        <li> 
 Open the Apple Wallet app on your iPhone or Apple Watch.  </li>
 <li>  Tap the "+" (plus) sign to add a new card. 
 </li>


<li>  Select "Add Credit or Debit Card." </li>
<li>Follow the on-screen instructions provided by Apple Pay. </li>
<li> You may need to scan your physical card using your device's camera or manually enter the card details.
</li>
<li>Be prepared to verify your card information as required.
</li>
<li> Follow the provided instructions to complete the verification process. 
</li>
<li> Once successfully verified and added, you'll receive confirmation that your Metax Corporate Card is ready to use with Apple Pay. 
</li>
    </ul>
    <span className='font-semibold italic'>
        
If you encounter any difficulties during the process, you can always reach out to your bank or Apple Support for assistance..</span></p>
    
 
  
  </div>
  </main>


  {/* 2nd section */}
  <main className='flex justify-between w-[90%] items-center widthHome'>
  
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold pb-5 pt-2'>Utilizing the Metax App</h2>
    <p className='font-light pb-10'>
    To incorporate your card into Apple Pay through Metax's app, just access the card you wish to add within the application and select the "Add to Apple Pay" option. Then, designate the device where you want to link your card. Your card information will be populated automatically, and the card will be successfully integrated into Apple Pay.</p>
    
 
  
  </div> <div className='flex justify-center'>
  <img src={applePay2} alt="" />
  </div>
  </main>
  {/* 2nd section ends*/}

  {/* 3rd section starts */}
  
  <main className='flex justify-between w-[90%] items-center widthHome'>
  <div className='flex justify-center'>
  <img src={applePay3} alt="" />
  </div>
  <div className='w-[50%]'>
    <h2 className='text-5xl font-semibold leading-16 pb-5 pt-2'>How to Pay with Metax's Corporate Card on Apple Pay</h2>
    <p className='font-light pb-10'>Optimize your online shopping experience by leveraging Apple Pay, whether you're navigating through mobile apps or browsing the web. Keep an eye out for the distinctive Apple Pay logo, or simply select it from the array of payment options provided at checkout. This streamlined process ensures swift and secure transactions, enhancing your convenience and peace of mind while shopping online. <br />
To make a payment using Metax's Corporate Card via Apple Pay, follow these steps:
    <ul className='flex flex-col list-decimal gap-3 ml-4 py-5'>
        <li> 
 Open the Apple Wallet app on your iPhone or Apple Watch.  </li>
 <li>  
 Ensure your Metax Corporate Card has been added to your Apple Pay wallet through the Metax app as outlined in the previous instructions.
 </li>


<li>
Authenticate the transaction using Face ID, Touch ID, or your device passcode, depending on your device's settings. </li>
<li>Follow the on-screen instructions provided by Apple Pay. </li>
<li> 
Once authenticated, the payment will be processed using your Metax Corporate Card linked to Apple Pay.
</li>
<li>
You'll receive a confirmation of the transaction on your device, and the payment will be recorded in your Metax account.
</li>
    </ul></p>
    
 
  
  </div>
  </main>
  {/* 3rd section ends */}
  
  </section>



       </div>

  )
}

export default ApplePay;
