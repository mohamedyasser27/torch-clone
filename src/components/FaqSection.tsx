"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
	return (
		<section className="section container mx-auto flex flex-col gap-4 items-center">
			<h2 className="heading-large font-medium">
				<span className="text-gradient-overlay">FAQs</span>
			</h2>
			<p className="text-white opacity-70 paragraph-large">
				Answers to questions you might have about Torch.
			</p>
			<div className="max-w-3xl w-full">
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>What does Torch do?</AccordionTrigger>
						<AccordionContent>
							Torch is a data analytics platform that helps businesses track,
							visualise, and optimise their performance metrics in real-time. It
							enables teams to make data-driven decisions through customisable
							dashboards and powerful insights.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Who is Torch for?</AccordionTrigger>
						<AccordionContent>
							Torch is ideal for startups, tech companies, and growing
							businesses that want to harness the power of their data. It’s
							built for teams looking to improve their decision-making by
							tracking key performance indicators (KPIs) across all departments.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>How secure is my data on Torch?</AccordionTrigger>
						<AccordionContent>
							Security is our top priority. Torch uses end-to-end encryption,
							secure data centres, and regular security audits to ensure your
							data is protected at all times.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>
							Can Torch integrate with existing tools?
						</AccordionTrigger>
						<AccordionContent>
							Yes, Torch integrates with a wide range of tools, including CRM
							systems, marketing platforms, and cloud storage services. Our API
							allows for seamless integration, helping you connect Torch to the
							software you already use.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
}

