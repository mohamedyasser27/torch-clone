"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarProvider,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
	{ href: "/features", label: "Features" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
	const pathname = usePathname();

	const NavItems = () => {
		const { setOpen } = useSidebar();

		const handleClick = () => {
			setOpen(false);
		};

		return (
			<>
				{NAV_ITEMS.map((item) => {
					const isActive = pathname === item.href;
					return (
						<li key={item.href}>
							<Link
								href={item.href}
								onClick={handleClick}
								className={cn(
									"block min-h-10 leading-10 px-3.5 rounded-md transition-colors",
									"hover:bg-secondary",
									"text-muted-foreground hover:text-foreground",
									isActive && "bg-secondary text-foreground"
								)}
							>
								{item.label}
							</Link>
						</li>
					);
				})}
			</>
		);
	};

	return (
		<SidebarProvider>
			<nav className="sticky top-0 z-50 bg-background">
				<div className="container mx-auto">
					<div className="px-4 md:px-0 py-4 flex items-center gap-12">
						<Link href="/" className="w-20">
							<Image
								src="/logo.svg"
								alt="Torch Logo"
								width={100}
								height={100}
							/>
						</Link>
						<ul className="hidden md:flex gap-4 self-stretch items-center">
							<NavItems />
						</ul>
						<ul className="hidden md:flex ms-auto gap-4">
							<li>
								<Button>Login</Button>
							</li>
							<li>
								<Button variant="secondary">Sign up</Button>
							</li>
						</ul>
						<div className="md:hidden ms-auto">
							<SidebarTrigger className="p-2">
								<Menu className="h-6 w-6" />
							</SidebarTrigger>
						</div>
					</div>
				</div>
			</nav>

			<Sidebar>
				<SidebarHeader className="flex items-center justify-between">
					<Link href="/" className="w-20">
						<Image src="/logo.svg" alt="Torch Logo" width={100} height={100} />
					</Link>
					<SidebarTrigger className="p-2">
						<X className="h-6 w-6" />
					</SidebarTrigger>
				</SidebarHeader>
				<SidebarContent>
					<ul className="flex flex-col gap-4">
						<NavItems />
						<li className="mt-4">
							<Button className="w-full">Login</Button>
						</li>
						<li>
							<Button variant="secondary" className="w-full">
								Sign up
							</Button>
						</li>
					</ul>
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	);
}

