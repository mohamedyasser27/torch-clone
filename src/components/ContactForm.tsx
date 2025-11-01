import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
	return (
		<section className="section">
			<div className="container mx-auto items-start flex md:text-start flex-col md:flex-row gap-8 justify-between">
				<div className="flex-1">
					<h1>
						<span className="text-gradient-overlay">
							Get in touch with the Torch team
						</span>
					</h1>
					<p className="paragraph-large mt-8 mb-16 opacity-70 text-balance">
						Have questions or just want to say hi? Send us a message here or you
						can email us on <strong>hi@torch.com</strong>.
					</p>
				</div>
				<form action="" className="flex flex-col gap-4 w-full flex-1">
					<Input type="text" placeholder="Name" className="flex-1 max-h-14" />
					<Input type="email" placeholder="Email" className="flex-1 max-h-14" />
					<Textarea
						placeholder="Message"
						rows={12}
						className="flex-1 min-h-[200px]"
					/>
					<Button type="submit" className="flex-1 max-h-14">
						Send Message
					</Button>
				</form>
			</div>
		</section>
	);
}

