import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Timeline = ({item}) => {
  return (
    <div className="flex w-full  sm:gap-6 gap-4">
                <Link href={"https://nielit.gov.in/srinagar/index.php"} className="rounded-full bg-blue-300 z-10  h-14 w-14 flex items-center justify-center sm:h-14 sm:w-14 border border-zinc-200 ">
                  <Image height={56} width={56}  className="rounded-full object-cover" src={item.icon}></Image>
                  </Link>
                  <div className="flex w-[80%]  flex-col gap-1">
                <time class="text-xs text-muted-foreground"><span>{item.duration}</span></time>
                  <h3>{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <ul class="ml-4 list-outside list-disc">
                    {
                      item.keys?.map(mykey=><li key={mykey} class="prose pr-8 text-sm dark:prose-invert">{mykey}</li>)
                    }
                    
                    
                    </ul>

              {
                item.projectLink&&<Link target='_blank' href={item.projectLink}> 
                 <Button className="mt-1" size="sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-3" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Final Year Project</Button></Link>
              }
                </div>
                 
                
               
                </div>
  )
}

export default Timeline