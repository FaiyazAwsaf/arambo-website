"use client"
import React, { useEffect, useState } from 'react'

interface ToggleProps {
    first: string;
    second: string;
    onToggle: (value: boolean) => void;
}

const ToggleDynamic = ({ first, second, onToggle }: ToggleProps) => {
    const [isFirst, setIsFirst] = useState(false);

    useEffect(() => {
        onToggle(isFirst);
    }, [isFirst, onToggle]);

    return (
        <div className='bg-Arambo-Border rounded-full p-1 space-x-1 flex items-center justify-center h-fit'>
            <button onClick={() => setIsFirst(true)} className={`${isFirst ? 'bg-Arambo-Accent text-Arambo-White ' : 'text-Arambo-Black bg-Arambo-Border'} py-3 px-5 rounded-full`}>{first}</button>
            <button onClick={() => setIsFirst(false)} className={`${!isFirst ? 'bg-Arambo-Accent text-Arambo-White ' : 'text-Arambo-Black bg-Arambo-Border'} py-3 px-5 rounded-full`}>{second}</button>
        </div>
    )
}

export default ToggleDynamic
