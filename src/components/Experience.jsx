import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import Timeline from "./Timeline";
import { myEducaton } from "../data/education";

const Experience = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Education</TabsTrigger>
        <TabsTrigger value="password">Experience</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className=" line border relative border-zinc-200 flex flex-col gap-8 rounded-xl px-2 sm:px-10 py-5">
          <div className="border border-zinc-200 absolute top-0 sm:left-[70px] left-8 h-full"></div>

          {myEducaton.map((item) => (
            <Timeline item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="password">
        <div className=" line border relative border-zinc-200 flex flex-col gap-6 rounded-xl px-2 sm:px-10 py-5">
          <div className="border border-zinc-200 absolute top-0 sm:left-[70px] left-8 h-full"></div>

          
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Experience;
