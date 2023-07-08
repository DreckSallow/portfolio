import { ProjectWithId } from "@/interfaces";

export const projectsData: ProjectWithId[] = [
  {
    id: 1,
    title: "Flix",
    overview:
      "🖥️ A powerful, versatile adn Open Source desktop aplication designed for use the anki decks and make notes",
    description: ` Flix is a desktop application for group learning information, like flashcards, similar to anki.
      Flix allows you to create and import decks; for now, Flix has partial support for anki files (*.apkg).
      Also, you can create notes (docs), using Markdown for the editing of those. This means that you can write plain text, too.
      The decks and notes can be grouped into "workspaces". You can have more than one "workspace". 
		`,
    tags: ["Vue", "Rust", "Tauri", "UnoCss", "Astro"],
    img: "https://flixdev.netlify.app/images/flix-markdown.png",
    repository: "https://github.com/DreckSallow/flix",
    demo: "https://flixdev.netlify.app/",
  },
  {
    id: 2,
    title: "Flow",
    overview:
      "🖥️ CLI task manager focused on better controlling your tasks and projects. Improving your workflow.",
    description: `Flow is command line, that help you to manage much better your projects and tasks. You can create a project and create tasks related to this project.
			By default Flow create a main project that is the folder where its the flow data.
			You can display tables of projects and tasks, with the corresponding information`,
    tags: ["Rust"],
    img: "/images/flow.gif",
    repository: "https://github.com/DreckSallow/flow",
  },
  {
    id: 3,
    title: "CountriesApp",
    overview:
      "🌍 Website to search, filter and sort countries, obtained from the backend using a GaphQl API.",
    description: `CountriesApp is a web application for viewing, filtering and sorting countries.
      It's an app to learn more about the power of svelte as a framework (or compiler).
      CountriesApp gets the countries and other information from the backend (integrated with graphql), using data from a database in postgresSql.
      ⚠️ The App demo is slow, wait a bit 🙇‍♂️`,
    tags: ["Svelte-Kit", "Typescript", "GraphQl", "Prisma", "NodeJs"],
    img: "https://drecksallow.github.io/DreckSallow/countries-app.png",
    repository: "https://github.com/DreckSallow/countries-app-svelte",
    demo: "https://countries-app-svelte-6x6p.vercel.app/",
  },
  {
    id: 4,
    title: "Marknote",
    overview: "📝 Marknote is a desktop app for markdown lovers!",
    description: `Marknote is a small markdown editor. Its focused to use in the desktop.
      Markdown allow edit markdown files (based in CommonMark) and see the text parsed. Have a file tree to manage the files and folders in the project
      This app was to learn about Rust and be able to create a project, so Marknote is small and may not work properly.`,
    tags: ["Svelte", "Tauri", "Typescript"],
    img: "https://github.com/DreckSallow/Marknote/raw/main/readme/marknote-img.PNG",
    repository: "https://github.com/DreckSallow/Marknote",
  },
  {
    id: 5,
    title: "Waxed",
    overview:
      "💼 Web App to improve your learning, where you can create workspaces.",
    description: `Is an application to have a better organization of information. With this app you can do:
      - Create learning spaces
      - Control Panel
      - Create and delete links and PDF files
      - Add a summary or a note`,
    tags: ["Typescript", "Prisma", "NodeJs"],
    img: "https://github.com/DreckSallow/Waxed/raw/main/Readme/workspace.PNG",
    repository: "https://github.com/DreckSallow/Waxed",
  },
];
