import Image from "next/image";
import { MapPin } from "lucide-react";
const Card = ({ img, price, location, bed, bath, area, status, tag }) => {
    return <div className="rounded-xl grid grid-rows-[33%_66%] grid-cols-1 p-4 bg-white shadow-lg">
        <Image src={{ img }} alt="Apartment image" objectFit="cover" />
        <div className="flex flex-col justify-between space-y-4">
            <p className="text-Arambo-Accent text-2xl font-bold ">৳{price}</p>
            <div className="flex items-center space-x-2"><MapPin size={20} className="text-Arambo-Accent" /><span>{location}</span></div>
            <div className="w-full rounded-full bg-[color-arambo-accent]"></div>
        </div>
    </div>
}

export default Card
