import React, { Fragment, useState } from 'react';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import gbpRight from '../assets/gbpRight.png'
import threePurple from '../assets/03purple.png'
import fourPurple from '../assets/04 purple.png'
import fivePurple from '../assets/05purple.png'
import sixPurple from '../assets/06purple.png'
import NavbarComponent from '../components/NavbarComponent';
import { RiArrowDropDownLine } from 'react-icons/ri';

const UkFasterPayment = () => {
  const [openIndex , setOpenIndex]=useState(null);


  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const myFaq = [{
    id:1,
    ques:"What is a GBP Account?",
    ans:"As of early 2023, the list of EU regions not included in SEPA includes Northern Cyprus, Faroe Islands and Greenland, French Southern, and Antarctic Territories, French Polynesia, New Caledonia and Wallis and Futuna, Aruba, Caribbean Netherlands, Curacao and St. Maarten, Svalbard and Jan Mayen, British Overseas Territories, excluding Gibraltar and Crown Dependencies.",
    img:onePurple
  },{
    id:2,
    ques:"Can I Open a GBP Account??",
    ans:"Yes, both individuals and companies needing to hold, send, or receive Great British Pounds (GBP) can open a GBP account. Metax's registration and onboarding process is fully digital, allowing you to complete it in minutes from anywhere in the world..",
    img:twoPurple
  },{
    id:3,
    ques:"How do I pay a SEPA transfer?",
    ans:"As of early 2023, the list of EU regions not included in SEPA includes Northern Cyprus, Faroe Islands and Greenland, French Southern, and Antarctic Territories, French Polynesia, New Caledonia and Wallis and Futuna, Aruba, Caribbean Netherlands, Curacao and St. Maarten, Svalbard and Jan Mayen, British Overseas Territories, excluding Gibraltar and Crown Dependencies.",
    img:threePurple
  }]

  return (
    <div className='flex flex-col font-primary items-center'>
<div className='flex flex-col bg-[#030B15] w-full font-primary homeMain items-center pb-32'>
<section className='flex flex-col text-white w-[90%] items-center py-5 widthHome'>
         {/* navBar */}
        
<NavbarComponent/>
{/* nabar ends */}
{/* banner section starts */}

<section className='flex justify-center w-full pt-20'>
  <main className='flex flex-col w-[55%] gap-10'>
<h1 className='text-7xl text-center font-bold leading-20'>
GBP Account
</h1>
<p className='text-center opacity-[0.8]'>With Metax, setting up a British Pound account is quick and simple, allowing you to begin receiving payments and sending money abroad within minutes. Our fully digital onboarding and verification process ensures ease and convenience for you.
</p>
<div className='flex justify-center gap-5'>
<button className='bg-primary rounded w-fit px-5 py-2'>Open Account</button>
<button className='bg-primary rounded w-fit px-5 py-2'>Learn More</button>
</div>
  </main>
</section>
    
    </section>
</div>


{/* 2nd section */}

<main className='flex justify-center w-full my-32'>
<section className='flex justify-between w-[70%] items-center widthProductLess'>
  
  <div className='flex flex-col w-[40%] gap-10'>
    <h1 className='text-4xl font-semibold leading-12'>Expand Your Business Globally with a British Pound Account
    </h1>
    <p className='font-light opacity-[0.7]'>Owning a British Pound account can prove advantageous if you regularly receive payments in GBP or engage in business with UK-based partners. Additionally, it eliminates the necessity of converting funds from other currencies to GBP, thereby avoiding costly exchange fees. Metax provides a sterling business account tailored to bolster your global expansion.
    </p>
  
<div className='flex text-white gap-5'>
<button className='bg-primary rounded w-fit px-5 py-2'>Open Account</button>
<button className='bg-primary rounded w-fit px-5 py-2'>Learn More</button>
</div>
  </div>
  <div className='w-[48%]'>
    
  <img src={gbpRight} alt="" className=''/>
  </div>
  
  </section>
</main>


{/* 2nd section ends ..... */}


{/* last section */}
<section className=' w-[90%] widthHome flex-col flex items-center justify-between pb-52 pt-10



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-5xl text-center font-semibold leading-20'>Advantages of Opening a Sterling Account</h1>
    <p className='text-center w-[70%] font-light py-5'>Metax provides a variety of financial services, such as your personal IBAN, international payments, currency exchange, and more. Registering for a sterling business account is fast and straightforward, enabling you to effectively manage your finances.
    </p>
    
  </div></div>
  
  <div className='grid grid-cols-4 gap-20 pt-20'>


  <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={onePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Easily conduct bilateral transactions</h2>
<p className='text-center font-light opacity-[0.7]'>Initiate international payments swiftly with just a few clicks. Identify recipients or senders using their IBAN for seamless processing.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={twoPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Rapid transaction processing</h2>
<p className='text-center font-light opacity-[0.7]'>From sending to crediting, it typically takes no more than 4 hours. Creating a payment itself is a quick process, usually completed within 3-5 minutes.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={threePurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Secure account details
Between Businesses</h2>
<p className='text-center font-light opacity-[0.7]'>Safeguard your information by setting up regular frequency and amounts for transfers, such as sending funds to loved ones abroad within the Eurozone.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center'>
<img src={fourPurple} alt="" className='h-20 w-20 object-cover'/>
<h2 className='text-2xl text-center font-semibold'>Automate your payments</h2>
<p className='text-center font-light opacity-[0.7]'>Set up the schedule and amounts for routine transfers, such as sending money to family members in the Eurozone.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
   

  </div>





  </section>
{/* last section ends ....*/}


{/* faq section */}

<section className="flex flex-col w-full gap-5 lg:w-[70%] md:w-[90%] pb-44 widthProductLess">
  {myFaq && myFaq.map((i,index) => (
    <div
      key={index}
      className="flex border-[1px] border-[grey] p-5 rounded-xl w-full gap-10 items-center"
    >
      <img src={i.img} alt="FAQ" className="h-16 w-16 object-contain" />
      <div className="w-full">
        <div className={`flex justify-between items-center transition-all duration-300 ${openIndex=== i.id ? "pb-5":"pb-0"}`} >
          <h2 className="text-xl font-semibold">{i.ques}</h2>
          <button
            onClick={() => toggleFaq(i.id)}
            className={`bg-hover cursor-pointer duration-300 transition-all p-1 rounded-full ${
              openIndex === i.id ? "rotate-180" : "rotate-0"
            }`}
          >
            <RiArrowDropDownLine className="text-4xl" />
          </button>
        </div>
        {openIndex === i.id && (
          <p className="border-[rgba(0,0,0,0.3)] border-t-[1px] w-[80%] duration-300 pt-5 py-10 transition-all">{i.ans}</p>
        )}
      </div>
    </div>
  ))}
</section>



{/* faq section ends ......*/}





{/* 6th section */}
<section className='flex justify-between rounded-xl w-full items-center lg:w-[70%] mb-44 md:w-[70%] sec6 widthProductLess'>
  <div className='flex flex-col justify-center p-20 text-white w-full items-center'>
    <h2 className='text-5xl text-center font-bold leading-16'>Unlock more financial opportunities for your business with <span className='text-primary'>Metax's </span> business account</h2>
    <p className='text-center pb-10 pt-5'>Open a Sterling account and access a range of financial services from a single platform

    </p>
    
<button className='bg-white rounded text-black text-xl w-fit font-medium px-5 py-3'>Open Account</button>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default UkFasterPayment;
