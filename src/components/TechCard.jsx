import Image from 'next/image'
import React from 'react'

const TechCard = ({data}) => {
    console.log(data)
  return (
    <div className='flex gap-[12px] w-[215px]  bg-zinc-900/90 backdrop-blur-sm rounded-md items-center px-2 py-2 '>
        <div className='h-[50px] flex items-center justify-center w-[50px]  bg-zinc-700/90 p-1 rounded-md '   >
            <Image width={30} height={40} src={data.icon}/>
        </div>
        <div>
            <h6 className='text-md font-semibold font-[navfont]'>{data.title}</h6>
            <p className='text-[12px] text-zinc-400 tracking-wider'>{data.what}</p>
        </div>
    </div>
  )
}

export default TechCard