"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

const imageVariants = {
	hidden: { opacity: 0, scale: 0.9, x: 50 },
	visible: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			duration: 0.8,
		},
	},
};

const logoVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 0.5,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
		},
	}),
};

export default function HeroSection() {
	return (
		<section className="section">
			<motion.div
				className="container mx-auto items-center flex md:text-start flex-col md:flex-row gap-8 justify-between"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div className="md:max-w-[50ch]" variants={itemVariants}>
					<h1>
						<span className="text-gradient-overlay">
							Powerful data insights for all
						</span>
					</h1>
					<motion.p
						className="paragraph-large mt-8 mb-16"
						variants={itemVariants}
					>
						Torch makes data analysis easy for everyone. Visualise key metrics,
						track performance, and discover trends without needing a data
						science background.
					</motion.p>
					<motion.div
						className="flex flex-col md:flex-row gap-4 mb-16"
						variants={itemVariants}
					>
						<Button size="lg">Get Started</Button>
						<Button variant="secondary" size="lg">
							Learn More
						</Button>
					</motion.div>
					<motion.div
						className="flex flex-wrap justify-center gap-4"
						variants={containerVariants}
					>
						{["/company-2.svg", "/company-4.svg", "/company-3.svg", "/company-1.svg"].map(
							(src, i) => (
								<motion.div
									key={src}
									custom={i}
									variants={logoVariants}
									whileHover={{ opacity: 0.8, scale: 1.05 }}
								>
									<Image
										className="max-w-24 max-h-5 opacity-50 inline-flex text-left"
										src={src}
										alt="Company Logo"
										width={500}
										height={500}
									/>
								</motion.div>
							)
						)}
					</motion.div>
				</motion.div>
				<motion.div variants={imageVariants}>
					<Image
						src="/hero-illustration.avif"
						alt="Hero Image"
						width={600}
						height={600}
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}

