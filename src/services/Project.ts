import CONSTANTS from "@/constants";
import { Project, ProjectWithId } from "@/interfaces";
const API_URL = `${CONSTANTS.BASE_URL}api/projects`;

type ServerError<T> = {
	data: T | null;
	error: string;
};

export default class ProjectServiceClass {
	async getAll(): Promise<ServerError<ProjectWithId[]>> {
		const res = await fetch(API_URL, {
			next: {
				revalidate: 60 * 60 * 1,
			},
		});

		return await res.json();
	}
	async getOne(id: number): Promise<ServerError<ProjectWithId>> {
		const res = await fetch(`${API_URL}/${id}`, {
			headers: {
				"content-type": "application/json",
			},
			next: {
				revalidate: 60 * 60 * 1,
			},
		});
		return await res.json();
	}

	async createOne(newProject: Project) {
		const res = await fetch(API_URL, {
			body: JSON.stringify(newProject),
			headers: {
				"content-type": "application/json",
			},
			method: "POST",
		});
		return await res.json();
	}
}

export const ProjectService = new ProjectServiceClass();
