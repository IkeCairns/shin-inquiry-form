import { useForm } from "react-hook-form"
import { formSchema } from "@/lib/formSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"

export const useInquiryForm = () => {
  // Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      content: "",
    },
  })

  // Define a submit handler
  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log(values)
  },[])

  return {form, onSubmit};
};
