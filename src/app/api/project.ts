import { prisma } from "@/app/api/prisma";
import "server-only";

export class ProjectServerService {
	constructor() {}

	async getAll() {
		const projects = await prisma.project.findMany();
		return new Response(
			JSON.stringify({
				data: projects,
				error: null,
			}),
			{
				headers: {
					"content-type": "application/json",
				},
				status: 400,
			},
		);
	}

	async getOne(id: number) {
		const project = await prisma.project.findUnique({
			where: {
				id: id,
			},
		});

		if (!project) {
			return new Response(
				JSON.stringify({
					error: "The project not exist!",
					data: null,
				}),
				{
					status: 400,
					headers: {
						"content-type": "applicaction/json",
					},
				},
			);
		}
		return new Response(
			JSON.stringify({
				error: null,
				data: project,
			}),
			{
				status: 200,
				headers: {
					"content-type": "applicaction/json",
				},
			},
		);
	}
}

export const ProjectServer = new ProjectServerService();

export const serverFetch = async <T>(res: Response) => {
	return (await res.json()) as {
		error: string | null;
		data: T | null;
	};
};
