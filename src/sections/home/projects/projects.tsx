import ProjectsContainer from "./projects-container";
import { projectsData } from "@/app/api/data";

export default function Projects() {
	return (
		<section className="flex-center section bg-base text-normal" id="projects">
			<div className="flex flex-col max-w-4xl items-center">
				<h3 className="text-2xl font-medium text-normal tracking-normal">
					Projects
				</h3>
				<p className="mt-4 text-center mb-10 max-h-44">
					Welcome to my projects section, where you can find some of my projects
					where I put all my dedication and performance.
				</p>
				<ProjectsContainer projects={projectsData} />
			</div>
		</section>
	);
}
