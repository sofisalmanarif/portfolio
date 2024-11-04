"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isLightTheme = theme === "light";

  return (
    <div className={`flex space-x-2`}>
      <Button
        variant="ghost"
        onClick={() => setTheme(isLightTheme ? "dark" : "light")}
      >
        {isLightTheme ? (
          <MoonIcon className="h-[1.2rem] text-blue-500 w-[1.2rem]" />
        ) : (
          <SunIcon className="h-[1.2rem] text-yellow-500 w-[1.2rem]" />
        )}
        <span className="sr-only">{isLightTheme ? "Dark Theme" : "Light Theme"}</span>
      </Button>
    </div>
  );
}
