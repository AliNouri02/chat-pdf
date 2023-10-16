import React, { useEffect, useState } from "react";
function Item({ item }) {
  return <div>{item}</div>;
}
const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("0");
  const [isMobile, setIsMobile] = useState(false);

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
        "Exploring the Impact of Upgrading Your Current Plan on Your Usage2",
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

  const handelQuestion = (id) => {
    setSelectedQuestion(id);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileWidth = 768;
      setIsMobile(window.innerWidth < mobileWidth);
    };

    window.addEventListener("resize", checkIsMobile);

    checkIsMobile();

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="py-20 ">
      <h2 className="text-[24px] md:text-[64px] font-bold text-app-purple pl-8 my-8 md:pl-32">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center items-center mx-0 md:mx-4">
        <div className="max-w-[640px] w-full mx-4 md:mx-0 md:-mr-12 z-10 border-[.5px] rounded-md border-[#F8F4FD] bg-white">
          <div
            onClick={() => handelQuestion("0")}
            className={`${
              selectedQuestion === "0" ? "bg-[#ECDFFE]" : ""
            } flex justify-between pr-4 md:pr-6  pl-4 py-6 gap-x-1 w-full border-[.5px] border-[#F1EAFB] cursor-pointer items-center`}
          >
            <div className="flex items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="min-w-[24px]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="12"
                  fill={`${selectedQuestion === "0" ? "#8242DF" : "#F1EAFB"}`}
                />
              </svg>
              <p>{items[0].question}</p>
            </div>
            {!isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M1 1L9 9L1 17"
                  stroke={`${selectedQuestion === "0" ? "#8242DF" : "#F1EAFB"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <>
                {selectedQuestion === "0" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 16L12 8L20 16"
                      stroke="#8242DF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.8034 2.3584H11.1962C11.0534 2.3584 10.9819 2.42983 10.9819 2.57268V10.9834H3.00042C2.85756 10.9834 2.78613 11.0548 2.78613 11.1977V12.8048C2.78613 12.9477 2.85756 13.0191 3.00042 13.0191H10.9819V21.4298C10.9819 21.5727 11.0534 21.6441 11.1962 21.6441H12.8034C12.9462 21.6441 13.0176 21.5727 13.0176 21.4298V13.0191H21.0004C21.1433 13.0191 21.2147 12.9477 21.2147 12.8048V11.1977C21.2147 11.0548 21.1433 10.9834 21.0004 10.9834H13.0176V2.57268C13.0176 2.42983 12.9462 2.3584 12.8034 2.3584Z"
                      fill="#999999"
                    />
                  </svg>
                )}
              </>
            )}
          </div>
          {isMobile && selectedQuestion === "0" ? (
            <div className="w-full px-10 bg-[#ECDFFE] border border-[#F1EAFB]">
              <div className="flex justify-start">
                <h4 className="">{items[selectedQuestion].answer}</h4>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            onClick={() => handelQuestion("1")}
            className={`${
              selectedQuestion === "1" ? "bg-[#ECDFFE]" : ""
            } flex justify-between pr-4 md:pr-6  pl-4 py-6 gap-x-1 w-full border-[.5px] border-[#F8F4FD] cursor-pointer items-center`}
          >
            <div className="flex items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="min-w-[24px]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="12"
                  fill={`${selectedQuestion === "1" ? "#8242DF" : "#F1EAFB"}`}
                />
              </svg>
              <p>{items[1].question}</p>
            </div>
            {!isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M1 1L9 9L1 17"
                  stroke={`${selectedQuestion === "1" ? "#8242DF" : "#F1EAFB"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <>
                {selectedQuestion === "1" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 16L12 8L20 16"
                      stroke="#8242DF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.8034 2.3584H11.1962C11.0534 2.3584 10.9819 2.42983 10.9819 2.57268V10.9834H3.00042C2.85756 10.9834 2.78613 11.0548 2.78613 11.1977V12.8048C2.78613 12.9477 2.85756 13.0191 3.00042 13.0191H10.9819V21.4298C10.9819 21.5727 11.0534 21.6441 11.1962 21.6441H12.8034C12.9462 21.6441 13.0176 21.5727 13.0176 21.4298V13.0191H21.0004C21.1433 13.0191 21.2147 12.9477 21.2147 12.8048V11.1977C21.2147 11.0548 21.1433 10.9834 21.0004 10.9834H13.0176V2.57268C13.0176 2.42983 12.9462 2.3584 12.8034 2.3584Z"
                      fill="#999999"
                    />
                  </svg>
                )}
              </>
            )}
          </div>
          {isMobile && selectedQuestion === "1" ? (
            <div className="w-full px-10 bg-[#ECDFFE] border border-[#F1EAFB]">
              <div className="flex justify-start">
                <h4 className="">{items[selectedQuestion].answer}</h4>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            onClick={() => handelQuestion("2")}
            className={`${
              selectedQuestion === "2" ? "bg-[#ECDFFE]" : ""
            } flex justify-between pr-4 md:pr-6  pl-4 py-6 gap-x-1 w-full border-[.5px] border-[#F8F4FD] cursor-pointer items-center`}
          >
            <div className="flex items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="min-w-[24px]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="12"
                  fill={`${selectedQuestion === "2" ? "#8242DF" : "#F1EAFB"}`}
                />
              </svg>
              <p>{items[2].question}</p>
            </div>
            {!isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M1 1L9 9L1 17"
                  stroke={`${selectedQuestion === "2" ? "#8242DF" : "#F1EAFB"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <>
                {selectedQuestion === "2" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 16L12 8L20 16"
                      stroke="#8242DF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.8034 2.3584H11.1962C11.0534 2.3584 10.9819 2.42983 10.9819 2.57268V10.9834H3.00042C2.85756 10.9834 2.78613 11.0548 2.78613 11.1977V12.8048C2.78613 12.9477 2.85756 13.0191 3.00042 13.0191H10.9819V21.4298C10.9819 21.5727 11.0534 21.6441 11.1962 21.6441H12.8034C12.9462 21.6441 13.0176 21.5727 13.0176 21.4298V13.0191H21.0004C21.1433 13.0191 21.2147 12.9477 21.2147 12.8048V11.1977C21.2147 11.0548 21.1433 10.9834 21.0004 10.9834H13.0176V2.57268C13.0176 2.42983 12.9462 2.3584 12.8034 2.3584Z"
                      fill="#999999"
                    />
                  </svg>
                )}
              </>
            )}
          </div>
          {isMobile && selectedQuestion === "2" ? (
            <div className="w-full px-10 bg-[#ECDFFE] border border-[#F1EAFB]">
              <div className="flex justify-start">
                <h4 className="">{items[selectedQuestion].answer}</h4>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            onClick={() => handelQuestion("3")}
            className={`${
              selectedQuestion === "3" ? "bg-[#ECDFFE]" : ""
            } flex justify-between pr-4 md:pr-6  pl-4 py-6 gap-x-1 w-full border-[.5px] border-[#F8F4FD] cursor-pointer items-center`}
          >
            <div className="flex items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="min-w-[24px]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="12"
                  fill={`${selectedQuestion === "3" ? "#8242DF" : "#F1EAFB"}`}
                />
              </svg>
              <p>{items[3].question}</p>
            </div>
            {!isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M1 1L9 9L1 17"
                  stroke={`${selectedQuestion === "3" ? "#8242DF" : "#F1EAFB"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <>
                {selectedQuestion === "3" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 16L12 8L20 16"
                      stroke="#8242DF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.8034 2.3584H11.1962C11.0534 2.3584 10.9819 2.42983 10.9819 2.57268V10.9834H3.00042C2.85756 10.9834 2.78613 11.0548 2.78613 11.1977V12.8048C2.78613 12.9477 2.85756 13.0191 3.00042 13.0191H10.9819V21.4298C10.9819 21.5727 11.0534 21.6441 11.1962 21.6441H12.8034C12.9462 21.6441 13.0176 21.5727 13.0176 21.4298V13.0191H21.0004C21.1433 13.0191 21.2147 12.9477 21.2147 12.8048V11.1977C21.2147 11.0548 21.1433 10.9834 21.0004 10.9834H13.0176V2.57268C13.0176 2.42983 12.9462 2.3584 12.8034 2.3584Z"
                      fill="#999999"
                    />
                  </svg>
                )}
              </>
            )}
          </div>
          {isMobile && selectedQuestion === "3" ? (
            <div className="w-full px-10 bg-[#ECDFFE] border border-[#F1EAFB]">
              <div className="flex justify-start">
                <h4 className="">{items[selectedQuestion].answer}</h4>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            onClick={() => handelQuestion("4")}
            className={`${
              selectedQuestion === "4" ? "bg-[#ECDFFE]" : ""
            } flex justify-between pr-4 md:pr-6  pl-4 py-6 gap-x-1 w-full border-[.5px] border-[#F8F4FD] cursor-pointer items-center`}
          >
            <div className="flex items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="min-w-[24px]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="12"
                  fill={`${selectedQuestion === "4" ? "#8242DF" : "#F1EAFB"}`}
                />
              </svg>
              <p>{items[4].question}</p>
            </div>
            {!isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M1 1L9 9L1 17"
                  stroke={`${selectedQuestion === "4" ? "#8242DF" : "#F1EAFB"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <>
                {selectedQuestion === "4" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 16L12 8L20 16"
                      stroke="#8242DF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="min-w-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.8034 2.3584H11.1962C11.0534 2.3584 10.9819 2.42983 10.9819 2.57268V10.9834H3.00042C2.85756 10.9834 2.78613 11.0548 2.78613 11.1977V12.8048C2.78613 12.9477 2.85756 13.0191 3.00042 13.0191H10.9819V21.4298C10.9819 21.5727 11.0534 21.6441 11.1962 21.6441H12.8034C12.9462 21.6441 13.0176 21.5727 13.0176 21.4298V13.0191H21.0004C21.1433 13.0191 21.2147 12.9477 21.2147 12.8048V11.1977C21.2147 11.0548 21.1433 10.9834 21.0004 10.9834H13.0176V2.57268C13.0176 2.42983 12.9462 2.3584 12.8034 2.3584Z"
                      fill="#999999"
                    />
                  </svg>
                )}
              </>
            )}
          </div>
          {isMobile && selectedQuestion === "4" ? (
            <div className="w-full px-10 bg-[#ECDFFE] border border-[#F1EAFB]">
              <div className="flex justify-start">
                <h4 className="">{items[selectedQuestion].answer}</h4>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="h-[472px] bg-[#F8F4FD] border border-[#C7ABF1] text-left drop-shadow-lg max-w-[648px] w-full py-4 px-6 rounded-xl md:block hidden">
          <div className="flex justify-start my-6">
            <h4 className="pl-14 font-bold ">
              {items[selectedQuestion].title}
            </h4>
          </div>
          <div className="flex justify-start">
            <h4 className="pl-14">{items[selectedQuestion].answer}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
