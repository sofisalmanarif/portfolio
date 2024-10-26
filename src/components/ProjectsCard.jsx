import Image from 'next/image'
import React from 'react'

const ProjectsCard = () => {
  return (
    <div class="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
    <div class="flex flex-col space-y-1.5 p-6">
      <a href="/tv-tele-alerts.png">
      <Image width={500} height={300} src={"/profile.jpeg"}/>
      </a>
    </div>
    <div class="p-6 pt-0 flex flex-col gap-2">
      <h3 class="font-semibold leading-none tracking-tight">
        Tradingview Telegram Alerts
      </h3>
      <div class="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
        <p>
          Real-time trading alerts with chart snapshots sent to Telegram,
          designed to keep traders informed and responsive to market
          changes
        </p>
      </div>
    </div>
    <div class="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
      <div class="mt-2 flex flex-wrap gap-1">
        <div class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
          Docker
        </div>
        <div class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
          FastAPI
        </div>
        <div class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
          Fly.io
        </div>
        <div class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
          Python
        </div>
        <div class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
          Selenium
        </div>
        <div class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
          Telegram Bot API
        </div>
      </div>
      <div class="flex flex-row flex-wrap items-start gap-1">
        <a
          target="_blank"
          href="https://github.com/tedawf/tradingview-telegram-alerts"
        >
          <div class="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github size-3"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            Source
          </div>
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProjectsCard