"use client";
import { motion } from "framer-motion";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

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
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function FaqSection() {
	return (
		<section className="section container mx-auto flex flex-col gap-4 items-center">
			<motion.h2
				className="heading-large font-medium"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<span className="text-gradient-overlay">FAQs</span>
			</motion.h2>
			<motion.p
				className="text-white opacity-70 paragraph-large"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 0.7 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				Answers to questions you might have about Torch.
			</motion.p>
			<motion.div
				className="max-w-3xl w-full flex flex-col gap-4"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				<Accordion type="single" collapsible>
					<motion.div variants={itemVariants} className="mb-4">
						<AccordionItem value="item-1">
							<AccordionTrigger>What does Torch do?</AccordionTrigger>
							<AccordionContent>
								Torch is a data analytics platform that helps businesses track,
								visualise, and optimise their performance metrics in real-time.
								It enables teams to make data-driven decisions through
								customisable dashboards and powerful insights.
							</AccordionContent>
						</AccordionItem>
					</motion.div>
					<motion.div variants={itemVariants} className="mb-4">
						<AccordionItem value="item-2">
							<AccordionTrigger>Who is Torch for?</AccordionTrigger>
							<AccordionContent>
								Torch is ideal for startups, tech companies, and growing
								businesses that want to harness the power of their data. Its
								built for teams looking to improve their decision-making by
								tracking key performance indicators (KPIs) across all
								departments.
							</AccordionContent>
						</AccordionItem>
					</motion.div>
					<motion.div variants={itemVariants} className="mb-4">
						<AccordionItem value="item-3">
							<AccordionTrigger>
								How secure is my data on Torch?
							</AccordionTrigger>
							<AccordionContent>
								Security is our top priority. Torch uses end-to-end encryption,
								secure data centres, and regular security audits to ensure your
								data is protected at all times.
							</AccordionContent>
						</AccordionItem>
					</motion.div>
					<motion.div variants={itemVariants}>
						<AccordionItem value="item-4">
							<AccordionTrigger>
								Can Torch integrate with existing tools?
							</AccordionTrigger>
							<AccordionContent>
								Yes, Torch integrates with a wide range of tools, including CRM
								systems, marketing platforms, and cloud storage services. Our
								API allows for seamless integration, helping you connect Torch
								to the software you already use.
							</AccordionContent>
						</AccordionItem>
					</motion.div>
				</Accordion>
			</motion.div>
		</section>
	);
}

