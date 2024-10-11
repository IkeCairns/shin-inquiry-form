import { z } from "zod"

const MAX_MB = 5
const MAX_FILE_SIZE = MAX_MB * 1024 * 1024
const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/webp",
  "image/pdf"
]

export const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters."
    })
    .max(50, {
      message: "Username must be under 50 characters."
    }),
  email: z
    .string()
    .email({
      message: "Email address must be appropriate."
    }),
  subject: z
    .string()
    .min(2, {
      message: "Subject must be at least 2 characters."
    }),
  content: z
    .string()
    .min(10, {
      message: "Content must be at least 10 characters."
    })
    .max(160, {
      message: "Username must be under 160 characters."
    }),
  file: z
    .custom<FileList>()
    .refine((files) =>
      files?.length > 0 , 
      "Please attach a file.",
    )
    .refine((files) =>
      files?.[0].size < MAX_FILE_SIZE, // 5 MB = 5 * 1024 * 1024 = 5242880 bX_FILE_SIZE, 
      "File size must be less than 5 MB.",
    )
    .refine((files) =>
      ACCEPTED_FILE_TYPES.includes(files?.[0].type), 
      "File type must be one of: png, jpeg, jpg, gif, webp, pdf.",
    )
})
