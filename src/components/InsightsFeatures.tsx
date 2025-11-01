"use client";
import { cn } from "@/lib/utils";
import { LayoutGrid, RefreshCw, Sparkles, Users } from "lucide-react";

const features = [
	{
		icon: <LayoutGrid size={32} color="#ffc44d" />,
		title: "Easy-to-use dashboards",
		description:
			"Create intuitive, custom dashboards to visualise your most important metrics. No coding or technical skills required.",
	},
	{
		icon: <RefreshCw size={32} color="#ffc44d" />,
		title: "Real-time data updates",
		description:
			"Get the latest insights with real-time data refreshes. Stay on top of changes as they happen, keeping your team informed.",
	},
	{
		icon: <Users size={32} color="#ffc44d" />,
		title: "Collaborative analytics",
		description:
			"Share dashboards and reports with your team for seamless collaboration. Comment, edit, and review data insights together.",
	},
	{
		icon: <Sparkles size={32} color="#ffc44d" />,
		title: "Automated reports",
		description:
			"Set up automated reports to be delivered directly to your inbox. Save time and focus on making decisions, not creating reports.",
	},
];

export default function InsightsFeatures() {
	return (
		<section className="section">
			<div className="container mx-auto">
				<h2 className=" text-white mb-8 md:mb-12">
					<span className="text-gradient-overlay">
						Take action from insights
					</span>
				</h2>
				<div className="flex flex-col md:flex-row gap-6 min-h-[600px]">
					<div className="flex flex-col gap-6 w-full md:w-1/2">
						{/* Left column */}
						<FeatureCard {...features[0]} className=" lg:basis-2/3" />
						<FeatureCard {...features[2]} className=" lg:basis-1/3" />
					</div>
					<div className="flex flex-col gap-6 w-full md:w-1/2">
						{/* Right column */}
						<FeatureCard {...features[1]} className=" lg:basis-1/3" />
						<FeatureCard {...features[3]} className=" lg:basis-2/3" />
					</div>
				</div>
			</div>
		</section>
	);
}

function FeatureCard({
	icon,
	title,
	description,
	className,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"bg-[#171918] rounded-xl p-10 flex flex-col justify-between gap-4",
				className
			)}
		>
			<div>{icon}</div>
			<div className="flex flex-col gap-4">
				<h3>{title}</h3>
				<p className="opacity-70">{description}</p>
			</div>
		</div>
	);
}

