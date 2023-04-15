"use client";

import { Label, RadioInput } from "@/components/form/input";
import { useForm } from "@/hooks/useForm";
import { ReactNode, useState } from "react";

export type TypeInputs = {
	title: string;
	overview: string;
	description: string;
	linkMedia: string;
	media: string;
	demo: string;
	repository: string;
};

const InputClass = "border-2 bg-soft p-2 rounded-md text-sm mt-2";

interface Props {
	header?: ReactNode;
	submit: string;
	inputs: TypeInputs;
	onSubmit(inputs: TypeInputs): TypeInputs;
	className?: string;
}

export const FormProject = ({
	className,
	header,
	onSubmit,
	inputs,
	submit,
}: Props) => {
	const { formController, onInput } = useForm({ ...inputs });
	const [errors, setErrors] = useState(
		Object.keys(inputs).reduce(
			(acc, k) => ({ ...acc, [k]: "" }),
			{} as TypeInputs,
		),
	);
	return (
		<form
			action="POST"
			className={`h-full rounded-md flex flex-col overflow-auto text-normal p-3 ${className}`}
			onSubmit={(e) => {
				e.preventDefault();
				const newErrors = onSubmit({ ...formController.entries });
				setErrors(newErrors);
			}}
		>
			{header}
			<div className="flex flex-col sm:flex-row justify-start gap-4">
				<div className="sm:w-1/2 flex flex-col">
					<InputWrapper
						label="Title"
						name="title"
						textInput={
							<input
								type="text"
								name="title"
								value={formController.get("title")}
								className={InputClass}
								onInput={onInput}
								maxLength={100}
							/>
						}
					/>
					{errors.title && (
						<span className="text-red-500 text-xs">{errors.title}</span>
					)}
					<InputWrapper
						label="Overview"
						name="overview"
						className="mt-3"
						textInput={
							<textarea
								name="overview"
								value={formController.get("overview")}
								className={InputClass}
								onInput={onInput}
								maxLength={200}
							/>
						}
					/>
					{errors.overview && (
						<span className="text-red-500 text-xs">{errors.overview}</span>
					)}
					<InputWrapper
						label="Description"
						name="description"
						className="mt-3"
						textInput={
							<textarea
								name="description"
								value={formController.get("description")}
								className={InputClass}
								onInput={onInput}
								maxLength={500}
							/>
						}
					/>
					{errors.description && (
						<span className="text-red-500 text-xs">{errors.description}</span>
					)}
				</div>
				<div className="sm:w-1/2">
					<InputWrapper
						label="Link"
						name="linkMedia"
						textInput={
							<input
								type="url"
								name="linkMedia"
								value={formController.get("linkMedia")}
								className={InputClass}
								onInput={onInput}
							/>
						}
					/>
					{errors.linkMedia && (
						<span className="text-red-500 text-xs">{errors.linkMedia}</span>
					)}

					<div className="flex flex-row gap-3 mt-1 pl-1">
						<Label
							htmlFor="media-image"
							className="flex-y-center flex-row cursor-pointer text-sm"
						>
							<RadioInput
								name="media"
								id="media-image"
								value="image"
								className="before:bg-blue-200 w-2"
								onInput={onInput}
								checked
							/>
							Image
						</Label>
						<Label
							htmlFor="media-video"
							className="flex-y-center flex-row cursor-pointer text-sm"
						>
							<RadioInput
								name="media"
								id="media-video"
								value="video"
								className="before:bg-blue-200 w-2"
								onInput={onInput}
							/>
							Video
						</Label>
					</div>
					<InputWrapper
						label="Demo"
						name="demo"
						className="mt-3"
						textInput={
							<input
								type="url"
								name="demo"
								value={formController.get("demo")}
								className={InputClass}
								onInput={onInput}
							/>
						}
					/>
					{errors.demo && (
						<span className="text-red-500 text-xs">{errors.demo}</span>
					)}
					<InputWrapper
						label="Repository"
						name="repository"
						className="mt-3"
						textInput={
							<input
								type="url"
								name="repository"
								value={formController.get("repository")}
								className={InputClass}
								onInput={onInput}
							/>
						}
					/>
					{errors.repository && (
						<span className="text-red-500 text-xs">{errors.repository}</span>
					)}
				</div>
			</div>
			<div className="flex justify-start text-white font-medium my-3">
				<button
					type="submit"
					className="bg-blue-400 text-base py-1 px-2 rounded-md"
				>
					{submit}
				</button>
			</div>
		</form>
	);
};

interface InputWrapperProps {
	label: string;
	className?: string;
	name?: string;
	textInput: ReactNode;
}

const InputWrapper = ({
	className,
	name,
	label,
	textInput,
}: InputWrapperProps) => {
	return (
		<div className={`flex flex-col ${className ?? ""} `}>
			<label htmlFor={name} className="font-medium text-lg">
				{label}
			</label>
			{textInput}
		</div>
	);
};
