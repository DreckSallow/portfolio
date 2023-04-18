"use client";
import { MoonIcon, SunIcon } from "@/components/icons";
import { Nav, NavItem, NavLink } from "@/components/nav/nav";
import { useTheme } from "@/context/theme/context";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
	const [openMenu, setOpenMenu] = useState<undefined | boolean>(false);
	const { theme, setTheme } = useTheme();
	const { status } = useSession();

	const ThemeIcon = () => {
		return theme === "dark" ? (
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
			{status === "authenticated" && (
				<NavLink link="/dashboard" text="Dashboard" />
			)}
			<NavLink link="/" text="Home" />
			<NavLink link="/blog" text="Blog" />
			<NavItem
				className="cursor-pointer"
				onClick={() => {
					setOpenMenu((p) => !p);
				}}
			>
				{status === "unauthenticated" ? (
					<Link href="/login" className="icon-normal">
						<span className="">Acces</span>
					</Link>
				) : (
					<span
						onClick={() => {
							signOut({
								redirect: true,
								callbackUrl: "/",
							});
						}}
						onKeyDown={() => {}}
					>
						Logout
					</span>
				)}
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
