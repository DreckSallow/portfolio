import Image from "next/image";
import avatar from "../../../public/images/avatar-test.webp";

const About = () => {
	return (
		<section className="flex-center section bg-base text-normal" id="about">
			<div className="flex flex-col md:gap-6 max-w-4xl dark-color md:p-0 ">
				<h3 className="text-2xl font-medium text-accent">ABOUT ME</h3>
				<div className="flex-col md:flex-row flex items-center gap-4 md:gap-10">
					<p className="md:max-w-lg">
						Hello!. I'm Dikson Aranda,{" "}
						<span className="text-accent">Frontend Developer</span> . I am
						passionate about building great things on the web and creating while
						learning a new technology.
						<br />
						<br />
						I am a graduate of{" "}
						<span className="text-accent">Henry bootcamp</span> where I learned
						about all technologies within FullStack like frontend and some
						backend. During the program I saw Html, Css, Javascript, React and
						NodeJs (Express), building some projects alone and in a team.
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
					</p>
					<div className="w-52 sm:w-80 mt-7 relative aspect-square">
						<Image src={avatar} fill alt="avatar" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
