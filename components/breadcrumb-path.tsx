"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BreadcrumbPath() {
	const pathname = usePathname();
	const [paths, setPaths] = useState<string[]>([]);
	const ismobile = useIsMobile();

	useEffect(() => {
		const pathArray = pathname.split("/").filter((p) => p);
		setPaths(pathArray);
	}, [pathname]);

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink render={<a href="/">Home</a>} />
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				{paths.map((path, index) => {
					if (ismobile) {
					}
					return (
						<Fragment key={index}>
							<BreadcrumbItem key={index}>
								<BreadcrumbLink
									className="capitalize"
									render={<Link href={`/${path}`}>{path}</Link>}
								/>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
