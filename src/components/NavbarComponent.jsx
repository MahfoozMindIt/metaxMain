import React, { useState } from 'react';

import logo from '../assets/Logo.png';

import { Link } from 'react-router-dom';


const navbarComponent = () => {

const[showProducts,setShowProducts]=useState(false);
const[showIndustries,setShowIndustries]=useState(false);




    return (
    <div className='flex flex-col w-full font-primary items-center'>
<section className='flex flex-col text-white w-full items-center'>
         {/* navBar */}
         <nav className='flex justify-between w-full items-center'>
<img src={logo} alt="" className=''/>
<ul className='flex gap-10 items-center'>
    
 <Link to='/'>
    <li>Home</li></Link>
   <li className='relative'>
   <button onMouseEnter={()=>setShowProducts(!showProducts)}  className='cursor-pointer'>Products</button>
    {showProducts && (<div onMouseLeave={()=>setShowProducts(!showProducts)}  className='flex bg-white h-[200px] justify-between rounded-xl shadow-primary shadow-sm text-black w-[450px] -left-50 absolute top-10'>
      <div className='flex flex-col w-[45%] gap-5 mt-5'>
<div className='flex border-l-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary pl-7 transition-all'><Link to='/aed-account'>AED Payments</Link></div>
<div className='flex border-l-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary pl-7 transition-all'>
<Link to='/sepa-account'>SEPA Payments</Link></div>
<div className='flex border-l-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary pl-7 transition-all'>
<Link to='/gbp-account'>UK Faster Payments</Link></div>
<div className='flex border-l-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary pl-7 transition-all'>
<Link to='/usd-payment-account'>USD Payments</Link></div>
      </div>
      <div className='flex flex-col w-[45%] gap-5 mt-5'>
<div className='flex border-r-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary transition-all'><Link to='/bulk-payment'>Bulk Payouts</Link></div>
<div className='flex border-r-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary transition-all'>
<Link to='/apple-pay'>Apple Pay</Link></div>
<div className='flex border-r-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary transition-all'>
<Link to='/mobile-app'>Metax Mobile App</Link></div>
<div className='flex border-r-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary transition-all'>
<Link to='/cards'>Metax Cards</Link></div>
      </div>
    </div>)}
   </li>
       <Link to='/business'> <li>Business</li></Link>
  
            <Link to='/personal'> <li>Personal</li></Link>
            
   <li className='relative'>
   <button onMouseEnter={()=>setShowIndustries(!showIndustries)}  className='cursor-pointer'>Industries</button>
    {showIndustries && (<div onMouseLeave={()=>setShowIndustries(!showIndustries)}  className='flex bg-white h-[200px] justify-between rounded-xl shadow-primary shadow-sm text-black w-[450px] -left-50 absolute top-10'>
      <div className='flex flex-col w-[45%] gap-5 mt-5'>
<div className='flex border-l-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary pl-7 transition-all'><Link to='/ecommerce'>Ecommerce</Link></div>
<div className='flex border-l-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary pl-7 transition-all'>
<Link to='/sepa-account'>SEPA Payments</Link></div>
<div className='flex border-l-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary pl-7 transition-all'>
<Link to='/gbp-account'>UK Faster Payments</Link></div>
<div className='flex border-l-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary pl-7 transition-all'>
<Link to='/usd-payment-account'>USD Payments</Link></div>
      </div>
      <div className='flex flex-col w-[45%] gap-5 mt-5'>
<div className='flex border-r-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary transition-all'><Link to='/bulk-payment'>Bulk Payouts</Link></div>
<div className='flex border-r-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary transition-all'>
<Link to='/apple-pay'>Apple Pay</Link></div>
<div className='flex border-r-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary transition-all'>
<Link to='/mobile-app'>Metax Mobile App</Link></div>
<div className='flex border-r-4 border-white justify-start w-full duration-200 hover:border-primary hover:font-bold hover:text-primary transition-all'>
<Link to='/cards'>Metax Cards</Link></div>
      </div>
    </div>)}
   </li>
    <li>Blog</li> 
    <Link to='/about'>
    
    <li>About Us</li></Link>
    <Link to='/contact'>
    
    <li>Contact Us</li></Link> 
</ul>

<div className='flex gap-7 items-center'>
    <button className='bg-primary rounded px-5 py-2'>Login</button>
    <button className='bg-white rounded text-primary font-medium px-5 py-2'>Sign Up</button>
</div>
</nav></section></div>
  )
}

export default navbarComponent
