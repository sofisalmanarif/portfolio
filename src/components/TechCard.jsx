import Image from 'next/image'
import React from 'react'

const TechCard = ({data}) => {
    console.log(data)
  return (
    <div className='flex gap-[10px] border border-zinc-200 dark:border-zinc-800 sm:w-[205px] bg-[#F4F4F5]  dark:bg-gray-900/90 backdrop-blur-sm rounded-md items-center px-[6px] py-[6px] '>
        <div className='sm:h-[45px] h-[36px] w-[36px] flex items-center justify-center sm:w-[45px] bg-gray-300 dark:bg-zinc-700/90 p-1 rounded-md '   >
            <Image width={30} height={30} alt='image' className='sm:h-[30px] sm:w-[30px]' src={data.icon}/>
        </div>
        <div>
            <h6 className='sm:text-[14px] text-[12px] font-semibold font-[navfont]'>{data.title}</h6>
            <p className='sm:text-[12px] text-[10px] text-zinc-600 dark:text-zinc-400 '>{data.what}</p>
        </div>
    </div>
  )
}

export default TechCard