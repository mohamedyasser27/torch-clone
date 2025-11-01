"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="section">
			<div className="container mx-auto items-center flex md:text-start flex-col md:flex-row gap-8 justify-between">
				<div className="md:max-w-[50ch]">
					<h1>
						<span className="text-gradient-overlay">
							Powerful data insights for all
						</span>
					</h1>
					<p className="paragraph-large mt-8 mb-16">
						Torch makes data analysis easy for everyone. Visualise key metrics,
						track performance, and discover trends without needing a data
						science background.
					</p>
					<div className="flex flex-col md:flex-row gap-4 mb-16">
						<Button size="lg">Get Started</Button>
						<Button variant="secondary" size="lg">
							Learn More
						</Button>
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<Image
							className="max-w-24 max-h-5 opacity-50 inline-flex text-left"
							src="/company-2.svg"
							alt="Hero Image"
							width={500}
							height={500}
						/>
						<Image
							className="max-w-24 max-h-5 opacity-50 inline-flex text-left"
							src="/company-4.svg"
							alt="Hero Image"
							width={500}
							height={500}
						/>
						<Image
							className="max-w-24 max-h-5 opacity-50 inline-flex text-left"
							src="/company-3.svg"
							alt="Hero Image"
							width={500}
							height={500}
						/>
						<Image
							className="max-w-24 max-h-5 opacity-50 inline-flex text-left"
							src="/company-1.svg"
							alt="Hero Image"
							width={500}
							height={500}
						/>
					</div>
				</div>
				<div>
					<Image
						src="/hero-illustration.avif"
						alt="Hero Image"
						width={600}
						height={600}
					/>
				</div>
			</div>
		</section>
	);
}

