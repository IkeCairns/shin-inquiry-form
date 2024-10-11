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
      file: undefined,
    },
  })

  // Define a submit handler
  const onSubmit = useCallback(async(values: z.infer<typeof formSchema>) => {
    const {
      username,
      email,
      subject,
      content,
      file
    } = values

    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("content", content);
    formData.append("file", file[0]);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
        method: "POST",
        body: formData, 
      });
    } catch(err) {
      console.error(err)
    }
  },[])

  return {form, onSubmit};
};
