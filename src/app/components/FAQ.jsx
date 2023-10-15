import React, { useState } from "react";
function Item({ item }) {
  return <div>{item}</div>;
}
const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("Promot");
  const items = [
    {
      id: 1,
      question: "Why should I use Redoc?",
      title:
        "Exploring the Impact of Upgrading Your Current Plan on Your Usage",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis mattis phasellus tempor ullamcorper mauris integer orci. Integer habitant ac nisi venenatis a morbi nec.",
    },
    {
      id: 2,
      question: "What happens with my usage if I upgrade my current plan?",
      title:
        "Exploring the Impact of Upgrading Your Current Plan on Your Usage",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis mattis phasellus tempor ullamcorper mauris integer orci. Integer habitant ac nisi venenatis a morbi nec.",
    },
    {
      id: 3,
      question: "What if I'm not happy with the generated results?",
      title:
        "Exploring the Impact of Upgrading Your Current Plan on Your Usage",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis mattis phasellus tempor ullamcorper mauris integer orci. Integer habitant ac nisi venenatis a morbi nec.",
    },
    {
      id: 4,
      question: "What if I'm not happy with the generated results?",
      title:
        "Exploring the Impact of Upgrading Your Current Plan on Your Usage",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis mattis phasellus tempor ullamcorper mauris integer orci. Integer habitant ac nisi venenatis a morbi nec.",
    },
    {
      id: 5,
      question: "What if I'm not happy with the generated results?",
      title:
        "Exploring the Impact of Upgrading Your Current Plan on Your Usage",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis mattis phasellus tempor ullamcorper mauris integer orci. Integer habitant ac nisi venenatis a morbi nec.",
    },
  ];

  return (
    <div className="py-20">
      <h2 className="text-[64px] font-bold text-app-purple pl-32">
        Frequently Asked Questions
      </h2>
      <div></div>
      <div className="flex justify-center items-center">
        <div className="max-w-[640px] w-full -mr-12 z-10 bg-white">
          <div className="flex justify-between py-4 w-full">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#8242DF" />
              </svg>
              <p>{items[0].question}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M1 1L9 9L1 17"
                stroke="#8242DF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-between py-4 w-full">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#8242DF" />
              </svg>
              <p>{items[1].question}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M1 1L9 9L1 17"
                stroke="#8242DF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-between py-4 w-full">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#8242DF" />
              </svg>
              <p>{items[2].question}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M1 1L9 9L1 17"
                stroke="#8242DF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-between py-4 w-full">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#8242DF" />
              </svg>
              <p>{items[3].question}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M1 1L9 9L1 17"
                stroke="#8242DF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-between py-4 w-full">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="12" fill="#8242DF" />
              </svg>
              <p>{items[4].question}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M1 1L9 9L1 17"
                stroke="#8242DF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="h-[472px] bg-[#F8F4FD] border border-[#C7ABF1] drop-shadow-lg max-w-[648px] w-full rounded-xl">
          <div className="flex justify-end">
            <h4>Exploring the Impact of Upgrading Your Current Plan on Your Usage</h4>
          </div>
          <div className="flex justify-end   w-full ">
             <h4 className="pl-14">Lorem ipsum dolor sit amet consectetur. Convallis mattis phasellus tempor ullamcorper mauris integer orci. Integer habitant ac nisi venenatis a morbi nec.</h4>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQ;
