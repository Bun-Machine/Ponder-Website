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
          src="../static/deno-logo-beta2.png"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Come wander to Ponder!
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
