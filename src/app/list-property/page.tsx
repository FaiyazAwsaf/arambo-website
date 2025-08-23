import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"

const page = () => {

    return (
        <div className="px-4 bg-Arambo-Background">
            <div className=" h-[296px] rounded-2xl bg-[linear-gradient(180deg,#000B26_0%,#00123C_19.69%,#032471_70.33%,#0C39A3_86.64%,#0041D9_100%)] flex justify-center items-center text-center">
                <h1 className="h1 text-Arambo-White">List Your Property</h1>
            </div>
            <div className="py-20 bg-Arambo-Background flex justify-center items-center ">
                <div className="bg-Arambo-White max-w-3xl w-full border border-Arambo-Border p-8 rounded-3xl">
                    <div className="space-y-14 flex flex-col">
                        <div className="py-4 justify-center items-center flex flex-col text-center">
                            <h2 className="h2">What would you like to do?</h2>
                            <p className="label-18 max-w-md">Choose how you want to get started — rent or sell in just a click.</p>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
                            <div className="bg-Arambo-Background px-8 py-11 flex flex-col justify-center items-center space-y-8 rounded-2xl">
                                <div className="text-center flex flex-col justify-center items-center space-y-3">
                                    <h4 className="h4">Rent Out a Property</h4>
                                    <p className="p-base text-Arambo-Text">For landlords who want to rent their residential or commercial space.</p>
                                </div>
                                <Link href={"/list-property-form"} className="bg-Arambo-Accent py-4 pl-8 pr-6 flex items-center space-x-2 text-Arambo-White rounded-lg"><span>Rent Property</span><FontAwesomeIcon className="h-4 w-7" icon={faArrowRightLong} /></Link>
                            </div>
                            <div className="bg-Arambo-Background px-8 py-11 flex flex-col justify-center items-center space-y-8 rounded-2xl">
                                <div className="text-center flex flex-col justify-center items-center space-y-3">
                                    <h4 className="h4">Sell a Property</h4>
                                    <p className="p-base text-Arambo-Text">Ideal for owners looking to sell apartments, plots units.</p>
                                </div>
                                <Link href={"/list-property-form"} className="bg-Arambo-Accent py-4 pl-8 pr-6 flex items-center space-x-2 text-Arambo-White rounded-lg"><span>Sell Property</span><FontAwesomeIcon className="h-4 w-7" icon={faArrowRightLong} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
