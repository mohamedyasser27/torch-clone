import { Check } from "lucide-react";

const plans = [
	{
		name: "Starter",
		price: "$12",
		period: "/mo",
		features: [
			"Real-time data dashboards",
			"Customisable reports",
			"Email support",
			"Single-user access",
		],
		button: "Choose Starter",
		highlight: false,
		hasBackground: false,
	},
	{
		name: "Advanced",
		price: "$59",
		period: "/mo",
		features: [
			"All Basic plan features plus:",
			"Advanced analytics tools",
			"Multi-user access",
			"Automated reporting",
			"Integrations with popular tools",
			"Priority email support",
		],
		button: "Choose Advanced",
		highlight: true,
		hasBackground: true,
	},
	{
		name: "Enterprise",
		price: "Contact",
		period: "",
		features: [
			"All Advanced plan features plus:",
			"Unlimited user accounts",
			"Dedicated account manager",
			"Custom data solutions",
			"Advanced security features",
			"API access",
		],
		button: "Contact sales team",
		highlight: false,
		hasBackground: false,
	},
];

export default function PricingCards() {
	return (
		<section className="section flex flex-col gap-8 container mx-auto">
			<h2 className="heading-large">
				<span className="text-gradient-overlay">
					Simple and flexible pricing
				</span>
			</h2>
			<div className="flex flex-col xl:flex-row gap-8 justify-center md:items-stretch items-center">
				{plans.map((plan) => (
					<PricingCard key={plan.name} plan={plan} />
				))}
			</div>
		</section>
	);
}

function PricingCard({ plan }: { plan: (typeof plans)[0] }) {
	return (
		<div
			className={`relative overflow-hidden basis-full  w-full p-8 rounded-2xl bg-[#171918]`}
		>
			{plan.hasBackground && <div className="gradient-img" />}
			<div className="relative z-10 flex flex-col h-full">
				<h5 className="mb-4 text-white heading-small">{plan.name}</h5>
				<div className=" text-white mb-5 mt-7.5">
					<span className=" heading-large">{plan.price}</span>
					{plan.period && (
						<span className="ml-2 text-gray-400">{plan.period}</span>
					)}
				</div>
				<ul className="space-y-4 mb-8 grow">
					{plan.features.map((feature, i) => (
						<li key={i} className="flex items-center">
							<Check size={20} color="#ffc44d" className="shrink-0" />
							<span className="ml-3 text-base font-normal text-gray-200">
								{feature}
							</span>
						</li>
					))}
				</ul>
				<button
					type="button"
					className={`w-full py-3 rounded-lg font-medium text-base transition ${
						plan.highlight
							? "bg-[#ffc44d] text-black hover:bg-[#e6b53f]"
							: "bg-[#232524] text-white hover:bg-[#232524]/80"
					}`}
				>
					{plan.button}
				</button>
			</div>
		</div>
	);
}

