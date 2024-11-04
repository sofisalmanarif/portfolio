'use client'
import Toast from "@/components/Toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [showToast,setShowToast] = useState(false)
  const [isError,setIsError] = useState(false)
  const [loading,setLoading] = useState(false)

  const submitHandler =async(e)=>{
    e.preventDefault()
    console.log(name,email,message)
    setLoading(true)
    const res = await fetch("/api/sendemail",{
      method:"POST",
      headers: {
        
        'Content-Type': 'application/json',
    },
      body:JSON.stringify({name,email,message})
    })

    const parsedDAta = await res.json()
    setLoading(false)
    if(parsedDAta?.data){
      setShowToast(true);  // Show toast

    setTimeout(() => setShowToast(false), 3000);
    }
    else{
      setIsError(true)
      alert("Message Sent Failed")
    }

    setEmail("")
    setName("")
    setMessage("")

  }
  return (
    <section className="py-8 min-h-[65vh] flex flex-col gap-6">
      {showToast && <Toast/>}
      
      <div className="felx items-center justify-between">
        <h2 className="title text-5xl  font-[heading]  tracking-wide">
          Contact me.
        </h2>
        <form action="" onSubmit={submitHandler} className="flex sm:p-4  flex-col gap-4 mt-5">
          <div className="grid grid-cols-1 space-y-4 sm:grid-cols-2 sm:space-y-0 sm:space-x-3 ">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e=>setName(e.target.value)}
              
            />

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
             
            />
          </div>
          <div>
            <textarea
            value={message}
            onChange={e=>setMessage(e.target.value)}
              className="textarea h-24 w-full flex  rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
            ></textarea>
          </div>

          <Button type="submit" >
            {loading?"Sending...":<>Send Message <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg></>
           
            }
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">By submitting this form, I agree to the <Link className=" font-semibold" href="/privacy">privacy&nbsp;policy.</Link></p>
        </form>
      </div>
    </section>
  );
};

export default Page;
