"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLink, setSelectedLink] = useState("Promot");

  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
  };
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
    <main className="">
      <Navbar />
      <div className="lg:h-screen">
        <div
          className="bg-center bg-cover bg-footer-background flex lg:h-3/4 flex-col md:flex-row justify-center items-center py-20 lg:py-0"
          style={{ backgroundImage: 'url("/assets/image 8.png")' }}
        >
          <div className="w-full max-w-2xl px-4 text-center md:text-left">
            <h4 className="text-[32px] md:text-[48px] text-[#555555]">
              It's time to
            </h4>
            <h2 className="text-[48px] md:text-[64px] font-bold text-[#742DDB]">
              Chat with any PDF
            </h2>
            <p className="text-[20px] max-w-lg  text text-[#333333]">
              Join millions of students, researchers and professionals to
              instantly answer questions and understand research with AI
            </p>
            <div className="flex justify-end mr-12 -mt-10">
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
            <div className="border-dashed border-2 border-[#AC81E9] rounded-lg p-4 flex justify-center gap-x-10 py-10">
              <div className="">
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
              <div className="flex flex-col w-52 md:w-56 items-center justify-center py-4 border-dashed border-2 rounded-lg border-[#AC81E9]">
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
            <h4 className="my-4 text-app-gray text-[16px] md:text-[21px]">
              Or Upload File
            </h4>
            <div className="bg-white p-2 shadow-lg rounded-lg">
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
            <div className="w-40 space-y-4 mt-6">
              <button className="bg-app-purple font-medium text-white px-8 py-3 rounded-xl">
                My Account
              </button>
              <p className="w-full text-center text-[16px] md:text-[21px] text-[#555555]">
                no card needed
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-8 h-1/5">
          <div className="flex justify-center items-center">
            <p className="text-4xl font-bold text-center text-[#555555] py-6">
              Used by professionals in
            </p>
          </div>
          <div className="flex justify-center  gap-y-6 gap-x-20 mt-4">
            <Image
              alt="Picture of the author"
              width={128}
              height={36}
              quality={100}
              className=""
              src="/assets/image 10.png"
            />
            <Image
              alt="Picture of the author"
              width={128}
              height={36}
              quality={100}
              className=""
              src="/assets/image 10.png"
            />
            <Image
              alt="Picture of the author"
              width={128}
              height={36}
              quality={100}
              className=""
              src="/assets/image 10.png"
            />
            <Image
              alt="Picture of the author"
              width={128}
              height={36}
              quality={100}
              className=""
              src="/assets/image 10.png"
            />
            <Image
              alt="Picture of the author"
              width={128}
              height={36}
              quality={100}
              className=""
              src="/assets/image 10.png"
            />
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-footer-background flex justify-center  pb-56 pt-20 mt-6 px-4"
        style={{ backgroundImage: 'url("/assets/bg.svg")' }}
      >
        <div>
          <div className="flex w-full justify-center">
            <h2 className="font-bold text-[45px] text-center self-center max-w-3xl text-[#FCFBFE] mb-6">
              Join Millions of Students, Researcher and professionals
            </h2>
          </div>
          <div className="flex w-full justify-center">
            <h2 className="text-[18px] text-center max-w-4xl text-app-white">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </h2>
          </div>
          <div className="flex flex-wrap gap-y-6 justify-center items-center  gap-x-10 my-20">
            <div className="bg-[#AC81E9] bg-opacity-60 rounded-2xl self-center p-6 space-y-4 py-8 w-80">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73.7973 9.01384C73.6813 8.91269 73.5465 8.83538 73.4006 8.78633C73.2547 8.73729 73.1006 8.71746 72.947 8.72797C72.7934 8.73849 72.6435 8.77916 72.5056 8.84764C72.3678 8.91613 72.2447 9.01109 72.1436 9.12712C72.0424 9.24314 71.9651 9.37795 71.9161 9.52386C71.867 9.66976 71.8472 9.82389 71.8577 9.97745C71.8683 10.131 71.9089 10.281 71.9774 10.4189C72.0459 10.5567 72.1409 10.6797 72.2569 10.7809C82.7684 19.9457 76.7747 37.106 64.0352 37.0517C60.1384 37.0307 56.4644 35.3113 53.9548 32.334C43.9025 20.4079 32.9902 16.924 29.9373 15.1326C29.4909 14.914 29.2963 14.351 29.5577 13.9476C29.9308 13.3718 28.7217 14.0287 58.3542 7.27821C61.6133 6.55118 64.9253 6.82993 67.9325 8.08618C68.2183 8.20045 68.5376 8.19773 68.8214 8.0786C69.1053 7.95947 69.3308 7.73349 69.4495 7.44946C69.5681 7.16543 69.5703 6.84614 69.4555 6.56052C69.3408 6.2749 69.1183 6.04588 68.8361 5.9229C65.3791 4.47899 61.5777 4.15618 57.8436 4.9904L29.5728 11.3016C26.6345 11.9573 26.2028 15.9135 28.9063 17.2377C31.8952 18.9884 42.5041 22.3867 52.1625 33.8451C55.1331 37.3695 59.4909 39.3962 64.1063 39.3962C78.9161 39.3956 85.9578 19.6165 73.7973 9.01384ZM30.3425 44.1556C29.4574 43.4331 28.5857 42.6942 27.728 41.9395C26.0388 40.4434 22.4295 37.7637 18.102 32.7635C18.0013 32.6471 17.8787 32.5517 17.7411 32.4827C17.6035 32.4137 17.4536 32.3725 17.3001 32.3614C17.1466 32.3504 16.9924 32.3696 16.8463 32.4182C16.7002 32.4667 16.5651 32.5436 16.4488 32.6443C16.3323 32.745 16.2369 32.8677 16.1679 33.0053C16.0989 33.1429 16.0577 33.2927 16.0467 33.4462C16.0356 33.5998 16.0549 33.754 16.1034 33.9001C16.1519 34.0461 16.2288 34.1812 16.3295 34.2976C18.6148 36.9379 21.4164 39.8998 28.8613 45.9721C33.0216 49.3648 34.9869 54.5645 34.1183 59.8813C32.167 71.8257 17.8511 75.9337 8.58204 68.4596C4.08188 64.831 1.79282 59.2377 2.45844 53.4976L5.97719 23.1548C6.05719 22.4631 6.65797 21.9741 7.35532 22.0907C8.64735 22.3045 8.05047 23.3502 12.8634 29.941C12.9542 30.0654 13.0685 30.1706 13.1999 30.2508C13.3313 30.3309 13.4773 30.3844 13.6294 30.4081C13.7814 30.4318 13.9367 30.4253 14.0863 30.389C14.2359 30.3526 14.3768 30.2872 14.5011 30.1963C14.6254 30.1056 14.7306 29.9912 14.8108 29.8598C14.8909 29.7284 14.9443 29.5825 14.968 29.4304C14.9917 29.2783 14.9853 29.1231 14.9489 28.9735C14.9126 28.8239 14.8472 28.683 14.7564 28.5587C11.9078 24.6576 10.2889 21.5099 10.1583 21.3201C8.30672 18.617 4.03797 19.524 3.64844 22.8849L0.129535 53.2276C-0.629371 59.7718 1.98016 66.1484 7.11032 70.2848C17.8022 78.906 34.1981 73.9291 36.4316 60.2598C37.437 54.1051 35.1608 48.0848 30.3425 44.1556ZM66.3748 51.1052L49.1883 41.7681C46.7523 40.4449 44.0353 42.8177 44.9434 45.4249C45.4583 47.2234 48.4908 53.8429 48.9536 63.8921C49.0516 66.0202 49.7005 68.0787 50.8303 69.8451C50.9132 69.9748 51.0209 70.0868 51.1471 70.1749C51.2734 70.263 51.4157 70.3253 51.5661 70.3583C51.7164 70.3914 51.8718 70.3945 52.0233 70.3675C52.1748 70.3404 52.3196 70.2838 52.4492 70.2009C52.5789 70.118 52.691 70.0103 52.779 69.884C52.8671 69.7578 52.9294 69.6154 52.9625 69.4651C52.9955 69.3148 52.9986 69.1594 52.9716 69.0079C52.9446 68.8563 52.888 68.7116 52.805 68.582C51.8834 67.141 51.3755 65.527 51.2952 63.7845C50.8142 53.3438 47.6642 46.4293 47.157 44.6542C46.9525 44.0673 47.5094 43.5249 48.0688 43.8279L65.2555 53.1651C72.6222 57.1676 72.8231 67.4829 65.9628 71.6968C63.0281 73.5043 59.4508 73.5871 56.3931 71.9188C56.1208 71.7769 55.8037 71.7475 55.5099 71.8369C55.2161 71.9263 54.9692 72.1274 54.8221 72.397C54.675 72.6666 54.6396 72.9831 54.7235 73.2785C54.8073 73.5739 55.0037 73.8247 55.2705 73.9768C59.0636 76.0465 63.6673 76.0215 67.5364 73.4735C75.7053 68.0248 75.0708 55.8293 66.3748 51.1052Z"
                  fill="#FFFBFF"
                />
              </svg>
              <div>
                <p className="text-app-white text-[36px] font-bold">
                  For student
                </p>
                <p className="text-[#FCFBFE] text-[18px] ">Water Wells Built</p>
              </div>
            </div>

            <div className="bg-[#AC81E9] bg-opacity-60	 rounded-2xl p-6 space-y-4 py-8 w-80">
              <svg
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69.9231 77.375H54.7981C54.0387 77.375 53.4231 77.9906 53.4231 78.75V84.25C53.4231 85.0094 54.0387 85.625 54.7981 85.625H69.9231C70.6825 85.625 71.2981 85.0094 71.2981 84.25V78.75C71.2981 77.9906 70.6825 77.375 69.9231 77.375Z"
                  fill="#AC81E9"
                />
                <path
                  d="M83.7528 39.0718L74.5733 56.1933C74.4855 56.3578 74.3653 56.5028 74.22 56.6195L68.5178 61.179C68.3776 61.298 68.2149 61.3876 68.0395 61.4426C67.864 61.4975 67.6793 61.5167 67.4963 61.4991C67.3132 61.4814 67.1356 61.4272 66.9739 61.3397C66.8122 61.2521 66.6697 61.133 66.5548 60.9895C66.4399 60.8459 66.355 60.6807 66.3051 60.5038C66.2551 60.3268 66.2412 60.1416 66.2641 59.9592C66.287 59.7767 66.3463 59.6007 66.4384 59.4416C66.5306 59.2824 66.6537 59.1434 66.8005 59.0327L71.118 55.5787C71.8865 54.9641 72.5226 54.2003 72.988 53.3333C71.7704 52.4902 70.3134 52.062 68.8333 52.1123C67.3531 52.1625 65.9285 52.6886 64.771 53.6124L59.4442 57.8749C57.9951 59.0341 56.8252 60.5044 56.0212 62.1769C55.2172 63.8494 54.7997 65.6813 54.7995 67.537V74.6252H70.8705C71.5353 73.2159 72.5323 71.9891 73.7758 71.0502L77.1198 68.5422C79.4832 66.7695 81.1345 64.21 81.7756 61.3262L85.8813 42.8489C86.0606 42.0675 85.9419 41.2474 85.5485 40.5488C85.1551 39.8503 84.5139 39.3236 83.7528 39.0718Z"
                  fill="#AC81E9"
                />
                <path
                  d="M48.3686 77.375H33.2436C32.4842 77.375 31.8686 77.9906 31.8686 78.75V84.25C31.8686 85.0094 32.4842 85.625 33.2436 85.625H48.3686C49.128 85.625 49.7436 85.0094 49.7436 84.25V78.75C49.7436 77.9906 49.128 77.375 48.3686 77.375Z"
                  fill="#AC81E9"
                />
                <path
                  d="M19.4138 39.0718L28.5947 56.1933C28.6825 56.3578 28.8027 56.5028 28.9481 56.6195L34.6502 61.179C34.9359 61.3945 35.2944 61.4901 35.6494 61.4455C36.0045 61.401 36.3282 61.2197 36.5518 60.9403C36.7754 60.6609 36.8812 60.3053 36.8468 59.9491C36.8124 59.5929 36.6405 59.2641 36.3676 59.0327L32.0501 55.5787C31.2815 54.9641 30.6454 54.2003 30.1801 53.3333C31.3977 52.4902 32.8546 52.062 34.3348 52.1123C35.815 52.1625 37.2395 52.6886 38.3971 53.6124L43.7238 57.8749C45.1729 59.0341 46.3428 60.5044 47.1468 62.1769C47.9508 63.8494 48.3684 65.6813 48.3686 67.537V74.6252H32.2976C31.6328 73.2159 30.6358 71.9891 29.3922 71.0502L26.0482 68.5422C23.6849 66.7695 22.0335 64.21 21.3925 61.3262L17.2867 42.8489C17.1075 42.0675 17.2262 41.2474 17.6196 40.5488C18.0129 39.8503 18.6527 39.3236 19.4138 39.0718Z"
                  fill="#AC81E9"
                />
                <path
                  d="M59.8333 22.3751H59.3438C61.3387 20.7691 62.7861 18.5837 63.4865 16.1203C64.187 13.6569 64.1058 11.0369 63.2544 8.62155C62.4029 6.20621 60.8231 4.11454 58.7327 2.63497C56.6423 1.15541 54.1444 0.36084 51.5833 0.36084C49.0223 0.36084 46.5244 1.15541 44.434 2.63497C42.3436 4.11454 40.7638 6.20621 39.9123 8.62155C39.0608 11.0369 38.9797 13.6569 39.6801 16.1203C40.3806 18.5837 41.828 20.7691 43.8228 22.3751H43.3333C41.6698 22.3772 40.0352 22.8107 38.5893 23.6332C37.1433 24.4557 35.9353 25.6392 35.0833 27.068C34.2314 25.6392 33.0234 24.4557 31.5774 23.6332C30.1315 22.8107 28.4969 22.3772 26.8333 22.3751H26.3438C28.3387 20.7691 29.7861 18.5837 30.4865 16.1203C31.187 13.6569 31.1058 11.0369 30.2544 8.62155C29.4029 6.20621 27.8231 4.11454 25.7327 2.63497C23.6423 1.15541 21.1444 0.36084 18.5833 0.36084C16.0223 0.36084 13.5244 1.15541 11.434 2.63497C9.34361 4.11454 7.76376 6.20621 6.9123 8.62155C6.06084 11.0369 5.97973 13.6569 6.68014 16.1203C7.38055 18.5837 8.82799 20.7691 10.8228 22.3751H10.3333C7.78153 22.378 5.33506 23.393 3.53066 25.1974C1.72625 27.0018 0.711255 29.4483 0.708344 32.0001V52.6251C0.708344 52.9898 0.853209 53.3395 1.11107 53.5974C1.36893 53.8552 1.71867 54.0001 2.08334 54.0001H68.0833C68.448 54.0001 68.7978 53.8552 69.0556 53.5974C69.3135 53.3395 69.4583 52.9898 69.4583 52.6251V32.0001C69.4554 29.4483 68.4404 27.0018 66.636 25.1974C64.8316 23.393 62.3852 22.378 59.8333 22.3751ZM18.5833 3.1251C20.6548 3.12825 22.6701 3.79865 24.3307 5.03696C25.9913 6.27528 27.2088 8.01561 27.8027 10.0001C24.7979 10.008 21.8571 9.13202 19.3465 7.4811C19.1204 7.33052 18.8549 7.25017 18.5833 7.25017C18.3118 7.25017 18.0462 7.33052 17.8202 7.4811C15.3037 9.11929 12.3668 9.99415 9.36397 10.0001C9.95792 8.01561 11.1754 6.27528 12.836 5.03696C14.4966 3.79865 16.5119 3.12825 18.5833 3.1251ZM8.95834 12.7501C12.3464 12.9167 15.7045 12.0445 18.5833 10.2503C21.5003 11.9539 24.831 12.819 28.2083 12.7501C28.2083 15.3028 27.1943 17.751 25.3892 19.556C23.5842 21.361 21.1361 22.3751 18.5833 22.3751C16.0306 22.3751 13.5825 21.361 11.7774 19.556C9.9724 17.751 8.95834 15.3028 8.95834 12.7501ZM24.8025 25.1251L23.1525 29.2501H14.0142L12.3642 25.1251H24.8025ZM33.7083 51.2501H3.45834V32.0001C3.46323 30.3365 4.07237 28.7314 5.1724 27.4834C6.27242 26.2354 7.7884 25.4295 9.43822 25.2158L11.806 31.1366C11.9084 31.3916 12.0847 31.6101 12.3124 31.764C12.54 31.9179 12.8086 32.0001 13.0833 32.0001H24.0833C24.3581 32.0001 24.6266 31.9179 24.8543 31.764C25.0819 31.6101 25.2583 31.3916 25.3607 31.1366L27.7285 25.2158C29.3783 25.4295 30.8943 26.2354 31.9943 27.4834C33.0943 28.7314 33.7035 30.3365 33.7083 32.0001V51.2501ZM51.5833 3.1251C53.2527 3.12722 54.8927 3.56365 56.3423 4.39151C57.7919 5.21937 59.0012 6.41016 59.8512 7.84685C57.5207 9.25532 54.8495 9.9999 52.1265 10.0001H42.364C42.9579 8.01561 44.1754 6.27528 45.836 5.03696C47.4965 3.79865 49.5119 3.12825 51.5833 3.1251ZM41.9583 12.7501H52.1265C55.2082 12.7527 58.237 11.9497 60.9127 10.4208C61.2433 11.743 61.2893 13.1203 61.0475 14.4616C60.8057 15.8029 60.2817 17.0774 59.5102 18.2009C58.7387 19.3244 57.7373 20.2712 56.5723 20.9785C55.4073 21.6858 54.1054 22.1375 52.7527 22.3038C51.4 22.47 50.0274 22.3469 48.7258 21.9427C47.4243 21.5385 46.2234 20.8624 45.2029 19.9591C44.1823 19.0559 43.3653 17.9461 42.8059 16.7033C42.2466 15.4604 41.9577 14.113 41.9583 12.7501ZM57.8025 25.1251L56.1525 29.2501H47.0142L45.3642 25.1251H57.8025ZM66.7083 51.2501H36.4583V32.0001C36.4632 30.3365 37.0724 28.7314 38.1724 27.4834C39.2724 26.2354 40.7884 25.4295 42.4382 25.2158L44.806 31.1366C44.9084 31.3916 45.0847 31.6101 45.3124 31.764C45.54 31.9179 45.8086 32.0001 46.0833 32.0001H57.0833C57.3581 32.0001 57.6266 31.9179 57.8543 31.764C58.0819 31.6101 58.2583 31.3916 58.3607 31.1366L60.7285 25.2158C62.3783 25.4295 63.8943 26.2354 64.9943 27.4834C66.0943 28.7314 66.7035 30.3365 66.7083 32.0001V51.2501Z"
                  fill="#FCFBFE"
                />
              </svg>

              <div>
                <p className="text-app-white text-[36px] font-bold">
                  For Researcher{" "}
                </p>
                <p className="text-[#FCFBFE] text-[18px] ">Orphan Sponsors</p>
              </div>
            </div>
            <div className="bg-[#AC81E9] bg-opacity-60	 rounded-2xl p-6 space-y-4 py-8 w-80">
              <svg
                width="89"
                height="80"
                viewBox="0 0 89 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.4263 53.7514C51.771 53.8885 52.155 53.889 52.5 53.7529C85.1469 41.012 82.9357 20.4488 82.6256 18.3883C82.5606 8.61188 74.5876 0.680231 64.7978 0.680231C59.9088 0.680231 55.3182 2.65945 51.958 6.16297C50.3012 4.42491 48.3077 3.04245 46.0993 2.09984C43.8908 1.15723 41.5135 0.674213 39.1122 0.680231C35.9937 0.676243 32.929 1.49309 30.2261 3.04871C27.5232 4.60432 25.2774 6.8439 23.7142 9.54241H20.3673C14.2878 9.54241 10.8242 14.3797 9.7991 16.6248L0.666626 23.1089L2.37703 25.518L11.8551 18.7901C12.099 18.6171 12.2845 18.3739 12.3869 18.0929C12.8196 16.9098 15.4414 12.4965 20.3687 12.4965H22.4587C21.6272 15.3841 21.19 19.1859 21.1678 19.8329L21.1693 19.8447L21.1663 19.8816C21.1663 19.9791 21.2033 20.0633 21.2225 20.1564C21.2402 20.2494 21.2431 20.3439 21.2786 20.4326C21.3273 20.5537 21.4071 20.6541 21.4854 20.756C21.5223 20.8048 21.54 20.8639 21.5829 20.9082L21.5932 20.9155C21.7261 21.05 21.8842 21.1593 22.0599 21.2361L22.0688 21.242C22.2446 21.3173 22.4381 21.3587 22.6434 21.3587H29.5854C30.3992 21.3587 31.0624 22.0218 31.0624 22.8357C31.0631 23.0326 31.0233 23.2275 30.9455 23.4084C30.8678 23.5893 30.7538 23.7523 30.6105 23.8873C30.4771 24.0237 30.3176 24.1317 30.1414 24.2048C29.9653 24.2779 29.7761 24.3146 29.5854 24.3127H23.6773C23.2856 24.3127 22.9099 24.4683 22.6329 24.7453C22.3559 25.0223 22.2003 25.398 22.2003 25.7897C22.2003 26.0556 22.1781 26.3333 22.1338 26.5888C22.1279 26.6317 22.1264 26.6642 22.119 26.7099C22.1102 26.7941 22.091 26.868 22.0747 26.9448C21.6198 28.9757 17.5328 30.9608 14.8151 30.9608C14.1741 30.9608 13.5271 30.8323 12.895 30.5798C12.6266 30.4727 12.3327 30.4467 12.0497 30.5049C11.7667 30.5632 11.507 30.7032 11.3027 30.9077L1.21608 40.9943L3.3046 43.0828L12.7487 33.6402C13.4296 33.8233 14.1224 33.9164 14.8151 33.9164C17.4014 33.9164 21.1235 32.6092 23.2992 30.4114C26.4408 37.7862 33.9382 46.9334 51.4263 53.7514ZM29.5854 27.2668C29.8852 27.2668 30.1792 27.2372 30.4642 27.1811C31.3209 27.0113 32.0978 26.5933 32.6975 25.9773C32.7389 25.9375 32.7669 25.8887 32.8068 25.8474C33.5866 25.0398 34.0201 23.9597 34.015 22.8372C34.015 20.3942 32.0269 18.4061 29.5839 18.4061H24.2858C24.5591 16.415 25.144 13.1331 25.8869 11.7018L25.8884 11.6974C27.1368 9.26638 29.0321 7.22717 31.3654 5.80446C33.6987 4.38176 36.3794 3.63078 39.1122 3.63429C41.3627 3.62929 43.5844 4.13878 45.6078 5.12385C47.6312 6.10891 49.4026 7.54347 50.7867 9.31791C51.345 10.0313 52.5606 10.0313 53.1219 9.32086C55.9755 5.70657 60.2323 3.63429 64.7978 3.63429C66.5422 3.63429 68.2821 3.94004 69.9202 4.54267C78.2964 7.62375 81.1485 17.2643 79.2535 25.3319C78.1649 29.9697 75.651 34.1616 72.4547 37.6547C66.9233 43.7002 59.4997 47.7886 51.9624 50.787C34.1391 43.7032 27.5752 34.2576 25.2636 27.2668H29.5854ZM88.6666 63.073V60.1189H81.2815V58.6419C81.2815 58.2501 81.1259 57.8744 80.8489 57.5974C80.5719 57.3204 80.1962 57.1648 79.8044 57.1648H73.8963C73.5046 57.1648 73.1289 57.3204 72.8519 57.5974C72.5749 57.8744 72.4193 58.2501 72.4193 58.6419V59.5281C71.758 59.2549 71.0943 58.9876 70.4282 58.726C70.3943 58.7054 70.3736 58.6744 70.3382 58.6566C70.2362 58.6064 70.1299 58.5975 70.0235 58.571C67.6234 57.6463 65.1213 56.8074 63.9589 56.8074C61.5114 56.8074 57.4791 57.4765 55.367 59.2666L47.4914 57.7675C45.0189 57.2815 42.6409 58.9122 42.1062 61.3123L33.0978 57.2357C32.5573 56.981 31.9716 56.8362 31.3747 56.8098C30.7778 56.7835 30.1817 56.876 29.6209 57.0821C29.0649 57.2807 28.5537 57.5872 28.1164 57.9838C27.6792 58.3805 27.3246 58.8596 27.073 59.3937C26.779 59.983 26.6299 60.6358 26.6299 61.3301C26.6299 63.1025 27.6446 64.6977 29.2206 65.42L50.1782 77.4016C50.9407 77.7889 51.8056 77.9268 52.6507 77.796L63.758 76.1284C63.9973 76.1004 64.2159 76.1033 64.4093 76.1329C64.4891 76.1461 64.5659 76.1594 64.6516 76.1521L72.4178 76.1107V77.8447C72.4178 78.2365 72.5734 78.6122 72.8504 78.8892C73.1274 79.1661 73.5031 79.3218 73.8948 79.3218H79.803C80.1947 79.3218 80.5704 79.1661 80.8474 78.8892C81.1244 78.6122 81.28 78.2365 81.28 77.8447V76.3677H88.6651V73.4136H81.28V63.0744L88.6666 63.073ZM72.4193 73.1552L64.7461 73.1965C64.2884 73.1406 63.8255 73.1416 63.368 73.1995L52.2091 74.8744C51.9999 74.9112 51.7846 74.8871 51.5887 74.805L30.6252 62.8189C30.578 62.7914 30.5292 62.7667 30.479 62.745C29.8203 62.4615 29.5854 61.8278 29.5854 61.3301C29.5854 61.0967 29.6297 60.8884 29.7361 60.6772C29.9133 60.2947 30.2309 60.0052 30.6311 59.8589C31.0329 59.7098 31.4642 59.7319 31.863 59.918L42.7443 64.8439C42.7605 64.869 42.7694 64.8956 42.7856 64.9207C43.4857 65.9443 44.5403 66.6341 45.657 66.8349L57.2782 69.8392L58.0182 66.9797L46.295 63.9518C46.0797 63.9122 45.8744 63.8301 45.6911 63.7105C45.5078 63.5908 45.3501 63.4358 45.2272 63.2546C44.9761 62.8854 44.883 62.4423 44.9687 62.0036C45.14 61.1055 45.9568 60.4719 46.9316 60.6669L55.5885 62.3138C56.135 62.4142 56.6919 62.2059 57.0331 61.7673C57.8602 60.6979 61.0979 59.7614 63.9589 59.7614C64.9115 59.7614 68.7518 61.1794 72.4193 62.7303V73.1552ZM78.3274 76.3662H75.3733V60.1189H78.3274V76.3662Z"
                  fill="#FFFBFF"
                />
              </svg>

              <div>
                <p className="text-app-white text-[36px] font-bold">
                  For student
                </p>
                <p className="text-[#FCFBFE] text-[18px] ">Water Wells Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 md:py-20">
        <div className="flex justify-center text-app-purple font-bold text-center text-5xl md:text-[64px]">
          <h2>Converse, Learn, Track</h2>
        </div>
        <div className="flex justify-center text-app-gray font-bold text-center text-5xl md:text-[64px] my-2">
          <h2> All on Your Terms</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex my-12 rounded-full border-app-purple border p-1 text-[16px]">
            <a
              onClick={() => handleLinkClick("Promot")}
              className={`cursor-pointer transition-colors rounded-full py-3 px-8 ${
                selectedLink === "Promot"
                  ? "bg-app-purple text-white"
                  : " text-[#4C05B3]"
              }`}
            >
              Promot
            </a>
            <a
              onClick={() => handleLinkClick("Edit")}
              className={`cursor-pointer transition-colors rounded-full py-3 px-8 ${
                selectedLink === "Edit"
                  ? "bg-app-purple text-white"
                  : " text-[#4C05B3]"
              }`}
            >
              Edit
            </a>
            <a
              onClick={() => handleLinkClick("Write")}
              className={`cursor-pointer transition-colors rounded-full py-3 px-8 ${
                selectedLink === "Write"
                  ? "bg-app-purple text-white"
                  : " text-[#4C05B3]"
              }`}
            >
              Write
            </a>
          </div>
        </div>
        <div className="flex justify-center my-12">
          <Image
            alt="Arrow"
            width={1038}
            height={614}
            quality={100}
            className=""
            src="/assets/Frame 1171276372.png"
          />
        </div>
      </div>

      <div className="bg-[#F1EAFB] py-12">
        <div className="flex justify-center text-[64px] font-bold text-app-purple">
          <h4>Features</h4>
        </div>
        <div className="flex justify-center ml-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="109"
            height="52"
            viewBox="0 0 109 52"
            fill="none"
          >
            <path
              d="M1.5 30.1233C12.9713 14.6636 50.4312 -11.0355 108.5 9.84505C85.4914 2.68411 31.8793 0.689788 1.5 50"
              stroke="#8242DF"
              stroke-width="2.13494"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-wrap gap-x-4 justify-center gap-y-4 my-12 mx-4">
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
              className=""
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
              className=""
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
              className=""
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
              className=""
              src="/assets/4.png"
            />
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="flex justify-center">
          <div>
            <h3 className="text-[64px] font-bold text-app-purple">
              Plans for everyone
            </h3>
            <p className="max-w-2xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="flex justify-start w-96  items-end">
            <Image
              alt="Arrow"
              width={150}
              height={56}
              quality={100}
              className=" h-14"
              src="/assets/doodle (6) 1.png"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-y-6 justify-center gap-x-6 my-12">
          <div className="rounded-3xl bg-white drop-shadow-2xl py-6 px-8 max-w-sm">
            <h3 className="text-[45px] font-bold text-app-purple">Free</h3>
            <h3 className="text-[#999999] text-[18px] font-bold">
              BrainyPDF <span className="text-[#333333]"> Limited time</span>
            </h3>
            <p className="my-4 text-[#666666]">
              Brainypdf ipsum dolor sit amet consectetur. Porttitor id dignissim
              dolor non quam.
            </p>
            <div className="flex text-[#777777] font-bold items-center gap-x-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Customized for your topics</p>
            </div>
            <div className="flex text-[#777777] font-bold items-center gap-x-4 my-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>1 workbooks</p>
            </div>
            <div className="flex text-[#777777] font-bold items-center gap-x-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>500 Wording</p>
            </div>
            <div className="flex justify-center w-full  mt-28">
              <button className="border-[.5px] border-[#ECDFFE] py-2 rounded-lg text-app-purple text-[18px] w-full">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center w-full my-6">
              <p className="text-[#555555] rounded-lg text-[14px] text-center w-full">
                No Credit card Required
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white drop-shadow-2xl py-6 px-8 max-w-sm">
            <div className="flex w-full items-end">
              <p className="font-medium text-[24px] px-1">$</p>
              <h3 className="text-[45px] font-bold text-app-purple">9.99</h3>
              <div className="flex items-end">
                <p className="bg-[#F1EAFB] text-app-light-gray rounded-full py-2 mx-1 px-2">
                  Monthly
                </p>
                <p className="text-[18px] text-[#777777]">/User</p>
              </div>
            </div>
            <h3 className="text-[#999999] text-[18px] font-bold my-2">
              BrainyPDF <span className="text-[#333333]"> Starter</span>
            </h3>
            <div className="flex justify-center mt-6">
              <button className="bg-app-purple py-3 w-full rounded-2xl text-[18px] text-white">
                Get Started
              </button>
            </div>
            <p className="my-4 text-[#666666]">
              Brainypdf ipsum dolor sit amet consectetur. Porttitor id dignissim
              dolor non quam.
            </p>
            <div className="flex text-[#777777] font-bold items-center gap-x-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Customized for your topics</p>
            </div>
            <div className="flex text-[#777777] font-bold items-center gap-x-4 my-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>10 workbooks</p>
            </div>
            <div className="flex text-[#777777] font-bold items-center gap-x-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>5,000 Wording</p>
            </div>
            <div className="flex justify-center w-full  mt-8">
              <button className="border-[.5px] border-[#ECDFFE] py-2 rounded-lg text-app-purple text-[18px] w-full">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center w-full my-6">
              <p className="text-[#555555] rounded-lg text-[14px] text-center w-full">
                No Credit card Required
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white drop-shadow-2xl py-6 px-8 max-w-sm">
            <div className="flex w-full items-end">
              <p className="font-medium text-[24px] px-1">$</p>
              <h3 className="text-[45px] font-bold text-app-purple">99.99</h3>
              <div className="flex items-end">
                <p className="bg-[#F1EAFB] text-app-light-gray rounded-full py-2 mx-1 px-2">
                  Monthly
                </p>
                <p className="text-[18px] text-[#777777]">/User</p>
              </div>
            </div>
            <h3 className="text-[#999999] text-[18px] font-bold my-2">
              BrainyPDF <span className="text-[#333333]"> Premium</span>
            </h3>
            <div className="flex justify-center mt-6">
              <button className="bg-app-purple py-3 w-full rounded-2xl text-[18px] text-white">
                Get Started
              </button>
            </div>
            <p className="my-4 text-[#666666]">
              Brainypdf ipsum dolor sit amet consectetur. Porttitor id dignissim
              dolor non quam.
            </p>
            <div className="flex text-[#777777] font-bold items-center gap-x-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Customized for your topics</p>
            </div>
            <div className="flex text-[#777777] font-bold items-center gap-x-4 my-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Unlimited workbooks</p>
            </div>
            <div className="flex text-[#777777] font-bold items-center gap-x-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 11.54V12.506C22.9987 14.7702 22.2655 16.9734 20.9098 18.7869C19.5541 20.6004 17.6484 21.9271 15.4771 22.5691C13.3058 23.2111 10.9851 23.134 8.86119 22.3493C6.73726 21.5646 4.92389 20.1144 3.69151 18.2149C2.45913 16.3154 1.87378 14.0685 2.02276 11.8091C2.17174 9.5498 3.04707 7.39915 4.51819 5.67794C5.98932 3.95672 7.97742 2.75716 10.186 2.25816C12.3946 1.75917 14.7053 1.98746 16.7735 2.90901"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  stroke-width="3.15"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Unlimited Wording</p>
            </div>
            <div className="flex justify-center w-full  mt-8">
              <button className="border-[.5px] border-[#ECDFFE] py-2 rounded-lg text-app-purple text-[18px] w-full">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center w-full my-6">
              <p className="text-[#555555] rounded-lg text-[14px] text-center w-full">
                No Credit card Required
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-footer-background flex justify-center items-center pt-20 gap-x-20 mt-6 px-4"
        style={{ backgroundImage: 'url("/assets/Download-Bg.svg")' }}
      >
        <Image
          alt="Picture of the author"
          width={394}
          height={429}
          quality={100}
          className=""
          src="/assets/image 19.svg"
        />
        <div>
          <div className="max-w-[389px]">
            <h5 className="text-[36px] font-bold text-app-purple">
              <span className="text-[#555555]">Download</span> BrainyPDF
              Extension
            </h5>
            <p className="text-[#555555] text-[18px] my-4">
              extension will fast yur work 5x times. Try the extension and save
              time.
            </p>
            <button className="flex bg-app-purple py-2 items-center gap-x-4 w-[200px] justify-center text-white  rounded-full">
              <Image
                alt="Picture of the author"
                width={33}
                height={36}
                quality={100}
                className="-ml-6"
                src="/assets/Frame 1171276360.svg"
              />
              <div>
                <p>Download</p>
                <p>Extension</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="py-20 flex justify-center items-center gap-x-32 mt-6 px-4">
        <div>
          <div className="w-[325px] -mt-40">
            <h4 className="text-[45px] font-bold text-app-gray">
              Get in Touch
            </h4>
            <p className="text-[#666666] py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <div className="flex my-4 gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="65"
                viewBox="0 0 64 65"
                fill="none"
              >
                <rect y="0.5" width="64" height="64" rx="8" fill="#8242DF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42 26.5C42 25.4 41.1 24.5 40 24.5H24C22.9 24.5 22 25.4 22 26.5V38.5C22 39.6 22.9 40.5 24 40.5H40C41.1 40.5 42 39.6 42 38.5V26.5ZM40 26.5L32 31.5L24 26.5H40ZM40 38.5H24V28.5L32 33.5L40 28.5V38.5Z"
                  fill="white"
                />
              </svg>
              <div>
                <p className="text-[#666666]">Email</p>
                <p className="text-[24px] text-[#333333] font-medium">
                  hello@brainypdf.com
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <form className="rounded-lg drop-shadow-lg w-full max-w-[484px] px-12 py-8 bg-white text-[#666666]">
          <h4 className="text-[45px] font-bold text-app-purple mb-10">Contact Us </h4>
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-[#FCFBFE] mt-2  mb-6 border-[#ECDFFE] border rounded-lg py-2 px-4 w-full
            appearance-none focus:outline-none focus:border-app-purple focus:bg-[#F8F4FD]"
          />
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-[#FCFBFE] mt-2 mb-6 border-[#ECDFFE] border rounded-lg py-2 px-4 w-full
            appearance-none focus:outline-none focus:border-app-purple focus:bg-[#F8F4FD]"
          />
          <p>Message</p>
          <textarea
            rows={7}
            placeholder="Enter your message"
            className="bg-[#FCFBFE] mt-2 mb-6 border-[#ECDFFE] border rounded-lg py-2 px-4 w-full
            appearance-none focus:outline-none focus:border-app-purple focus:bg-[#F8F4FD]"
          ></textarea>
          <button type="submit" className="bg-app-purple text-white px-8 py-4 font-bold text-[18px] rounded-xl">Send</button>
        </form>
      </div>
      <FAQ/>
      <Footer/>
    </main>
  );
}
