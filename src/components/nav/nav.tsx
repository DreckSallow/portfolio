"use client";
import { CloseIcon, MenuIcon } from "../icons";
import styled from "styled-components";
import { Children } from "@/interfaces";
import Link from "next/link";

interface Nav extends Children {
	openMenu?: boolean;
	setOpenMenu?: (s: boolean) => void;
	logo?: React.ReactNode;
}

export const Nav = ({ openMenu, children, logo, setOpenMenu }: Nav) => {
	const menuClickLink = (ev: MouseEvent) => {
		if ((ev.target as HTMLElement).tagName === "A") {
			setOpenMenu?.(false);
		}
	};

	return (
		<nav className="bg-base text-normal w-full fixed top-0 h-16 px-6 z-20">
			<div className="fill hidden sm:flex-y-center justify-between">
				{logo && <div className="Logo md:ml-6">{logo}</div>}
				<ul className="flex-row gap-12 justify-evenly font-normal h-full flex-y-center">
					{children}
				</ul>
			</div>

			<div className="sm:hidden fill flex-y-center flex-row justify-between">
				{logo && <div className="Logo">{logo}</div>}
				<ul className="justify-end fill flex-y-center">
					<li
						onClick={() => setOpenMenu?.(!openMenu)}
						onKeyDown={() => {}}
						className="icon-normal cursor-pointer"
					>
						{openMenu ? (
							<CloseIcon height={26} width={26} />
						) : (
							<MenuIcon height={26} width={26} />
						)}
					</li>
				</ul>
			</div>

			{openMenu && (
				<div className="bg-base text-normal mt-16 fixed-fill sm:hidden px-6">
					<MenuLinks
						className="w-full flex-column gap-3 justify-center p-6"
						onClick={(e) => menuClickLink(e as unknown as MouseEvent)}
					>
						{children}
					</MenuLinks>
				</div>
			)}
		</nav>
	);
};

const MenuLinks = styled.ul`
	> li
	{
		min-height: 2.5em;
		border-bottom: 1px solid #636b7668;
	}
`;
interface Route {
	link: string;
	text: string;
}

const NavInternalLink = ({ link, text }: Route) => {
	return (
		<li>
			<Link href={link}>{text}</Link>
		</li>
	);
};

export const NavLink = styled(NavInternalLink)``;

export const NavItem = styled.li``;
