import { Metadata } from "next";

import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import PricingCards from "@/components/PricingCards";
import { createMetadata } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
	title: "Pricing",
	description:
		"Choose the perfect plan for your business. Flexible pricing options designed to scale with your data analytics needs. Start free or upgrade for advanced features.",
	path: "/pricing",
	imageAlt: "Torch Analytics Pricing Plans",
});

export default function PricingPage() {
	return (
		<div>
			<PricingCards />
			<FaqSection />
			<CTASection />
		</div>
	);
}

