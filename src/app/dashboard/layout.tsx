import Tab from "@/components/tab";
import { Children } from "@/interfaces";

export default function Layout({ children }: Children) {
	return (
		<section className="w-full min-h-screen pt-16 bg-base">
			<div className="fill px-4 flex flex-col pt-6">
				<header className="w-full flex flex-row text-white gap-2 h-auto">
					<Tab
						link="/dashboard/projects/"
						match="projects"
						text="Project"
						styles="px-2 py-1 rounded-t-md"
						selected="bg-blue-400"
						noSelected="bg-soft"
					/>
					<Tab
						link="/dashboard/blog/"
						match="blog"
						text="Post"
						styles="px-2 py-1  rounded-t-md"
						selected="bg-blue-400"
						noSelected="bg-soft"
					/>
				</header>
				<main className="border-2 border-blue-300 p-2">{children}</main>
			</div>
		</section>
	);
}
