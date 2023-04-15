"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

type TabProps = {
	link: string;
	text?: string;
	styles?: string;
	selected?: string;
	noSelected?: string;
	match: string;
};

const Tab = ({ styles, link, text, selected, match, noSelected }: TabProps) => {
	const segment = useSelectedLayoutSegment();
	// console.log({
	// 	segment,
	// 	match,
	// 	className: `${styles} ${segment === match && selected}`,
	// });

	return (
		<Link
			href={link}
			className={`${styles} ${segment === match ? selected : noSelected}`}
		>
			{text}
		</Link>
	);
};

export default Tab;
