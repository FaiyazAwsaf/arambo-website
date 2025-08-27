"use client";
import React from "react";
import Link from "next/link";
import contentArray from "./SelectUserTypeContent";
const SelectUserType = () => {
  const [userIndex, setUserIndex] = React.useState<number>(0);

  const buttonLabels = ["For Buyers", "For Sellers", "For Renters"];
  const LinkRoutes = ["/residential", "/list-property", "/residential"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] px-2 md:px-0">
      <div className="flex flex-col space-y-5">
        <h2 className="h2">
          Simple steps. Real results. Tailored for everyone.
        </h2>
        <p className="text-Arambo-Text md:w-[70%] w-full">
          Our team of experienced real estate professionals is here to guide you
        </p>
        <div className="mt-7 space-y-4 flex flex-col">
          {buttonLabels.map((label, index) => (
            <button
              key={index}
              onClick={() => setUserIndex(index)}
              className={`
                                ${userIndex === index
                  ? "bg-Arambo-Accent text-Arambo-White"
                  : "bg-Arambo-Border text-Arambo-Black hover:bg-Arambo-Accent hover:text-Arambo-White"
                }
                                duration-200 rounded-full flex justify-between items-center w-full py-6 px-8
                            `}
            >
              <span className="body-lg">{label}</span>
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L7 7.5L1 13.5"
                  stroke={userIndex === index ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="w-full space-y-2 mt-8 md:mt-0">
          {[0, 1, 2, 3].map((stepIdx) => (
            <div
              key={stepIdx}
              className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl"
            >
              <div className="text-Arambo-Accent">
                <img src="/homepageAssets/ListingIcon.png" alt="" />
              </div>
              <div className="space-y-2">
                <h5 className="h5">{contentArray[userIndex][stepIdx].title}</h5>
                <p className="text-Arambo-Text">
                  {contentArray[userIndex][stepIdx].description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link href={LinkRoutes[userIndex]} className="space-x-2 flex items-center pt-8">
          <span className="text-lg font-bold">{userIndex === 1 ? "Get an offer" : "Start Browsing Properties"}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2485_2817)">
              <path
                d="M20.6601 17C19.7893 18.5083 18.5396 19.7629 17.0348 20.6398C15.53 21.5167 13.8223 21.9854 12.0808 21.9994C10.3392 22.0135 8.62415 21.5725 7.10541 20.72C5.58667 19.8676 4.31689 18.6332 3.42179 17.1392C2.52668 15.6452 2.03728 13.9434 2.00204 12.2021C1.9668 10.4608 2.38694 8.74055 3.22086 7.21155C4.05479 5.68256 5.27358 4.39787 6.75659 3.48467C8.2396 2.57146 9.9354 2.06141 11.6761 2.005L12.0001 2L12.3241 2.005C14.0511 2.061 15.7341 2.56355 17.2091 3.46364C18.6841 4.36373 19.9007 5.63065 20.7402 7.14089C21.5798 8.65113 22.0137 10.3531 21.9997 12.081C21.9856 13.8089 21.5241 15.5036 20.6601 17ZM17.0001 12.02L16.9901 11.857L16.9741 11.771L16.9291 11.629L16.8751 11.516L16.8321 11.446L16.7611 11.351L16.7071 11.293L12.7071 7.293L12.6131 7.21C12.4121 7.05459 12.1595 6.98151 11.9066 7.0056C11.6537 7.02969 11.4194 7.14916 11.2514 7.33972C11.0833 7.53029 10.9941 7.77767 11.0019 8.03162C11.0096 8.28557 11.1138 8.52704 11.2931 8.707L13.5861 11L8.00011 11L7.88311 11.007C7.63001 11.0371 7.39796 11.1627 7.23437 11.3582C7.07078 11.5536 6.988 11.8042 7.00294 12.0586C7.01787 12.313 7.1294 12.5522 7.31474 12.7272C7.50008 12.9021 7.74523 12.9997 8.00011 13L13.5851 13L11.2931 15.293L11.2101 15.387C11.0547 15.588 10.9816 15.8406 11.0057 16.0935C11.0298 16.3464 11.1493 16.5807 11.3398 16.7488C11.5304 16.9168 11.7778 17.006 12.0317 16.9982C12.2857 16.9905 12.5271 16.8863 12.7071 16.707L16.7071 12.707L16.7801 12.625L16.8441 12.536L16.9061 12.423L16.9401 12.342L16.9741 12.229L16.9941 12.117L17.0001 12.019L17.0001 12.02Z"
                fill="#1946BB"
              />
            </g>
            <defs>
              <clipPath id="clip0_2485_2817">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SelectUserType;
