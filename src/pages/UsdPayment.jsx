import React, { Fragment, useState } from 'react';
import "../styles/home.css";
import onePurple from '../assets/01purple.png'
import twoPurple from '../assets/02purple.png'
import UsdRight from '../assets/UsdRight.png'
import aedLeft from '../assets/aedLeft.png'
import threePurple from '../assets/03purple.png'
import fourPurple from '../assets/04 purple.png'
import fivePurple from '../assets/05purple.png'
import sixPurple from '../assets/06purple.png'
import NavbarComponent from '../components/NavbarComponent';
import { RiArrowDropDownLine } from 'react-icons/ri';

const UsdPayment = () => {
  const [openIndex , setOpenIndex]=useState(null);


  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const myFaq = [{
    id:1,
    ques:"How do I send money with USD?",
    ans:"As of early 2023, the list of EU regions not included in SEPA includes Northern Cyprus, Faroe Islands and Greenland, French Southern, and Antarctic Territories, French Polynesia, New Caledonia and Wallis and Futuna, Aruba, Caribbean Netherlands, Curacao and St. Maarten, Svalbard and Jan Mayen, British Overseas Territories, excluding Gibraltar and Crown Dependencies.",
    img:onePurple
  },{
    id:2,
    ques:"Can a USD transfer be tracked?",
    ans:"Absolutely. Using IBAN and internal SWIFT tools, you receive up-to-date information on the flow of funds between the source and target cards.",
    img:twoPurple
  },{
    id:3,
    ques:"Who uses USD transfer?",
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
USD Payments Account
</h1>
<p className='text-center opacity-[0.8]'>Experience all the advantages of USD money transfers with a single Metax account. Send and receive money without restrictions, track transactions seamlessly, and manage your funds effortlessly. Use the system to organize payments, handle partnerships, and more.
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
    <h1 className='text-4xl font-semibold leading-12'>Sending money via USD with Metax is fast, reliable, and incredibly easy.
    </h1>
    <p>Send USD payments online without risks. With a Metax account, you gain maximum opportunities, modern financial protection, and complete control over every transaction. Thanks to the platform's features, you can:
    </p>
  <img src={aedLeft} alt="" className='w-fit'/>
  </div>
  <div className='w-[48%]'>
    
  <img src={UsdRight} alt="" className=''/>
  </div>
  
  </section>
</main>


{/* 2nd section ends ..... */}


{/* last section */}
<section className='xl:w-[70%] lg:w-[80%] w-[90%] widthProductLess flex-col flex items-center justify-between pb-52 pt-10



'>
<div className='text-center w-full'>
 <div className='flex flex-col justify-center w-full gap-5 items-center'>
    <h1 className='text-6xl text-center font-semibold leading-20'>Experience the best aspects of USD transfers with Metax</h1>
    <p className='text-center w-[70%] font-light py-5'>Do you want the ability to quickly and conveniently use the USD send feature anytime, anywhere? It's possible with the Metax platform. With just one account, you can easily send or receive funds vi
    </p>
    
  </div></div>
  
  <div className='grid grid-cols-3 gap-20 pt-20'>


  <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={onePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Tracking USD transfers online</h2>
<p className='text-center font-light opacity-[0.7]'>The entire transaction path is displayed on a single screen. Thanks to the IBAN, you can precisely track where your funds are and when they will reach the target account.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={twoPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Unique USD payment ID</h2>
<p className='text-center font-light opacity-[0.7]'>You can obtain virtually any ID on the platform by submitting the necessary documents when registering an account.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={threePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Convenient international USD payments</h2>
<p className='text-center font-light opacity-[0.7]'>You can conduct financial transactions between registered users of the platform and with other entities using the IBAN.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center'>
<img src={fourPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Diverse account options</h2>
<p className='text-center font-light opacity-[0.7]'>When registering, you can select the account type (personal or business), as well as the region of operation, payment details, and other relevant options.
</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={fivePurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Minimal account details required for transactions</h2>
<p className='text-center font-light opacity-[0.7]'>When specifying a recipient, you only need to provide one type of identifier (if available in the system), such as an IBAN, full name, or ID.

</p>

<button className='bg-primary rounded text-white w-fit px-5 py-2'>Open Account</button>

    </div>
    <div className='flex flex-col border-[1px] border-primary justify-center p-5 rounded-xl box gap-7 items-center py-10'>
<img src={sixPurple} alt="" className='h-20 w-20 object-contain'/>
<h2 className='text-2xl text-center font-semibold'>Competitive fees</h2>
<p className='text-center font-light opacity-[0.7]'>Transactions are subject to minimal taxes, similar to those in SEPA, and typically do not exceed €1 per transaction, regardless of the amount..
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
    <h2 className='text-5xl text-center font-semibold leading-16'>Discover a convenient way to conduct financial transactions with your Metax account!</h2>
    <p className='text-center pb-10 pt-5'>Experience fast and convenient USD payments with a Metax account! Signing up offers numerous benefits, such as a universal ID and support for various payment cards. Utilize these features to minimize the risks associated with money transfers and 
    accelerate your transactions

    </p>
    
<button className='bg-white rounded text-black text-xl w-fit font-medium px-5 py-3'>Open Account</button>
  </div>
</section>
{/* 6th section ends ...*/}




       </div>

  )
}

export default UsdPayment;
