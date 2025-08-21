import Link from "next/link"
import AgentCard from "@/components/agentComponents/AgentCard"
import AgentProfile from "@/components/agentComponents/AgentProfile"
import { PropertyCard } from "@/components/PropertyCard"
const page = () => {

    type Row = {
        col1: string;
        col2: string;
        col3: string;
        show?: boolean; // controls conditional rendering
    };

    const rows: Row[] = [
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
        { col1: "Gulshan 2, Dhaka", col2: "12/11/2015", col3: "৳52,000,000", show: true },
    ];
    return (
        <div className="px-4 space-y-24 my-24 bg-Arambo-Background flex flex-col items-center">
            <section className="max-w-[1200px] flex md:flex-row flex-col md:space-x-12 space-x-0 md:space-y-0 space-y-12">
                <div className="">
                    <div className="min-w-[340px] px-6 py-8 rounded-2xl bg-Arambo-White flex flex-col items-center space-y-4">
                        <img src="/agent/Agent.png" className="h-[112px] w-[112px] rounded-full object-cover object-top" alt="" />
                        <div className="flex justify-center text-center items-center ">
                            <AgentProfile />
                        </div>
                        <div className="grid grid-cols-2 gap-x-3">
                            <button className="px-10 py-4 rounded-lg bg-Arambo-Accent text-Arambo-White">Contact Now</button>
                            <button className="px-10 py-4 rounded-lg bg-Arambo-Background text-Arambo-Black border-2 border-Arambo-Border">Report</button>
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="space-y-5">
                        <h4 className="h4 !font-bold">Introduction</h4>
                        <p className="text-Arambo-Text">A studio apartment in strategic location in Malang. Located nearby Uny Muhammadiyah Malang, Univ Negeri Matang and Univ Brawijaya, this is perfect for students and academics. This is in the main road to Batu the man tourist omactions in East Java. So it is well suited for tourists. This has a stunning Arjuns Mountain view with misty ambiente in neming. It has kitchen, and cozy sele and bunk bed & it coters up 3 guests. It has two pools, gyms, futsal field, minimarket and coffee shop</p>
                    </div>
                    <div className="space-y-5">
                        <h4 className="h4 !font-bold">Featured Listing</h4>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <PropertyCard property={
                                {
                                    id: 123,
                                    image: "/residential/residential-bg.png",
                                    price: "2,000,000",
                                    type: "residential",
                                    location: "Gulshan",
                                    beds: 4,
                                    baths: 2,
                                    sqft: 2800,
                                    isVerified: true,
                                    forSale: true
                                }
                            } />
                            <PropertyCard property={
                                {
                                    id: 123,
                                    image: "/residential/residential-bg.png",
                                    price: "2,000,000",
                                    type: "residential",
                                    location: "Gulshan",
                                    beds: 4,
                                    baths: 2,
                                    sqft: 2800,
                                    isVerified: true,
                                    forSale: true
                                }
                            } />
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h4 className="h4 !font-bold">Sold (12)</h4>
                        <table className="w-full text-left  bg-Arambo-White rounded-xl">
                            <thead className="">
                                <tr className="">
                                    <th className="px-4 py-3 text-sm font-medium text-gray-600">Address</th>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-600">Sold Date</th>
                                    <th className="px-4 py-3 text-sm font-medium text-gray-600">Closing Price</th>
                                </tr>
                            </thead>

                            {/* divide-y adds a top border between rows (no border above the first) */}
                            <tbody className="">
                                {rows.map((row, i) => {
                                    if (!row.show) return null; // conditional render
                                    return (
                                        <tr key={i} className="align-middle border-t border-Arambo-Border ">
                                            <td className="px-4 py-3 flex md:flex-row flex-col items-center space-x-2">
                                                <img src="/agent/AgentProperty.png" alt="" className="h-[72px] w-[96px] shrink-0" />
                                                <span className="whitespace-nowrap">{row.col1}</span>
                                            </td>
                                            <td className="px-4 py-3">{row.col2}</td>
                                            <td className="px-4 py-3">{row.col3}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
