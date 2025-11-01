"use client";
import { motion } from "framer-motion";
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

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
		},
	},
};

const titleVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

export default function InsightsFeatures() {
	return (
		<section className="section">
			<div className="container mx-auto">
				<motion.h2
					className=" text-white mb-8 md:mb-12"
					variants={titleVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<span className="text-gradient-overlay">
						Take action from insights
					</span>
				</motion.h2>
				<motion.div
					className="flex flex-col md:flex-row gap-6 min-h-[600px]"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					<div className="flex flex-col gap-6 w-full md:w-1/2">
						{/* Left column */}
						<motion.div variants={cardVariants}>
							<FeatureCard {...features[0]} className=" lg:basis-2/3" />
						</motion.div>
						<motion.div variants={cardVariants}>
							<FeatureCard {...features[2]} className=" lg:basis-1/3" />
						</motion.div>
					</div>
					<div className="flex flex-col gap-6 w-full md:w-1/2">
						{/* Right column */}
						<motion.div variants={cardVariants}>
							<FeatureCard {...features[1]} className=" lg:basis-1/3" />
						</motion.div>
						<motion.div variants={cardVariants}>
							<FeatureCard {...features[3]} className=" lg:basis-2/3" />
						</motion.div>
					</div>
				</motion.div>
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
			<motion.div
				className="flex flex-col gap-4"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.4 }}
			>
				<h3>{title}</h3>
				<p className="opacity-70">{description}</p>
			</motion.div>
		</div>
	);
}

