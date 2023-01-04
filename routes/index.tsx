import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-deno.tsx";
import IconInput from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/input-search.tsx";
import tablerIconsTsx from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/database.tsx";
import IconArmchair from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/armchair.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";
import CopyArea from "../islands/CopyArea.tsx";
import IconAccess from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/access-point.tsx";
import IconScale from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/scale.tsx";
import IconTest from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/test-pipe.tsx";
import * as Icons from "../components/Icons.tsx";

type Props = {
  children: ComponentChildren;
  active: string;
};


export default function Home() {
  return (
    <div style="background-color: #f8d3cd"class="flex-col items-center">
      <Head>
        <title>Ponder</title>
      </Head>
      <NavBar />
      <Header />
      <WelcomeArea />
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <GettingStarted />
      <Footer />
    </div>
  );
}

//--------------------NavBar--------------------//

export function NavBar() {
  return (
    <div class="bg-purple-400 justify-center flex border(b purple-500) hover:underline">
      <a
        class="bg-purple-400 text-black p-3 text-center group"
        href="https://deno.land/x/ponder/"
      >
        <b>Ponder v0.1.0</b> has been released, still in pre-production!{" "}
        <b>Use at your own Discretion!</b>{" "}
        <span class="group-hover:underline">→</span>
      </a>
    </div>
  );
}


//--------------------Header--------------------//

