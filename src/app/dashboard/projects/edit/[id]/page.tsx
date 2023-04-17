"use client";
import { ProjectService } from "@/services/Project";
import { FormProject, TypeInputs } from "../../form-project";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import CONSTANTS from "@/constants";
import { ProjectWithId } from "@/interfaces";

type Params = {
	params: {
		id: number;
	};
};

async function Project({ params }: Params) {
	const router = useRouter();
	const { data, error } = useSWR(
		`${CONSTANTS.API_URL}projects`,
		async (url) => {
			const res = await fetch(`${url}/${params.id}`, {
				headers: {
					"content-type": "application/json",
				},
				cache: "no-store",
			});
			return (await res.json()) as ProjectWithId;
		},
	);

	const createProject = async (formData: TypeInputs) => {
		const { data, error } = await ProjectService.updateOne(params.id, {
			description: formData["description"],
			overview: formData["overview"],
			repository: formData["repository"],
			demo: formData["demo"],
			title: formData["title"],
			img: formData["media"] === "image" ? formData["linkMedia"] : undefined,
			video: formData["media"] === "video" ? formData["linkMedia"] : undefined,
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
			{data && (
				<FormProject
					className="bg-soft "
					onSubmit={onSubmit}
					inputs={{
						title: data.title,
						overview: data.overview,
						description: data.description,
						linkMedia: data.img || data.video || "",
						media: data.img ? "image" : "video",
						demo: data.demo ?? "",
						repository: data.repository ?? "",
					}}
					submit="Edit"
					header={
						<h3 className="text-xl font-medium mb-4  text-center">
							Fill this data to create a new Project!
						</h3>
					}
				/>
			)}
		</div>
	);
}

export default Project;
