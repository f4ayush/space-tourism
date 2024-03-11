'use client'
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

const destinationDetails = [
  {
    "name": "Moon",
    "images": {
      "png": "/assets/destination/image-moon.png",
      "webp": "/assets/destination/image-moon.webp"
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  },
  {
    "name": "Mars",
    "images": {
      "png": "/assets/destination/image-mars.png",
      "webp": "/assets/destination/image-mars.webp"
    },
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
  },
  {
    "name": "Europa",
    "images": {
      "png": "/assets/destination/image-europa.png",
      "webp": "/assets/destination/image-europa.webp"
    },
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  },
  {
    "name": "Titan",
    "images": {
      "png": "/assets/destination/image-titan.png",
      "webp": "/assets/destination/image-titan.webp"
    },
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }
]

interface dataListType {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}
const classes = "bg-destination-image-mobile md:bg-destination-image-tablet lg:bg-destination-image-desktop"
function Destination() {
  const destinationElement = (destinationDetail: dataListType) => {
    return (
      <div className="md:max-w-md lg:w/2 xl:max-w-2xl 2xl:max-w-3xl">
        <h1 className={`${bellefair.className} uppercase text-5xl mt-4 py-4 lg:text-8xl`}>{destinationDetail.name}</h1>
        <p className={`${barlow.className} text-center text-sm text-[#D0D6F9] mb-8 lg:text-lg lg:text-justify`}>{destinationDetail.description}</p>
        <hr className="w-full bg-[#D0D6F9] opacity-20" />
        <div className="md:flex justify-center">
          <div className="uppercase my-4 flex-grow">
            <p className={`${barlow_condensed.className} uppercase text-[#D0D6F9] tracking-widest`}>Avg. Distance</p>
            <p className={`${bellefair.className} text-3xl`}>{destinationDetail.distance}</p>
          </div>
          <div className="time uppercase my-4 flex-grow">
            <p className={`${barlow_condensed.className} uppercase text-[#D0D6F9] tracking-widest`}>Est. travel time</p>
            <p className={`${bellefair.className} text-3xl`}>{destinationDetail.travel}</p>
          </div>
        </div>
      </div>
    )
  }

  const destinationImage = (destinationDetail: dataListType) => {
    return (
      <div className="w-full lg:w-auto m-4 flex justify-center p-4 lg:flex-grow lg:justify-start">
        <Image src={destinationDetail.images.png} alt='destination image' width={150} height={150} className="object-contain w-44 md:w-52 lg:w-4/5" />
      </div>
    )
  }

  return (
    <main className="md:flex md:items-center md:justify-center">
      <div className={`${barlow_condensed.className} container text-center mt-2`}>
        <p className={`${barlow_condensed.className} uppercase md:text-left md:mt-8 text-md md:text-lg lg:text-[28px] tracking-widest md:ml-[2%]`}><span className="text-[#D0D6F9]">01</span> Pick your destination</p>
        <TabsContainer dataList={destinationDetails} renderElement={destinationElement} ImageContainer={destinationImage} detailsClasses="lg:w-1/2" wrapperClasses="lg:justify-between"/>
      </div>
    </main>
  );
}

export default UniversalWidth(Destination, classes)