"use client"

import React, { useEffect } from 'react'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import { useInquiryForm } from '@/hooks/useInquiryForm'
import { ClipLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const InquiryForm = () => {
  const {form, onSubmit} = useInquiryForm();  

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      toast.success('Thank you for your inquiry. We will get back to you soon.')    
    }
  }, [form.formState.isSubmitSuccessful])

  return (
    <Form {...form}>
      <ToastContainer />
      <form 
        onSubmit={
          form.handleSubmit(onSubmit)
        }
        className="container flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="John Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="xxx@xxx.xxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Content" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field: {value, onChange, ...fieldProps} }) => (
            <FormItem>
              <FormLabel>Attached File</FormLabel>
              <FormControl>
                <Input
                  accept="image/*"
                  type="file" 
                  placeholder="Subject"
                  onChange={(e) => {
                    onChange(e.target.files);
                  }}
                  {...fieldProps}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <ClipLoader color="white" size={20} />: "Submit"}
        </Button>
      </form>
    </Form>
  )
}

export default InquiryForm
