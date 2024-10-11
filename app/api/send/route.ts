import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const formData = await request.formData();

  const username = formData.get("username")?.toString() as string;
  const email = formData.get("email")?.toString() as string;
  const subject = formData.get("subject")?.toString() as string;
  const content = formData.get("content")?.toString() as string;
  const file = formData.get("file") as File;

  console.log({username, email, subject, content, file})

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["zxh03501@nifty.com"],
      subject: subject,
      react: EmailTemplate({
        username,
        email,
        content,
      }) as React.ReactElement,
      attachments: [{ filename: file.name, content: file }],
    });
    if (error) {
      return NextResponse.json({error});
    }
    console.log(NextResponse.json({data}))
    return NextResponse.json({data});
  } catch (error) {
    return NextResponse.json({error})
  }
}
