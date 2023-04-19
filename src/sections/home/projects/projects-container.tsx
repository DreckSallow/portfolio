"use client";
import { Project } from "@/interfaces";
import ProjectCard from "./project-card";
import { Fragment, useMemo, useState } from "react";
import { Modal } from "@/components/modal";
import Image from "next/image";
import { Badge } from "@/components/badge";
import { NoImageIcon } from "@/components/icons/common";

interface Props {
	projects: Project[];
}

const ProjectsContainer = ({ projects }: Props) => {
	const [currenProject, setCurrentProject] = useState<null | Project>(null);

	const projectDesc = useMemo(() => {
		if (!currenProject) {
			return <></>;
		}

		const lines = currenProject.description.split("\n");
		const len = lines.length;

		const element = lines.map((s, i) => {
			return (
				// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Fragment key={i}>
					{s}
					{!(len - 1 === i) && (
						<>
							<br />
							<br />
						</>
					)}
				</Fragment>
			);
		});

		return element;
	}, [currenProject]);

	return (
		<div className="flex flex-col sm:flex-row gap-4 items-center flex-wrap justify-center">
			{projects.map((p, i) => {
				return (
					<ProjectCard
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						project={p}
						onDetail={() => {
							setCurrentProject(p);
						}}
					/>
				);
			})}
			{currenProject && (
				<Modal
					onClose={() => setCurrentProject(null)}
					className="bg-base pt-16 text-normal"
					contentPosition="center"
					contentCss="p-4 bg-soft rounded-md w-9/12"
				>
					<div className="p-3 flex flex-col w-full sm:flex-row gap-5 items-center">
						<div className="flex flex-col sm:w-1/2 lg:w-3/5">
							<h4 className="text-2xl font-medium mb-3">
								{currenProject.title}
							</h4>
							<p className="text-xs font-light tracking-wider">{projectDesc}</p>
							<div className="flex flex-row gap-1 font-light tracking-wider py-1 mt-3 w-full flex-wrap">
								{currenProject?.tags.map((t, i) => {
									return (
										<Badge
											className="border-1 border-blue-400 py-0.5 px-2 font-light"
											// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={i}
										>
											{t}
										</Badge>
									);
								})}
							</div>
							{(currenProject?.demo || currenProject.repository) && (
								<div className="flex flex-row gap-2 mt-3">
									{currenProject?.demo && (
										<a
											href={currenProject?.demo}
											className="bg-blue-400 text-white text-xs py-1 px-1.5 rounded-sm"
											target="_blank"
											rel="noreferrer"
										>
											Demo
										</a>
									)}
									{currenProject?.repository && (
										<a
											href={currenProject?.repository}
											className="bg-blue-400 text-white text-xs py-1 px-1.5 rounded-sm"
											target="_blank"
											rel="noreferrer"
										>
											Repository
										</a>
									)}
								</div>
							)}
						</div>
						<div className="relative w-full sm:w-1/2 lg:w-2/5 aspect-video">
							{currenProject.img ? (
								<Image src={currenProject.img} alt={currenProject.title} fill />
							) : (
								currenProject.video && (
									<video src={currenProject.video} autoPlay loop />
								)
							)}
							{!currenProject.img && !currenProject.video && (
								<div className="fill flex-center flex-col text-xs opacity-30 border-1">
									<NoImageIcon
										height="60%"
										width="60%"
										className="icon-normal"
									/>
									No Image
								</div>
							)}
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default ProjectsContainer;
