"use client";
import { motion } from "framer-motion";

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

export default function AboutHeroSection() {
	return (
		<section className="section">
			<motion.div
				className="container mx-auto items-center flex md:text-start flex-col md:flex-row gap-8 justify-between"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div className="w-full md:w-1/2" variants={itemVariants}>
					<h1>
						<span className="text-gradient-overlay">
							We do things a bit differently here…
						</span>
					</h1>
					<motion.p
						className="paragraph-large mt-8 mb-16 opacity-70 text-balance"
						variants={itemVariants}
					>
						We believe innovation happens when you break away from the usual. We
						focus on creating smart, secure, and intuitive solutions that put
						our customers first. Real progress starts with thinking differently.
					</motion.p>
				</motion.div>
			</motion.div>
		</section>
	);
}

