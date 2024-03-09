'use client'
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

const technologyDetails = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": "/assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "/assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    "name": "Spaceport",
    "images": {
      "portrait": "/assets/technology/image-spaceport-portrait.jpg",
      "landscape": "/assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    "name": "Space capsule",
    "images": {
      "portrait": "/assets/technology/image-space-capsule-portrait.jpg",
      "landscape": "/assets/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]

interface dataListType {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
export default function Technology() {
  const technologyElement = (technologyDetail: dataListType) => {
    return (
      <>
        <div className="max-w-md md:max-w-lg lg:max-w-xl lg:flex-grow">
          <p className={`${barlow.className} text-center mt-4 pt-4  text-sm mb-2 lg:text-lg lg:text-justify uppercase`}>The Terminology ...</p>
          <h1 className={`${bellefair.className} uppercase text-2xl mb-5 lg:text-4xl`}>{technologyDetail.name}</h1>
          <p className={`${barlow.className} text-center text-sm text-[#D0D6F9] mb-8 lg:text-md lg:text-left lg:max-w-lg px-5 lg:ps-0`}>{technologyDetail.description}</p>
        </div>
      </>
    )
  }

  const technologyImage = (technologyDetail: dataListType) => {
    return (
      <div className="w-full lg:w-1/2 m-4 flex justify-center">
        <picture className="w-full md:w-full">
        <source srcSet={technologyDetail.images.portrait}
            media="(min-width: 1024px)"/>
        <Image src={technologyDetail.images.landscape} alt='technology image' width={150} height={150} className="object-contain w-full md:w-full lg:w-full" />
        </picture>
      </div>
    )
  }

  return (
    <main className="bg-technology-image-mobile md:bg-technology-image-tablet lg:bg-technology-image-desktop bg-cover min-h-screen py-16 lg:flex justify-center lg:items-center">
      <div className={`${barlow_condensed.className} text-center mt-2 lg:w-full`}>
        <p className={`${barlow_condensed.className} uppercase md:text-left md:mt-8 text-md md:text-lg lg:text-[28px] tracking-widest md:ml-[5%] lg:ml-[10%]`}><span className="text-[#D0D6F9]">03</span> space launch 101</p>
        <TabsContainer dataList={technologyDetails} renderElement={technologyElement} ImageContainer={technologyImage} type="circle" wrapperClasses="lg:flex-row-reverse " detailsClasses="lg:flex lg:w-full lg:place-content-center" buttonClasses="lg:flex-col lg:justify-center lg:mr-6"/>
      </div>
    </main>
  );
}
