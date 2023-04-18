import bcrypt from "bcrypt";
import { prisma } from "@/app/api/prisma";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/login",
		error: "/login",
	},
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, _) {
				if (!credentials?.username || !credentials?.password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: {
						username: credentials.username,
					},
				});

				const passwordCorrect =
					user === null
						? false
						: await bcrypt.compare(credentials.password, user.password);

				if (!passwordCorrect) {
					return null;
				}
				return {
					id: String(user?.id),
					username: user?.username,
					role: user?.role,
				};
			},
		}),
	],
};
