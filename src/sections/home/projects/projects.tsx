import InView from "@/components/animations/in-view";
import ProjectsContainer from "./projects-container";
import { projectsData } from "@/app/api/data";
import { MontserratFont, PoppinsFont } from "@/lib/fonts";

export default function Projects() {
	return (
		<section className="flex-center section bg-base text-normal" id="projects">
			<div className="flex flex-col max-w-4xl items-center">
				<InView
					type="h3"
					delay={0.2}
					className={`text-3xl font-semibold tracking-wide text-accent ${MontserratFont.className}`}
				>
					Projects
				</InView>
				<InView
					type="p"
					className={`mt-4 text-center mb-10 max-h-44 text-lg ${PoppinsFont.className}`}
					delay={0.3}
				>
					Welcome to my projects section, where you can find some of my projects
					where I put all my dedication and performance.
				</InView>
				<ProjectsContainer projects={projectsData} />
			</div>
		</section>
	);
}
