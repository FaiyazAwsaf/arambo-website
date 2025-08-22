import React from 'react'

interface BigButtonProps {
    label: string;
    content: string;
    bg: string;
}

const BigButton = ({ label, content, bg }: BigButtonProps) => {
    return (
        <div className={`bg-${bg} px-8 py-10 w-full flex items-center justify-between space-x-8 rounded-2xl`}>
            <div className='space-y-3'>
                <h4 className={`h4 ${bg === "Arambo-Accent" ? "text-Arambo-White" : "text-Arambo-Black"}`}>{label}</h4>
                <p className={` ${bg === "Arambo-Accent" ? "text-Arambo-White" : "text-Arambo-Text"}`}>{content}</p>
            </div>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2598_157)">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke={`${bg === "Arambo-Accent" ? "#fff" : "#6F7176"}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2598_157">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default BigButton
