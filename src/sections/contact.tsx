import InView from "@/components/animations/in-view";
import { CalendlyIcon, GithubIcon, LinkedinIcon } from "@/components/icons/common";

export default function ContactSection() {
	return (
		<section className="flex flex-col items-center justify-center section bg-base text-normal">
			<div className="max-w-2xl flex flex-col items-center justify-center">
				<InView
					type="h4"
					className="text-2xl font-medium mb-6 text-center"
					delay={0.2}
				>
					Do you have a good and interesting idea and want to make it come true?
				</InView>
				<InView type="p" className="text-base ml-1" delay={0.3}>
					Then I would love to hear from you and your project! I'm always
					looking for challenging projects where I can improve, learn more and
					grow as a professional. You can contact me through my email:{" "}
					<a href="mailto:dikson@arandadev.com" className="text-accent">
						dikson@arandadev.com{" "}
					</a>
					or click on these contact links:
				</InView>
				<InView className="flex flex-row gap-4 mt-6" delay={0.4}>
					<a
						href="https://github.com/DreckSallow"
						target="_blank"
						rel="noreferrer"
						className="bg-soft py-2 px-4 flex flex-col items-center gap-2"
					>
						<GithubIcon className="icon-normal" height="3rem" width="3rem" />
						<span className="text-xs opacity-50">Github</span>
					</a>
					<a
						href="https://www.linkedin.com/in/dikson-aranda/"
						target="_blank"
						rel="noreferrer"
						className="bg-soft py-2 px-4 flex flex-col items-center gap-2"
					>
						<LinkedinIcon
							className="fill-blue-500"
							height="3rem"
							width="3rem"
						/>
						<span className="text-xs opacity-50">Linkedin</span>
					</a>
					<a
						href="https://calendly.com/dikson/meet"
						target="_blank"
						rel="noreferrer"
						className="bg-soft py-2 px-4 flex flex-col items-center gap-2"
					>
						<CalendlyIcon
							className="fill-blue-500"
							height="3rem"
							width="3rem"
						/>
						<span className="text-xs opacity-50">Calendly</span>
					</a>
				</InView>
			</div>
		</section>
	);
}
