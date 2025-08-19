"use client"
import React from 'react'

type DynamicCardProps = {
    index: number
}

const DynamicCard: React.FC<DynamicCardProps> = ({ index }) => {
    return <div className=' flex space-x-12 md:flex-row flex-col md:w-[1200px]'>
        <div className={`border-t-2 p-5 ${index === 2 ? `border-Arambo-Accent` : `border-Arambo-Background`} space-y-4`}>
            <h4 className='h4 font-bold'>Truck Moving</h4>
            <p className='p-base text-[#000000A3]'>Whether you`re relocating a home or business, our professional truck moving service ensures secure, on-time delivery every time.</p>
            {/* Use Link from React Router Dom instead */}
            <button className='border-b-2 border-Arambo-Accent'>Book Now</button>
        </div>
        <div className={`border-t-2 p-5 ${index === 0 ? `border-Arambo-Accent` : `border-Arambo-Background`} space-y-4`}>
            <h4 className='h4 font-bold'>Furniture on Demand</h4>
            <p className='p-base text-[#000000A3]'>Our on-demand furniture service delivers stylish, high-quality pieces tailored to your space and schedule.</p>
            {/* Use Link from React Router Dom instead */}
            <button className='border-b-2 border-Arambo-Accent'>Request furniture solution</button>
        </div>
        <div className={`border-t-2 p-5 ${index === 1 ? `border-Arambo-Accent` : `border-Arambo-Background`} space-y-4`}>
            <h4 className='h4 font-bold'>Interior Decoration</h4>
            <p className='p-base text-[#000000A3]'>Connect with our design experts today and discover how our bespoke interior decor solutions can elevate your environment.</p>
            {/* Use Link from React Router Dom instead */}
            <button className='border-b-2 border-Arambo-Accent'>Contact Us</button>
        </div>
    </div>
}

export default DynamicCard
