import styled from "styled-components";
import { useState, useEffect, useMemo, MouseEvent } from "react";
import { CloseIcon, MenuIcon,MoonIcon,SunIcon} from "./icons";
import Link from "next/link";

interface Route {
	text: string;
	link: string;
}

interface Props {
	routes: Route[];
	withTheme?: boolean;
}

type Theme = "light" | "dark";

const NavBar = ({ routes, withTheme }: Props) => {
	const [displayMenu, setDisplayMenu] = useState(false);
	const [menuStyle, setMenuStyle] = useState(false);
	const [theme, setTheme] = useState<Theme>(() => {
		const theme = window.localStorage.getItem("theme");
		if (theme) {
			return theme as Theme;
		} else {
			return "light";
		}
	});

	useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset > 5) {
				setMenuStyle(true);
			} else {
				setMenuStyle(false);
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const routesHtml = useMemo(
		() =>
			routes.map(({ link, text }) => {
				return (
					<li className="" key={text}>
						<Link href={link}>{text}</Link>
					</li>
				);
			}),
		[routes.length],
	);

	const menuClickLink = (ev: MouseEvent) => {
		if ((ev.target as HTMLElement).tagName === "A") {
			setDisplayMenu(false);
		}
	};
	const toggleTheme = (thm: Theme) => {
		window.localStorage.setItem("theme", thm);
		setTheme(thm);
	};

	return (
		<nav
			className={` text-gray-700 dark:bg-slate-500 w-full sticky top-0 h-16 transition duration-150 px-4 ${
				menuStyle ? "bg-white border-b-1" : "bg-inherit"
			}`}
		>
			<ul className="fill gap-4 justify-evenly font-normal sm:flex-y-center hidden">
				{routesHtml}
				{withTheme && (
					<li
						className="fill-gray-700 cursor-pointer"
						onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
						onKeyDown={() => {}}
					>
						{theme === "light" ? (
							<SunIcon height={26} width={26} />
						) : (
							<MoonIcon height={26} width={26} />
						)}
					</li>
				)}
			</ul>

			<ul className="sm:hidden justify-end fill flex-y-center">
				<li
					onClick={() => setDisplayMenu((p) => !p)}
					onKeyDown={() => {}}
					className="stroke-gray-600 fill-gray-600"
				>
					{displayMenu ? (
						<CloseIcon height={26} width={26} />
					) : (
						<MenuIcon height={26} width={26} />
					)}
				</li>
			</ul>
			{displayMenu && (
				<div className="bg-white mt-16 fixed-fill sm:hidden px-6">
					<MenuLinks
						className="w-full flex-column gap-3 justify-center p-6"
						onClick={menuClickLink}
					>
						{routesHtml}
						{withTheme && (
							<li className="w-full bg-gray-100 flex-row !border-0 flex-y-center px-9 justify-between rounded-md">
								<span>Theme</span>
								<div
									className="stroke-gray-600 fill-gray-600"
									onClick={() =>
										toggleTheme(theme === "light" ? "dark" : "light")
									}
									onKeyDown={() => {}}
								>
									{theme === "light" ? (
										<SunIcon height={26} width={26} />
									) : (
										<MoonIcon height={26} width={26} />
									)}
								</div>
							</li>
						)}
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

export default NavBar;
