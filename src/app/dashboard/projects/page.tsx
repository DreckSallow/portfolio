import { ProjectService } from "@/services/Project";
import Link from "next/link";
import DeleteProjectButton from "./client";

async function getProjects() {
	const { data, error } = await ProjectService.getAll();
	return {
		data: data?.map(({ title, overview, id }) => ({ title, overview, id })),
		error,
	};
}

export default async function Page() {
	const { data, error } = await getProjects();

	return (
		<>
			<div className="p-2 flex flex-row gap-4 items-center">
				{data?.map((p) => {
					return (
						<div
							className="bg-soft rounded-md max-w-xs flex flex-col p-2 gap-2 text-normal"
							key={p.id}
						>
							<h3 className="text-lg font-medium">{p.title}</h3>
							<p className="text-sm">{p.overview}</p>
							<div className="flex flex-row gap-2">
								<Link
									href={`dashboard/projects/edit/${p.id}`}
									className="rounded-md bg-blue-400 text-white py-1 px-2 text-xs"
								>
									Edit
								</Link>
								<DeleteProjectButton
									id={p.id}
									className="rounded-md bg-blue-400 text-white py-1 px-2 text-xs"
								/>
							</div>
						</div>
					);
				})}
				{!data ||
					(data.length === 0 && (
						<span className="fill text-center text-normal">
							No have project yet :(
						</span>
					))}

				<Link
					className="bg-soft rounded-full w-16 aspect-square text-normal flex-center"
					href={"/dashboard/projects/create"}
				>
					<span className="text-4xl">+</span>
				</Link>
			</div>
		</>
	);
}
