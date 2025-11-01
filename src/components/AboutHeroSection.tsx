export default function HeroSection() {
	return (
		<section className="section">
			<div className="container mx-auto items-center flex md:text-start flex-col md:flex-row gap-8 justify-between">
				<div className="w-full md:w-1/2">
					<h1>
						<span className="text-gradient-overlay">
							We do things a bit differently here…
						</span>
					</h1>
					<p className="paragraph-large mt-8 mb-16 opacity-70 text-balance">
						We believe innovation happens when you break away from the usual. We
						focus on creating smart, secure, and intuitive solutions that put
						our customers first. Real progress starts with thinking differently.
					</p>
				</div>
			</div>
		</section>
	);
}

