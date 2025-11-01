"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutImageGallery() {
	return (
		<motion.section
			className="section grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 min-h-[700px] container mx-auto"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={{
				hidden: { opacity: 0 },
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: 0.2,
						delayChildren: 0.1,
					},
				},
			}}
		>
			<motion.div
				className="relative col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-xl"
				variants={{
					hidden: { opacity: 0, scale: 0.9, x: -50 },
					visible: {
						opacity: 1,
						scale: 1,
						x: 0,
						transition: { duration: 0.8 },
					},
				}}
				whileHover={{ scale: 1.02 }}
			>
				<Image
					src="/about-image-1.avif"
					alt="Office workspace"
					fill
					priority
					className="object-cover"
				/>
			</motion.div>
			<motion.div
				className="relative col-span-1 md:col-span-1 md:row-span-1 overflow-hidden rounded-xl"
				variants={{
					hidden: { opacity: 0, scale: 0.9, y: 50 },
					visible: {
						opacity: 1,
						scale: 1,
						y: 0,
						transition: { duration: 0.6 },
					},
				}}
				whileHover={{ scale: 1.05, y: -5 }}
			>
				<Image
					src="/about-image-2.avif"
					alt="Team collaboration"
					fill
					priority
					className="object-cover"
				/>
			</motion.div>
			<motion.div
				className="relative col-span-1 md:col-span-1 md:row-span-1 overflow-hidden rounded-xl"
				variants={{
					hidden: { opacity: 0, scale: 0.9, y: 50 },
					visible: {
						opacity: 1,
						scale: 1,
						y: 0,
						transition: { duration: 0.6 },
					},
				}}
				whileHover={{ scale: 1.05, y: -5 }}
			>
				<Image
					src="/about-image-3.avif"
					alt="Team meeting and discussion"
					fill
					priority
					className="object-cover"
				/>
			</motion.div>
		</motion.section>
	);
}

