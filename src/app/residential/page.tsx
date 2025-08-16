import { ArrowRight, Home, Search } from "lucide-react";
import banner from "./residential_page_banner.png";
import Image from "next/image";
import Card from "@/app/residential/card";
import "../styles/globals.css";
// Replicate  https://www.arambo.co/comercial
const ResidentialPage = () => {
    const cards = [
        {
            img: "/residential1.jpg",
            price: "1,200",
            location: "Downtown, Cityville",
            bed: 2,
            bath: 1,
            area: "1,050 sqft",
            status: "Rent",
            tag: "New Listing"
        },
        {
            img: "/residential2.jpg",
            price: "850",
            location: "Uptown, Cityville",
            bed: 1,
            bath: 1,
            area: "720 sqft",
            status: "Rent",
            tag: "Popular"
        },
        {
            img: "/residential3.jpg",
            price: "450,000",
            location: "Greenfield Suburbs",
            bed: 3,
            bath: 2,
            area: "1,500 sqft",
            status: "Buy",
            tag: "Featured"
        },
        {
            img: "/residential4.jpg",
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
            <section className="px-4 w-full">
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
                        <button className="bg-blue-800 rounded-2xl w-full text-white flex justify-left items-center space-x-4 body-lg font-medium py-8 px-6"><Home size={20} /> <span>BUY</span></button>
                    </div>
                </div>
            </section>
            <section className="mt-20">
                <div className="grid md:grid-cols-[35%_65%] grid-cols-1 max-w-7xl">
                    <div className="filter"></div>
                    <div className="cards grid grid-cols-2">
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
            </section>
        </div>
    );
};

export default ResidentialPage;
