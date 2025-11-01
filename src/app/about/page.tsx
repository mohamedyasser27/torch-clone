import { Handshake, Lightbulb, Sliders } from "lucide-react";
import { Metadata } from "next";

import AboutHeroSection from "@/components/AboutHeroSection";
import AboutImageGallery from "@/components/AboutImageGallery";
import CTASection from "@/components/CTASection";
import CustomersSection from "@/components/CustomersSection";
import FaqSection from "@/components/FaqSection";
import SingleFeatureSection from "@/components/SingleFeatureSection";
import ValuesSection from "@/components/ValuesSection";
import { createMetadata } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
	title: "About Us",
	description:
		"Learn about Torch's mission to empower businesses with real-time data analytics. Discover our values, team, and commitment to transforming complex data into actionable insights.",
	path: "/about",
	imageAlt: "Torch Analytics Team - Our Mission and Values",
});

export default function AboutPage() {
	return (
		<>
			<AboutHeroSection />
			<SingleFeatureSection
				containerClassName="bg-primary"
				heroClassName="mix-blend-luminosity"
				title="Empower businesses with real-time data"
				subtitle="Our mission"
				image="/about-hero-illustration.avif"
				features={[
					{
						icon: <Lightbulb />,
						title: "Real-time insights",
						description: "Get insights in real-time",
					},
					{
						icon: <Sliders />,
						title: "Customisable views",
						description:
							"Tailor your dashboard to show the metrics that matter most. Create multiple views for different team members or purposes.",
					},
					{
						icon: <Handshake />,
						title: "Collaborative tools",
						description:
							"Easily share your insights with the team. Comment, edit, and collaborate on reports without leaving the platform.",
					},
				]}
			/>
			<ValuesSection />
			<AboutImageGallery />
			<CustomersSection />
			<FaqSection />
			<CTASection />
		</>
	);
}

