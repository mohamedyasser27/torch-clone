import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"transition-colors placeholder:text-white hover:bg-[#2e3130] dark:hover:bg-[#2e3130] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid: dark:bg-input flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-4 py-5 text-base shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				className
			)}
			{...props}
		/>
	);
}

export { Textarea };

