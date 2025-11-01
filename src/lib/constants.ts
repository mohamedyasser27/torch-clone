import type { Metadata } from "next";

/**
 * Application constants and configuration
 */

export const SITE_CONFIG = {
	name: "Torch",
	description: "Real-time Data Analytics Platform",
	tagline: "Empower businesses with real-time data analytics",
	url: "https://torch-analytics.com", // Update with your actual domain
} as const;

export const SOCIAL_LINKS = {
	twitter: "#", // Update with your actual social links
	instagram: "#",
	linkedin: "#",
} as const;

export const IMAGE_ASSETS = {
	opengraph:
		"https://cdn.prod.website-files.com/66fad496e2674af9c6f8f4ef/6703e5e87c9ca1599100560c_torch-opengraph-image.png",
	favicon:
		"https://cdn.prod.website-files.com/66fad496e2674af9c6f8f4ef/6703811303c6b24bdb4b2877_torch-favicon.png",
	appleIcon:
		"https://cdn.prod.website-files.com/66fad496e2674af9c6f8f4ef/670381189c7785a099cafc51_torch-webclip.png",
} as const;

/**
 * Creates common metadata structure for pages
 */
export function createMetadata({
	title,
	description,
	path = "",
	imageAlt,
}: {
	title: string;
	description: string;
	path?: string;
	imageAlt?: string;
}): Metadata {
	const fullTitle = title.includes(SITE_CONFIG.name)
		? title
		: `${title} - ${SITE_CONFIG.name}`;

	return {
		title: fullTitle,
		description,
		openGraph: {
			title: fullTitle,
			description,
			url: `${SITE_CONFIG.url}${path}`,
			siteName: SITE_CONFIG.name,
			images: [
				{
					url: IMAGE_ASSETS.opengraph,
					width: 1200,
					height: 630,
					alt: imageAlt || `${SITE_CONFIG.name} - ${title}`,
				},
			],
			type: "website",
			locale: "en_US",
		},
		twitter: {
			card: "summary_large_image",
			title: fullTitle,
			description,
			images: [IMAGE_ASSETS.opengraph],
		},
		icons: {
			icon: IMAGE_ASSETS.favicon,
			apple: IMAGE_ASSETS.appleIcon,
		},
	};
}

