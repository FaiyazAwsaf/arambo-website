"use client"
import React from 'react'

const NewsCarousel = () => {
    const imgSrcArray = [
        "/homepageAssets/DhakaTribune.png",
        "/homepageAssets/ChannelI.png",
        "/homepageAssets/ProthomAlo.png"
    ];
    const contentArray = [
        "Arambo is Reshaping Dhaka’s Rental Scene with Verified Listings & Legal Support",
        "Arambo Brings Verified Rental Market to Life with Smart Filters and Legal Access",
        "Digital Real Estate in Motion: Arambo’s New Tools for Buyers and Renters"
    ]
    return (
        <div className='flex md:flex-row flex-col overflow-scroll gap-5 '>
            {
                imgSrcArray.map((src, i) => (
                    <div key={i} className='h-[264] md:min-w-[542px] w-full bg-Arambo-Background flex flex-col justify-between p-8 rounded-2xl shadow-lg '>
                        <img className='h-[24px] w-fit' src={src} alt="MediaLogo" />
                        <h5 className='h5'>{contentArray[i]}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default NewsCarousel
