import React, { FC } from 'react'

function UniversalWidth(Component: FC, classes?: string) {
  return function(){
    return (
        <div className={`${classes} bg-cover min-h-screen pt-16 lg:px-10 lg:ps-[8%] lg:pt-[8%]`}>
            <Component/>
        </div>
    )
  }
}

export default UniversalWidth