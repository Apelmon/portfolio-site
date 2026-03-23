"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SECTION_IDS } from "@/lib/constants";

export default function Home() {

  const handleClick = () => {
    let theme_name:string | null = document.documentElement.getAttribute("data-theme");
    if (theme_name != null)
      if (theme_name === "midnight")
        theme_name = "clean";
      else if (theme_name === "clean")
        theme_name = "warm";
      else 
        theme_name = "midnight";
    console.log(theme_name);
    document.documentElement.setAttribute("data-theme", theme_name!);
  }

  return (
    <div className="mx-5 my-5">
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl py-16 items-center justify-center">
        <Button
            className="flex h-12 w-full 
            items-center justify-center rounded-full border 
            border-solid border-black/3 px-5 transition-colors 
            hover:border-transparent hover:bg-black/44 
            dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            onClick={handleClick}
            // rel="noopener noreferrer"
          >
            Switch theme
          </Button>
          {Object.entries(SECTION_IDS).map(([key, id]) => (
            <div>
              <Separator className="my-4"/>
              <section key={key} id={`${key}`} className="mx-4 capitalize text-gray-500">
                {id}
              </section>  
            </div>
          ))}
{/*           
          <section id={SECTION_IDS.hero} className="min-h-screen text-gray-500">
            Hero
          </section>
          <section id={SECTION_IDS.about} className="min-h-screen text-gray-500">
            About
          </section>
          <section id={SECTION_IDS.skills} className="min-h-screen text-gray-500">
            Skills
          </section>
          <section id={SECTION_IDS.projects} className="min-h-screen text-gray-500">
            Projects
          </section>
          <section id={SECTION_IDS.testimonails} className="min-h-screen text-gray-500">
            Testimonials
          </section>
          <section id={SECTION_IDS.contact} className="min-h-screen text-gray-500">
            Contact
          </section> */}
      </main>
    </div>
  );
}
