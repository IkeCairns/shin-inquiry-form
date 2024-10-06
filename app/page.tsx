"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})



export default function Home() {
  return (
    <main>
      <h1>TEST</h1>
    </main>
  );
}
