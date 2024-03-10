'use client'
import React, { PropsWithChildren, createContext, useContext, useEffect, useRef, useState } from 'react'

type CarouselProps = {
  dataLength: number;
  autoSlide?: boolean;
}
type ButtonPropsType = {classes: string | undefined; index:number, value?:string | undefined}

const CarouselContext = createContext<Array<any>>([]);
function Carousel(props:PropsWithChildren<CarouselProps>) {
  const { dataLength, autoSlide} = props
  
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((preState) => {
      const result = (preState + 1) % dataLength
      return result
    })
  }
  useEffect(() => {
    if (autoSlide) {
      const intervalId = setInterval(() => {
        nextSlide()
      }, 3000)
      return () => clearInterval(intervalId)
    }
  }, [autoSlide])

  return (
    <CarouselContext.Provider value={[activeIndex, setActiveIndex]}>
      {props.children}
    </CarouselContext.Provider>
  )
}


Carousel.Details = ({index, classes ,children}:{index:number; classes?:string; children: React.ReactNode})=>{
  const [activeIndex, setActiveIndex] = useContext(CarouselContext)
  return <div className={`${index === activeIndex? "block" : "hidden"} ${classes ? classes: ""}`}>{children}</div>
}


Carousel.Button = ({classes,index, value}:ButtonPropsType)=>{
  const [activeIndex, setActiveIndex] = useContext(CarouselContext)
  return <div onClick={() => setActiveIndex(index)} className={`p-2 ${index === activeIndex? "bg-white" : "bg-gray-500"} ${classes}`}>{value}</div>
}
export default Carousel
