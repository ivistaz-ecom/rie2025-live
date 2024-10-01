'use client'
import React, { useState, useRef, useEffect } from "react";
import PartnersSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

function Partners() {

    var setting = {
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 1,
    fade: false,
    autoplay: false,
      arrow: false,
      dots: false,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: false,
            dots: false,
            arrow: false,
            arrow: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
          }
        }
      ]
   
  };

  return (
    <>

          

          <div className='text-center py-4'>
<h1 className="text-5xl font-trirong font-light">OUR BANKING PARTNERS</h1>
              <div className='my-3'>
            <div className="container mx-auto" >
              
              <PartnersSlider {...setting} >
                {/* Your slides go here */}
                        {/* <div><Image src="/investment/swasti.png" className="img-fluid" width={250} height={150}/></div>
                          <div><Image src="/investment/vruti.png" className="img-fluid" width={250} height={150}/></div>
                          <div><Image src="/investment/gf.png" className="img-fluid" width={250} height={150} /></div>
                          <div><Image src="/investment/fuzhio.png" className="img-fluid" width={250} height={150} /></div>
                          <div><Image src="/investment/upfront.svg" className="img-fluid" width={250} height={150} /></div>
                          <div><Image src="/investment/cms.png" className="img-fluid" width={250} height={150}/></div> */}
        
        </PartnersSlider>
            </div>
            
                
                    
                   
                </div>

            </div>
            </>
  );
}

export default Partners;