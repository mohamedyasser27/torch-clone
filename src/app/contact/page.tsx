import { Metadata } from "next";

import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import InsightsFeatures from "@/components/InsightsFeatures";
import { createMetadata } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
	title: "Contact Us",
	description:
		"Get in touch with the Torch team. We're here to help you transform your data into actionable insights. Contact us for support, partnerships, or to learn more about our analytics platform.",
	path: "/contact",
	imageAlt: "Contact Torch Analytics - Get in Touch",
});

export default function ContactPage() {
	return (
		<>
			<ContactForm />
			<InsightsFeatures />
			<FaqSection />
			<CTASection />
		</>
	);
}

