"use client";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/animations";
import { Basic } from "@/interfaces";

interface ContactLinkProps extends Basic {
	href: string;
}

export const ContactLink = ({
	children,
	className,
	href,
}: ContactLinkProps) => {
	return (
		<ButtonLink
			href={href}
			className={className}
			whileHover={{ y: -3, scale: 1.03 }}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</ButtonLink>
	);
};

export const ProjectCardAnimated = ({ children, className }: Basic) => {
	return (
		<motion.div
			className={className}
			whileHover={{
				y: -8,
				transition: {
					delay: 0.2,
				},
			}}
			whileInView={{
				y: 0,
				transition: {
					delay: 0.1,
				},
			}}
			initial={{ y: "1em" }}
			transition={{ type: "tween" }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};
