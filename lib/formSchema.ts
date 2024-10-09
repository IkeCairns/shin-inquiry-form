import { z } from "zod"

export const formSchema = z.object({
  username: 
    z.string()
    .min(2, {
      message: "Username must be at least 2 characters."
    })
    .max(50, {
      message: "Username must be under 50 characters."
    }),
  email:
    z.string()
    .email({
      message: "Email address must be appropriate."
    }),
  subject:
    z.string()
    .min(2, {
      message: "Subject must be at least 2 characters."
    }),
  content:
    z.string()
    .min(10, {
      message: "Content must be at least 10 characters."
    })
    .max(160, {
      message: "Username must be under 160 characters."
    }),
})
