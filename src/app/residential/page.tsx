import { ArrowRight, Home, Search } from "lucide-react";
import banner from "./assets/residential_page_banner.png";
import Image from "next/image";
import res_1 from "@/app/residential/assets/residential_1.jpg"
import res_2 from "@/app/residential/assets/residential_2.jpg"
import res_3 from "@/app/residential/assets/residential_3.png"
import res_4 from "@/app/residential/assets/residential_4.jpg"
import Card from "@/app/residential/card";
import Filter from "@/app/residential/filter";
import "../styles/globals.css";
// Replicate  https://www.arambo.co/comercial
const ResidentialPage = () => {
    const cards = [
        {
            img: res_1.src,
            price: "1,200",
            location: "Downtown, Cityville",
            bed: 2,
            bath: 1,
            area: "1,050 sqft",
            status: "Rent",
            tag: "New Listing"
        },
        {
            img: res_2.src,
            price: "850",
            location: "Uptown, Cityville",
            bed: 1,
            bath: 1,
            area: "720 sqft",
            status: "Rent",
            tag: "Popular"
        },
        {
            img: res_3.src,
            price: "450,000",
            location: "Greenfield Suburbs",
            bed: 3,
            bath: 2,
            area: "1,500 sqft",
            status: "Buy",
            tag: "Featured"
        },
        {
            img: res_4.src,
            price: "320,000",
            location: "Lakeside District",
            bed: 2,
            bath: 2,
            area: "1,200 sqft",
            status: "Buy",
            tag: "New Listing"
        }
    ];

    return (
        <div>
            <section className="px-3 w-full">
                <div className="relative rounded-2xl p-4 text-white flex flex-col justify-center items-center w-full" style={{ backgroundImage: `url(${banner.src})`, backgroundColor: 'rgba(0,0,0,0.3)', backgroundBlendMode: "overlay", backgroundSize: 'cover', backgroundPosition: 'center', height: '445px' }}>
                    <h1>Residential Properties</h1>
                    <p className="body-lg">Sort by location to find the best lists</p>
                    <div className="bg-white/10 border-2 shadow-2xl border-white/10 backdrop-blur-md rounded-full flex items-center mt-10 w-full max-w-md px-4 py-3">
                        <Search className="text-white/80" size={20} />
                        <input
                            type="text"
                            placeholder="Search by location..."
                            className="flex-1 pl-3 bg-transparent text-white placeholder-white/70 outline-none"
                        />
                    </div>
                    <div className="absolute -bottom-15 flex w-full md:w-2/3 justify-center space-x-4 p-4">
                        <button className="bg-white rounded-2xl w-full text-black flex justify-between items-center body-lg font-medium py-8 px-6"><Home size={20} /><span>RENT </span><ArrowRight size={18} /></button>
                        <button className="bg-Arambo-Accent rounded-2xl w-full text-white flex justify-left items-center space-x-4 body-lg font-medium py-8 px-6"><Home size={20} /> <span>BUY</span></button>
                    </div>
                </div>
            </section>
            <section className="mt-20 flex justify-center px-3 w-full">
                <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-[25%_75%] gap-6">
                    {/* Filter section (hidden on mobile) */}
                    <div className="hidden md:block">
                        <div className="filter">
                            <Filter />
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="cards grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cards.map((card, index) => (
                            <div key={index} className="p-4">
                                <Card
                                    img={card.img}
                                    price={card.price}
                                    location={card.location}
                                    bed={card.bed}
                                    bath={card.bath}
                                    area={card.area}
                                    status={card.status}
                                    tag={card.tag}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile filter button (visible only on mobile) */}
                <div className="fixed bottom-4 right-4 md:hidden">
                    <button className="p-3 rounded-full bg-blue-600 text-white shadow-lg">
                        {/* Example: filter icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17V12.414L3.293 6.707A1 1 0 013 6V4z" />
                        </svg>
                    </button>
                </div>
            </section>

        </div>
    );
};

export default ResidentialPage;
