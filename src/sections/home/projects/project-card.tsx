import InView from "@/components/animations/in-view";
import { NoImageIcon } from "@/components/icons/common";
import { Project } from "@/interfaces";
import { UbuntuFont, MontserratFont } from "@/lib/fonts";
import { ProjectCardAnimated } from "@/sections/components";
import Image from "next/image";

type Props = {
	project: Project;
	large?: boolean;
	onDetail(id: string | number): void;
};

const ProjectCard = ({ project, onDetail }: Props) => {
	return (
		<ProjectCardAnimated
			className={
				"bg-soft flex-column w-3/4 sm:w-72 h-80 p-3 rounded-md overflow-hidden"
			}
		>
			<div className="h-36 relative">
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
			<div className="flex-column gap-2 pt-4 px-3 text-xs">
				<h4
					onClick={() => onDetail(project.title)}
					onKeyDown={() => {}}
					className={`text-normal tracking-wider font-semibold text-sm cursor-pointer ${MontserratFont.className}`}
				>
					{project.title}
				</h4>
				<p
					className={`text-sm h-16 overflow-auto scroll-custom text-normal font-light ${UbuntuFont.className}`}
				>
					{project.overview.slice(0, 150)}
				</p>
				<div className="flex flex-row gap-4 pt-3 justify-end pr-1">
					<span
						onClick={() => onDetail(project.title)}
						onKeyDown={() => {}}
						className="text-xs underline text-accent hover:text-normal transition-colors cursor-pointer underline-offset-4"
					>
						View Project
					</span>
				</div>
			</div>
		</ProjectCardAnimated>
	);
};

export default ProjectCard;
