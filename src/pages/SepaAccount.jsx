import React, { Fragment, useState } from 'react';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import aedRight from '../assets/aedRight.png'
import aedLeft from '../assets/aedLeft.png'
import threePurple from '../assets/03purple.png'
import fourPurple from '../assets/04 purple.png'
import fivePurple from '../assets/05purple.png'
import sixPurple from '../assets/06purple.png'
import NavbarComponent from '../components/NavbarComponent';
import { RiArrowDropDownLine } from 'react-icons/ri';

const SepaAccount = () => {
  const [openIndex , setOpenIndex]=useState(null);


  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const myFaq = [{
    id:1,
    ques:"How do I pay a SEPA transfer?",
    ans:"As of early 2023, the list of EU regions not included in SEPA includes Northern Cyprus, Faroe Islands and Greenland, French Southern, and Antarctic Territories, French Polynesia, New Caledonia and Wallis and Futuna, Aruba, Caribbean Netherlands, Curacao and St. Maarten, Svalbard and Jan Mayen, British Overseas Territories, excluding Gibraltar and Crown Dependencies.",
    img:onePurple
  },{
    id:2,
    ques:"How do I pay a SEPA transfer?",
    ans:"As of early 2023, the list of EU regions not included in SEPA includes Northern Cyprus, Faroe Islands and Greenland, French Southern, and Antarctic Territories, French Polynesia, New Caledonia and Wallis and Futuna, Aruba, Caribbean Netherlands, Curacao and St. Maarten, Svalbard and Jan Mayen, British Overseas Territories, excluding Gibraltar and Crown Dependencies.",
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
SEPA Account
</h1>
<p className='text-center opacity-[0.8]'>Efficient and secure money transfers within the Eurozone or between residents of other countries. Enjoy straightforward registration, minimal fees, and instantaneous transactions by opening an account in the SEPA payment system through Metax.
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
    <h1 className='text-4xl font-semibold leading-12'>
    To initiate a payment through SEPA transfer, you'll need to:
    </h1>
    <p>
    This process typically takes approximately 3-5 minutes to complete. Subsequently, the SEPA transfer operation itself may require up to 4 hours to be processed.
    </p>
  <img src={aedLeft} alt="" className='w-fit'/>
  </div>
  <div className='w-[48%]'>
    
  <img src={aedRight} alt="" className=''/>
  </div>
  
  </section>
</main>


{/* 2nd section ends ..... */}


{/* last section */}
<section className='xl:w-[70%] lg:w-[80%] w-[90%] widthProductLess flex-col flex items-center justify-between pb-52 pt-10



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>Benefit from unique features of SEPA transfers within Metax</h1>
    <p className='text-center w-[70%] font-light py-5'>Seamlessly utilize all functionalities of the SEPA payment method directly through the platform. Additionally, save both time and money by leveraging Metax for your transactions.
    </p>
    
  </div></div>
  
  <div className='grid grid-cols-3 gap-20 pt-20'>


  <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={onePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Easily conduct bilateral transactions</h2>
<p className='text-center font-light opacity-[0.7]'>Initiate international payments swiftly with just a few clicks. Identify recipients or senders using their IBAN for seamless processing.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={twoPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Rapid transaction processing</h2>
<p className='text-center font-light opacity-[0.7]'>From sending to crediting, it typically takes no more than 4 hours. Creating a payment itself is a quick process, usually completed within 3-5 minutes.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={threePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Secure account details
Between Businesses</h2>
<p className='text-center font-light opacity-[0.7]'>Safeguard your information by setting up regular frequency and amounts for transfers, such as sending funds to loved ones abroad within the Eurozone.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center'>
<img src={fourPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Automate your payments</h2>
<p className='text-center font-light opacity-[0.7]'>Set up the schedule and amounts for routine transfers, such as sending money to family members in the Eurozone.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={fivePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Minimal fees</h2>
<p className='text-center font-light opacity-[0.7]'>You won't encounter additional charges or taxes from financial or government institutions. Our service fee is a low percentage of the transaction amount.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={sixPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Seamless experience</h2>
<p className='text-center font-light opacity-[0.7]'>Conducting a financial transaction requires only the recipient's IBAN, financial institution identification code, and full name. With this information, you can transfer money effortlessly.
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
    <h2 className='text-5xl text-center font-bold leading-16'>Unlock more financial opportunities for your business with <span className='text-primary'>Metax's AED</span> business account</h2>
    <p className='text-center pb-10 pt-5'>Talk directly to our dedicated banking expert to get your final offer

    </p>
    
<button className='bg-white rounded text-black text-xl w-fit font-medium px-5 py-3'>Open Account</button>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default SepaAccount;
