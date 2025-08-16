import { ArrowRight, Home, Search } from "lucide-react";
import banner from "./residential_page_banner.png";
import Image from "next/image";
import Card from "@/app/residential/card";
import "../styles/globals.css";
// Replicate  https://www.arambo.co/comercial
const ResidentialPage = () => {
    const cards = [{}];
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
                    <div className="absolute -bottom-10 flex w-full md:w-2/3 justify-center space-x-4 p-4">
                        <button className="bg-white rounded-2xl w-full text-black flex justify-between items-center body-lg font-medium py-8 px-6"><Home size={20} /><span>RENT </span><ArrowRight size={18} /></button>
                        <button className="bg-blue-800 rounded-2xl w-full text-white flex justify-left items-center space-x-4 body-lg font-medium py-8 px-6"><Home size={20} /> <span>BUY</span></button>
                    </div>
                </div>
            </section>
            <section>
                <div className="grid md:grid-cols-[35%_65%] grid-cols-1">
                    <div className="filter"></div>
                    <div className="cards">
                        {cards.map((card, index) => (
                            <div key={index} className="p-4">
                                <Card img={ } price={ } location={ } bed={ } area={ } bath={ } status={ } tag={ } />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResidentialPage;
