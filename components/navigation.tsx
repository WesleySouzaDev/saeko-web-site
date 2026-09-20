import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

import BreadcrumbPath from "@/components/breadcrumb-path";

export default async function Navigation() {
	return (
		<nav className="w-full py-2 border-b ">
			<div className="flex items-center gap-2 px-4">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mr-2 data-[orientation=vertical]:h-4"
				/>

				<div className="w-full h-full flex justify-between items-center">
					<BreadcrumbPath />
					<ModeToggle />
				</div>
			</div>
		</nav>
	);
}
