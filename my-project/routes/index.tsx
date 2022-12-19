import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
// import { NavBar } from "../components/NavBar.tsx"
// import * as styles from "../static/styles.css"

import { ComponentChildren } from "preact";
// import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";

type Props = {
  children: ComponentChildren;
  active: string;
};

import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-deno.tsx";

import IconAlarm from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/alarm.tsx";
import IconAirBalloon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/air-balloon.tsx";
import IconArmchair from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/armchair.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";

export default function Home() {
  return (
    <div class="bg-pink-400 flex-col items-center">
      <Head>
        <title>Ponder</title>
      </Head>
      <NavBar />
      <Header />

      <WelcomeArea />
      {/* <Intro /> */}
      <Hero />
      <Features />
      {
        /* <GettingStarted />
      <Examples /> */
      }

      <Footer />
      {/* <SamTest /> */}
    </div>
  );
}

// function NavBar() {
//   return (
//     <div  class="bg-pink-400">
//       <div>
//         I'm a div
//         make it a cool color
//         have main page link
//         docs page link
//       </div>
//     </div>
//   )
// };

function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docs" },
    { name: "GitHub", href: "https://github.com/oslabs-beta/Ponder" },
    { name: "Deno Module", href: "https://deno.land/x/ponder/" },
  ];

  return (
    <div class="flex justify-center bg-white w-full py-6 px-8 flex flex-col md:flex-row gap-4 justify-center">
      <div class="flex items-center flex-1">
        <IconBrandDeno class="w-6 h-6" />
        <div class="text-2xl  ml-1 font-bold">
          Ponder
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavBar() {
  return (
    <div class="bg-green-400 justify-center flex">
      <a
        class="bg-green-400 text-black border(b green-500) p-3 text-center group"
        href="https://deno.land/x/ponder/"
      >
        <b>Ponder v0.0.3.1</b> has been released, still in pre-production!{" "}
        <b>Use at your own Discretion!</b>{" "}
        <span class="group-hover:underline">→</span>
      </a>
    </div>
  );
}

function WelcomeArea() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/ponder1.png"
        class="w-32 h-32"
        alt="the Ponder logo: the Deno dinosaur pondering in front of two databases"
      />
      <p class="my-6">
        Come wander to Ponder!
      </p>
      <Counter start={3} />
    </div>
  );
}

// function Intro() {
//   return (
//     <div>
//       <div class="rounded-lg bg-green border-black">
//         <span class="bg-green-400 border-black border-4 rounded">
//           Intro Area
//         </span>
//       </div>
//     </div>
//   );
// }
function Hero() {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/gallery/hero-bg.webp');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Fresh Components Beta</h1>
        <p class="text-xl max-w-lg text-blue-100">
          Fresh Components is a collection of components built with Preact and
          Tailwind CSS.
        </p>
      </div>

      <div>
        <a
          href="#"
          class="block mt-4 text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          Sign Up{" "}
        </a>
        <a
          href="#"
          class="block mt-4 transition-colors text-blue-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
        >
          Documentation{" "}
          <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function Features() {
  const featureItems = [
    {
      icon: IconAlarm,
      description:
        "Basic CRUD Functionality for PostGresSQL. Super lightweight: only the functionality you need.",
      link: "#",
    },
    {
      icon: IconAirBalloon,
      description:
        "Database Introspection for seeing what's already in your Database.",
    },
    {
      icon: IconArmchair,
      description: "Written 100% in TypeScript no complier needed.",
      link: "#",
    },
  ];

  return (
    <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2">
            <div class="bg-blue-600 inline-block p-3 rounded-xl text-white">
              <item.icon class="w-10 h-10" />
            </div>
            <p class="text-xl">
              {item.description}
            </p>

            {item.link &&
              (
                <a class="block" href={item.link}>
                  <p class="text-blue-500 cursor-pointer hover:underline inline-flex items-center group">
                    Read More{" "}
                    <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
                  </p>
                </a>
              )}
          </div>
        );
      })}
    </div>
  );
}

// function GettingStarted() {
//   return(
//     <div>
//       <div>
//         Getting Started Area
//       </div>
//     </div>
//   )
// }

// function Examples() {
//   return(
//     <div class="bg-gradient-to-r from-fuchsia-600 to-purple-600">
//       <div>
//         Examples
//       </div>
//     </div>
//   )
// }

// function Footer() {
//   return(
//     <div style="background-color: lightgrey;">
//       <div>
//         Footer
//       </div>
//     </div>
//   )
// }

function Footer({ children }: Props) {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
        { name: "API", href: "#" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ];

  return (
    <div class="bg-white flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-2xl">
            Fresh
          </div>
        </div>
        <div class="text-gray-500">
          Full Stack Framework
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © 2020 DenoLand<br />
          All right reserved.
        </div>

        <a
          href="https://github.com/denoland/fresh"
          class="inline-block hover:text-black"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  );
}

// function SamTest() {
//   return(
//     <div>
//       <div class="w-1/2 mx-auto">
//   <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
//     <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
//       <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
//       </div>
//       <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
//       </div>
//       <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
//       </div>
//       <div class="mx-auto pr-16" id="terminaltitle">
//         <p class="text-center text-sm">Terminal</p>
//       </div>

//     </div>
//     <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
//       <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
//       <p class="pb-1">Laraben:Devprojects laraben$</p>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }
