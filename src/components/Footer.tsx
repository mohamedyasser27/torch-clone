import Image from "next/image";
import Link from "next/link";

import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const footerLinks = [
	{
		title: "Product",
		links: [
			{ name: "Home", href: "/" },
			{ name: "Features", href: "/features" },
			{ name: "Pricing", href: "/pricing" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About", href: "/about" },
			{ name: "Contact", href: "/contact" },
		],
	},
	{
		title: "Social",
		links: [
			{ name: "X (Twitter)", href: SOCIAL_LINKS.twitter },
			{ name: "Instagram", href: SOCIAL_LINKS.instagram },
			{ name: "LinkedIn", href: SOCIAL_LINKS.linkedin },
		],
	},
] as const;

export default function Footer() {
	return (
		<footer className="w-full mt-12 pb-24">
			<div className="container px-10 mx-auto flex flex-col gap-8">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 pb-20">
					{footerLinks.map((section) => (
						<div key={section.title}>
							<div className="mb-2 opacity-50">{section.title}</div>
							<ul className="flex flex-col gap-2">
								{section.links.map((link) => (
									<li key={link.name}>
										<Link href={link.href}>{link.name}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="border-t border-border pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
					<div className="relative w-[86px] h-[24px]">
						<Link href="/">
							<Image
								src="/logo.svg"
								alt={`${SITE_CONFIG.name} Logo`}
								fill
								className="object-contain"
							/>
						</Link>
					</div>
					<div className="text-sm text-muted-foreground">
						© {SITE_CONFIG.name} {new Date().getFullYear()}
					</div>
				</div>
			</div>
		</footer>
	);
}

