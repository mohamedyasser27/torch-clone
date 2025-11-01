"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SingleFeatureSectionProps {
	title: string;
	subtitle: string;
	image: string;
	features: {
		icon: React.ReactNode;
		title: string;
		description: string;
	}[];
	heroClassName?: string;
	containerClassName?: string;
}

const sectionVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
		},
	},
};

const headerVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

const imageVariants = {
	hidden: { opacity: 0, scale: 0.95, y: 30 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.8,
		},
	},
};

const featureVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function SingleFeatureSection({
	title,
	subtitle,
	image,
	features,
	heroClassName,
	containerClassName,
}: SingleFeatureSectionProps) {
	return (
		<section className="section">
			<motion.div
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="container flex flex-col gap-8 mx-auto">
					<motion.p
						className="text-[#ffc44d] font-medium"
						variants={headerVariants}
					>
						{subtitle}
					</motion.p>
					<motion.h2
						className="heading-large max-w-[17ch]"
						variants={headerVariants}
					>
						<span className="text-gradient-overlay">{title}</span>
					</motion.h2>
					<motion.div variants={imageVariants}>
						<div className={containerClassName}>
							<Image
								className={heroClassName}
								src={image}
								alt={title}
								width={1000}
								height={1000}
							/>
						</div>
					</motion.div>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12"
						variants={sectionVariants}
					>
						{features.map((feature, idx) => (
							<motion.div
								key={idx}
								className="flex flex-col items-start"
								variants={featureVariants}
								whileHover={{
									scale: 1.03,
									x: 5,
									transition: { duration: 0.2 },
								}}
							>
								<motion.div
									className="mb-4 text-[#ffc44d]"
									initial={{ scale: 0, rotate: -180 }}
									whileInView={{ scale: 1, rotate: 0 }}
									viewport={{ once: true }}
									transition={{
										type: "spring",
										stiffness: 200,
										delay: idx * 0.1,
									}}
								>
									{feature.icon}
								</motion.div>
								<h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
								<p className="text-base text-foreground/80 font-light leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}

