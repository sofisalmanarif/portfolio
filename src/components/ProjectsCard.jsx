import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const ProjectsCard = ({project}) => {
  return (
    <div className="rounded-xl w-full border border-zinc-200  dark:bg-[#030712] dark:border-zinc-800 bg-card text-card-foreground shadow flex flex-col">
    <div className="flex flex-col space-y-1.5 p-6">
      <Link target='_blank' href={project.website || project.source}>
      <Image width={500} height={200}  alt='project image' src={project.image}/>
      </Link>
    </div>
    <div className="p-6 pt-0 flex flex-col gap-2">
      <h3 className="font-semibold leading-none tracking-tight">
        {project.title}
      </h3>
      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
        <p className='text-justify text-zinc-700 dark:text-zinc-400'>
          {project.description}
        </p>
      </div>
    </div>
    <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
      
    <div className='flex flex-wrap gap-2'>{project.techStack.map((stack,idx)=><Button variant="secondary" size="badge" key={idx} >{stack}</Button>)}</div>
      <div className="flex flex-row flex-wrap items-start gap-2">


      {project.source && <Link
          target="_blank"
          href={project.source}
        >
          <Button size="sm" ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github size-3"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg> Source</Button>


        </Link>}
        {project.website &&
        <Link
          target="_blank"
          href={project.website}
        >
          <Button  size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe size-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            Website</Button>

            
        </Link>}
      </div>
    </div>
  </div>
  )
}

export default ProjectsCard