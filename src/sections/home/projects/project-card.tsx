import { NoImageIcon } from "@/components/icons/common";
import { Project } from "@/interfaces";
import Image from "next/image";

type Props = {
	project: Project;
	large?: boolean;
	onDetail(id: string | number): void;
};

const ProjectCard = ({ project, onDetail }: Props) => {
	return (
		<div className="bg-soft flex-column min-w-0 w-3/4 sm:w-64 p-3 h-80">
			<div className="min-w-0 h-36 relative">
				{project.img ? (
					<Image
						src={project.img}
						alt={project.title}
						fill
						sizes="300px,200px"
					/>
				) : (
					project.video &&
					project.video && <video src={project.video} className="w-full" />
				)}
				{!project.img && !project.video && (
					<div className="fill flex-center flex-col text-xs opacity-30 border-1">
						<NoImageIcon height="60%" width="60%" className="icon-normal" />
						No Image
					</div>
				)}
			</div>
			<div className="flex-column gap-2 py-2 px-1">
				<h4
					onClick={() => onDetail(project.title)}
					onKeyDown={() => {}}
					className="text-accent tracking-wider font-medium text-lg cursor-pointer"
				>
					{project.title}
				</h4>
				<p className="text-sm max-h-16 overflow-auto scroll-custom">
					{project.overview.slice(0, 150)}
				</p>
				<div className="flex flex-row gap-4 pt-3 justify-end pr-1">
					<span
						onClick={() => onDetail(project.title)}
						onKeyDown={() => {}}
						className="text-xs text-accent underline hover:text-normal transition-colors cursor-pointer underline-offset-4"
					>
						View Project
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
