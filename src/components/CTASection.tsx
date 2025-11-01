"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

const backgroundVariants = {
	hidden: { opacity: 0, scale: 1.1 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
		},
	},
};

export default function CTASection() {
	return (
		<section className="bg-[#101211] p-10 md:p-20 md:px-32 relative overflow-hidden">
			<motion.div
				className="gradient-img"
				variants={backgroundVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			/>
			<motion.div
				className="flex flex-col gap-8 items-center z-10 relative text-center"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.h2 variants={itemVariants}>Ready to get started?</motion.h2>
				<motion.p
					className="paragraph-extra-large"
					variants={itemVariants}
				>
					Take the first step to growing your business
				</motion.p>
				<motion.div
					variants={itemVariants}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Button className="mt-8" size="lg">
						Get Started
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}

