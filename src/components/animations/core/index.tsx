"use client";
import { Target, motion } from "framer-motion";
import { MotionElement, Props } from "../type";

interface InViewCoreProps extends Props {
	initial: Target;
	whileInView: Target;
	delay: number;
}

const InViewCore = ({
	className,
	children,
	type,
	initial,
	whileInView,
	delay,
}: InViewCoreProps) => {
	const Motion = motion[type ? (type as MotionElement) : "div"];
	return (
		<Motion
			className={className}
			initial={{
				opacity: 0,
				...initial,
			}}
			transition={{
				delay: delay,
				type: "tween",
			}}
			whileInView={{
				opacity: 1,
				...whileInView,
			}}
			viewport={{
				once: true,
			}}
		>
			{children}
		</Motion>
	);
};
export default InViewCore;
