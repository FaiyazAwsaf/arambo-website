"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const SelectUserType = () => {
    const [userIndex, setUserIndex] = React.useState<number | null>(0);

    const buttonLabels = ["For Buyers", "For Sellers", "For Renters"]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] px-2 md:px-0">
            <div className="flex flex-col space-y-5">
                <h2 className="h2">Simple steps. Real results. Tailored for everyone.</h2>
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
                                    ? 'bg-Arambo-Accent text-Arambo-White'
                                    : 'bg-Arambo-Border text-Arambo-Black hover:bg-Arambo-Accent hover:text-Arambo-White'}
                                duration-200 rounded-full flex justify-between items-center w-full py-6 px-8
                            `}
                        >
                            <span className="body-lg">{label}</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <div className="w-full space-y-2 mt-8 md:mt-0">
                    {/* Rectangle Cards */}
                    <div className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl">
                        <div className="text-Arambo-Accent">
                            <img src="/homepageAssets/ListingIcon.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h5 className="h5">Browse Listings</h5>
                            <p className="text-Arambo-Text">
                                Browse curated, verified apartments in your desired location.
                            </p>
                        </div>
                    </div>
                    <div className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl">
                        <div className="text-Arambo-Accent">
                            <img src="/homepageAssets/ListingIcon.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h5 className="h5">Get Expert Support</h5>
                            <p className="text-Arambo-Text">
                                Our agents help with everything from price checks to paperwork.
                            </p>
                        </div>
                    </div>
                    <div className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl">
                        <div className="text-Arambo-Accent">
                            <img src="/homepageAssets/ListingIcon.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h5 className="h5">Book a Visit</h5>
                            <p className="text-Arambo-Text">
                                Schedule a tour with one click—online or in person.
                            </p>
                        </div>
                    </div>
                    <div className="py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl">
                        <div className="text-Arambo-Accent">
                            <img src="/homepageAssets/ListingIcon.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h5 className="h5">Close with Confidence</h5>
                            <p className="text-Arambo-Text">
                                Transparent process, no hidden fees.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-x-2 pt-8">
                    <span className="text-lg font-bold">
                        Start Browsing Properties
                    </span>
                    <FontAwesomeIcon
                        className="text-Arambo-Accent"
                        icon={faCircleArrowRight}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectUserType
