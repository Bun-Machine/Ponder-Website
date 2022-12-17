import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ponder</title>
      </Head>
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
    </>
  );
}
