import TechCard from "@/components/TechCard";
import Image from "next/image";

// import {techStack} from "../data.json"

export const techStack = [
  {
    "title": "TypeScript",
    "what": "Superset of JavaScript",
    "icon": "/typescript-icon.png",
  },
  {
    "title": "Next.js",
    "what": "React Framework",
    "icon": "/nextjs-icon.png",
  },
  {
    "title": "Node.js",
    "what": "JavaScript Runtime",
    "icon": "node-js-icon.svg",
  },
  {
    "title": "Git",
    "what": "Version Control",
    "icon": "/git-icon.png",
  },
  {
    "title": "Docker",
    "what": "Containerization.",
    "icon": "/docker-icon.png",
  },
  {
    "title": "MongoDB",
    "what": "Database",
    "icon": "/mongodb-icon.png",
  },
  {
    "title": "React.js",
    "what": "Frontend Library",
    "icon": "/react-js-icon.png",
  },
  {
    "title": "Tailwind CSS",
    "what": "CSS Framework",
    "icon": "/tailwind-css-icon.png",
  },
];

export default function Home() {
  return (
  <main className="container text-balance w-full flex-wrap flex mx-auto max-w-[900px]">
    <section className="flex pb-10 my-5  items-center w-full justify-between  ">
      <div className="mt-10">
      <h1 className="title text-5xl font-[heading] tracking-wide">hi Salman here 👋</h1>
      <p className="font-light mt-4 text-zinc-400">20-year-old  software developer from India 🇮🇳</p>
      <p className="font-light mt-4 text-zinc-400">I like to develop full-stack, drink instant coffee and get coding<br/> advice from my cat, Luffy.</p>
      <section className="mt-8 border-[1px] w-fit px-4 py-[4px] hover:bg-zinc-800 rounded-md border-zinc-700">

        <button>
          Resume
        </button>
        <div>
          
        </div>
      </section>
      </div>
      <div className="px-2">
        <Image width={250} height={200} className="rounded-xl min-h-40 " src={"/profile.jpeg"}/>
      </div>
    </section>

    <section className="">
      <h2 className="title text-4xl  font-[heading]  tracking-wide">Current Technologies</h2>
      <p className="font-light mt-2 mb-6 text-zinc-400">I'm proficient in a range of modern technologies that empower me to build highly functional solutions.<br/>These are some of my main technologies.</p>
  <section className="grid grid-cols-4  gap-5">
 
  {
    techStack.map((elem)=><TechCard data={elem} />)
  }
  </section>
</section>



  </main>
  );
}
