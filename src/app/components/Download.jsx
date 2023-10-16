import Image from 'next/image'
import React from 'react'

const Download = () => {
  return (
      <div
        className="bg-cover bg-footer-background flex flex-col md:flex-row justify-center items-center pt-10 lg:pt-20 gap-4 lg:gap-20 mt-6 px-4"
        style={{ backgroundImage: 'url("/assets/Download-Bg.svg")' }}
      >
          <Image
            alt="Picture of the author"
            width={394}
            height={429}
            quality={100}
            src="/assets/image 19.svg"
          />
        <div className=" max-w-[389px] text-center lg:text-left px-6 md:pb-0 pb-12  ">
          <h5 className="text-[24px] lg:text-3xl font-bold text-app-purple">
            <span className="text-[#555555]">Download</span> BrainyPDF Extension
          </h5>
          <p className="text-[#555555] text-lg lg:text-xl my-4">
            Extension will speed up your work 5x. Try the extension and save
            time.
          </p>
          <button className="flex bg-app-purple py-2 px-4 lg:px-8 w-full md:w-[199px] items-center gap-2 lg:gap-4 justify-center text-white rounded-full">
            <Image
              alt="Picture of the author"
              width={33}
              height={36}
              quality={100}
              className="-ml-2 lg:-ml-6"
              src="/assets/Frame 1171276360.svg"
            />
            <div className="flex md:block gap-x-2">
              <p>Download</p>
              <p>Extension</p>
            </div>
          </button>
        </div>
      </div>
  )
}

export default Download
