"use client";
import { MoonIcon, SunIcon } from "@/components/icons";
import { Nav, NavItem } from "@/components/nav/nav";
import { useTheme } from "@/context/theme/context";
import { MontserratFont } from "@/lib/fonts";
import { useSession } from "next-auth/react";
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
			logo={
				<Link
					href="/"
					className={`text-accent font-semibold text-sm tracking-wider ${MontserratFont.className}`}
				>
					Dreck
				</Link>
			}
		>
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

/**
 * 
 * {status === "authenticated" && (
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
 */
