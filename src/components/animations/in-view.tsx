"use client";
import { Props } from "./type";
import InViewCore from "./core";

interface InViewProps extends Props {
	initY?: string | number;
	delay?: number;
}

const InView = ({ className, children, type, initY, delay }: InViewProps) => {
	return (
		<InViewCore
			delay={delay ?? 0.3}
			type={type}
			className={className}
			initial={{
				y: initY ?? "1em",
			}}
			whileInView={{
				y: "0em",
			}}
		>
			{children}
		</InViewCore>
	);
};

export default InView;
