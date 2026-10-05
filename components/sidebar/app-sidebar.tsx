import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarGroupLabel,
} from "@/components/ui/sidebar";

import { ToggleLogoTheming } from "../helpers/toggle-logo=theming";
import CollapsibleSidebarGroup from "./collapsible-sidebar-group";

export default async function AppSidebar() {
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
						<SidebarGroupLabel className="font-bold text-primary uppercase tracking-tight">
							Roupas
						</SidebarGroupLabel>
						<CollapsibleSidebarGroup />
					</SidebarGroup>
				</SidebarContent>
			</SidebarMenu>
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	);
}
