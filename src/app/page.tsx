import { Home, Search } from 'lucide-react'
import building from "/building.png"
import AutoScrollCarousel from '@/components/AutoScrollCarousel'
// import banner from "@/app/"
const page = () => {
  return (
    <div>
      <section className="px-3 w-full">
        <div
          style={{
            background: 'linear-gradient(180deg, #000B26 0%, #00123C 19.69%, #032471 70.33%, #0C39A3 86.64%, #0041D9 100%)'
          }}
          className='relative h-[627px] flex flex-col justify-center items-center rounded-2xl text-Arambo-White p-5'
        >
          <div className='md:w-[1200px] md:grid grid-cols-[60%_40%]'>
            <div className='space-y-6'>
              <h1 style={{ lineHeight: "108%" }} className=''>Find Your Next Space—Modern, Elegant, Effortless.</h1>
              <p className='body-xl text-[#AFE4FF]'>From stylish apartments to premium commercial spaces in Dhaka—explore, buy, or list with confidence.</p>
              <div className='flex space-x-6'>
                <button className='bg-Arambo-White  text-Arambo-Black rounded-lg px-10 py-4'>Get offers to Sell</button>
                <button className='bg-Arambo-White/12 border-[1.5px] border-[#AFE4FF47]/28 rounded-lg px-10 py-4'>Browse Properties</button>
              </div>
            </div>
          </div>
          <div className='absolute -bottom-15 Cards w-[1200px] grid md:grid-cols-4 grid-cols-2 space-x-5'>
            <div className='bg-Arambo-White px-6 py-8 text-Arambo-Black rounded-lg'>
              <div>icon</div>
              <h6>text</h6>
            </div>
            <div className='bg-Arambo-White px-6 py-8 text-Arambo-Black rounded-lg'>
              <div>icon</div>
              <h6>text</h6>
            </div>
            <div className='bg-Arambo-White px-6 py-8 text-Arambo-Black rounded-lg'>
              <div>icon</div>
              <h6>text</h6>
            </div>
            <div className='bg-Arambo-White px-6 py-8 text-Arambo-Black rounded-lg'>
              <div>icon</div>
              <h6>text</h6>
            </div>
          </div>
          <div>
            {/* <img className='absolute -top-10 -left-10' src="/building.png" alt="" /> */}
          </div>
        </div>
      </section >

      <section className="my-25 flex justify-center">
        <div className="md:w-[1200px] overflow-hidden">
          <AutoScrollCarousel />
        </div>
      </section>
      <section>
        <div className='relative flex items-center'>
          <img className='md:w-[718px] md:h-[640px] rounded-2xl' src="/building_2.png" alt="" />
          <div className='p-30'>
            <div className='space-y-6'>
              <p className='span-14-1-4 px-2 py-1 rounded-full border-[0.5px] inline-block'>About Arambo</p>
              <h3>At Arambo, we believe that great spaces deserve great support. That’s why our team of experienced real estate professionals is here to guide you—whether you’re buying, selling, or just exploring your options.</h3></div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default page;
