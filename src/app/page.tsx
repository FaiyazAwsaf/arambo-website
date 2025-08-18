import { Home, Search } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import building from "/building.png"
import AutoScrollCarousel from '@/components/AutoScrollCarousel'
import Toggle from '@/components/Toggle'
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
      <section className='py-15'>
        <div className='relative grid md:grid-cols-[40%_60%] grid-cols-1    '>
          <div className='md:h-[640px] rounded-2xl flex justify-center items-end py-7  ' style={{ backgroundImage: `url(/building_2.png)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <button className='w-2/3 flex justify-center items-center rounded-full space-x-4 py-4 px-8 bg-Arambo-White text-Arambo-Black'><span>Learn More</span> <FontAwesomeIcon icon={faCircleArrowRight} className='text-Arambo-Accent' /></button>
          </div>
          <div className='w-full flex flex-col justify-center items-center space-y-12'>
            <div className='space-y-6 w-[70%] '>
              <p className='span-14-1-4 px-2 py-1 rounded-full border-[0.5px] inline-block'>About Arambo</p>
              <h3 className=''>
                <span className=''>At Arambo we believe that</span>
                <span className='text-Arambo-Text'> great spaces deserve great support. That’s why our team of experienced real estate professionals is here to guide you—whether you’re buying, selling, or just exploring your options.</span>
              </h3>
            </div>
            <div className="cubes flex space-x-5 w-[70%]">
              <div className='h-[152px] w-[183px] flex flex-col justify-between rounded-2xl text-Arambo-White p-5'
                style={{ backgroundImage: `url(/elegant_properties.png)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: `rgba(0,0,0,0.5)`, backgroundBlendMode: 'overlay' }}
              >
                <h2>50+</h2>
                <div className='grid grid-cols-2'><div></div><p className=''>Elegant Properties</p></div>
              </div>
              <div className='h-[152px] w-[183px] flex flex-col justify-between rounded-2xl text-Arambo-Accent bg-[#DCEDF9] p-5' >
                <h2>200+</h2>
                <div className='flex justify-between items-end '><p className=''>Residential Properties</p><div>< FontAwesomeIcon icon={faCircleArrowRight} /></div></div>
              </div>
              <div className='h-[152px] w-[183px] flex flex-col justify-between rounded-2xl text-Arambo-White bg-Arambo-Black p-5' >
                <h2 className=''>200+</h2>
                <div className='flex justify-between items-end '><p className='text-Arambo-Text'>Commercial Properties</p><div>< FontAwesomeIcon icon={faCircleArrowRight} /></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-24 flex justify-center bg-Arambo-White'>
        <div className='grid md:grid-cols-2 grid-cols-1 space-x-5 md:w-[1200px]'>
          <div className='flex flex-col space-y-5'>
            <h2>Simple steps. Real results. Tailored for everyone.</h2>
            <p className='text-Arambo-Text md:w-[70%] w-full'>Our team of experienced real estate professionals is here to guide you</p>
            <div className='mt-7 space-y-4 flex flex-col'>
              <button className='bg-Arambo-Accent rounded-full flex justify-between items-center text-Arambo-White w-full md:w-[80%] py-6 px-5'><span className='body-lg'>For Buyers</span><FontAwesomeIcon icon={faChevronRight} /></button>
              <button className='bg-Arambo-Border rounded-full flex justify-between items-center text-Arambo-Black w-full md:w-[80%] py-6 px-5'><span className='body-lg'>For Buyers</span></button>
              <button className='bg-Arambo-Border rounded-full flex justify-between items-center text-Arambo-Black w-full md:w-[80%] py-6 px-5'><span className='body-lg'>For Buyers</span></button>
            </div>
          </div>
          <div>
            <div className='w-full space-y-2'>
              {/* Rectangle Cards: */}
              <div className='py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl'>
                <div className='text-Arambo-Accent'><img src="/ListingIcon.png" alt="" /></div>
                <div className='space-y-2'>
                  <h5>Browse Listings</h5>
                  <p className='text-Arambo-Text'>Browse curated, verified apartments in your desired location.</p>
                </div>
              </div>
              <div className='py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl'>
                <div className='text-Arambo-Accent'><img src="/ListingIcon.png" alt="" /></div>
                <div className='space-y-2'>
                  <h5>Get Expert Support</h5>
                  <p className='text-Arambo-Text'>Our agents help with everything from price checks to paperwork.</p>
                </div>
              </div>
              <div className='py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl'>
                <div className='text-Arambo-Accent'><img src="/ListingIcon.png" alt="" /></div>
                <div className='space-y-2'>
                  <h5>Book a Visit</h5>
                  <p className='text-Arambo-Text'>Schedule a tour with one click—online or in person.</p>
                </div>
              </div>
              <div className='py-8 px-6 space-x-5 flex bg-[#1946BB14] rounded-2xl'>
                <div className='text-Arambo-Accent'><img src="/ListingIcon.png" alt="" /></div>
                <div className='space-y-2'>
                  <h5>Close with Confidence</h5>
                  <p className='text-Arambo-Text'>Transparent process, no hidden fees.</p>
                </div>
              </div>
            </div>
            <div className='space-x-2 pt-8'>
              <span className='text-lg font-bold'>Start Browsing Properties</span>
              <FontAwesomeIcon className='text-Arambo-Accent' icon={faCircleArrowRight} />
            </div>
          </div>
        </div>
      </section>
      <section className='py-24 flex justify-center bg-Arambo-White'>
        <div className=' flex flex-col md:w-[1200px]'>
          <div className='flex justify-between items-center'>
            <h2>Explore Latest Properties to Buy</h2>
            <Toggle />
          </div>
          Cards....
        </div>
      </section>
      <section className='py-24 flex justify-center'>
        <div className=' grid md:grid-cols-2 grid-cols-1 space-x-18 md:w-[1200px]'>
          <div className='h-[539px] p-4 flex items-end rounded-xl'
            style={{ backgroundImage: `url('/hands.png')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='h-[157px] rounded-2xl p-6 bg-Arambo-White w-full'
              style={{ backgroundImage: `url('/AramboSupports.png')`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            >

            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default page;
