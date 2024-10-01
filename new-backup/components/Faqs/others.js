import React from 'react'


function Payments() {


    const others = [
        { 'id': 11, 'title': 'What are the payment options avaiable?', 'desc': 'hhelo desc' },
        { 'id': 12, 'title': 'What are the cancellation terms of my RIE 2024 registration?', 'desc': 'hhelo desc' },
        { 'id': 13, 'title': 'What happens if I don’t get an Indian Visa?', 'desc': 'hhelo desc' },
        { 'id': 14, 'title': 'I am a new member. Can I use my Event Discount Voucher for RIE?', 'desc': 'hhelo desc' },
        { 'id': 15, 'title': 'How do I register for Break Out / Deep Dive Learning Sessions?', 'desc': 'hhelo desc' },
        { 'id': 16, 'title': 'Can I change my Break Out / Deep Drive Learning track?', 'desc': 'hhelo desc' },
    ]



    return (
        <>
            <div className='lg:px-60 pt-20'>


                <div className='container mx-auto p-4 '>
                    <h2 className='text-2xl bg-rie-yellow text-black py-6 px-4 font-mbold'>OTHERS</h2>
                    <div id="accordion-flush-3" data-accordion="collapse" data-active-classes="bg-black dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-black dark:text-gray-400">
                    

                        {
                            others.map((items, index) => (

                                <>
                                    <h2 id={`accordion-flush-heading-${items.id}`} key={index}>
                                    <button type="button" class="bg-rie-lightyellow flex items-center justify-between w-full font-avertalight py-5 px-5 text-xl rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target={`#accordion-flush-body-${items.id}`} aria-expanded="false" aria-controls={`accordion-flush-body-${items.id}`}>
                                            <span>{items.title}</span>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id={`accordion-flush-body-${items.id}`} class="hidden" aria-labelledby={`accordion-flush-heading-${items.id}`}>
                                        <div class="py-5 border-b border-gray-200 dark:border-gray-700 font-avertalight text-1xl">
                                            <p class="mb-2 text-white dark:text-gray-400">{items.desc}</p>
                                            
                                        </div>
                                    </div>
                                </>

                            ))

                        }
                    </div>
                </div>



            </div>




        </>

    )
}
export default Payments
