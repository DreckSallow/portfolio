import Image from "next/image";
import InView from "@/components/animations/in-view";
import { MontserratFont, PoppinsFont } from "@/lib/fonts";

const technologies = [
	"Javascript",
	"Typescript",
	"React",
	"NodeJS",
	"Svelte",
	"Nextjs",
	"Rust",
];

const About = () => {
	return (
		<section
			className="flex-center section bg-base text-normal !pt-2 pb-10"
			id="about"
		>
			<div className="flex flex-col gap-4 md:gap-6 max-w-4xl dark-color md:p-0 items-center">
				<InView
					type="h3"
					className={`text-3xl font-semibold text-accent tracking-wide ${MontserratFont.className}`}
					delay={0.2}
				>
					About Me
				</InView>
				<div
					className={`flex-col md:flex-row flex items-center md:gap-10 ${PoppinsFont.className}`}
				>
					<InView
						type="div"
						className={"md:max-w-lg text-base text-normal"}
						delay={0.3}
					>
						Hello!. I'm Dikson Aranda,{" "}
						<span className="text-accent">Frontend Developer</span> . I am
						passionate about building great things on the web and creating while
						learning a new technology.
						<br />
						<br />
						I am a graduate of{" "}
						<span className="text-accent">Henry bootcamp</span> where I learned
						about all technologies within FullStack like frontend and some
						backend.
						<br />
						<br />
						Also, recently I have been learning more about Rust and its
						ecosystem.
						<br /> I am A-2 in English and I am starting to translate articles
						about Free Code Camp, mainly to learn and improve. You can get more
						information about my translated articles on my{" "}
						<a
							className="text-accent"
							href="https://www.freecodecamp.org/espanol/news/author/dreck/"
							target="_blank"
							rel="noreferrer"
						>
							profile
						</a>
						.
						<br />
						<br />
						<div>
							<div>These are my skills:</div>
							<ul className="mt-2 flex flex-row flex-wrap text-xs gap-4">
								{technologies.map((s) => {
									return (
										<li className="tracking-wide" key={s}>
											<span className="text-accent font-semibold">{"> "}</span>
											<span>{s}</span>
										</li>
									);
								})}
							</ul>
						</div>
					</InView>
					<InView
						type="div"
						className="w-52 sm:w-80 mt-7 relative aspect-square"
						delay={0.4}
					>
						<Image
							src={"https://avatars.githubusercontent.com/u/86900322?v=4"}
							fill
							alt="avatar"
						/>
					</InView>
				</div>
			</div>
		</section>
	);
};

export default About;
