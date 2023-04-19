export * from "./project";

export interface Children {
	children?: React.ReactNode;
}

export type Theme = "light" | "dark";

export interface ClassName {
	className?: string;
}

export interface Basic extends Children, ClassName {}
