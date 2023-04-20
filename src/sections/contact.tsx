import InView from "@/components/animations/in-view";
import {
	CalendlyIcon,
	GithubIcon,
	LinkedinIcon,
} from "@/components/icons/common";
import { MontserratFont, PoppinsFont } from "@/lib/fonts";

export default function ContactSection() {
	const Iconclass =
		"bg-soft py-2 px-4 flex flex-col items-center gap-2 rounded-md";
	return (
		<section className="flex flex-col items-center justify-center section bg-base text-normal">
			<div className="max-w-2xl flex flex-col items-center justify-center">
				<InView
					type="h4"
					className={`text-2xl font-medium mb-6 text-center ${MontserratFont.className}`}
					delay={0.2}
				>
					Do you have a good and interesting idea and want to make it come true?
				</InView>
				<InView
					type="p"
					className={`text-base ml-1 ${PoppinsFont.className}`}
					delay={0.3}
				>
					Then I would love to hear from you and your project! I'm always
					looking for challenging projects where I can improve, learn more and
					grow as a professional. You can contact me through my email:{" "}
					<a href="mailto:dikson@arandadev.com" className="text-accent">
						dikson@arandadev.com{" "}
					</a>
					or click on these contact links:
				</InView>
				<InView
					className={`flex flex-row gap-4 mt-6 ${PoppinsFont.className}`}
					delay={0.4}
				>
					<a
						href="https://github.com/DreckSallow"
						target="_blank"
						rel="noreferrer"
						className={Iconclass}
					>
						<GithubIcon className="icon-normal" height="3rem" width="3rem" />
						<span className="text-xs opacity-80">Github</span>
					</a>
					<a
						href="https://www.linkedin.com/in/dikson-aranda/"
						target="_blank"
						rel="noreferrer"
						className={Iconclass}
					>
						<LinkedinIcon
							className="fill-blue-500"
							height="3rem"
							width="3rem"
						/>
						<span className="text-xs opacity-80">Linkedin</span>
					</a>
					<a
						href="https://calendly.com/dikson/meet"
						target="_blank"
						rel="noreferrer"
						className={Iconclass}
					>
						<CalendlyIcon
							className="fill-teal-500"
							height="3rem"
							width="3rem"
						/>
						<span className="text-xs opacity-80">Calendly</span>
					</a>
				</InView>
			</div>
		</section>
	);
}
