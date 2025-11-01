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

export default function CustomersSection() {
	return (
		<section className="section">
			<div className="container mx-auto">
				<h2 className="mb-10 text-white">
					<span className="text-gradient-overlay">
						Kind words from customers
					</span>
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{customers.map((c, i) => (
						<CustomerCard key={i} {...c} />
					))}
				</div>
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
}: {
	companyLogo: string;
	companyName: string;
	testimonial: string;
	customerImage: string;
	customerName: string;
	customerTitle: string;
}) {
	return (
		<div className="rounded-2xl bg-neutral-900 p-6 flex flex-col h-full gap-8">
			<div>
				<Image
					src={companyLogo}
					alt={companyName}
					width={48}
					height={20}
					className="h-5 w-auto"
				/>
			</div>
			<p className="paragraph-large mb-6">{testimonial}</p>
			<div className="flex items-center gap-3 mt-auto">
				<div>
					<Image
						src={customerImage}
						alt={customerName}
						width={80}
						height={80}
						className="size-20 rounded-[.5rem] object-cover"
					/>
				</div>
				<div>
					<div className="font-semibold text-white leading-tight">
						{customerName}
					</div>
					<div className="text-neutral-400 text-sm">{customerTitle}</div>
				</div>
			</div>
		</div>
	);
}

