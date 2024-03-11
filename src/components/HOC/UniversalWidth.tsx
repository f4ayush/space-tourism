import React, { FC } from 'react'

function UniversalWidth(Component: FC, classes?: string) {
  return function(){
    return (
        <div className={`${classes} bg-cover min-h-screen py-16 px-10 lg:p-[8%]`}>
            <Component/>
        </div>
    )
  }
}

export default UniversalWidth