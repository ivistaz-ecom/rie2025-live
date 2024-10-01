'use client'
import React, { useState, useRef, useEffect } from "react";
import PartnersSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Link from 'next/link'

function speakers() {

  var setting = {
    speed: 400,
    slidesToShow: 4,
    initialSlide: 1,
    slidesToScroll: 4,
    fade: false,
    autoplay: false,
    arrow: false,
    dots: false,
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

  };



  return (


    <section class="bg-rie-dark dark:bg-gray-900 overflow-hidden text-center"
    
    
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"
      
    data-aos="fade-right"
    data-aos-anchor-placement="top-bottom"
      
      >
        <h1 class="mb-4 text-3xl font-normal tracking-tight leading-none text-white md:text-5xl lg:text-4xl font-mblack dark:text-white">Meet Our Past Speakers</h1>

        <PartnersSlider {...setting} >
          {/* Your slides go here */}
          
          <div><Image src="/images/speakers/marquee/amitabh.png" className="img-fluid" width={450} height={150} /></div>
          <div><Image src="/images/speakers/marquee/speaker.png" className="img-fluid" width={450} height={150} /></div>
          <div><Image src="/images/speakers/marquee/speaker1.png" className="img-fluid" width={450} height={150} /></div>
          <div><Image src="/images/speakers/marquee/speaker2.png" className="img-fluid" width={450} height={150} /></div>
          
        </PartnersSlider>
      </div>
      <Link href="/speakers" className="text-white font-mbold ">SEE MORE</Link>
    </section>

  )
}

export default speakers
