import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white relative text-black  py-8 ">
      <div className="container  mx-auto flex justify-between items-center px-4">
        <div className=" text-2xl font-bold">
          <svg
            width="178"
            height="52"
            viewBox="0 0 178 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8664 12.512C14.677 12.64 15.413 12.9707 16.0744 13.504C16.757 14.0373 17.2904 14.6987 17.6744 15.488C18.0797 16.2773 18.2824 17.12 18.2824 18.016C18.2824 19.1467 17.9944 20.1707 17.4184 21.088C16.8424 21.984 15.9997 22.6987 14.8904 23.232C13.8024 23.744 12.5117 24 11.0184 24H2.69838V1.696H10.6984C12.213 1.696 13.5037 1.952 14.5704 2.464C15.637 2.95467 16.437 3.62667 16.9704 4.48C17.5037 5.33333 17.7704 6.29333 17.7704 7.36C17.7704 8.68267 17.4077 9.78133 16.6824 10.656C15.9784 11.5093 15.0397 12.128 13.8664 12.512ZM5.61038 11.328H10.5064C11.8717 11.328 12.9277 11.008 13.6744 10.368C14.421 9.728 14.7944 8.84267 14.7944 7.712C14.7944 6.58133 14.421 5.696 13.6744 5.056C12.9277 4.416 11.8504 4.096 10.4424 4.096H5.61038V11.328ZM10.7624 21.6C12.213 21.6 13.3437 21.2587 14.1544 20.576C14.965 19.8933 15.3704 18.944 15.3704 17.728C15.3704 16.4907 14.9437 15.52 14.0904 14.816C13.237 14.0907 12.0957 13.728 10.6664 13.728H5.61038V21.6H10.7624ZM35.0674 24L29.7554 14.88H26.2354V24H23.3234V1.696H30.5234C32.2087 1.696 33.6274 1.984 34.7794 2.56C35.9527 3.136 36.8274 3.91467 37.4034 4.896C37.9794 5.87733 38.2674 6.99733 38.2674 8.256C38.2674 9.792 37.8194 11.1467 36.9234 12.32C36.0487 13.4933 34.726 14.272 32.9554 14.656L38.5554 24H35.0674ZM26.2354 12.544H30.5234C32.102 12.544 33.286 12.16 34.0754 11.392C34.8647 10.6027 35.2594 9.55733 35.2594 8.256C35.2594 6.93333 34.8647 5.90933 34.0754 5.184C33.3074 4.45867 32.1234 4.096 30.5234 4.096H26.2354V12.544ZM56.9761 19.04H47.2481L45.4561 24H42.3841L50.4481 1.824H53.8081L61.8401 24H58.7681L56.9761 19.04ZM56.1441 16.672L52.1121 5.408L48.0801 16.672H56.1441ZM69.2666 1.696V24H66.3546V1.696H69.2666ZM92.7656 24H89.8536L78.1416 6.24V24H75.2296V1.664H78.1416L89.8536 19.392V1.664H92.7656V24ZM114.346 1.696L107.082 15.584V24H104.17V15.584L96.8736 1.696H100.106L105.61 12.992L111.114 1.696H114.346Z"
              fill="#838383"
            />
            <path
              d="M118.129 24V1.6H126.417C128.209 1.6 129.692 1.89867 130.865 2.496C132.038 3.09333 132.913 3.91467 133.489 4.96C134.065 6.00533 134.353 7.17867 134.353 8.48C134.353 9.71733 134.076 10.8587 133.521 11.904C132.966 12.928 132.102 13.76 130.929 14.4C129.756 15.0187 128.252 15.328 126.417 15.328H122.225V24H118.129ZM122.225 12H126.161C127.59 12 128.614 11.6907 129.233 11.072C129.873 10.432 130.193 9.568 130.193 8.48C130.193 7.37067 129.873 6.50667 129.233 5.888C128.614 5.248 127.59 4.928 126.161 4.928H122.225V12ZM138.567 24V1.6H146.215C148.839 1.6 150.993 2.06933 152.679 3.008C154.385 3.92533 155.644 5.22667 156.455 6.912C157.287 8.576 157.703 10.5387 157.703 12.8C157.703 15.0613 157.287 17.0347 156.455 18.72C155.644 20.384 154.385 21.6853 152.679 22.624C150.993 23.5413 148.839 24 146.215 24H138.567ZM142.663 20.48H146.023C147.9 20.48 149.383 20.1813 150.471 19.584C151.559 18.9653 152.337 18.0907 152.807 16.96C153.276 15.808 153.511 14.4213 153.511 12.8C153.511 11.2 153.276 9.824 152.807 8.672C152.337 7.52 151.559 6.63467 150.471 6.016C149.383 5.39733 147.9 5.088 146.023 5.088H142.663V20.48ZM162.317 24V1.6H176.781V4.896H166.413V11.168H174.797V14.4H166.413V24H162.317Z"
              fill="#742DDB"
            />
            <path
              d="M98.3133 46V36.2H101.757C102.448 36.2 103.017 36.312 103.465 36.536C103.923 36.7507 104.263 37.0493 104.487 37.432C104.711 37.8053 104.823 38.2253 104.823 38.692C104.823 39.3267 104.651 39.826 104.305 40.19C103.969 40.554 103.563 40.806 103.087 40.946C103.451 41.0113 103.783 41.156 104.081 41.38C104.38 41.604 104.613 41.884 104.781 42.22C104.959 42.556 105.047 42.9247 105.047 43.326C105.047 43.8207 104.926 44.2733 104.683 44.684C104.441 45.0853 104.081 45.4073 103.605 45.65C103.129 45.8833 102.551 46 101.869 46H98.3133ZM99.4893 40.484H101.673C102.299 40.484 102.779 40.3393 103.115 40.05C103.451 39.7513 103.619 39.3407 103.619 38.818C103.619 38.3233 103.451 37.9267 103.115 37.628C102.789 37.3293 102.294 37.18 101.631 37.18H99.4893V40.484ZM99.4893 45.02H101.743C102.415 45.02 102.933 44.866 103.297 44.558C103.661 44.2407 103.843 43.802 103.843 43.242C103.843 42.6913 103.652 42.2527 103.269 41.926C102.887 41.59 102.369 41.422 101.715 41.422H99.4893V45.02ZM107.421 49.08L109.143 45.328H108.737L105.979 39.056H107.253L109.549 44.46L111.985 39.056H113.203L108.653 49.08H107.421ZM118.22 46V36.2H124.184V37.166H119.396V40.61H123.47V41.562H119.396V46H118.22ZM126.342 37.516C126.109 37.516 125.913 37.4413 125.754 37.292C125.605 37.1333 125.53 36.9373 125.53 36.704C125.53 36.48 125.605 36.2933 125.754 36.144C125.913 35.9947 126.109 35.92 126.342 35.92C126.566 35.92 126.757 35.9947 126.916 36.144C127.075 36.2933 127.154 36.48 127.154 36.704C127.154 36.9373 127.075 37.1333 126.916 37.292C126.757 37.4413 126.566 37.516 126.342 37.516ZM125.754 46V39.056H126.93V46H125.754ZM128.978 46V35.92H130.154V46H128.978ZM135.203 46.168C134.541 46.168 133.953 46.0187 133.439 45.72C132.926 45.412 132.52 44.9873 132.221 44.446C131.932 43.9047 131.787 43.2653 131.787 42.528C131.787 41.8 131.932 41.1653 132.221 40.624C132.511 40.0733 132.912 39.6487 133.425 39.35C133.948 39.042 134.55 38.888 135.231 38.888C135.903 38.888 136.482 39.042 136.967 39.35C137.462 39.6487 137.84 40.0453 138.101 40.54C138.363 41.0347 138.493 41.5667 138.493 42.136C138.493 42.2387 138.489 42.3413 138.479 42.444C138.479 42.5467 138.479 42.6633 138.479 42.794H132.949C132.977 43.326 133.099 43.7693 133.313 44.124C133.537 44.4693 133.813 44.7307 134.139 44.908C134.475 45.0853 134.83 45.174 135.203 45.174C135.689 45.174 136.095 45.062 136.421 44.838C136.748 44.614 136.986 44.3107 137.135 43.928H138.297C138.111 44.572 137.751 45.1087 137.219 45.538C136.697 45.958 136.025 46.168 135.203 46.168ZM135.203 39.882C134.643 39.882 134.144 40.0547 133.705 40.4C133.276 40.736 133.029 41.2307 132.963 41.884H137.331C137.303 41.2587 137.089 40.7687 136.687 40.414C136.286 40.0593 135.791 39.882 135.203 39.882ZM144.574 46.168C143.613 46.168 142.768 45.958 142.04 45.538C141.321 45.1087 140.757 44.5113 140.346 43.746C139.945 42.9807 139.744 42.0987 139.744 41.1C139.744 40.1013 139.945 39.224 140.346 38.468C140.757 37.7027 141.321 37.1053 142.04 36.676C142.768 36.2467 143.613 36.032 144.574 36.032C145.545 36.032 146.389 36.2467 147.108 36.676C147.836 37.1053 148.401 37.7027 148.802 38.468C149.203 39.224 149.404 40.1013 149.404 41.1C149.404 42.0987 149.203 42.9807 148.802 43.746C148.401 44.5113 147.836 45.1087 147.108 45.538C146.389 45.958 145.545 46.168 144.574 46.168ZM144.574 45.132C145.293 45.132 145.923 44.9733 146.464 44.656C147.015 44.3293 147.439 43.8673 147.738 43.27C148.046 42.6633 148.2 41.94 148.2 41.1C148.2 40.26 148.046 39.5413 147.738 38.944C147.439 38.3467 147.015 37.8893 146.464 37.572C145.923 37.2453 145.293 37.082 144.574 37.082C143.855 37.082 143.221 37.2453 142.67 37.572C142.129 37.8893 141.704 38.3467 141.396 38.944C141.097 39.5413 140.948 40.26 140.948 41.1C140.948 41.94 141.097 42.6633 141.396 43.27C141.704 43.8673 142.129 44.3293 142.67 44.656C143.221 44.9733 143.855 45.132 144.574 45.132ZM151.03 46V39.056H152.094L152.164 40.302C152.388 39.8633 152.71 39.518 153.13 39.266C153.55 39.014 154.026 38.888 154.558 38.888C155.38 38.888 156.033 39.14 156.518 39.644C157.013 40.1387 157.26 40.904 157.26 41.94V46H156.084V42.066C156.084 40.6193 155.487 39.896 154.292 39.896C153.695 39.896 153.196 40.1153 152.794 40.554C152.402 40.9833 152.206 41.5993 152.206 42.402V46H151.03ZM159.756 37.516C159.523 37.516 159.327 37.4413 159.168 37.292C159.019 37.1333 158.944 36.9373 158.944 36.704C158.944 36.48 159.019 36.2933 159.168 36.144C159.327 35.9947 159.523 35.92 159.756 35.92C159.98 35.92 160.172 35.9947 160.33 36.144C160.489 36.2933 160.568 36.48 160.568 36.704C160.568 36.9373 160.489 37.1333 160.33 37.292C160.172 37.4413 159.98 37.516 159.756 37.516ZM159.168 46V39.056H160.344V46H159.168ZM165.556 46.168C164.902 46.168 164.314 46.0187 163.792 45.72C163.269 45.4213 162.854 45.0013 162.546 44.46C162.247 43.9093 162.098 43.2653 162.098 42.528C162.098 41.7907 162.252 41.1513 162.56 40.61C162.868 40.0593 163.283 39.6347 163.806 39.336C164.338 39.0373 164.93 38.888 165.584 38.888C166.237 38.888 166.825 39.0373 167.348 39.336C167.87 39.6347 168.281 40.0593 168.58 40.61C168.888 41.1513 169.042 41.7907 169.042 42.528C169.042 43.2653 168.888 43.9093 168.58 44.46C168.272 45.0013 167.852 45.4213 167.32 45.72C166.797 46.0187 166.209 46.168 165.556 46.168ZM165.556 45.16C165.957 45.16 166.33 45.062 166.676 44.866C167.021 44.67 167.301 44.376 167.516 43.984C167.73 43.592 167.838 43.1067 167.838 42.528C167.838 41.9493 167.73 41.464 167.516 41.072C167.31 40.68 167.035 40.386 166.69 40.19C166.344 39.994 165.976 39.896 165.584 39.896C165.182 39.896 164.809 39.994 164.464 40.19C164.118 40.386 163.838 40.68 163.624 41.072C163.409 41.464 163.302 41.9493 163.302 42.528C163.302 43.1067 163.409 43.592 163.624 43.984C163.838 44.376 164.114 44.67 164.45 44.866C164.795 45.062 165.164 45.16 165.556 45.16ZM170.677 46V39.056H171.741L171.811 40.302C172.035 39.8633 172.357 39.518 172.777 39.266C173.197 39.014 173.673 38.888 174.205 38.888C175.026 38.888 175.68 39.14 176.165 39.644C176.66 40.1387 176.907 40.904 176.907 41.94V46H175.731V42.066C175.731 40.6193 175.134 39.896 173.939 39.896C173.342 39.896 172.842 40.1153 172.441 40.554C172.049 40.9833 171.853 41.5993 171.853 42.402V46H170.677Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl bg-white px-2 py-1 rounded-md drop-shadow-2xl"
          >
            ☰
          </button>
        </div>

        <ul className="hidden lg:flex items-center space-x-6">
          <a href="#" className="flex items-center gap-x-1">
            <span>PRODUCT</span>{" "}
            <svg
              className="mt-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="38"
              viewBox="0 0 24 38"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.1704 9.3295C19.6098 9.76884 19.6098 10.4812 19.1704 10.9205L12.7955 17.2954C12.3562 17.7348 11.6438 17.7348 11.2045 17.2954L4.8295 10.9205C4.39017 10.4812 4.39017 9.76884 4.8295 9.3295C5.26884 8.89017 5.98116 8.89017 6.42049 9.3295L12 14.909L17.5795 9.3295C18.0189 8.89017 18.7311 8.89017 19.1704 9.3295Z"
                fill="#24292E"
              />
            </svg>
          </a>
          <a href="#" className="">API</a>
          <a href="#" className="">PRICING</a>
          <a href="#" className="">CONTACT</a>
          <a href="#" className="">FAQ</a>
          <a href="#" className="">AFFILIATE</a>
        </ul>

        <button className="hidden lg:block bg-app-purple font-medium text-white px-8 py-3 rounded-xl">
          My Account
        </button>
      </div>

      <div
        className={`origin-top bg-white lg:hidden   absolute 
           w-full overflow-hidden transition-all duration-500 ${
             isMobileMenuOpen ? "h-64 " : "h-0 "
           }`}
      >
        {isMobileMenuOpen && (
          <>
            <ul className="flex flex-col mx-12 my-2">
              <a href="#" className="flex items-center gap-x-1">
                <span>PRODUCT</span>{" "}
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 38"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.1704 9.3295C19.6098 9.76884 19.6098 10.4812 19.1704 10.9205L12.7955 17.2954C12.3562 17.7348 11.6438 17.7348 11.2045 17.2954L4.8295 10.9205C4.39017 10.4812 4.39017 9.76884 4.8295 9.3295C5.26884 8.89017 5.98116 8.89017 6.42049 9.3295L12 14.909L17.5795 9.3295C18.0189 8.89017 18.7311 8.89017 19.1704 9.3295Z"
                    fill="#24292E"
                  />
                </svg>
              </a>
              <a href="#" className="">API</a>
              <a href="#" className="my-1">PRICING</a>
              <a href="#" className="">CONTACT</a>
              <a href="#" className="my-1">FAQ</a>
              <a href="#" className="">AFFILIATE</a>
            </ul>
            <button className="mx-12 my-1 lg:hidden bg-app-purple font-medium text-white px-8 py-2 rounded-xl">
              My Account
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
