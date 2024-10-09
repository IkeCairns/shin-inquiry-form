import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jin200701@gmail.com"],
      subject: "Test Email: ShinCode-inquiry",
      react: EmailTemplate({
        username: "testuser",
        email: "xx@xx.xx",
        content: "test content script"
      }) as React.ReactElement
    });
    if (error) {
      return NextResponse.json({error});
    }
    return NextResponse.json({data})
  } catch (error) {
    return NextResponse.json({error})
  }
}
