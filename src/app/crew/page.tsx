'use client'
import Carousel from "@/components/Carousel";
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
export default function Crew() {
  const crewElement = (crewDetail: dataListType) => {
    return (
      <div className="flex justify-between flex-col items-center p-2 h-full">
        <p className="">{crewDetail.role}</p>
        <h1 className={`${bellefair.className} uppercase text-5xl py-4 lg:text-8xl`}>{crewDetail.name}</h1>
        <p className={`${barlow.className} text-center text-sm text-[#D0D6F9] mb-8 lg:text-lg lg:text-justify`}>{crewDetail.bio}</p>
      </div>
    )
  }


  return (
    <main className="bg-crew-image-mobile lg:bg-crew-image-desktop md:bg-crew-image-tablet bg-cover min-h-screen py-16 px-10">
      <div className="text-center mt-2 h-full">
        <p>02 Meet Your Crew</p>
        <div className="carousel-container flex flex-col gap-11">
          <Carousel dataLength={crewDetails.length}>
            {crewDetails.map((crew, index) => (
              <Carousel.Details key={index} index={index} classes="flex justify-center h-1/3 mt-[10%] border-b-[1px] border-[rgb(255,255,255,0.2)] ">
                <Image src={crew.images.png} alt='crew image' height={150} width={150} className="w-auto" />
              </Carousel.Details>
            ))}

            <div className="buttons flex justify-center">
              {crewDetails.map((_, index) => (
                <Carousel.Button key={index} classes="rounded-full m-2 hover:bg-white" index={index} />
              ))}
            </div>

            {crewDetails.map((crew, index) => (
              <Carousel.Details key={index} index={index}>
                {crewElement(crew)}
              </Carousel.Details>
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
}
