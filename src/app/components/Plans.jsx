import Image from "next/image";
import React from "react";

const Plans = () => {
  return (
    <div>
      <div className="py-20 px-4">
        <div className="flex justify-center">
          <div>
            <h3 className="text-[24px] md:text-[64px] font-bold text-app-purple flex">
              <span>Plans for everyone</span>
              <Image
                alt="Arrow"
                width={64}
                height={24}
                quality={100}
                className=" h-10 mt-2 mx-6 md:hidden block"
                src="/assets/doodle (7) 1.png"
              />
            </h3>
            <p className="max-w-2xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="md:flex hidden justify-start md:w-48 lg:w-96  items-end">
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
        <div className="flex flex-wrap gap-y-6 justify-center gap-x-6 my-12 px-0 sm:px-2">
          <div className="rounded-3xl bg-white drop-shadow-2xl py-6 px-8 max-w-[328px] sm:max-w-sm">
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
          <div className="rounded-3xl bg-white drop-shadow-2xl py-6 px-8 max-w-[328px] sm:max-w-sm">
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
          <div className="rounded-3xl bg-white drop-shadow-2xl py-6 px-8 max-w-[328px] sm:max-w-sm">
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 4.10596L12.5 14.6165L9.34998 11.4665"
                  stroke="#8242DF"
                  strokeWidth="3.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
    </div>
  );
};

export default Plans;
