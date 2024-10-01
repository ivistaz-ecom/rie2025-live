import React from 'react'
import Image from 'next/image'
import { LiaFacebookSquare } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import Link from 'next/link';


function footer() {
    return (
        <>
            <footer class="pt-20 bg-center bg-no-repeat bg-[url('/images/footer.svg')] bg-cover bg-blend-multiply grid content-end overflow-hidden">
                <div class="w-full max-w-screen-xl mx-auto p-4 pt-24">
                    <div className='flex-1 content-center text-white text-center'>
                        <p className='text-4xl font-normal font-averta text-white'>Contact us at</p>
                        <Link className='text-3xl font-normal font-avertalight' href="mailto:rie@eobangalore.com">rie@eobangalore.com</Link>
                        <hr className='my-5 w-4/5 mx-auto' />
                    </div>
                    <div class="py-1 text-center">

                        <span class="block text-sm text-white font-avertalight sm:text-center dark:text-gray-400">© EO RIE 2025.</span>
                        <div>


                        </div>
                    </div>


                </div>
            </footer>




        </>

    )
}

export default footer
