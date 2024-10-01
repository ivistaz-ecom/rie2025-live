import React from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../utils/actions';
import Image from 'next/image'


function Intrested() {

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(openModal());
    };

    return (
        <section class="mybg  mx-auto overflow-hidden px-4"

        >
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-white  w-full text-center"

                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
            >
                <div className='my-1 p-3 px-9 text-center items-center flex-col w-full content-center' style={{ textAlign: '-webkit-center' }}>
                    <p className='text-3xl text-thin text-white font-avertalight'>Hosted by</p>
                    <Image src="/images/eo-bang-w.png" className=' my-7' width={400} height={60} />
                </div>
                <a href="#" class="bg-white text-rose-500 inline-flex justify-center hover:text-black items-center py-2 px-8 sm:ms-4 text-2xl font-normal text-center font-medium rounded-full border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 tracking-wide">
                    January 9-12, 2025
                </a>
            </div>
            <div className='text-center py-9 overflow-hidden' data-aos="zoom-out-down">
                {/* <p className='font-mbold text-3xl text-white lg:hidden'>MANY HAVE ALREADY JOINED OUR JOURNEY</p> */}
                {/* <p className='py-1 font-avertalight font-thin text-2xl text-white px-4 lg:hidden'>Apply to be the first ones to get beyond the velvet rope.</p> */}
                <p className='py-7 font-normal font-rie-blue text-6xl font-averta px-2 lg:-mt-16'>Are you on the list yet?</p>


                <button onClick={handleOpenModal} className="text-white bg-rie-pink hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-9 py-2.5 text-center me-2 mb-2 border-2">GET ACCESS</button>


                <p className='py-6 font-avertalight text-2xl text-white px-4'>Apply to be the first ones to get beyond the velvet rope.</p>
            </div>
        </section>
    )
}

export default Intrested
