import { MotionProps } from "framer-motion";

export const inViewProps: MotionProps = {
	initial: {
		opacity: 0,
		y: "1em",
	},
	transition: {
		type: "tween",
		delay: 0.3,
	},
	viewport: {
		once: true,
	},
	whileInView: {
		opacity: 1,
		y: "0em",
	},
};

export const expandProps: MotionProps = {
	initial: {
		opacity: 0,
		scale: 0.5,
	},
	animate: {
		opacity: 1,
		scale: 1,
	},
	transition: {
		// duration: 0.,
		// ease: [0, 0.71, 0.2, 0.8],
		scale: {
			duration: 0.4,
			type: "tween",
			stiffness: 100,
			restDelta: 0.001,
		},
	},
};
