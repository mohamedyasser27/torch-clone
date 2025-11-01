"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
	{
		name: "Starter",
		price: "$12",
		period: "/mo",
		features: [
			"Real-time data dashboards",
			"Customisable reports",
			"Email support",
			"Single-user access",
		],
		button: "Choose Starter",
		highlight: false,
		hasBackground: false,
	},
	{
		name: "Advanced",
		price: "$59",
		period: "/mo",
		features: [
			"All Basic plan features plus:",
			"Advanced analytics tools",
			"Multi-user access",
			"Automated reporting",
			"Integrations with popular tools",
			"Priority email support",
		],
		button: "Choose Advanced",
		highlight: true,
		hasBackground: true,
	},
	{
		name: "Enterprise",
		price: "Contact",
		period: "",
		features: [
			"All Advanced plan features plus:",
			"Unlimited user accounts",
			"Dedicated account manager",
			"Custom data solutions",
			"Advanced security features",
			"API access",
		],
		button: "Contact sales team",
		highlight: false,
		hasBackground: false,
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
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

const cardVariants = {
	hidden: { opacity: 0, y: 50, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
		},
	},
};

export default function PricingCards() {
	return (
		<section className="section flex flex-col gap-8 container mx-auto">
			<motion.h2
				className="heading-large"
				variants={titleVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<span className="text-gradient-overlay">
					Simple and flexible pricing
				</span>
			</motion.h2>
			<motion.div
				className="flex flex-col xl:flex-row gap-8 justify-center md:items-stretch items-center"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{plans.map((plan, index) => (
					<PricingCard key={plan.name} plan={plan} index={index} />
				))}
			</motion.div>
		</section>
	);
}

function PricingCard({
	plan,
	index,
}: {
	plan: (typeof plans)[0];
	index: number;
}) {
	return (
		<motion.div
			className={`relative overflow-hidden basis-full  w-full p-8 rounded-2xl bg-[#171918]`}
			variants={cardVariants}
			whileHover={{
				scale: 1.05,
				y: -10,
				transition: { duration: 0.2 },
			}}
		>
			{plan.hasBackground && (
				<motion.div
					className="gradient-img"
					initial={{ opacity: 0, scale: 1.1 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
				/>
			)}
			<motion.div
				className="relative z-10 flex flex-col h-full"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.2 + 0.4 }}
			>
				<h5 className="mb-4 text-white heading-small">{plan.name}</h5>
				<motion.div
					className=" text-white mb-5 mt-7.5"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
				>
					<span className=" heading-large">{plan.price}</span>
					{plan.period && (
						<span className="ml-2 text-gray-400">{plan.period}</span>
					)}
				</motion.div>
				<motion.ul
					className="space-y-4 mb-8 grow"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{plan.features.map((feature, i) => (
						<motion.li
							key={i}
							className="flex items-center"
							variants={cardVariants}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
						>
							<motion.span
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 + 0.7 + i * 0.1, type: "spring" }}
							>
								<Check size={20} color="#ffc44d" className="shrink-0" />
							</motion.span>
							<span className="ml-3 text-base font-normal text-gray-200">
								{feature}
							</span>
						</motion.li>
					))}
				</motion.ul>
				<motion.button
					type="button"
					className={`w-full py-3 rounded-lg font-medium text-base transition ${
						plan.highlight
							? "bg-[#ffc44d] text-black hover:bg-[#e6b53f]"
							: "bg-[#232524] text-white hover:bg-[#232524]/80"
					}`}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.2 + 0.8 }}
				>
					{plan.button}
				</motion.button>
			</motion.div>
		</motion.div>
	);
}

