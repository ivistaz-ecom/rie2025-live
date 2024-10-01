import React from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal } from '../../../utils/actions'
import Link from 'next/link'

function HomePageBanner() {
  const dispatch = useDispatch()
  const handleOpenModal = () => {
    dispatch(openModal(true))
    // dispatch(closeModal());
  }

  const isModalOpen = useSelector((state) => state.isModalOpen)

  return (
    <section className="relative -z-50">
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=""
        />
      </div>

      <div className="absolute inset-0 z-0 lg:hidden block ">
        <Image
          src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/mobile.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className=""
        />
      </div>

      <div className="relative lg:h-auto hidden">
        <nav class="transparent">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/logo.png"
                class="w-full"
                alt="EO RIE"
                width={140}
                height={60}
              />
            </Link>
            {/* modal start here */}

            <button
              onClick={handleOpenModal}
              className="z-50 text-white bg-rie-pink hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg lg:text-sm text-xs lg:px-9 lg:py-2.5 py-1 px-1 text-center me-2 mb-2 border-2"
            >
              GET ACCESS{' '}
            </button>
            {/* modal end here */}
            {/* {isModalOpen.toString()} */}
          </div>
        </nav>
      </div>
      <div className="hidden lg:block">
        <div
          className="flex w-full absolute overflow-hidden"
          data-aos="fade-up"
        >
          <div className="flex-1">
            <Image
              src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/top-left-circle.svg"
              width={300}
              height={200}
              className="-ml-24"
            />
          </div>
          <div className="content-end">
            <Image
              src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/top-right-circle.svg"
              width={350}
              height={200}
              className="-mr-44"
            />
          </div>
        </div>
      </div>
      <div
        class="lg:px-4 mx-auto max-w-screen-xl text-white text-center py-12 lg:py-20  lg:text-7xl lg:pb-24 lg:pt-1 lg:mt-0 font-extrabold font-mblack z-50 -mt-20 pb-30 pt-20 pb-40 mt-0 md:mb-20"
        data-aos="flip-right"
      >
        {/* <div class="lg:px-4 mx-auto max-w-screen-xl text-center lg:-mb-6 -mt-12">
        <h1 class="lg:mb-4 text-4xl font-normal tracking-tight leading-none  md:text-5xl lg:text-7xl font-averta text-rie-yellow sm:text-6xl md:text-6xl xs:text-6xl">EO RIE</h1>
        <p class="lg:mb-8 text-lg font-normal text-gray-300 lg:text-6xl sm:px-16 lg:px-48 font-alexa lg:-mt-10 lg:ml-20 sm:-mt-4 sm:text-6xl md:-mt-4 md:text-6xl xs:-mt-4 xs:text-6xl">South Asia</p>
        
    </div> */}
        <div className="mt-36 mb-10 lg:mt-80 lg:mb-28 md:mt-40">
          <h1 className="lg:text-7xl text-4xl md:text-6xl">
            Think
            <br />
            You’ve Got
          </h1>
          <p className="lg:text-5xl text-2xl md:text-4xl font-msemibold">
            What It Takes?
          </p>
          <p className="lg:text-4xl text-xl md:text-4xl font-avertalight text-rie-yellow">
            EO 2025
          </p>
          <p className="lg:text-4xl text-xl md:text-4xl font-avertalight">
            South Asia RIE
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePageBanner
