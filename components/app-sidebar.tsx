import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";
import { Button } from "./ui/button";
import { ToggleLogoTheming } from "./helpers/toggle-logo=theming";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader className="border-b border-foreground/10">
				<div className="h-16 overflow-hidden flex items-center justify-center pb-2">
					<ToggleLogoTheming />
				</div>
			</SidebarHeader>
			<SidebarMenu>
				<SidebarContent>
					<SidebarGroup>
						<SidebarMenuButton>Clique auqi</SidebarMenuButton>
					</SidebarGroup>
					<SidebarGroup></SidebarGroup>
				</SidebarContent>
			</SidebarMenu>
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	);
}
