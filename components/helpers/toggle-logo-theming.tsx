"use client";

import { Fragment, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function ToggleLogoTheming() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (theme === "dark" || theme === "system" || !mounted) {
		return (
			<div>
				<Image
					src={"/logo.png"}
					alt="Logo"
					width={200}
					height={100}
					className="select-none "
				/>
			</div>
		);
	} else {
		return (
			<div>
				<Image
					src={"/logo-light.png"}
					alt="Logo"
					width={200}
					height={100}
					className="select-none "
				/>
			</div>
		);
	}
}
