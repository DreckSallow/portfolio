export interface Project {
	img?: string;
	title: string;
	description: string;
	overview: string;
	video?: string;
	repository?: string;
	demo?: string;
}

export interface ProjectWithId extends Project {
	id: number;
}
