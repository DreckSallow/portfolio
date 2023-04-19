import { GithubIcon, LinkedinIcon } from "@/components/icons/common";
export default function ContactSection() {
	return (
		<section className="flex flex-col items-center justify-center section bg-base text-normal ">
			<div className="max-w-2xl flex flex-col items-center justify-center">
				<h4 className="text-2xl font-medium mb-6 text-center">
					Do you have a good and interesting idea and want to make it come true?
				</h4>
				<p className="text-base ml-1">
					Then I would love to hear from you and your project! I'm always
					looking for challenging projects where I can improve, learn more and
					grow as a professional. You can contact me through my email:{" "}
					<a href="mailto:dikson@arandadev.com" className="text-accent">
						dikson@arandadev.com{" "}
					</a>
					or click on these contact links:
				</p>
				<div className="flex flex-row gap-4 mt-6">
					<a
						href="https://github.com/DreckSallow"
						target="_blank"
						rel="noreferrer"
						className="bg-soft p-2"
					>
						<GithubIcon className="icon-normal" height="3rem" width="3rem" />
					</a>
					<a
						href="https://www.linkedin.com/in/dikson-aranda/"
						target="_blank"
						rel="noreferrer"
						className="bg-soft p-2"
					>
						<LinkedinIcon className="icon-normal" height="3rem" width="3rem" />
					</a>
				</div>
			</div>
		</section>
	);
}
