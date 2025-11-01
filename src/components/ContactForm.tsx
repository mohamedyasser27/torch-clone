"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
		},
	},
};

const formVariants = {
	hidden: { opacity: 0, x: 30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
};

const inputVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
		},
	},
};

export default function ContactForm() {
	return (
		<section className="section">
			<motion.div
				className="container mx-auto items-start flex md:text-start flex-col md:flex-row gap-8 justify-between"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.div className="flex-1" variants={itemVariants}>
					<h1>
						<span className="text-gradient-overlay">
							Get in touch with the Torch team
						</span>
					</h1>
					<motion.p
						className="paragraph-large mt-8 mb-16 opacity-70 text-balance"
						variants={itemVariants}
					>
						Have questions or just want to say hi? Send us a message here or you
						can email us on <strong>hi@torch.com</strong>.
					</motion.p>
				</motion.div>
				<motion.form
					action=""
					className="flex flex-col gap-4 w-full flex-1"
					variants={formVariants}
				>
					<motion.div variants={inputVariants}>
						<Input type="text" placeholder="Name" className="flex-1 max-h-14" />
					</motion.div>
					<motion.div variants={inputVariants}>
						<Input
							type="email"
							placeholder="Email"
							className="flex-1 max-h-14"
						/>
					</motion.div>
					<motion.div variants={inputVariants}>
						<Textarea
							placeholder="Message"
							rows={12}
							className="flex-1 min-h-[200px]"
						/>
					</motion.div>
					<motion.div
						variants={inputVariants}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<Button type="submit" className="flex-1 max-h-14">
							Send Message
						</Button>
					</motion.div>
				</motion.form>
			</motion.div>
		</section>
	);
}

