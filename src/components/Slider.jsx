import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { PiRocketLaunchFill } from "react-icons/pi";
import "../styles/Swiper.css";
import { RiGlobalFill } from "react-icons/ri";
import a1 from "../assets/a1.png"
import a2 from "../assets/a2.png"
import a3 from "../assets/a3.png"
import a4 from "../assets/a4.png"
import a5 from "../assets/a5.png"
import a6 from "../assets/a6.png"

import { FaWallet } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { TbCloudNetwork } from "react-icons/tb";
import { LuWorkflow } from "react-icons/lu";
import { BsCurrencyExchange } from "react-icons/bs";


export default function App() {
  return (
   <div className="swiperMain pt-24">
     <Swiper
      effect="coverflow"
      centeredSlides={true} // Centers the active slide
      loop={true} // Infinite loop
      autoplay={{
        delay: 1500, // Auto-slide every 2 seconds
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 5, // No rotation
        stretch: 1, // Controls spacing between slides
        depth: 5, // Creates 3D depth effect
        modifier: 50, // Adjusts zoom strength
        slideShadows: false, // No shadow effect
      }}  breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024:{
            
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440:{
            
          slidesPerView: 2.2,
          spaceBetween: 30,
        }, 
        2560:{
            
            slidesPerView: 1.8,
            spaceBetween: 30,
          }
      }}
      onSlideChange={() => console.log("Slide changed")}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper"
    >
      
      <SwiperSlide><div className='bg1 slide-content'>
     <section className="flex flex-col items-center border-[1px] border-primary justify-center gap-10 h-full p-5 px-14" style={{borderRadius:"7%"}}>
   <PiRocketLaunchFill className="text-9xl"/>

   <h2 className="text-3xl font-bold text-center">
   Fast and Reliable
   </h2>
   <p className="text-center font-light text-xl opacity-[0.7]">Expand into new global markets with ease using our fast and reliable payment solutions.</p>
     </section>

        </div></SwiperSlide>
        <SwiperSlide><div className='bg1 slide-content'>
     <section className="flex flex-col items-center   border-[1px] border-primary justify-center gap-10 h-full p-5 px-14" style={{borderRadius:"7%"}}>
     <RiGlobalFill className="text-9xl"/>
   <h2 className="text-3xl font-bold text-center">
   Over 50 Countries 
   </h2>
   <p className="text-center font-light text-xl opacity-[0.7]">Send payments to over 50 countries, unlocking new opportunities and building strong global partnerships.</p>
     </section>

        </div></SwiperSlide>
        <SwiperSlide><div className='bg1 slide-content'>
     <section className="flex flex-col items-center   border-[1px] border-primary justify-center gap-10 h-full p-5 px-14" style={{borderRadius:"7%"}}>
     <MdElectricBolt className="text-9xl"/>
   <h2 className="text-3xl font-bold text-center">
   Fast Transfers 
   </h2>
   <p className="text-center font-light text-xl opacity-[0.7]">Enjoy same-day and next-business-day transfers that keep your business ahead.</p>
     </section>

        </div></SwiperSlide>
        <SwiperSlide><div className='bg1 slide-content'>
     <section className="flex flex-col items-center   border-[1px] border-primary justify-center gap-10 h-full p-5 px-14" style={{borderRadius:"7%"}}>
     <TbCloudNetwork className="text-9xl"/>
   <h2 className="text-3xl font-bold text-center">
   Global Network
   </h2>
   <p className="text-center font-light text-xl opacity-[0.7]">Increase your reach and improve your treasury management using our global network.</p>
     </section>

        </div></SwiperSlide>
        <SwiperSlide><div className='bg1 slide-content'>
     <section className="flex flex-col items-center   border-[1px] border-primary justify-center gap-10 h-full p-5 px-14" style={{borderRadius:"7%"}}>
     <LuWorkflow className="text-9xl"/>
   <h2 className="text-3xl font-bold text-center">Optimal Financial Workflow
   </h2>
   <p className="text-center font-light text-xl opacity-[0.7]">We're bridging access between traditional and innovative payment rails under the same platform to ensure an optimal financial workflow.</p>
     </section>

        </div></SwiperSlide>
        <SwiperSlide><div className='bg1 slide-content'>
     <section className="flex flex-col items-center   border-[1px] border-primary justify-center gap-10 h-full p-5 px-14" style={{borderRadius:"7%"}}>
     <BsCurrencyExchange className="text-9xl"/>
   <h2 className="text-3xl font-bold text-center">11 Major Currencies
   </h2>
   <p className="text-center font-light text-xl opacity-[0.7]">Effortlessly receive and hold funds in 11 major currencies, offering you the flexibility to operate internationally.</p>
     </section>

        </div></SwiperSlide>
    </Swiper>
   </div>
  );
}
