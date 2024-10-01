'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can include the CSS or customize it according to your project's styling

import { Provider } from 'react-redux'
import store from '../../utils/store'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import Contact from './contact'
import Utils from '../../utils/ContactForm'

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false, // Whether animation should only happen once
    })
  }, [])

  return (
    <>
      <Provider store={store}>
        <div>
          <Header />
          <Contact />
          <Footer />
          <Utils />
        </div>
      </Provider>
    </>
  )
}
