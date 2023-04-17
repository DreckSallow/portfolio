"use client";

import { ProjectService } from "@/services/Project";
import { useRouter } from "next/navigation";
import styled from "styled-components";

type LinkProps = {
	className?: string;
	id: number;
};

const LinkEvent = ({ className, id }: LinkProps) => {
	const router = useRouter();
	return (
		<button
			onClick={async () => {
				const { error } = await ProjectService.deleteOne(id);
				if (!error) {
					router.refresh();
				}
			}}
			className={className}
		>
			Delete
		</button>
	);
};

const DeleteProjectButton = styled(LinkEvent)``;
export default DeleteProjectButton;
