import Form from "@/components/furniture/Form"
const page = () => {

    return (
        <div className='px-4 bg-Arambo-Background space-y-24'>
            <section className=" h-[296px] rounded-2xl text-center bg-[linear-gradient(180deg,#000B26_0%,#00123C_19.69%,#032471_70.33%,#0C39A3_86.64%,#0041D9_100%)] flex justify-center items-center">
                <h1 className="h1 bg-gradient-to-r from-white via-[#AFE4FF] to-[#AFE4FF] bg-clip-text text-transparent">Furniture Solution</h1>
            </section>
            <Form />
        </div>
    )
}

export default page
