import ProjectCard from "./project-card";
import { ProjectService } from "@/services/Project";

export default async function Projects() {
	const { data, error } = await ProjectService.getAll();

	return (
		<section className="flex-center section bg-base text-normal" id="projects">
			<div className="flex flex-col max-w-4xl">
				<h3 className="text-2xl font-medium text-accent">Projects</h3>
				{!!error && <div className="text-accent">{error}</div>}
				{data && (
					<div>
						{data?.map((p) => {
							return <ProjectCard project={p} />;
						})}
					</div>
				)}
			</div>
		</section>
	);
}
