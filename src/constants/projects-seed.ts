import { Project } from "@/interfaces";

const tags = ["Svelte", "Tauri", "React", "Next"];

export const projects: Array<Project> = [
	{
		title: "CountriesApp",
		overview:
			"CountriesApp is a web application for viewing, filtering and sorting countries.",
		description: `CountriesApp is a web application for viewing, filtering and sorting countries.\nIt's an app to learn more about the power of svelte as a framework (or compiler).\nCountriesApp gets the countries and other information from the backend (integrated with graphql), using data from a database in postgresSql.\nCountriesApp is a web application for viewing, filtering and sorting countries.\nIt's an app to learn more about the power of svelte as a framework (or compiler).\nCountriesApp gets the countries and other information from the backend (integrated with graphql), using data from a database in postgresSql.`,
		img: "https://drecksallow.github.io/DreckSallow/countries-app.png",
		video: "",
		repository: "https://github.com/DreckSallow/countries-app-svelte",
		demo: "https://countries-app-svelte-6x6p.vercel.app/",
		tags,
	},
	{
		title: "Marknote",
		overview:
			"Marknote is a small markdown editor. Its focused to use in the desktop.",
		description:
			"Marknote is a small markdown editor. Its focused to use in the desktop.\nMarkdown allow edit markdown files (based in CommonMark) and see the text parsed. Have a file tree to manage the files and folders in the project\nCountriesApp is a web application for viewing, filtering and sorting countries.\nIt's an app to learn more about the power of svelte as a framework (or compiler).\nCountriesApp gets the countries and other information from the backend (integrated with graphql), using data from a database in postgresSql.",
		img: "https://github.com/DreckSallow/Marknote/raw/main/readme/marknote-img.PNG",
		repository: "https://github.com/DreckSallow/countries-app-svelte",
		demo: "https://countries-app-svelte-6x6p.vercel.app/",
		tags,
	},
	{
		title: "Waxed",
		description: `Is an application to have a better organization of information. With this app you can do:
      - Create learning spaces:
      - Control Panel:
      - Create and delete links and PDF files:
      - Add a summary or a note:\n CountriesApp is a web application for viewing, filtering and sorting countries.\nIt's an app to learn more about the power of svelte as a framework (or compiler).\nCountriesApp gets the countries and other information from the backend (integrated with graphql), using data from a database in postgresSql`,
		overview:
			"Is an application to have a better organization of information. With this app you can do:\n- Create learning spaces:",
		// img: "https://github.com/DreckSallow/Waxed/raw/main/Readme/workspace.PNG",
		img: "https://taskwarrior.org/images/fish.gif",
		repository: "https://github.com/DreckSallow/countries-app-svelte",
		demo: "https://countries-app-svelte-6x6p.vercel.app/",
		tags,
	},
];
