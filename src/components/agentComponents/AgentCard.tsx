import React from 'react'
import PropertyCard from './PropertyCard'
import AgentProfile from './AgentProfile'
const AgentCard = () => {

    return (
        <div className='w-full flex md:flex-row flex-col items-center bg-Arambo-White rounded-2xl overflow-hidden cursor-pointer'>
            <img src="/agent/Agent.png" className='object-cover object-top w-[277px] flex h-[323px]' alt="" />
            <div className='px-5 py-6 flex md:flex-row flex-col justify-center items-center'>
                <AgentProfile />
                <div className='md:ml-8 md:mt-0 ml-0 mt-10 space-y-4'>
                    <h4 className="h4">Featured Properties</h4>
                    <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-4">
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentCard
