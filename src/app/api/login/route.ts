import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CONFIG from "..";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	const { username, password } = await req.json();

	const user = await prisma.user.findUnique({
		where: {
			username,
		},
	});

	const passwordCorrect =
		user === null ? false : await bcrypt.compare(password, user.password);

	if (!passwordCorrect || !user) {
		return new Response(
			JSON.stringify({
				error: "Invalid user or password",
				data: null,
			}),
			{
				status: 401,
				headers: {
					"content-type": "application/json",
				},
			},
		);
	}

	const token = jwt.sign(
		{
			id: user.id,
		},
		CONFIG.ENV.JWT_SECRET_KEY,
	);

	return new Response(
		JSON.stringify({
			error: null,
			data: {
				token,
				username: user.username,
				role: user.role,
			},
		}),
		{
			status: 200,
			headers: {
				"content-type": "application/json",
			},
		},
	);
}
