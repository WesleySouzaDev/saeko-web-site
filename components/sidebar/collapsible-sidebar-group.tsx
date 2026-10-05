import { CollapsibleSidebarNav } from "./collapsible-sidebar-nav";
import { FaTshirt } from "react-icons/fa";
import { GiUnderwearShorts } from "react-icons/gi";

export default function CollapsibleSidebarGroup() {
	const data = [
		{
			title: "Masculinas",
			subtitle: ["Camisetas", "Shorts"],
			href: ["/camisetas", "/shorts"],
			icon: [
				<FaTshirt className="text-xl" key={1} />,
				<GiUnderwearShorts className="text-xl" key={2} />,
			],
			open: true,
		},
	];

	return (
		<>
			{data.map((item, index) => {
				return (
					<CollapsibleSidebarNav
						key={item.title + index}
						title={item.title}
						subtitle={item.subtitle}
						href={item.href}
						icon={item.icon}
						open={item.open}
					/>
				);
			})}
		</>
	);
}
