'use client'
import React from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal } from '../utils/actions'
import Link from 'next/link'

function HomePageBanner() {
  const dispatch = useDispatch()
  const handleOpenModal = () => {
    dispatch(openModal(true))
    // dispatch(closeModal());
  }

  const isModalOpen = useSelector((state) => state.isModalOpen)

  return (
    <section className="relative bg-rie-dark">
      <div className="relative z-10">
        <nav class="transparent z-50">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/logo.svg"
                class="w-28 lg:w-2/4"
                alt="EO RIE"
                width={100}
                height={60}
              />
            </Link>
            {/* modal start here */}

            {/* <button onClick={handleOpenModal} className="z-50 text-white bg-rie-pink hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg lg:text-sm text-xs lg:px-9 lg:py-2.5 py-1 px-1 text-center me-2 mb-2 border-2" >GET ACCESS </button> */}
            {/* modal end here */}
            {/* {isModalOpen.toString()} */}
          </div>
        </nav>
      </div>
    </section>
  )
}

export default HomePageBanner
