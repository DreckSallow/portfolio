import { User } from "./user";

export interface UserSession extends User {
	token: String;
}

export type SessionState = UserSession | null;
