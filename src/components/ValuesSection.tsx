import { Lightbulb, Shield, LineChart, Cog, Heart } from "lucide-react";

const values = [
	{
		icon: <Lightbulb color="#ffc44d" size={28} />,
		title: "Innovation first",
		description:
			"We constantly push the boundaries of what's possible. At Torch, we embrace new ideas and cutting-edge technologies to deliver powerful, forward-thinking solutions.",
	},
	{
		icon: <Shield color="#ffc44d" size={28} />,
		title: "Security by design",
		description:
			"Data protection is at the heart of everything we do. Our platform is built with top-tier security measures to ensure your information is always safe and secure.",
	},
	{
		icon: <LineChart color="#ffc44d" size={28} />,
		title: "Data-driven decisions",
		description:
			"We believe in the power of data to guide smart business choices. Torch empowers teams to make informed decisions with real-time insights and comprehensive analytics.",
	},
	{
		icon: <LineChart color="#ffc44d" size={28} />,
		title: "Continuous growth",
		description:
			"At Torch, we foster a culture of learning and growth. Whether it's improving our product or developing our team, we're always striving to be better.",
	},
	{
		icon: <Cog color="#ffc44d" size={28} />,
		title: "Seamless integration",
		description:
			"We're committed to making your workflow smooth and efficient. Torch integrates effortlessly with your existing tools, so you can focus on what matters most.",
	},
	{
		icon: <Heart color="#ffc44d" size={28} />,
		title: "Customer-centric focus",
		description:
			"Your success is our priority. We work hand-in-hand with our customers to ensure Torch meets their needs and helps their business thrive.",
	},
];

export default function ValuesSection() {
	return (
		<section className="section">
			<div className="container flex flex-col gap-20 mx-auto">
				<h2 className="heading-large">
					<span className="text-gradient-overlay">Led by strong values</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-12 gap-y-16 w-full values-section">
					{values.map((value, idx) => (
						<div key={idx} className="value-item flex flex-col items-start">
							<div className="mb-4">{value.icon}</div>
							<h4 className="text-lg font-semibold mb-2">{value.title}</h4>
							<p className="text-base text-foreground/80 font-light leading-relaxed">
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

