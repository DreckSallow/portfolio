import { Montserrat, Poppins, Ubuntu } from "next/font/google";

export const MontserratFont = Montserrat({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "500", "600", "800"],
});

export const UbuntuFont = Ubuntu({
	subsets: ["latin"],
	display: "block",
	weight: ["300", "400", "500"],
});

export const PoppinsFont = Poppins({
	subsets: ["latin"],
	display: "block",
	weight: ["400"],
});
