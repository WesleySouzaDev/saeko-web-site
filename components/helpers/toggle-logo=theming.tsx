"use client";

import { useEffect, useState } from "react";
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
			<Image
				src={"/logo.png"}
				alt="Logo"
				width={200}
				height={100}
				className="select-none "
			/>
		);
	} else {
		return (
			<Image
				src={"/logo-light.png"}
				alt="Logo"
				width={200}
				height={100}
				className="select-none "
			/>
		);
	}
}
