'use client'
import React, { useEffect, useState } from 'react'
type TabsContainerProps = { dataList: Array<any>; renderElement: Function; ImageContainer: Function; type?: string | undefined, wrapperClasses?: string | undefined; detailsClasses?: string | undefined; buttonClasses?: string| undefined }
const circleStyle = "border"
const TabsContainer = (props: TabsContainerProps): JSX.Element => {
    const { dataList, renderElement, ImageContainer, type, wrapperClasses, detailsClasses, buttonClasses } = props
    const [activeIndex, setActiveIndex] = useState(0)
    const [destinationDetail, setdestinationDetail] = useState<any>(dataList[0])
    useEffect(() => {
        setdestinationDetail(dataList[activeIndex])
    }, [activeIndex])

    return (
        <div className={`flex flex-col items-center lg:flex-row lg:text-left ${wrapperClasses && wrapperClasses}`}>
            {ImageContainer(destinationDetail)}
            <div className={`details-container ${detailsClasses && detailsClasses}`}>

                <div className={`flex justify-center gap-4 uppercase lg:justify-start ${buttonClasses && buttonClasses}`}>
                    {
                        dataList.map((data, index) => (
                            <>
                                {type == "circle" ? <div key={index} className={`${index === activeIndex ? " bg-white text-[#D0D6F9]" : "text-white border-[#D0D6F9] "} border-2 rounded-full h-5 w-5 text-center cursor-pointer  lg:text-xl flex justify-center items-center p-5`} onClick={() => setActiveIndex(index)}><p>{index + 1}</p></div> :

                                    <p key={index} className={`${index === activeIndex ? "border-b-4 border-b-white text-white" : "text-[#D0D6F9]"} py-2 tracking-widest cursor-pointer lg:text-xl`} onClick={() => setActiveIndex(index)}>{data.name}</p>
                                }

                            </>
                        ))
                    }
                </div>


                {renderElement(destinationDetail)}
            </div>

        </div>
    )
}

export default TabsContainer