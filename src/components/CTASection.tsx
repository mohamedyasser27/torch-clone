import { Button } from "@/components/ui/button";

export default function CTASection() {
	return (
		<section className="bg-[#101211] p-10 md:p-20 md:px-32 relative overflow-hidden">
			<div className="gradient-img" />
			<div className="flex flex-col gap-8 items-center z-10 relative text-center">
				<h2>Ready to get started?</h2>
				<p className="paragraph-extra-large">
					Take the first step to growing your business
				</p>
				<Button className="mt-8" size="lg">
					Get Started
				</Button>
			</div>
		</section>
	);
}

