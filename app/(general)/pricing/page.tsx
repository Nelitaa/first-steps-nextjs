import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing title',
  description: 'Pricing description',
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">This is the pricing page.</span>
    </>
  )
}
