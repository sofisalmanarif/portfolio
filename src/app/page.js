import ProjectsCard from "@/components/ProjectsCard";
import TechCard from "@/components/TechCard";
import Image from "next/image";
import Link from "next/link";

// import {techStack} from "../data.json"

export const techStack = [
  {
    title: "TypeScript",
    what: "Superset of JavaScript",
    icon: "/typescript-icon.png",
  },
  {
    title: "Next.js",
    what: "React Framework",
    icon: "/nextjs-icon.png",
  },
  {
    title: "Node.js",
    what: "JavaScript Runtime",
    icon: "node-js-icon.svg",
  },
  {
    title: "Git",
    what: "Version Control",
    icon: "/git-icon.png",
  },
  {
    title: "Docker",
    what: "Containerization.",
    icon: "/docker-icon.png",
  },
  {
    title: "Express js",
    what: "Nodejs Framework",
    icon: "/express-js-icon.png",
  },
  {
    title: "MongoDB",
    what: "Database",
    icon: "/mongodb-icon.png",
  },
  {
    title: "React.js",
    what: "Frontend Library",
    icon: "/react-js-icon.png",
  },
];
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
  image:"/techThreads.png",
  title:"Anonymous",
  description:"A blog platform crafted for tech enthusiasts, providing a space to explore, share, and discuss topics across JavaScript, machine learning, and web development.",
  techStack:["Nextjs","shadcn ui","TypeScript","NextAuth","expressjs"],
  source:"https://github.com/sofisalmanarif/anonymous",
  // website:"https://blog-website-rho-eight.vercel.app/"

},

]

export default function Home() {
  return (
    <main className="container text-balance  w-full flex-wrap flex mx-auto max-w-[900px]">
      <section className="flex header py-8 flex-wrap-reverse  items-center w-full justify-between  ">
        <div className="">
          <h1 className="title text-5xl font-[heading] tracking-wide">
            hi Salman here 👋
          </h1>
          <p className="font-light mt-4 text-zinc-400">
            20-year-old software developer from India 🇮🇳
          </p>
          <p className="font-light mt-4  text-zinc-400">
            I like to develop full-stack, drink instant coffee and get coding
            <br /> advice from my cat, Luffy.
          </p>
          <section className="mt-10 flex items-center justify-start gap-10">
          <Link  href={"/my.jpeg"}>
          <button className="btn   rounded-md btn-primary">Resume  
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-file-down ml-2 size-5"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M12 18v-6"></path>
                <path d="m9 15 3 3 3-3"></path>
              </svg></button>
          </Link>
           

            <div class="flex gap-6 text-zinc-400">
              <a
                href="https://linkedin.com/in/tedawf"
                target="_blank"
                class="text-muted-foreground hover:text-foreground"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <span class="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-linkedin size-5"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/sofisalmanaeif"
                target="_blank"
                class="text-muted-foreground hover:text-foreground"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <span class="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-github size-5"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="mailto:hello@tedawf.com"
                target="_blank"
                class="text-muted-foreground hover:text-foreground"
                rel="noopener noreferrer"
                title="Email"
              >
                <span class="sr-only">Email</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-mail size-5"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </section>
        </div>
        <div className="px-2">
          <Image
            width={190}
            height={200}
            className="rounded-xl  "
            src={"/my.jpeg"}
          />
        </div>
      </section>

      <section className=" technologies py-8 ">
        <h2 className="title text-3xl  font-[heading]  tracking-wide">
          Current Technologies
          

        </h2>
        <p className="font-light  mt-2 mb-6 text-zinc-400">
          I'm proficient in a range of modern technologies that empower me to
          build highly functional solutions.
          <br />
          These are some of my main technologies.
        </p>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5">
          {techStack.map((elem) => (
            <TechCard key={elem.title} data={elem} />
          ))}
        </section>
      </section>

      <section className="projects py-8 flex pb-8 flex-col gap-6">
        <div className="flex w-full items-center justify-between">
          <h2 className="title  inline text-3xl  font-[heading]  tracking-wide">
            Featured Projects
          </h2>
          <Link class=" text-zinc-500  flex items-center gap-2 font-light" href="/myprojects"><span>view more</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-right size-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {
            projects.map((project,idx)=>
            {
              if(idx>1){
                return
              }
              return <ProjectsCard key={idx} project={project}/>
            }

            )
          }
        </div>
      </section>
    </main>
  );
}
