import React from 'react'
import Faqs from '../Faqs/faqs'
import Payments from '../Faqs/payments'
import Others from '../Faqs/others'

function page() {
  return (
    <>
    <div class="bg-rie-dark" >
      <h2 className='py-2 text-4xl text-center font-mblack text-white'>Frequently asked questions</h2>
          {/* <Faqs />
          <Payments /> */}
        
      </div>
      <div class="bg-center bg-no-repeat bg-[url('/images/center.svg')] bg-cover bg-blend-multiply">
        {/* <Others /> */}
        
        <Faqs />  
      </div>
      
    </>
  )
}

export default page
