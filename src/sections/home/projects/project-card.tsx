import { Project } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
	project: Project;
};

const ProjectCard = ({ project }: Props) => {
	return (
		<div className="rounded-md bg-soft flex-column w-64 overflow-hidden p-3">
			<div className="min-w-0">
				{project.img ? (
					<Image
						src={project.img}
						alt={project.title}
						width={300}
						height={200}
						className="w-full"
					/>
				) : (
					project.video && <video src={project.video} className="w-full" />
				)}
			</div>
			<div className="flex-column gap-2 py-2 px-1">
				<Link
					href={`/projects/${project.title}`}
					className="text-accent tracking-wider font-medium text-lg"
				>
					{project.title}
				</Link>
				<p className="text-sm">{project.overview}</p>
				<div className="flex flex-row gap-4 pt-3">
					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noreferrer"
							className="bg-blue-400 text-white p-1 rounded-sm text-xs"
						>
							Demo
						</a>
					)}
					{project.repository && (
						<a
							href={project.repository}
							target="_blank"
							rel="noreferrer"
							className="bg-blue-400 text-white p-1 rounded-sm text-xs"
						>
							Repository
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
