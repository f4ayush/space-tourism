import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
  weight: '200',
  subsets: ['latin']
})
const barlow = Barlow({
  weight: '200',
  subsets: ['latin']
})
const bellefair = Bellefair({
  weight: '400',
  subsets: ['latin']
})
export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen py-12 px-10 text-center lg:text-left lg:p-24 bg-home-image-mobile md:bg-home-image-tablet lg:bg-home-image-desktop bg-cover items-center lg:items-end justify-between">
      <div className="left mt-16 md:mt-24 lg:mt-auto">
        <p className={`${barlow_condensed.className} uppercase text-md md:text-lg lg:text-[28px] tracking-widest`}>So, you want to travel to</p>
        <h1 className={`${bellefair.className} uppercase text-6xl md:text-8xl lg:text-9xl my-2`}>Space</h1>
        <p className={`${barlow_condensed.className} text-sm md:text-md lg:text-lg lg:leading-8 max-w-72 lg:max-w-[444px]`}>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
      </div>

      <div className={`${barlow.className} text-black bg-white rounded-full h-[150px] w-[150px] lg:h-[274px] lg:w-[274px] flex items-center justify-center hover:outline hover:outline-[25px] md:hover:outline-[50px] hover:outline-[#24262F]`}>
        <h1 className="text-2xl lg:text-5xl uppercase">Explore</h1>
      </div>


    </main>
  );
}
