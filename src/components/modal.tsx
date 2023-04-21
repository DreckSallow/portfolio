"use client";
import { Children } from "@/interfaces";
import { useEffect, useMemo, useRef } from "react";
import { CloseIcon } from "./icons";
import styled from "styled-components";

interface Props extends Children {
	onClose(): void;
	className?: string;
	contentCss?: string;
	contentPosition?: "center" | "none";
}

export const Modal = ({
	children,
	onClose,
	className,
	contentCss,
	contentPosition,
}: Props) => {
	const modalContent = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const listenClickOutside = (ev: MouseEvent) => {
			if (!modalContent.current) {
				throw new Error("Modal Wrapper not found!");
			}

			if (
				ev.target !== modalContent.current &&
				!modalContent.current.contains(ev.target as Node)
			) {
				onClose();
			}
		};

		document.addEventListener("click", listenClickOutside);

		return () => {
			document.removeEventListener("click", listenClickOutside);
		};
	}, []);

	const positionStyles = useMemo(() => {
		if (contentPosition === "center") {
			return "flex-center flex-col";
		}
		return "";
	}, [contentPosition]);

	return (
		<ModalStyled
			className={`fixed top-0 left-0 bottom-0 right-0 z-10 ${
				className ?? ""
			} ${positionStyles}`}
		>
			<div className={`relative ${contentCss}`} ref={modalContent}>
				<button onClick={onClose} className="absolute top-1 right-1">
					<CloseIcon height={24} width={24} className="base icon-normal" />
				</button>
				{children}
			</div>
		</ModalStyled>
	);
};

const ModalStyled = styled.div`
  --alpha: 0.94;
`;
