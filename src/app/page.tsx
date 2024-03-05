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
    <main className="flex min-h-screen p-24 bg-home-image-desktop bg-cover items-end justify-between">
      <div className="left w-1/2">
        <p className={`${barlow_condensed.className} uppercase text-[28px] tracking-widest`}>So, you want to travel to</p>
        <h1 className={`${bellefair.className} uppercase text-[150px] my-2`}>Space</h1>
        <p className={`${barlow_condensed.className} text-lg leading-8 max-w-[444px]`}>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
      </div>
      {/* <div className="parent flex items-center justify-center rounded-full  hover:border-opacity-50 hover:border-[#979797] hover:border-[15px]"> */}
        <div className={`${barlow.className} text-black bg-white rounded-full h-[274px] w-[274px] flex items-center justify-center hover:border-opacity-50 hover:border-[#979797] hover:border-[15px]`}>
          <h1 className="text-5xl uppercase">Explore</h1>
        </div>
      {/* </div> */}

    </main>
  );
}
