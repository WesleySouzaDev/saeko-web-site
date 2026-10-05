"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function usePathNameState() {
	const pathname = usePathname();
	const [pathnameState, setPathnameState] = useState(pathname);

	useEffect(() => {
		setPathnameState(pathname);
	}, [pathname]);

	return pathnameState;
}
