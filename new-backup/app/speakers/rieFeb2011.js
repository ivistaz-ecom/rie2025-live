'use client'
import React, { useState, useRef, useEffect } from "react";
import PartnersSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Link from 'next/link'


function speakers() {

    const Speakers = [

        { 'id': 1, 'src': '/images/speakers/marquee/speaker.png' },
        
        { 'id': 1, 'src': '/images/speakers/marquee/speaker1.png' },
        { 'id': 2, 'src': '/images/speakers/marquee/speaker2.png' },
        { 'id': 3, 'src': '/images/speakers/marquee/amitabh.png' },
        { 'id': 4, 'src': '/images/speakers/marquee/speaker4.png' },
        { 'id': 5, 'src': '/images/speakers/marquee/speaker5.png' },
        { 'id': 6, 'src': '/images/speakers/marquee/anurag-k.png' },
        { 'id': 7, 'src': '/images/speakers/marquee/anurag-thakur.png' },
        { 'id': 8, 'src': '/images/speakers/marquee/speaker8.png' },
        { 'id': 9, 'src': '/images/speakers/marquee/speaker9.png' },
        { 'id': 10, 'src': '/images/speakers/marquee/speaker10.png' },
        { 'id': 11, 'src': '/images/speakers/marquee/speaker11.png' },
        { 'id': 12, 'src': '/images/speakers/marquee/speaker12.png' },
        { 'id': 13, 'src': '/images/speakers/marquee/speaker13.png' },
        { 'id': 14, 'src': '/images/speakers/marquee/speaker14.png' },
        { 'id': 15, 'src': '/images/speakers/marquee/speaker15.png' },
        { 'id': 15, 'src': '/images/speakers/marquee/farhan.png' },
        { 'id': 16, 'src': '/images/speakers/marquee/speaker16.png' },

        { 'id': 17, 'src': '/images/speakers/marquee/speaker17.png' },
        { 'id': 18, 'src': '/images/speakers/marquee/speaker18.png' },
        { 'id': 19, 'src': '/images/speakers/marquee/kamal-hasan.png' },
        { 'id': 20, 'src': '/images/speakers/marquee/speaker20.png' },
        { 'id': 21, 'src': '/images/speakers/marquee/speaker21.png' },
        { 'id': 22, 'src': '/images/speakers/marquee/speaker22.png' },
        { 'id': 23, 'src': '/images/speakers/marquee/speaker23.png' },
        { 'id': 24, 'src': '/images/speakers/marquee/speaker24.png' },
        { 'id': 25, 'src': '/images/speakers/marquee/speaker25.png' },
        { 'id': 26, 'src': '/images/speakers/marquee/mani-r.png' },
        { 'id': 27, 'src': '/images/speakers/marquee/speaker27.png' },
        { 'id': 28, 'src': '/images/speakers/marquee/speaker28.png' },
        { 'id': 29, 'src': '/images/speakers/marquee/speaker29.png' },
        { 'id': 30, 'src': '/images/speakers/marquee/speaker30.png' },
        { 'id': 31, 'src': '/images/speakers/marquee/speaker31.png' },
        { 'id': 32, 'src': '/images/speakers/marquee/speaker32.png' },
        { 'id': 33, 'src': '/images/speakers/marquee/speaker33.png' },
        { 'id': 34, 'src': '/images/speakers/marquee/speaker34.png' },
        { 'id': 35, 'src': '/images/speakers/marquee/speaker35.png' },
        { 'id': 36, 'src': '/images/speakers/marquee/speaker36.png' },
        { 'id': 37, 'src': '/images/speakers/marquee/speaker37.png' },
        { 'id': 38, 'src': '/images/speakers/marquee/speaker38.png' },
        { 'id': 39, 'src': '/images/speakers/marquee/speaker39.png' },
        { 'id': 40, 'src': '/images/speakers/marquee/speaker40.png' },

        { 'id': 41, 'src': '/images/speakers/marquee/speaker41.png' },
        { 'id': 42, 'src': '/images/speakers/marquee/speaker42.png' },
        { 'id': 43, 'src': '/images/speakers/marquee/speaker43.png' },
        { 'id': 44, 'src': '/images/speakers/marquee/speaker44.png' },
   


    ]

    return (
<>

        <section class="bg-rie-dark dark:bg-gray-900 overflow-hidden text-center"


        >
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"

                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"

            >
                <h1 class="mb-12 text-3xl font-normal tracking-tight leading-none text-white md:text-5xl lg:text-4xl font-mblack dark:text-white">RIE Marquee Speakers</h1>

                <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
                    {
                        Speakers.map((items,index) => (

                            <div key={index}>
                                <Image src={items.src} classname="" width={400} height={400} />

                            </div>


                        ))

                    }



                </div>



            </div>
            </section>
            
</>
    )
}

export default speakers
