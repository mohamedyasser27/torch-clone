import { Handshake, Lightbulb, Sliders } from "lucide-react";
import { Metadata } from "next";

import CTASection from "@/components/CTASection";
import CustomersSection from "@/components/CustomersSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import InsightsFeatures from "@/components/InsightsFeatures";
import SingleFeatureSection from "@/components/SingleFeatureSection";
import { createMetadata } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
	title: "Real-time Data Analytics Platform",
	description:
		"Torch is a powerful real-time data analytics platform that helps businesses make faster, data-driven decisions. Get instant insights, customizable dashboards, and collaborative tools.",
	imageAlt: "Torch Analytics Dashboard - Real-time Data Insights",
});

export default function Home() {
	return (
		<main className="min-h-dvh">
			<HeroSection />
			<InsightsFeatures />
			<SingleFeatureSection
				title="Real-time insights for faster decisions"
				subtitle="Data at your fingertips"
				image="/real-time-illustration.avif"
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
			<SingleFeatureSection
				title="Turn complex data into simple decisions"
				subtitle="Actionable insights"
				image="/charts-illustration.avif"
				features={[
					{
						icon: <Sliders />,
						title: "Automated reports",
						description:
							"Save time with automated, scheduled reports. Get the insights you need, delivered straight to your inbox.",
					},
					{
						icon: <Lightbulb />,
						title: "Trend analysis",
						description:
							"Discover patterns and trends in your data effortlessly. Visualise historical data to forecast future performance.",
					},
					{
						icon: <Handshake />,
						title: "Interactive charts",
						description:
							"Dive deeper into your data with interactive charts. Hover and click for more detailed insights and breakdowns.",
					},
				]}
			/>
			<CustomersSection />
			<FaqSection />
			<CTASection />
		</main>
	);
}

