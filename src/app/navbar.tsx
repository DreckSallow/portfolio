"use client";
import { MoonIcon, SunIcon } from "@/components/icons";
import { Nav, NavItem, NavLink } from "@/components/nav/nav";
import { useLocalTheme } from "@/hooks/useLocalTheme";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
	const [openMenu, setOpenMenu] = useState<undefined | boolean>(false);
	const [theme, setTheme] = useLocalTheme();

	const ThemeIcon = () => {
		return theme === "light" ? (
			<SunIcon height={24} width={24} />
		) : (
			<MoonIcon height={24} width={24} />
		);
	};

	return (
		<Nav
			openMenu={openMenu}
			setOpenMenu={(s) => {
				setOpenMenu(s);
			}}
			logo={<span className="text-accent">Dreck</span>}
		>
			<NavLink link="/" text="Home" />
			<NavLink link="/blog" text="Blog" />
			<NavItem
				onClick={() => {
					setOpenMenu((p) => !p);
				}}
			>
				<Link href="/auth" className="icon-normal">
					<span className="">Acces</span>
				</Link>
			</NavItem>
			<NavItem
				onClick={() => {
					setTheme(theme === "light" ? "dark" : "light");
					setOpenMenu(false);
				}}
				className="icon-normal cursor-pointer !border-0 flex flex-row justify-between"
			>
				<span className="sm:hidden">Theme:</span>
				<ThemeIcon />
			</NavItem>
		</Nav>
	);
};

export default NavBar;
