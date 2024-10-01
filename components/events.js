import React from 'react'
import Image from 'next/image'

function events() {
  return (
    <>
      <div
        class="mybg justify-center text-white lg:text-4xl text-3xl py-7 px-8 -mb-0 text-center font-msemibold overflow-hidden z-50 lg:mt-20"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <p>Curated for</p>
        <p>Game Changers, Trailblazers, and Visionaries.</p>
      </div>

      {/* <section class="bg-center bg-no-repeat bg-[url('/images/banner2.png')] bg-cover bg-blend-multiply grid content-end overflow-hidden"> */}
      <section
        className="relative overflow-hidden lg:mt-10 lg:pt-40 -mt-64 pt-96 -z-50"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className=" inset-0 z-0 hidden lg:block">
          <Image
            src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/banner2.png"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="absolute inset-0 -z-50 pt-80 -mt-74 lg:mt-0 lg:hidden">
          <Image
            src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/mobile2.jpg"
            alt="Banner"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="relative z-10 mx-auto text-white flex-row w-full content-end pt-0 lg:mt-56 mt-80 ">
          {/* <div class=" mx-auto text-white flex-row w-full content-end pt-80 mt-80"> */}
          <div className="hidden lg:block ">
            <div className="flex w-full absolute overflow-hidden ">
              <div
                className="flex-1"
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
              >
                <Image
                  src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/left-center.svg"
                  width={400}
                  height={200}
                  className="-ml-24"
                />
              </div>
              <div
                className="content-end"
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
              >
                <Image
                  src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/RIE2025/right-center.svg"
                  width={450}
                  height={200}
                  className="-mr-44"
                />
              </div>
            </div>
          </div>

          <div className="text-center py-7 font-mbold font-bold px-2 lg:mt-96 lg::mybgtrans mymobilrbgtrans">
            <h2 className="lg:text-5xl text-4xl font-mbold font-bold py-4 text-amber-400">
              Can you keep a secret?
            </h2>
            <p className="lg:text-xl text-1xl text-white font-avertalight ">
              We&apos;re about to embark on an extraordinary journey to an
              exclusive gathering
              <br />
              with changemakers from across geographies.
            </p>
            <br />
            <p className="lg:text-xl text-1xl text-white font-avertalight ">
              Prepare for a 3-day event packed with deep-dive learning and
              networking
              <br /> opportunities. Make new connections and renew existing
              ones. Gear up for{' '}
            </p>
            <p className="lg:text-xl text-1xl text-white font-avertalight">
              spectacular socials and specially curated MyEO experiences
            </p>
          </div>

          <div className="text-center py-7 font-avertalight px-2 bg-rie-dark ">
            <h2 className="lg:text-5xl text-4xl font-mbold font-bold py-4 text-rie-pink">
              What to look forward to?
            </h2>
            <p className="lg:text-xl text-1xl text-white font-avertalight">
              From speakers to peers, experts to friends, leaders to tycoons,
              <br /> acquire learning rooted in storytelling.
            </p>
            <br />
            <p className="lg:text-xl text-1xl text-white font-avertalight">
              Get ready to be moved and motivated by tales that push the
              <br /> boundaries of imagination.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default events
