import { prisma } from "../prisma";
import { ProjectData } from "../types";
import { ProjectServer } from "@/app/api/project";

export async function GET() {
	return await ProjectServer.getAll();
}

export async function POST(req: Request) {
	const body: ProjectData | null = await req.json();
	if (!body) {
		return new Response(
			JSON.stringify({
				error: "No content provided",
				data: null,
			}),
			{
				status: 400,
			},
		);
	}

	if (
		!body.title ||
		!body.description ||
		!body.overview ||
		(!body.demo && !body.repository)
	) {
		return new Response(
			JSON.stringify({
				error: "The minimum requirements were not completed",
				data: null,
			}),
			{
				status: 400,
			},
		);
	}

	const newProject = await prisma.project.create({
		data: {
			demo: body.demo,
			repository: body.repository,
			description: body.description as string,
			overview: body.overview as string,
			title: body.title as string,
			video: body.video,
			img: body.img,
		},
	});

	return new Response(
		JSON.stringify({
			error: null,
			data: newProject,
		}),
		{
			status: 200,
		},
	);
}
