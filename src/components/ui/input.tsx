import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"min-h-14 transition-colors file:text-foreground placeholder:text-white hover:bg-[#2e3130] dark:hover:bg-[#2e3130] selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9 w-full min-w-0 rounded-md  bg-transparent px-4 py-5 text-base shadow-xs outline-none file:inline-flex file:h-7  file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				" focus-visible:ring-ring/50 focus-visible:ring-[3px] focus:bg-[#2e3130] dark:focus:bg-[#2e3130]",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 ",
				className
			)}
			{...props}
		/>
	);
}

export { Input };

