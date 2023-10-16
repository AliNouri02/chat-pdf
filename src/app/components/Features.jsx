import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div>
      <div className="bg-[#F1EAFB] py-12">
        <div className="flex justify-center text-[24px] md:text-[64px] font-bold text-app-purple">
          <h4>Features</h4>
        </div>
        <div className="flex justify-center ml-12 md:ml-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[22px] w-[50px] md:w-[107px] md:h-[48px]"
      
            viewBox="0 0 109 52"
            fill="none"
          >
            <path
              d="M1.5 30.1233C12.9713 14.6636 50.4312 -11.0355 108.5 9.84505C85.4914 2.68411 31.8793 0.689788 1.5 50"
              stroke="#8242DF"
              strokeWidth="2.13494"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-wrap gap-x-4 justify-center gap-y-4 my-12 mx-4 2xl:mx-20">
          <div className="bg-[#B0DA87] bg-opacity-50 rounded-xl max-w-xl w-full py-4 flex flex-wrap-reverse sm:grid sm:grid-cols-2 justify-center items-center pl-8 px-4">
            <div>
              <h2 className="text-[36px] font-bold text-app-gray">
                Any Language
              </h2>
              <p className="text-[18px] text-[#555555]">
                Works worldwide! BrainyPDF accepts PDFs in any language and can
                chat in any language.
              </p>
            </div>
            <Image
              alt="Arrow"
                 width={223} 
                 height={150} 
              quality={100}
              className="h-[148px] sm:h-[219px] w-[165.8px] sm:w-[245.35px]"
              src="/assets/Frame 1171276357.png"
            />
      
          </div>
          <div className="bg-[#FE91AB] bg-opacity-70 rounded-xl max-w-xl w-full py-4 flex flex-wrap-reverse sm:grid sm:grid-cols-2  justify-center items-center pl-8 px-4">
            <div>
              <h2 className="text-[36px] font-bold text-app-gray">
                Cited Sources
              </h2>
              <p className="text-[18px] text-[#555555]">
                Answers contain references to their source in the original PDF
                document. No more flipping pages.
              </p>
            </div>
            <Image
              alt="Arrow"
              width={223}
              height={150}
              quality={100}
              className="h-[148px] sm:h-[219px] w-[165.8px] sm:w-[245.35px]"
              src="/assets/Frame 11712763572.png"
            />
          </div>
          <div className="bg-[#FFD064] bg-opacity-60 rounded-xl max-w-xl w-full py-4 flex flex-wrap-reverse sm:grid sm:grid-cols-2  justify-center items-center pl-8 px-4">
            <div>
              <h2 className="text-[36px] font-bold text-app-gray">
                Simple and Secure
              </h2>
              <p className="text-[18px] text-[#555555]">
                Fast, easy, free & secure! Files are stored in a secure cloud
                storage and will never be shared.
              </p>
            </div>
            <Image
              alt="Arrow"
              width={223}
              height={150}
              quality={100}
              className="h-[148px] sm:h-[219px] w-[165.8px] sm:w-[245.35px]"
              src="/assets/3.png"
            />
          </div>
          <div className="bg-[#E2C4FF] bg-opacity-95 rounded-xl max-w-xl w-full py-4 flex flex-wrap-reverse sm:grid sm:grid-cols-2  justify-center items-center pl-8 px-4">
            <div>
              <h2 className="text-[36px] font-bold text-app-gray">APIs</h2>
              <p className="text-[18px] text-[#555555]">
                Fast, easy, free & secure! Files are stored in a secure cloud
                storage and will never be shared.
              </p>
            </div>
            <Image
              alt="Arrow"
              width={223}
              height={150}
              quality={100}
              className="h-[148px] sm:h-[219px] w-[165.8px] sm:w-[245.35px]"
              src="/assets/4.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
