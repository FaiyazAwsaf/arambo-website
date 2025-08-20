"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

const Form = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value.trim(), // sanitization
        }))
    }

    const handleSubmit = async (e) => {
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
        <form onSubmit={handleSubmit}>
            <div className='px-8 py-12 w-full max-w-3xl relative bg-Arambo-White rounded-[20px] space-y-12'>
                <div className='relative space-y-4'>
                    <div className='absolute top-0 right-0 bg-[#E1E9FC] rounded-full py-2 px-5 text-Arambo-Accent font-medium'>Truck Transportation</div>
                    <h2 className="h2">Trip Details</h2>
                    <p className="label-18 text-Arambo-Text w-[60%]">Choose how you want to get started — rent or sell in just a click.</p>
                </div>
                <div className="form-1">
                    <h4 className='mb-6 h4 !font-bold'>Contact Information</h4>
                    <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-x-8 gap-y-5'>
                        <div className='space-y-5'>
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
                                <label className='label-18' htmlFor="email">Email Address*</label><br />
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
                        <div className='space-y-5'>
                            <div className='space-y-3'>
                                <label className='label-18' htmlFor="phone">Phone Number*</label><br />
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
                                <label className='label-18' htmlFor="productType">Product Type*</label><br />
                                <select
                                    name='productType'
                                    id='product-type'
                                    className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                                    required
                                    onChange={handleChange}
                                >
                                    <option value="" disabled selected>
                                        Select
                                    </option>
                                    <option value="fragile-item">Fragile Item</option>
                                    <option value="non-fragile-item">Non-Fragile Item</option>
                                    <option value="furniture">Furniture</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-2">
                    <h4 className='mb-6 h4 !font-bold'>Trip Details</h4>
                    <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-x-8 gap-y-5'>
                        <div className='space-y-5'>
                            <div className='space-y-3'>
                                <label className='label-18' htmlFor="pickupLocation">Pickup Location*</label><br />
                                <input
                                    type="text"
                                    name="pickupLocation"
                                    placeholder='Your answer'
                                    className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='space-y-3'>
                                <label className='label-18' htmlFor="dropoffLocation">Drop-off Location*</label><br />
                                <input
                                    type="text"
                                    name="dropoffLocation"
                                    placeholder='Your answer'
                                    className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='space-y-3'>
                                <label className='label-18' htmlFor="date">Preferred Date*</label><br />
                                <input
                                    type="date"
                                    name="date"
                                    placeholder='Your answer'
                                    className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='space-y-3'>
                                <label className='label-18' htmlFor="timeSlot">Preferred Time Slot*</label><br />
                                <select
                                    name='timeSlot'
                                    id='time-slot'
                                    className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                                    required
                                    onChange={handleChange}
                                >
                                    <option value="morning">Morning (8 AM – 12 PM)</option>
                                    <option value="afternoon">Afternoon (1 PM – 5 PM)</option>
                                    <option value="evening">Evening (6 PM – 10 PM)</option>
                                </select>
                            </div>
                        </div>
                        <div className='space-y-5'></div>
                    </div>
                    <div className='mt-5 space-y-3'>
                        <label className='label-18' htmlFor="notes">Additional Notes</label><br />
                        <textarea
                            name="notes"
                            id="notes"
                            rows={3}
                            className='px-5 py-3 w-full placeholder:text-Arambo-Text bg-Arambo-Background rounded-lg'
                            placeholder='Your answer'
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className='flex space-x-5 md:space-y-0 space-y-5 md:flex-row flex-col items-center'>
                    <button
                        type='submit'
                        className="bg-Arambo-Accent py-4 pl-8 pr-6 flex items-center space-x-2 text-Arambo-White rounded-lg"
                    >
                        <span>Sell Property</span>
                        <FontAwesomeIcon className="h-4 w-7" icon={faArrowRightLong} />
                    </button>
                    <p className="p-base">You`ll receive a confirmation call shortly</p>
                </div>
            </div>
        </form>
    )
}

export default Form