export function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docsfolder/docshome" },
    { name: "GitHub", href: "https://github.com/oslabs-beta/Ponder" },
    { name: "Deno Module", href: "https://deno.land/x/ponder/" },
  ];

  return (
    <div style="background:#e6c3e7; color: #010203" class="flex justify-center w-full py-6 px-8 flex flex-col md:flex-row gap-4 justify-center">
      <div class="flex items-center flex-1">
        <IconBrandDeno class="w-8 h-8" />
        <div class="text-3xl  ml-1 font-bold">
          Ponder
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-700 hover:text-purple-900 py-1 border-gray-500" +
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


//--------------------Welcome Area--------------------//

export function WelcomeArea() {
  return (
    <div style="background-color: #fbd6c8" class="flex flex-col items-center justify-center p-4 mx-auto ">
      <h2 class="py-2 text(4xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            A <span class="text-purple-600">simple ORM</span> for PostGreSQL, built for Deno.
          </h2>
      <img
        src="/ponder1.png"
        class="w-90 h-90"
        alt="the Ponder logo: the Deno dinosaur pondering in front of two databases"
      />
      <h2 class="py-2 text(4xl sm:4xl lg:4xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold">
            Come wander into <span class="text-purple-600">Ponder</span>.
          </h2>
    </div>
  );
}

//--------------------Description Box--------------------//

export function Hero() {
  return (
    <div style="background-color: #3e334b"
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/gallery/hero-bg.webp');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-3xl inline-block font-bold">Object Relational Mapping Tool for Deno</h1>
        <p class="text-xl max-w-lg text-blue-100 text-center">
        Ponder is a third-party module available at deno.land. 
        Simply import & export the dependency for use in your project.
        </p>
      </div>

      <div>
        <a
          href="/docsfolder/docshome"
          class="block mt-4 text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          Documentation{" "}
          <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />

        </a>
      </div>
     
    </div>
  );
}

//--------------------Features--------------------//

export function FeaturesOne() {
  const featureItems = [
    {
      icon: tablerIconsTsx,
      description:
        "Basic CRUD Functionality for PostGreSQL including Managing Tables.",
      link: "/docsfolder/docshome",
    },
    {
      icon: IconInput,
      description:
        "Database Introspection for interacting with your database through object representations of the tables.",
    },
    {
      icon: IconArmchair,
      description: "Written 100% in TypeScript, No complier needed.",
      link: "/docsfolder/docshome",
    },
  ];

  return (
    <section class="max-w-screen-lg mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <div style="background-color: #f8d3cd" class="flex flex-row md:flex-row gap-6 p-6">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2 flex-col justify-center items-center">
            <div class="flex bg-purple-600 inline-block p-3 rounded-xl text-white">
              <item.icon class="self-center w-10 h-10 transition hover:translate-x-0.5 " />
            </div>
            <p class="text-l">
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
    </section>
  );
}

export function FeaturesTwo() {
  const featureItems = [
    {
      icon: IconScale,
      description:
        "Super lightweight: only the crucial functionalities you need.",
      link: "/docsfolder/docshome",
    },
    {
      icon: IconAccess ,
      description:
        "Ponder can create model instances from your database.",
    },
    {
      icon: IconTest,
      description: "Built-in testing tool available through Deno",
      link: "/docsfolder/docshome",
    },
  ];

  return (
    <section class="max-w-screen-lg mx-auto my-16 px(4 sm:6 md:8) space-y-4">
    <div style="background-color: #f8d3cd" class="flex flex-col md:flex-row gap-6 p-6 max-w-6xl">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2">
            <div class="bg-purple-600 inline-block p-3 rounded-xl text-white">
              <item.icon class="w-10 h-10 transition hover:translate-x-0.5" />
            </div>
            <p class="text-l">
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
    </section>
  );
}


//--------------------Getting Started Section--------------------//

export function GettingStarted(props: { origin: string }) {
  return (
    <section class="max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 id="getting-started" class="text(3xl gray-600) font-bold">
        <a href="#getting-started" class="hover:underline">
          Getting Started
        </a>
      </h2>
      <div class="text-gray-600 flex gap-1 mb-4 bg-gray-100 p-2 rounded">
        <div class="text-gray-400">
          <Icons.Info />
        </div>
        <p>
          <a href="https://deno.land" class="text-blue-600 hover:underline">
            Deno CLI
          </a>{" "}
          version 1.25.0 or higher is required.{" "}
          <a
            href="https://deno.land/manual/getting_started/installation"
            class="text-blue-600 hover:underline"
          >
            Install
          </a>{" "}
          or{" "}
          <a
            href="https://deno.land/manual/getting_started/installation#updating"
            class="text-blue-600 hover:underline"
          >
            update
          </a>.
        </p>
      </div>
      <p class="text-gray-600">
        To include Ponder in your next project, add this dependency:
      </p>

      <CopyArea>
        {`import * as ponder from "https://deno.land/x/ponder@v0.0.3.1/mod.ts";`}
      </CopyArea>

      <p class="text-gray-600">
        You'll now be able to connect Ponder to your Database. First, store your Database URI in your own .env file. Then you can pull into your working file, the Database URI.
      </p>

      <CopyArea>{`const DB_URI = Deno.env.get('DB_URI');`}</CopyArea>

      <p class="text-gray-600">
        Now you can connect to your DB using the built-in poolConnection method: 
      </p>

      <CopyArea>{'const ponderDB1 = await ponder.poolConnection(`${DB_URI}`, 3, true);'}</CopyArea>

      <p class="text-gray-600">
        Now you are now able to run any of the built in functions off the ponderDB1 variable: 
      </p>

      <CopyArea>{"const inserted = await ponderDB1.insertIntoTable('people', ['name', 'hair_color'], ['Corey', 'red-brown']);"}</CopyArea>

      <p class="text-gray-600"> 
        A more in-depth{" "}
        <a
          href="/docs/getting-started"
          class="text-blue-600 hover:underline"
        >
          <i>Getting Started</i>
        </a>{" "}
        guide is available in{" "}
        <a href="/docsfolder/docshome" class="text-blue-600 hover:underline">the docs</a>.
      </p>
    </section>
  );
}


//--------------------Footer--------------------//

export function Footer({ children }: Props) {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "https://discord.gg/WgtNTNVS" },
        { name: "Discord", href: "https://discord.gg/WgtNTNVS" },
      ],
    },
  ];

  return (
    <div style="background:#e6c3e7" class="flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-2xl">
            Ponder
          </div>
        </div>
        <div class="text-gray-500">
          Simple ORM for PostGresSQL in Deno.
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
          Made by Ponder.
        </div>

        <a
          href="https://github.com/oslabs-beta/Ponder"
          target="_blank"
          class="inline-block hover:text-black"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  );
}

