"use client";
import { Children } from "@/interfaces";
import { SessionState } from "@/interfaces/session";
import { useEffect, useState } from "react";
import { AuthContext } from "./context";
import CONSTANTS from "@/constants";

const AuthProvider = ({ children }: Children) => {
	const [session, setSession] = useState<SessionState>(null);

	useEffect(() => {
		const userLogged = window.localStorage.getItem(CONSTANTS.USER_LOGGED);
		if (userLogged) {
			setSession(JSON.parse(userLogged));
		}
	}, []);

	const setUserSession = (s: SessionState) => {
		window.localStorage.setItem(CONSTANTS.USER_LOGGED, JSON.stringify(s));
		setSession(s);
	};

	return (
		<AuthContext.Provider
			value={{
				userSession: session,
				setUserSession,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
