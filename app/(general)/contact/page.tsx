import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact title',
  description: 'Contact description',
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">This is the contact page.</span>
    </>
  )
}
