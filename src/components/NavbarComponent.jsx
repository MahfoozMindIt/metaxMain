import React, { useState } from 'react';

import logo from '../assets/Logo.png';

import { Link } from 'react-router-dom';


const navbarComponent = () => {

const[showProducts,setShowProducts]=useState(false);




    return (
    <div className='w-full flex flex-col items-center  font-primary '>
<section className='w-full  flex items-center flex-col  text-white'>
         {/* navBar */}
         <nav className='flex justify-between items-center w-full '>
<img src={logo} alt="" className=''/>
<ul className='flex items-center gap-10'>
    
 <Link to='/'>
    <li>Home</li></Link>
   <li className=' relative'>
   <button onMouseEnter={()=>setShowProducts(!showProducts)}  className='cursor-pointer'>Products</button>
    {showProducts && (<div onMouseLeave={()=>setShowProducts(!showProducts)}  className='bg-white shadow-sm shadow-primary rounded-xl absolute top-10 -left-50 text-black h-[200px] w-[500px] flex justify-between'>
      <div className='w-[45%] flex flex-col gap-5 mt-5'>
<div className='w-full flex justify-center border-l-4 border-white hover:border-primary hover:text-primary hover:font-bold transition-all duration-200'><Link>AED Payments</Link></div>
<div className='w-full flex justify-center border-l-4 border-white hover:border-primary hover:text-primary hover:font-bold transition-all duration-200'>
<Link>SEPA Payments</Link></div>
<div className='w-full flex justify-center border-l-4 border-white hover:border-primary hover:text-primary hover:font-bold transition-all duration-200'>
<Link>UK Faster Payments</Link></div>
<div className='w-full flex justify-center border-l-4 border-white hover:border-primary hover:text-primary hover:font-bold transition-all duration-200'>
<Link>USD Payments</Link></div>
      </div>
      <div className='w-[45%] flex flex-col gap-5 mt-5'>
<div className='w-full flex justify-center border-r-4 border-white hover:border-primary hover:text-primary hover:font-bold transition-all duration-200'><Link>Bulk Payouts</Link></div>
<div className='w-full flex justify-center border-r-4 border-white hover:border-primary hover:text-primary hover:font-bold transition-all duration-200'>
<Link>Apple Pay</Link></div>
<div className='w-full flex justify-center border-r-4 border-white hover:border-primary hover:text-primary hover:font-bold transition-all duration-200'>
<Link>Metax MObile App</Link></div>
<div className='w-full flex justify-center border-r-4 border-white hover:border-primary hover:text-primary hover:font-bold transition-all duration-200'>
<Link>Metax Cards</Link></div>
      </div>
    </div>)}
   </li>
       <Link to='/business'> <li>Business</li></Link>
  
            <Link to='/personal'> <li>Personal</li></Link>
    <li>Blog</li> 
    <Link to='/about'>
    
    <li>About Us</li></Link>
    <Link to='/contact'>
    
    <li>Contact Us</li></Link> 
</ul>

<div className='flex items-center gap-7'>
    <button className='bg-primary py-2 px-5 rounded'>Login</button>
    <button className='bg-white text-primary font-medium py-2 px-5 rounded'>Sign Up</button>
</div>
</nav></section></div>
  )
}

export default navbarComponent
