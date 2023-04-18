import ProjectsContainer from "./projects-container";
import { projectsData } from "@/app/api/data";

export default async function Projects() {
	return (
		<section className="flex-center section bg-base text-normal" id="projects">
			<div className="flex flex-col max-w-4xl items-center">
				<h3 className="text-2xl font-medium text-normal tracking-normal">
					Projects
				</h3>
				<p className="mb-5">You can see my latest projects</p>
				<ProjectsContainer projects={projectsData} />
			</div>
		</section>
	);
}
