import React from 'react'


function Payments() {


    const payments = [
        { 'id': 100, 'title': 'Who can attend RIE 2025?', 'desc': `RIE 2025 is open to all members & SLPs of EO and Elumni members if they are a guest of an EO Member. SLPs are welcome along with the member to attend RIE` },
        {
            'id': 200, 'title': 'What does the fee include?', 'desc': `
        <h2 class="mb-2 text-lg font-semibold dark:text-white">Registration charges include:</h2>
        <ul class="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
            <li>
            All learning events
            </li>
            <li>
            All socials
            </li>
            <li>
            All meals & drinks
            </li>
            <li>
            All transfers
            </li>
        </ul>

        <h2 class="mb-2 text-lg font-semibold dark:text-white">The charge doesn’t include</h2>
        <ul class="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
            <li>
            Airfare
            </li>
            <li>
            Visa fee
            </li>
            <li>
            Accommodation cost
            </li>
            <li>
            MyEO events
            </li>
            <li>
            Any retreats pre or post RIE
            </li>
        </ul>
        

        ` },
        { 'id': 300, 'title': 'When do I have to pay for the full registration?', 'desc': `You need to pay the full registration fee on the website to confirm your seat while registering.` },
        { 'id': 400, 'title': 'What are the payment options available?', 'desc': `You can only pay using a valid credit or debit card and you will receive immediate confirmation of your registration` },
        { 'id': 500, 'title': `What happens if I don't get Indian Visa?`, 'desc': `We urge all members who are coming to India to apply for the visa well in advance (by 1 August 2024). In any case, if you are unable to obtain Indian Visa till the last date of travel, we shall gladly refund you the full registration fee, provided you share documents substantiating that the visa was applied for before August 1, 2024.` },
        { 'id': 600, 'title': `I am a new member. Can I use my Event Discount Voucher for RIE?`, 'desc': `Details of use of Event Discount Voucher for RIE 2025 can be found on Registration Info.` },
        { 'id': 700, 'title': `Will I be staying at the same hotel where 2025 RIE is scheduled to happen?`, 'desc': `The main venue for RIE 2025 is JW Marriott Prestige Golfshire Bangalore. Rooms have been blocked here and at a neighboring Mulberry Shades for RIE attendees at pre-negotiated rates. The booking link will soon be available on this website.` },
    
    ]



    return (
        <>
            <div className='lg:px-60 pt-20'>

                <div className='container mx-auto p-4 '>
                    
                    <h2 className='text-2xl bg-rie-yellow text-black py-6 px-4 font-mbold'>UNWAVERING TRANSPARENCY</h2>
                    <div id="accordion-flush-2" data-accordion="collapse" data-active-classes="bg-black dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-black dark:text-gray-400">

                        {
                            payments.map((items, index) => (

                                <>
                                    <h2 id={`accordion-flush-heading-${items.id}`} key={index}>
                                        <button type="button" class="bg-rie-lightyellow flex text-start items-center justify-between w-full font-avertalight py-5 px-4 text-xl rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target={`#accordion-flush-body-${items.id}`} aria-expanded="false" aria-controls={`accordion-flush-body-${items.id}`}>
                                            <span>{items.title}</span>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id={`accordion-flush-body-${items.id}`} class="hidden bg-rie-yellow" aria-labelledby={`accordion-flush-heading-${items.id}`}>
                                        <div class="py-5 border-b border-gray-200 dark:border-gray-700 font-avertalight px-4 text-1xl mb-2 text-black dark:text-gray-400" dangerouslySetInnerHTML={{ __html: items.desc }}>

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
