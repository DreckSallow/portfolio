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
			cache: "no-store",
		});

		return await res.json();
	}
	async getOne(id: number): Promise<ServerError<ProjectWithId>> {
		const res = await fetch(`${API_URL}/${id}`, {
			headers: {
				"content-type": "application/json",
			},
			cache: "no-store",
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
	async updateOne(id: number, newProject: Project) {
		const res = await fetch(`${API_URL}/${id}`, {
			body: JSON.stringify(newProject),
			headers: {
				"content-type": "application/json",
			},
			method: "PUT",
		});
		return await res.json();
	}
	async deleteOne(id: number) {
		const res = await fetch(`${API_URL}/${id}`, {
			headers: {
				"content-type": "application/json",
			},
			method: "DELETE",
		});
		return await res.json();
	}
}

export const ProjectService = new ProjectServiceClass();
