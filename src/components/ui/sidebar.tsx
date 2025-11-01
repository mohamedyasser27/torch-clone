"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

const SidebarContext = React.createContext<{
	open: boolean;
	setOpen: (open: boolean) => void;
}>({
	open: false,
	setOpen: () => {},
});

export function SidebarProvider({
	children,
	open: openProp,
	onOpenChange,
	...props
}: SidebarProps) {
	const [open, setOpen] = React.useState(openProp ?? false);

	React.useEffect(() => {
		if (openProp !== undefined) {
			setOpen(openProp);
		}
	}, [openProp]);

	const handleOpenChange = React.useCallback(
		(value: boolean) => {
			setOpen(value);
			onOpenChange?.(value);
		},
		[onOpenChange]
	);

	return (
		<SidebarContext.Provider value={{ open, setOpen: handleOpenChange }}>
			<div {...props}>{children}</div>
		</SidebarContext.Provider>
	);
}

export function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
}

export function Sidebar({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const { open } = useSidebar();

	return (
		<div
			className={cn(
				"fixed inset-y-0 right-0 z-50 w-full bg-background border-border transition-transform duration-300 ease-in-out",
				open ? "translate-x-0" : "translate-x-full",
				className
			)}
			{...props}
		/>
	);
}

export function SidebarTrigger({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const { open, setOpen } = useSidebar();

	return (
		<button
			type="button"
			className={cn(
				"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
				className
			)}
			onClick={() => setOpen(!open)}
			{...props}
		/>
	);
}

export function SidebarContent({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("flex h-full flex-col gap-4 p-4", className)}
			{...props}
		/>
	);
}

export function SidebarHeader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("flex h-14 items-center px-4", className)} {...props} />
	);
}

export function SidebarFooter({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("mt-auto flex items-center border-t px-4", className)}
			{...props}
		/>
	);
}

