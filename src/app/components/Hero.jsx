import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Hero = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="">
      <div
        className="bg-right md:bg-center bg-cover bg-footer-background flex lg:h-3/4 flex-col md:flex-row justify-center items-center px-2 py-20 h-[928px]"
        style={{ backgroundImage: 'url("/assets/image 8.png")' }}
      >
        <div className="w-full max-w-2xl px-4 text-left">
          <h4 className="text-[32px] md:text-[48px] text-[#555555]">
            It's time to
          </h4>
          <h2 className="text-[48px] md:text-[64px] font-bold text-[#742DDB]">
            Chat with any PDF
          </h2>
          <p className="text-[20px] max-w-lg mb-12 md:mb-0  text text-[#333333]">
            Join millions of students, researchers and professionals to
            instantly answer questions and understand research with AI
          </p>
          <div className="justify-end mr-12 md:flex hidden -mt-10">
            <Image
              alt="Arrow"
              width={223}
              height={150}
              quality={100}
              className=""
              src="/assets/doodle (10) 1.png"
            />
          </div>
        </div>
        <div className="rounded-xl  bg-white shadow-xl w-full max-w-lg py-6 px-4">
          <div className="border-dashed border-2 border-[#AC81E9] rounded-lg p-4 flex md:flex-row flex-col  justify-center gap-x-10 py-10">
            <div className="self-center mb-6 md:mb-0  justify-self-center">
              <h3 className="text-app-purple font-bold text-[21px]">
                Upload Centre
              </h3>
              <h3 className="text-app-gray text-[17px]">
                Drag & Drop your file
              </h3>
              <h3 className="text-app-light-gray text-[14px]">
                pdf, png, jpeg
              </h3>
            </div>
            <div className="flex flex-col self-center justify-self-center w-52 md:w-56 items-center justify-center py-4 border-dashed border-2 rounded-lg border-[#AC81E9]">
              <label
                htmlFor="file-upload"
                className="cursor-pointer p-4 rounded-lg"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <g clip-path="url(#clip0_244_578)">
                    <path
                      d="M18.2536 15.8733C18.2236 15.8349 18.1852 15.8038 18.1413 15.7825C18.0974 15.7611 18.0493 15.75 18.0005 15.75C17.9517 15.75 17.9036 15.7611 17.8597 15.7825C17.8159 15.8038 17.7775 15.8349 17.7474 15.8733L13.2474 21.5666C13.2103 21.614 13.1873 21.6709 13.181 21.7307C13.1747 21.7905 13.1853 21.8509 13.2117 21.905C13.2381 21.9591 13.2792 22.0046 13.3303 22.0364C13.3814 22.0683 13.4403 22.0851 13.5005 22.0849H16.4697V31.8242C16.4697 32.001 16.6144 32.1456 16.7911 32.1456H19.2019C19.3786 32.1456 19.5233 32.001 19.5233 31.8242V22.089H22.5005C22.7697 22.089 22.9184 21.7796 22.7536 21.5706L18.2536 15.8733Z"
                      fill="#8242DF"
                    />
                    <path
                      d="M30.0295 12.1545C28.1893 7.30095 23.5004 3.84961 18.008 3.84961C12.5156 3.84961 7.82679 7.29693 5.98661 12.1505C2.5433 13.0545 0 16.1925 0 19.921C0 24.3608 3.59598 27.9568 8.0317 27.9568H9.64286C9.81964 27.9568 9.96429 27.8121 9.96429 27.6353V25.2246C9.96429 25.0478 9.81964 24.9032 9.64286 24.9032H8.0317C6.67768 24.9032 5.40402 24.3648 4.4558 23.3884C3.51161 22.4161 3.00937 21.1063 3.05357 19.7483C3.08973 18.6876 3.45134 17.6911 4.10625 16.8514C4.77723 15.9956 5.71741 15.3728 6.76205 15.0956L8.28482 14.6978L8.8433 13.2273C9.18884 12.3112 9.67098 11.4554 10.2777 10.68C10.8766 9.91138 11.5861 9.23575 12.383 8.67506C14.0344 7.5139 15.979 6.89916 18.008 6.89916C20.0371 6.89916 21.9817 7.5139 23.633 8.67506C24.4326 9.23756 25.1397 9.91256 25.7384 10.68C26.3451 11.4554 26.8272 12.3152 27.1728 13.2273L27.7272 14.6938L29.246 15.0956C31.4237 15.6822 32.9464 17.663 32.9464 19.921C32.9464 21.2509 32.4281 22.5045 31.4879 23.4447C31.0269 23.9085 30.4784 24.2762 29.8742 24.5265C29.2701 24.7769 28.6223 24.9049 27.9683 24.9032H26.3571C26.1804 24.9032 26.0357 25.0478 26.0357 25.2246V27.6353C26.0357 27.8121 26.1804 27.9568 26.3571 27.9568H27.9683C32.404 27.9568 36 24.3608 36 19.921C36 16.1965 33.4647 13.0626 30.0295 12.1545Z"
                      fill="#8242DF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_244_578">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </label>
              {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-full flex items-center my-4">
              <input
                type="text"
                className="h-[50px] w-10/12 rounded-l-md px-6 placeholder:text-[17px] placeholder:text-[#555555] appearance-none border
               border-[#AC81E9] focus:border-[#AC81E9] focus:outline-none"
                placeholder="Insert URL"
              />
              <button className="bg-app-purple rounded-r h-[50px] w-2/12 text-white text-[17px] font-bold">
                OK
              </button>
            </div>
            <h4 className="my-4 text-app-gray text-[16px] font-bold md:text-[21px]">
              Or Upload File
            </h4>
            <div className="bg-white p-2 shadow-lg rounded-lg border border-[#AC81E9]">
              <div className="w-full flex justify-between items-center bg-[#F8F4FD] rounded-lg">
                <input
                  dir="rtl"
                  id="formFileLg"
                  type="file"
                  className=" hidden file:text-app-purple"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="formFileLg"
                  className="block text-right text-[#555555] text-[17px] ml-5"
                >
                  {selectedFile ? selectedFile.name : "No file chosen"}
                </label>
                <label
                  htmlFor="formFileLg"
                  className="block text-right rounded-r-lg bg-[#ECDFFE] font-bold text-app-purple py-2 px-4"
                >
                  Choose a file
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <div className="w-44 space-y-4 mt-6">
              <button className="bg-app-purple font-bold text-white text-[17px] px-8 py-3 rounded-md">
                Try For Free
              </button>
              <p className="w-full text-center  text-[#555555]">
                No Card Needed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-0 2xl:py-8 ">
        <div className="flex justify-center items-center">
          <p className="text-4xl font-bold text-center text-[#555555] py-6">
            Used by professionals in
          </p>
        </div>
        <div className="flex justify-center xl:px-32 2xl:px-64  gap-y-6 gap-x-20 mt-4">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {" "}
              <Image
                alt="Picture of the author"
                width={128}
                height={36}
                quality={100}
                src="/assets/image 10.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                alt="Picture of the author"
                width={128}
                height={36}
                quality={100}
                className=""
                src="/assets/image 10.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                alt="Picture of the author"
                width={128}
                height={36}
                quality={100}
                className=""
                src="/assets/image 10.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                alt="Picture of the author"
                width={128}
                height={36}
                quality={100}
                className=""
                src="/assets/image 10.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Picture of the author"
                width={128}
                height={36}
                quality={100}
                className=""
                src="/assets/image 10.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
