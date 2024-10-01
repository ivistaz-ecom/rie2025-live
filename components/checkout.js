import React from 'react'

function checkout() {
  return (
    <section class="bg-rie-dark dark:bg-gray-900 overflow-hidden py-16 lg:py-1">
      <div
        class="py-1 px-4 mx-auto max-w-screen-xl text-center lg:py-16 mycenter"
        data-aos="zoom-out-up"
      >
        {/* <iframe  src="https://www.youtube.com/embed/GxcEGUBcxhE" title="BLUE EYES 2 - YO YO HONEY SINGH &amp; JASMINE SANDLAS ( MUSIC VIDEO ) PROD. BEAT UNLOCK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <h1 class=" mb-4 text-3xl font-normal tracking-tight leading-none text-white md:text-5xl lg:text-4xl font-mblack dark:text-white">
          Checkout Our Past Events
        </h1>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="http://riekol.com/"
            class="text-white bg-rie-pink hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg inline-flex justify-center hover:text-rie-pink items-center py-5 px-12 sm:ms-4 text-4xl font-thin text-center text-white rounded-full border-2 border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 tracking-wide"
          >
            RIE KOLKATA
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          {/* <a href="#" class="text-white bg-rie-pink hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg inline-flex justify-center hover:text-rie-pink items-center py-5 px-12 sm:ms-4 text-4xl font-thin text-center text-white rounded-full border-2 border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 tracking-wide">
          RIE GURGOAN
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
          </a> */}
        </div>
      </div>
    </section>
  )
}

export default checkout
