import {
	AlarmClock,
	Handshake,
	Layout,
	Lightbulb,
	RefreshCw,
	Sliders,
} from "lucide-react";
import { Metadata } from "next";

import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import SingleFeatureSection from "@/components/SingleFeatureSection";
import { createMetadata } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
	title: "Features",
	description:
		"Discover Torch's powerful features: real-time insights, customizable dashboards, automated reports, trend analysis, and seamless integrations. Transform your data into actionable decisions.",
	path: "/features",
	imageAlt: "Torch Analytics Features - Data Visualization and Insights",
});

export default function FeaturesPage() {
	return (
		<main className="min-h-dvh">
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
			<SingleFeatureSection
				title="Turn complex data into simple decisions"
				subtitle="Actionable insights"
				image="/charts-illustration.avif"
				features={[
					{
						icon: <AlarmClock />,
						title: "Quick setup",
						description:
							"Get started fast with easy integrations. Connect your existing tools and platforms with just a few clicks.",
					},
					{
						icon: <RefreshCw />,
						title: "Data synchronisation",
						description:
							"Keep everything in sync. Torch ensures that data flows seamlessly between all your connected apps, so nothing is ever out of date.",
					},
					{
						icon: <Layout />,
						title: "No-code integrations",
						description:
							"No need for technical expertise. Set up integrations without writing a single line of code, making it accessible to everyone on your team.",
					},
				]}
			/>

			<FaqSection />
			<CTASection />
		</main>
	);
}

