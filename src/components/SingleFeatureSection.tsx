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
			<div>
				<div className="container flex flex-col gap-8 mx-auto">
					<p className="text-[#ffc44d] font-medium">{subtitle}</p>
					<h2 className="heading-large max-w-[17ch]">
						<span className="text-gradient-overlay">{title}</span>
					</h2>
					<div>
						<div className={containerClassName}>
							<Image
								className={heroClassName}
								src={image}
								alt={title}
								width={1000}
								height={1000}
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
						{features.map((feature, idx) => (
							<div key={idx} className="flex flex-col items-start">
								<div className="mb-4 text-[#ffc44d]">{feature.icon}</div>
								<h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
								<p className="text-base text-foreground/80 font-light leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

