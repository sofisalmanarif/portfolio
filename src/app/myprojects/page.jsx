import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'


export const projects =[{
  image:"/cure-cart.png",
  title:"Cure Cart",
  description:"Cure Cart is an accessible e-pharmacy platform that simplifies online medication purchases, allowing users to upload prescriptions, track order statuses, and enjoy a seamless experience for all their healthcare needs.",
  techStack:["React","mongoDb","expressjs","javaScript","stripe","tailwind css"],
  source:"https://github.com/sofisalmanarif/Cure-Cart",
  website:"https://curecart.vercel.app/"

},
{
  image:"/techThreads.png",
  title:"techThreads",
  description:"A blog platform crafted for tech enthusiasts, providing a space to explore, share, and discuss topics across JavaScript, machine learning, and web development.",
  techStack:["Nextjs","shadcn ui","TypeScript","NextAuth","expressjs"],
  source:"https://github.com/sofisalmanarif/blog-website",
  website:"https://blog-website-rho-eight.vercel.app/"

},
{
  image:"/testimonials.png",
  title:"Testimonials.io",
  description:"A blog platform crafted for tech enthusiasts, providing a space to explore, share, and discuss topics across JavaScript, machine learning, and web development.",
  techStack:["Nextjs","shadcn ui","TypeScript","NextAuth","expressjs"],
  source:"https://github.com/sofisalmanarif/anonymous",
  // website:""

},

]
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
            <ProjectsCard project={project}/>
            

            )
          }
        </div>
      </section>
  )
}

export default Page