"use client"
import React, { useState } from 'react'

const Toggle = () => {
    const [isResidential, setIsResidential] = useState(false);
    return (
        <div className='bg-Arambo-Border rounded-full p-1 space-x-1 flex items-center justify-center h-fit'>
            <button onClick={() => setIsResidential(true)} className={`${isResidential ? 'bg-Arambo-Accent text-Arambo-White ' : 'text-Arambo-Black bg-Arambo-Border'} py-3 px-5 rounded-full`}>Residential</button>
            <button onClick={() => setIsResidential(false)} className={`${!isResidential ? 'bg-Arambo-Accent text-Arambo-White ' : 'text-Arambo-Black bg-Arambo-Border'} py-3 px-5 rounded-full`}>Commercial</button>
        </div>

    )
}

export default Toggle
