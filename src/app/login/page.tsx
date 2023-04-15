"use client";
import { useSession } from "@/context/auth/context";
import { stringToRoleUser } from "@/lib/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Auth = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const { userSession, setUserSession } = useSession();

	const router = useRouter();

	useEffect(() => {
		if (userSession) {
			return router.push("/dashboard"); //Or use cookies?🤔
		}
	}, [userSession]);

	const loginUser = async () => {
		const res = await fetch("http://localhost:3000/api/login", {
			body: JSON.stringify({ ...inputs }),
			method: "POST",
		});

		const parsed = await res.json();

		if (!res.ok) {
			setTimeout(() => {
				setErrorMessage(null);
			}, 2000);
			return setErrorMessage(parsed.error);
		}
		setUserSession({
			name: parsed.data.username,
			role: stringToRoleUser(parsed.data.role),
			token: parsed.data.token,
		});
		router.push("/");
	};

	return (
		<section className="bg-base text-normal pt-16 min-h-screen flex-center">
			<form
				action="/api/auth"
				method="POST"
				onSubmit={(e) => {
					e.preventDefault();
					loginUser();
				}}
				className="bg-soft p-10 rounded-md flex flex-col gap-6"
			>
				<h3 className="font-semibold text-xl">
					Sign in to unlock better features.
				</h3>
				<div className="flex flex-col gap-2">
					<label htmlFor="username-login">Username</label>
					<input
						value={inputs.username}
						onInput={(e) =>
							setInputs({
								username: (e.target as HTMLInputElement).value,
								password: inputs.password,
							})
						}
						required
						type="text"
						id="username-login"
						className="px-4 py-3 bg-transparent border-2 rounded-md border-zinc-400 outline-none focus:border-blue-400"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="password-login">Password</label>
					<input
						value={inputs.password}
						onInput={(e) =>
							setInputs({
								password: (e.target as HTMLInputElement).value,
								username: inputs.username,
							})
						}
						required
						type="password"
						id="password-login"
						className="px-4 py-3 bg-transparent outline-none border-2 rounded-md border-zinc-400 focus:border-blue-400"
					/>
				</div>
				{errorMessage && (
					<div>
						<span className="text-red-400 font-medium text-xl">
							{errorMessage}
						</span>
					</div>
				)}
				<button
					type="submit"
					className="p-4 rounded-md bg-blue-500 font-medium tracking-wide text-white"
				>
					Continue
				</button>
			</form>
		</section>
	);
};

export default Auth;
