import Image from "next/image";
import { MapPin } from "lucide-react";
const Card = ({ img, price, location, bed, bath, area, status, tag }) => {
    return <div className="rounded-xl grid grid-rows-[33%_66%] grid-cols-1 p-4 bg-white shadow-lg">
        <Image src={{ img }} alt="Apartment image" objectFit="cover" />
        <div className="flex flex-col justify-between">
            <h2 className="text-blue-700">৳{price}</h2>
            <div><MapPin size={10} />{location}</div>
            <div className="w-full rounded-full bg-[color-arambo-accent]"></div>
        </div>
    </div>
}

export default Card
