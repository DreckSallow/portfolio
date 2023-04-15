import { Entries, FormController } from "@/lib/form";
import { FormEvent, useState } from "react";
export const useForm = <T>(entries: Entries<T>) => {
	const [formController, setFormController] = useState<FormController<T>>(
		new FormController(entries),
	);

	const handleInput = (
		ev: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = ev.target as HTMLInputElement;
		setFormController(
			formController.clone().set(name as keyof Entries<T>, value),
		);
	};

	return {
		formController,
		onInput: handleInput,
	};
};
