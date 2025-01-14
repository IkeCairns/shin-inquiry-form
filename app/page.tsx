"use client"

import InquiryForm from "@/components/InquiryForm/InquiryForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-semibold text-2xl mb-4">お問合せフォーム</h2>
      <InquiryForm />
    </main>
  );
}
