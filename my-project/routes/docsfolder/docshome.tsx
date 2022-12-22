// routes/docsfolder/docshome.tsx

import { Head } from "$fresh/runtime.ts";
import { Home, NavBar, Header, WelcomeArea, GettingStarted, Footer } from "../index.tsx"

export default function DocsHome() {
    return (
      <div style="background-color: #f8d3cd"class="flex-col items-center">
        <Head>
          <title>Ponder Docs Home</title>
        </Head>
        <NavBar />
        <Header />
  
        <DocsWelcome/>
        {/* <WelcomeArea /> */}
        {/* <Intro /> */}
        {/* <Hero /> */}
        {/* <Features /> */}
        {
          /* <GettingStarted />
        <Examples /> */
        }
        <DocsTableOfContents/>
        <GettingStarted />
        <Footer />
        {/* <SamTest /> */}
      </div>
    );
  }



//components definitions:

export function DocsWelcome() {
    return (
      <div style="background-color: #fbd6c8" class="flex flex-row items-center justify-center p-4 mx-auto gap-4">
        <img
          src="/ponder1.png"
          class="w-40 h-40 flex-grow"
          alt="the Ponder logo: the Deno dinosaur pondering in front of two databases"
        />
        <h2 class="py-2 text(4xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold shrink">
              Welcome to the <span class="text-purple-600">documentation</span> for Ponder. Click on any section to jump to the <span class="text-purple-600">documentation</span>.
            </h2>
        {/* <p class="my-6 text-4xl font-extrabold font-sans" >
          Come wander to Ponder!
        </p> */}
        {/* <h2 class="py-2 text(4xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
              Click on any section to jump to the <span class="text-purple-600">documentation</span>.
            </h2> */}
        {/* <Counter start={3} /> */}
        
      </div>
    );
  }

  export function DocsTableOfContents() {
    const tableOfDocs = [
        "intro", "getting Started", "BasicCrud", "Managing tables", "Database Introspection", "examples", "CLI", "about"
    ];
    const docsMapped = tableOfDocs.map((el) => (
        <li>{el}</li>
    ))

    return(
        <div>
            <h3>Table Of Contents</h3>
            <ul>
                {docsMapped}
            </ul>
        </div>
    )
  }