import React from 'react';
import rv1 from '../assets/rv1.png';

const Details = () => {
  return (
    <>
      <div className="w-full flex items-center bg-gradient-to-r from-zinc-950 to-zinc-800 justify-center">
        <div className='
          w-full max-w-[1600px] items-center lg:py-24 text-white justify-center px-8 lg:px-20 gap-5 md:gap-0 py-10 flex flex-col '>

          <div className="w-[90%] items-center flex flex-col justify-center py-20 gap-5">
            <div className="flex w-full items-start">
              <h1 className='text-5xl herofont tracking-wide leading-tight text-zinc-100 w-4/5'>
                Discover the ultimate event management solution designed to streamline your events and enhance attendee experiences.
              </h1>
            </div>

            <div className="w-full flex py-24 gap-7">
              <div className="w-1/2 flex flex-col">
                <h1 className="text-5xl py-10 herofont w-full px-5 text-start">
                  Event Registration
                </h1>
                <p className="text-lg w-full px-5 text-start">
                  Create custom registration forms and collect attendee information with ease.
                  Create custom registration forms and collect attendee information with ease.
                </p>
                <button className="w-1/3 bg-white hover:bg-zinc-300 transition-all text-black rounded-2xl p-2 m-5">
                  Get Started
                </button>
              </div>
              <div className="w-1/2 items-center flex border-2 border-white rounded-2xl">
                <img src={rv1} alt="rv1" className="w-full rounded-2xl" />
              </div>
            </div>
            <div className="w-full flex gap-7">
              <div className="w-1/2 items-center flex border-2 border-white rounded-2xl">
                <img src={rv1} alt="rv1" className="w-full rounded-2xl" />
              </div>
              <div className="w-1/2 flex flex-col items-end">
                <h1 className="text-5xl py-10 herofont w-full px-5 text-end">
                  Event Registration
                </h1>
                <p className="text-lg w-full px-5 text-end">
                  Create custom registration forms and collect attendee information with ease.
                  Create custom registration forms and collect attendee information with ease.
                </p>
                <button className="w-1/3 bg-white hover:bg-zinc-300 transition-all text-black rounded-2xl p-2 m-5">
                  Get Started
                </button>
              </div>
            </div>



            <h1 className="text-xl w-full text-center">
              More Features ?
            </h1>
            {/* <div className="w-full items-center p-2 gap-4 flex">
            <div className="w-1/3 items-center flex rounded-2xl p-44 bg-pink-200"></div>
            <div className="w-1/3 items-center flex rounded-2xl p-44 bg-pink-200"></div>
            <div className="w-1/3 items-center flex rounded-2xl p-44 bg-pink-200"></div>
          </div> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Details