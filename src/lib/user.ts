export enum RoleUser {
	USER = 0,
	ADMIN = 1,
}

export interface User {
	name: string;
	role: RoleUser;
}

export const numberToRoleUser = (num: number): RoleUser => {
	if (num in RoleUser) {
		return num as RoleUser;
	}
	return RoleUser.USER;
};

const TextRoleUser = {
	ADMIN: RoleUser.ADMIN,
	USER: RoleUser.USER,
};

export const stringToRoleUser = (s: string): RoleUser => {
	if (s in TextRoleUser) {
		return TextRoleUser[s as keyof typeof TextRoleUser];
	}
	return RoleUser.USER;
};
