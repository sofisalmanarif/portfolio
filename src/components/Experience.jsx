import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import Timeline from "./Timeline";
import { myEducaton, work } from "../data/education";

const  Experience = () => {
  return (
    <Tabs defaultValue="account" className="w-full dark:bg-[#030712]">
      <TabsList className="grid  dark:bg-[#1F2937] w-full grid-cols-2">
        <TabsTrigger value="account">Education</TabsTrigger>
        <TabsTrigger value="password">Work</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className=" border border-zinc-200 dark:bg-[#030712]  dark:border-zinc-800 bg-card text-card-foreground shadow  relative  flex flex-col gap-6 rounded-xl px-2 sm:px-10 py-5">
          <div className="border border-zinc-200 dark:border-zinc-800 absolute top-0 sm:left-[67px] left-8 h-full"></div>

          {myEducaton.map((item) => (
            
            <Timeline key={item.name} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="password">
        <div className="   border border-zinc-200 dark:bg-[#030712]  dark:border-zinc-800 bg-card text-card-foreground shadow  relative  flex flex-col gap-6 rounded-xl px-2 sm:px-10 py-5">
          <div className=" line border  border-zinc-200 absolute top-0 sm:left-[70px] left-8 h-full"></div>

          {
            work.map((item) => (
              <Timeline key={item.name} item={item} />
            ))
          }
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Experience;
