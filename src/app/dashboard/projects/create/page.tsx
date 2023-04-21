"use client";
import { ProjectService } from "@/services/Project";

import { FormProject, TypeInputs } from "../form-project";
import { useRouter } from "next/navigation";

type Props = {};

const CreateProject = (p: Props) => {
	const router = useRouter();

	const createProject = async (formData: TypeInputs) => {
		const { error } = await ProjectService.createOne({
			description: formData["description"],
			overview: formData["overview"],
			repository: formData["repository"],
			demo: formData["demo"],
			title: formData["title"],
			img: formData["media"] === "image" ? formData["linkMedia"] : undefined,
			video: formData["media"] === "video" ? formData["linkMedia"] : undefined,
			//TODO: Change this:
			tags: [],
		});
		if (!error) {
			router.replace("/dashboard/projects");
		}

		//TODO: Notify To use that the project was created :)!
	};

	const onSubmit = (inputs: TypeInputs) => {
		const newErrors: TypeInputs = Object.keys(inputs).reduce((acc, k) => {
			return { ...acc, [k]: "" };
		}, {} as TypeInputs);

		if (inputs["title"].length === 0) {
			newErrors["title"] = "This field is required";
		}
		if (inputs["overview"].length === 0) {
			newErrors["overview"] = "This field is required";
		}
		if (inputs["description"].length === 0) {
			newErrors["description"] = "This field is required";
		}
		if (inputs["demo"].length === 0 && inputs["repository"].length === 0) {
			newErrors["demo"] = "Demo or repository is required";
		}

		if (Object.values(newErrors).every((s) => s.length === 0)) {
			createProject(inputs);
		}
		return newErrors;
	};

	return (
		<div className="p-3">
			<FormProject
				className="bg-soft "
				onSubmit={onSubmit}
				inputs={{
					title: "",
					overview: "",
					description: "",
					linkMedia: "",
					media: "image",
					demo: "",
					repository: "",
				}}
				submit="Create"
				header={
					<h3 className="text-xl font-medium mb-4  text-center">
						Fill this data to create a new Project!
					</h3>
				}
			/>
		</div>
	);
};

export default CreateProject;
