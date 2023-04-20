import { Basic } from "@/interfaces";
import { motion } from "framer-motion";
import { ReactHTML } from "react";

export interface TypeMotion {
	type?: keyof ReactHTML;
}

export type MotionElement = keyof typeof motion;

export interface Props extends Basic, TypeMotion {}
