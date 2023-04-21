"use client";
import { motion } from "framer-motion";
import { ReactHTML } from "react";
import { MotionElement } from "./type";

export const getButton = (type: "a" | "button") => motion[type];

export const ButtonLink = getButton("a");
export const Button = getButton("button");

export const getMotion = (type: keyof ReactHTML) =>
	motion[type as MotionElement];
