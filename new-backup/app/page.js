'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Header from '../components/Header'
import Banner from '../components/HomePage/Banner/pages'
import Subscribe from '../components/HomePage/Banner/EventButtons'
import EventButtons from "../components/HomePage/Banner/EventButtons";
import EventsLocation from '../components/events'
import SpeakersProfile from '../components/Speakers/Profiles'
import Intrested from "@/components/intrested";
import Checkout from '../components/checkout'
import Speakers from '../components/Speakers/speakers'
import Faqs from '../components/Faqs/page'
import Footer from '../components/footer'
import Utils from '../utils/ContactForm'
import Payment from '../components/Faqs/payments'
import AOS from "aos";
import "aos/dist/aos.css"; // You can include the CSS or customize it according to your project's styling

import { Provider } from 'react-redux';
import store from '../utils/store';

export default function Home() {

  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false // Whether animation should only happen once
    });
  }, []);



  return (

    <>



      <Provider store={store}>
        <div>
          <Header/>
          <Banner />

          <EventButtons />
          <EventsLocation />

          <Intrested />
  
          <Utils />
        </div>
      </Provider>
      <Speakers />
      <Checkout />
      <Payment/>
          
          <Footer />

          {/* <Faqs /> */}
          





    </>


  );
}
