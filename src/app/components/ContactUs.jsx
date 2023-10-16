import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-cover bg-footer-background flex flex-col md:flex-row justify-center items-center pt-10 lg:pt-20 gap-4 lg:gap-20 mt-6 px-4">
      <div>
        <div className="w-[325px] md:-mt-40 text-left md:text-center">
          <h4 className="text-[24px] md:text-[45px] font-bold  text-app-gray">
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
              <p className="text-[#666666] text-left ">Email</p>
              <p className="md:text-[24px] text-[#333333] font-medium">
                hello@brainypdf.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <form className="rounded-lg drop-shadow-lg w-full max-w-[484px] px-4 md:px-12 py-8 bg-white text-[#666666]">
        <h4 className="text-[24px] md:text-[45px]  font-bold text-app-purple mb-10">
          Contact Us{" "}
        </h4>
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
        <button
          type="submit"
          className="bg-app-purple text-white px-8 py-4 font-bold text-[18px] rounded-xl"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
