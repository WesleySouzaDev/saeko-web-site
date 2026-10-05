"use client";

import Link from "next/link";
import { useState } from "react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronRight } from "lucide-react";
import { usePathNameState } from "@/hooks/use-pathname";

type CollapsibleSidebarNavProps = {
	title: string;
	subtitle: string[];
	href: string[];
	icon: React.ReactNode[];
	open: boolean;
};

export function CollapsibleSidebarNav({
	title,
	subtitle,
	href,
	icon,
	open,
}: CollapsibleSidebarNavProps) {
	const [defaultOpen, setDefaultOpen] = useState(open);
	const pathname = usePathNameState();

	return (
		<Collapsible
			open={defaultOpen}
			onOpenChange={setDefaultOpen}
			data-state={defaultOpen ? "open" : "closed"}
			className="group"
		>
			<CollapsibleTrigger
				className="
      group
      flex w-full cursor-pointer items-center
      rounded-md px-2 py-2 text-start text-lg
      tracking-tighter text-foreground
      duration-100 hover:bg-foreground/10
    "
			>
				{title}

				<ChevronRight
					className="
        ml-auto
        transition-transform
        duration-200
        group-data-[state=open]:rotate-90
      "
				/>
			</CollapsibleTrigger>

			<CollapsibleContent className="mt-2 space-y-1">
				{href.map((item, index) => {
					const isSelected = pathname === item;

					return (
						<Link
							key={item + index}
							href={item}
							data-state={isSelected ? "select" : "unselect"}
							className="
            group ml-4 block rounded-none border-l-4 border-primary/80
            py-2 text-foreground duration-100
            hover:rounded-md hover:bg-primary hover:text-white
            data-[state=select]:rounded-md
            data-[state=select]:bg-primary
            data-[state=select]:text-white
          "
						>
							<span className="flex h-full items-center gap-2 pl-2 font-semibold">
								{icon[index]}
								{subtitle[index]}
							</span>
						</Link>
					);
				})}
			</CollapsibleContent>
		</Collapsible>
	);
}
