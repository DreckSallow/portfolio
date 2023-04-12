import { SessionState } from "@/lib/session";
import { createContext, useContext } from "react";

export interface AuthContext {
	userSession: SessionState;
	setUserSession: (s: SessionState) => void;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const useSession = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("The Session context is not available");
	}
	return context;
};
