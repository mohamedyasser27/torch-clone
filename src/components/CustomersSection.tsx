"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const customers = [
	{
		companyLogo: "/company-1.svg",
		companyName: "SOMEDAY",
		testimonial:
			"Torch completely transformed how we track our business performance. The real-time insights have helped us make faster, smarter decisions!",
		customerImage: "/customer-1.avif",
		customerName: "Emily Chang",
		customerTitle: "Luminate",
	},
	{
		companyLogo: "/company-2.svg",
		companyName: "n•a",
		testimonial:
			"Our team loves how easy Torch is to use. The custom dashboards give us exactly the data we need, all in one place.",
		customerImage: "/customer-2.avif",
		customerName: "Xavier Carter",
		customerTitle: "Cucumber",
	},
	{
		companyLogo: "/company-3.svg",
		companyName: "IRENE",
		testimonial:
			"Torch seamlessly integrated with our existing tools, making data management so much more efficient. It's become an essential part of our workflow.",
		customerImage: "/customer-2.avif",
		customerName: "Alexander Patel",
		customerTitle: "Vexa",
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
	hidden: { opacity: 0, y: 40, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
		},
	},
};

export default function CustomersSection() {
	return (
		<section className="section">
			<div className="container mx-auto">
				<motion.h2
					className="mb-10 text-white"
					variants={titleVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<span className="text-gradient-overlay">
						Kind words from customers
					</span>
				</motion.h2>
				<motion.div
					className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{customers.map((c, i) => (
						<CustomerCard key={i} {...c} index={i} />
					))}
				</motion.div>
			</div>
		</section>
	);
}

function CustomerCard({
	companyLogo,
	companyName,
	testimonial,
	customerImage,
	customerName,
	customerTitle,
	index,
}: {
	companyLogo: string;
	companyName: string;
	testimonial: string;
	customerImage: string;
	customerName: string;
	customerTitle: string;
	index: number;
}) {
	return (
		<motion.div
			className="rounded-2xl bg-neutral-900 p-6 flex flex-col h-full gap-8"
			variants={cardVariants}
			whileHover={{
				scale: 1.03,
				y: -5,
				transition: { duration: 0.2 },
			}}
		>
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.1 + 0.3 }}
			>
				<Image
					src={companyLogo}
					alt={companyName}
					width={48}
					height={20}
					className="h-5 w-auto"
				/>
			</motion.div>
			<motion.p
				className="paragraph-large mb-6"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.1 + 0.4 }}
			>
				{testimonial}
			</motion.p>
			<motion.div
				className="flex items-center gap-3 mt-auto"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.1 + 0.5 }}
			>
				<motion.div
					whileHover={{ scale: 1.1, rotate: 5 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<Image
						src={customerImage}
						alt={customerName}
						width={80}
						height={80}
						className="size-20 rounded-[.5rem] object-cover"
					/>
				</motion.div>
				<div>
					<div className="font-semibold text-white leading-tight">
						{customerName}
					</div>
					<div className="text-neutral-400 text-sm">{customerTitle}</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

