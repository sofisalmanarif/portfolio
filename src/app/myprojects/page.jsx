import ProjectsCard from '@/components/ProjectsCard'
import { projects } from '@/data/projects'
import React from 'react'



const Page = () => {
  return (
    <section className="py-8 flex flex-col gap-6">
        <div className="felx items-center justify-between">
          <h2 className="title text-5xl  font-[heading]  tracking-wide">
            My Projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {
            projects.map((project,idx)=>
            <ProjectsCard key={idx} project={project}/>
            

            )
          }
        </div>
      </section>
  )
}

export default Page