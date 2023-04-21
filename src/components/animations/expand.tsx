import { motion } from "framer-motion";
import { expandProps } from "@/lib/animations";
import { MotionElement, Props } from "./type";

const Expand = ({ className, children, type }: Props) => {
	const Motion = motion[type ? (type as MotionElement) : "div"];
	return (
		<Motion {...expandProps} className={className}>
			{children}
		</Motion>
	);
};

export default Expand;
