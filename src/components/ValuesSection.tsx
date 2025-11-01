"use client";
import { motion } from "framer-motion";
import { Lightbulb, Shield, LineChart, Cog, Heart } from "lucide-react";

const values = [
	{
		icon: <Lightbulb color="#ffc44d" size={28} />,
		title: "Innovation first",
		description:
			"We constantly push the boundaries of what's possible. At Torch, we embrace new ideas and cutting-edge technologies to deliver powerful, forward-thinking solutions.",
	},
	{
		icon: <Shield color="#ffc44d" size={28} />,
		title: "Security by design",
		description:
			"Data protection is at the heart of everything we do. Our platform is built with top-tier security measures to ensure your information is always safe and secure.",
	},
	{
		icon: <LineChart color="#ffc44d" size={28} />,
		title: "Data-driven decisions",
		description:
			"We believe in the power of data to guide smart business choices. Torch empowers teams to make informed decisions with real-time insights and comprehensive analytics.",
	},
	{
		icon: <LineChart color="#ffc44d" size={28} />,
		title: "Continuous growth",
		description:
			"At Torch, we foster a culture of learning and growth. Whether it's improving our product or developing our team, we're always striving to be better.",
	},
	{
		icon: <Cog color="#ffc44d" size={28} />,
		title: "Seamless integration",
		description:
			"We're committed to making your workflow smooth and efficient. Torch integrates effortlessly with your existing tools, so you can focus on what matters most.",
	},
	{
		icon: <Heart color="#ffc44d" size={28} />,
		title: "Customer-centric focus",
		description:
			"Your success is our priority. We work hand-in-hand with our customers to ensure Torch meets their needs and helps their business thrive.",
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

const valueVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
};

export default function ValuesSection() {
	return (
		<section className="section">
			<div className="container flex flex-col gap-20 mx-auto">
				<motion.h2
					className="heading-large"
					variants={titleVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<span className="text-gradient-overlay">Led by strong values</span>
				</motion.h2>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-12 gap-y-16 w-full values-section"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{values.map((value, idx) => (
						<motion.div
							key={idx}
							className="value-item flex flex-col items-start"
							variants={valueVariants}
							whileHover={{
								scale: 1.03,
								y: -5,
								transition: { duration: 0.2 },
							}}
						>
							<motion.div
								className="mb-4"
								initial={{ scale: 0, rotate: -180 }}
								whileInView={{ scale: 1, rotate: 0 }}
								viewport={{ once: true }}
								transition={{
									type: "spring",
									stiffness: 200,
									delay: idx * 0.1,
								}}
								whileHover={{ scale: 1.2, rotate: 10 }}
							>
								{value.icon}
							</motion.div>
							<h4 className="text-lg font-semibold mb-2">{value.title}</h4>
							<p className="text-base text-foreground/80 font-light leading-relaxed">
								{value.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

