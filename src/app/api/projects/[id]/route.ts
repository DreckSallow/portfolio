import { prisma } from "../../prisma";
import { ProjectData } from "../../types";

export async function GET(_: Request, { params }: { params: { id: string } }) {
	const project = await prisma.project.findUnique({
		where: {
			id: Number(params.id),
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

export async function PUT(
	req: Request,
	{ params }: { params: { id: string } },
) {
	const body: ProjectData = await req.json();
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
	if (!params.id || Number.isNaN(Number(params.id))) {
		return new Response(
			JSON.stringify({
				error: "Project not found",
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

	const projectUpdated = await prisma.project.update({
		where: {
			id: Number(params.id),
		},
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
			data: projectUpdated,
		}),
	);
}

export async function DELETE(
	_: Request,
	{ params }: { params: { id: string } },
) {
	const numberId = Number(params.id);

	await prisma.project.delete({
		where: {
			id: numberId,
		},
	});

	if (Number.isNaN(numberId)) {
		return new Response(
			JSON.stringify({
				error: "Project not found",
				data: null,
			}),
			{
				status: 400,
			},
		);
	}

	return new Response(
		JSON.stringify({
			error: null,
			data: numberId,
		}),
		{
			status: 200,
		},
	);
}
