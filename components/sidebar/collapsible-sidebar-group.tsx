import { CollapsibleSidebarNav } from "./collapsible-sidebar-nav";

import { FaTshirt } from "react-icons/fa";
import { GiUnderwearShorts } from "react-icons/gi";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { FaTree } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa6";
import { LuJapaneseYen } from "react-icons/lu";

export default async function CollapsibleSidebarGroup() {
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
		{
			title: "Promoções",
			subtitle: ["Outlet"],
			href: ["/outlet"],
			icon: [<MdOutlineMoneyOffCsred className="text-xl" key={1} />],
			open: false,
		},
		{
			title: "Edição Limitada",
			subtitle: ["Xaolin", "Money Tree", "StrangerComp"],
			href: [
				"/edicao-especial/xaolin",
				"/edicao-especial/money-tree",
				"/edicao-especial/stranger-comp",
			],
			icon: [
				<LuJapaneseYen className="text-xl" key={1} />,
				<FaTree className="text-xl" key={2} />,
				<FaCamera className="text-xl" key={3} />,
			],
			open: false,
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
