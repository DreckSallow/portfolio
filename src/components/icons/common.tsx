import { IconProps } from "./icons";

export const PadLock = (props: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
			<path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z" />
		</svg>
	);
};

export const NoImageIcon = (props: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24">
			<circle cx="7.499" cy="9.5" r="1.5" />
			<path d="m10.499 14-1.5-2-3 4h12l-4.5-6z" />
			<path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z" />
		</svg>
	);
};
