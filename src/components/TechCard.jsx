import Image from 'next/image'
import React from 'react'

const TechCard = ({data}) => {
    console.log(data)
  return (
    <div className='flex gap-[10px] sm:w-[210px] bg-slate-200 /10  dark:bg-zinc-900/90 backdrop-blur-sm rounded-md items-center px-2 py-2 '>
        <div className='sm:h-[50px] h-[40px] w-[40px] flex items-center justify-center sm:w-[50px] bg-slate-300 dark:bg-zinc-700/90 p-1 rounded-md '   >
            <Image width={30} height={40} alt='image' className='sm:h-[30px] sm:w-[30px]' src={data.icon}/>
        </div>
        <div>
            <h6 className='sm:text-[14px] text-[12px] font-semibold font-[navfont]'>{data.title}</h6>
            <p className='sm:text-[12px] text-[10px] text-zinc-400 tracking-wider'>{data.what}</p>
        </div>
    </div>
  )
}

export default TechCard