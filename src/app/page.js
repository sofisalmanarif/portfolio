import Image from "next/image";

export default function Home() {
  return (
  <main className="container text-balance w-full flex-wrap flex mx-auto max-w-[800px]">
    <section className="flex bg-red-500 pb-10 items-center w-full justify-between  ">
      <div className="mt-10">
      <h1 className="title text-5xl font-[heading] font-bold">hi Salman here 👋</h1>
      <p className="font-light mt-4">20-year-old  software developer from India 🇮🇳</p>
      <p className="font-light mt-4 ">I like to develop full-stack, drink instant coffee and get coding<br/> advice from my cat, Luffy.</p>
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

  </main>
  );
}
