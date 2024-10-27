import React from "react";

const Footer = () => {
  return (
    <footer class="flex flex-col pt-8 items-center justify-center pb-32 mt-4 sm:flex-row-reverse sm:justify-between">
      <section class="flex gap-6">
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin size-5"
            aria-hidden="true"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://github.com/sofisalmanarif"
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github size-5"
            aria-hidden="true"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a
          href="mailto:sofisalman9906@gmail.com"
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail size-5"
            aria-hidden="true"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
      </section>
      <section class="mt-8 sm:mt-0">
        <p class="text-center text-xs text-muted-foreground">
          <span>© 2024</span>{" "}
          <a class="" href="/">
            tedawf.com
          </a>{" "}
          |{" "}
          <a class=" font-bold" href="/privacy">
            privacy?
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
