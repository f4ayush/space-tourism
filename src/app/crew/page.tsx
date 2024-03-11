'use client'
import Carousel from "@/components/Carousel";
import UniversalWidth from "@/components/HOC/UniversalWidth";
import TabsContainer from "@/components/TabsContainer";
import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";
import Image from "next/image";

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

const crewDetails = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": "/assets/crew/image-douglas-hurley.png",
      "webp": "/assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": "/assets/crew/image-mark-shuttleworth.png",
      "webp": "/assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": {
      "png": "/assets/crew/image-victor-glover.png",
      "webp": "/assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": "/assets/crew/image-anousheh-ansari.png",
      "webp": "/assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]

interface dataListType {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const classes = "bg-crew-image-mobile lg:bg-crew-image-desktop md:bg-crew-image-tablet"
function Crew() { 
  const crewElement = (crewDetail: dataListType) => {
    return (
      <div className="flex justify-between flex-col items-center p-2 h-full lg:h-auto lg:items-start">
        <p className={`${bellefair.className} uppercase text-sm opacity-60 md:text-base lg:text-lg xl:text-xl`}>{crewDetail.role}</p>
        <h1 className={`${bellefair.className} uppercase text-xl my-3 md:text-2xl lg:text-3xl xl:text-4xl`}>{crewDetail.name}</h1>
        <p className={`${barlow.className} text-center text-sm text-[#D0D6F9] mb-8 lg:text-lg xl:text-xl lg:text-justify leading-6 md:text-base md:w-4/5`}>{crewDetail.bio}</p>
      </div>
    )
  }


  return (
    <main className="md:pb-0 md:flex">
      <div className="text-center mt-2 md:flex md:flex-col">
      <p className={`${barlow_condensed.className} uppercase md:text-left md:mt-8 text-md md:text-lg lg:text-[28px] tracking-widest md:ml-[8%]`}><span className="text-[#D0D6F9]">02</span>  Meet Your Crew</p>
        <div className="carousel-container flex flex-col md:flex-col-reverse gap-5 md:flex-1 md:justify-between md:mt-4 lg:mt-0 lg:flex-row-reverse lg:relative lg:items-end lg:justify-end">
          <Carousel dataLength={crewDetails.length}>
            {crewDetails.map((crew, index) => (
              <Carousel.Details key={index} index={index} classes="flex justify-center h-[33vh] md:h-[50vh] mt-[5%] border-b-[1px] border-[rgb(255,255,255,0.2)] md:border-none md:items-end lg:h-[60vh]">
                <Image src={crew.images.webp} alt='crew image' height={150} width={150} className="object-contain self-end md:h-full md:w-full"/>
              </Carousel.Details>
            ))}

            <div className="buttons flex justify-center lg:absolute left-0 bottom-[2%] lg:gap-5">
              {crewDetails.map((_, index) => (
                <Carousel.Button key={index} classes="rounded-full m-2 hover:bg-white" index={index} />
              ))}
            </div>

            {crewDetails.map((crew, index) => (
              <Carousel.Details key={index} index={index} classes="lg:w-1/2 lg:self-center">
                {crewElement(crew)}
              </Carousel.Details>
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
}


export default UniversalWidth(Crew, classes)
