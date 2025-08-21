import AgentCard from "@/components/agentComponents/AgentCard"
const page = () => {
    return (
        <div className="px-4 space-y-24 bg-Arambo-Background">
            <section className=" py-25  flex flex-col justify-center items-center space-y-6 rounded-2xl text-center bg-[linear-gradient(180deg,#000B26_0%,#00123C_19.69%,#032471_70.33%,#0C39A3_86.64%,#0041D9_100%)]">
                <div className="bg-[#DEE7FC] px-3 py-1 font-medium rounded-[3px] text-Arambo-Accent">Our Agents</div>
                <h1 className="h1 text-Arambo-White">Find your Agent</h1>
                <p className="text-Arambo-White max-w-2xl p-lg ">Discover trusted real estate agents near you. View profiles, read reviews, and choose the best match to guide you through your buying or selling journey.</p>
            </section>
            <section className="max-w-6xl mx-auto flex flex-col justify-center items-center space-y-7">
                <AgentCard />
                <AgentCard />
                <AgentCard />
            </section>
            <section></section>
        </div>
    )
}

export default page
