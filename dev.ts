#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";

await dev(import.meta.url, "./main.ts");


//dev.ts: This is the development entry point for your project. This is the file that you run to start your project. This file doesn't need to be called dev.ts, but this is the convention.