import Navigation from "@/components/navigation";

export default function Header() {
	return (
		<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 w-full">
			<Navigation />
		</header>
	);
}
