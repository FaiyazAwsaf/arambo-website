"use client"
import React, { useState } from 'react'
import axios from 'axios'

interface FormData {
    name: string;
    email: string;
    phone: string;
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({} as FormData)


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value.trim(), // sanitization
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log("Submitting:", formData)

            const res = await axios.post("/api/submit", formData)
            console.log("Success:", res.data)
            alert("Form submitted successfully!")
        } catch (err) {
            console.error("Error submitting form:", err)
            alert("Something went wrong. Please try again.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-full mx-auto max-w-3xl space-y-12 bg-Arambo-White rounded-[20px] px-8 pt-12 pb-8'>
            <div className="space-y-4 text-left">
                <h2 className="h2">Fill in this form</h2>
                <p className="text-Arambo-Text">Choose how you want to get started — rent or sell in just a click.</p>
            </div>
            <div className="contact space-y-6">
                <h4 className="h4">Contact Information</h4>
                <div className="grid grid-cols-2 md:grid-rows-2 gap-5">
                    <div className='space-y-3'>
                        <label className='label-18' htmlFor="name">Name*</label><br />
                        <input
                            type="text"
                            name="name"
                            placeholder='Your answer'
                            className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className='space-y-3'>
                        <label className='label-18' htmlFor="phone">Phone Number *</label><br />
                        <input
                            type="text"
                            name="phone"
                            placeholder='Your answer'
                            className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className='space-y-3'>
                        <label className='label-18' htmlFor="email">Email Address </label><br />
                        <input
                            type="email"
                            name="email"
                            placeholder='Your answer'
                            className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex space-x-5 md:space-y-0 space-y-5 md:flex-row flex-col items-center'>
                    <button
                        type='submit'
                        className="bg-Arambo-Accent py-4 pl-8 pr-6 flex items-center space-x-2 text-Arambo-White rounded-lg"
                    >
                        <span>Submit</span>
                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 5H15.5M15.5 5L11.5 9M15.5 5L11.5 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <p className="p-base text-Arambo-Text">You`ll receive a confirmation call shortly</p>
                </div>
            </div>
        </form>
    )
}

export default Form
