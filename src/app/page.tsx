import InViewCore from "@/components/animations/core/";
import ContactSection from "@/sections/contact";
import About from "@/sections/home/about";
import Projects from "@/sections/home/projects/projects";

export default function Home() {
	return (
		<main className="fill">
			<section className="flex-center section bg-base text-normal">
				<div className="flex flex-col max-w-4xl">
					<div>
						<InViewCore
							type="h1"
							delay={0.7}
							initial={{ x: "-1em" }}
							whileInView={{ x: 0 }}
							className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold"
						>
							Dikson Aranda
						</InViewCore>
						<InViewCore
							type="h3"
							delay={1}
							initial={{ x: "1em" }}
							whileInView={{ x: 0 }}
							className="text-3xl md:text-5xl text-accent font-bold mt-4"
						>
							I bring websites to life with code
						</InViewCore>
					</div>
					<div className="text-start flex-column sm:block">
						<InViewCore
							delay={1.3}
							initial={{ x: "-1em" }}
							whileInView={{ x: 0 }}
							className="text-base md:text-lg mt-6 text-normal"
						>
							I'm frontend developer, passionate about technology, and focused
							on building better projects. Always for ways to expand my horizons
							and challenge myself. I'm sure that I can be an important part of
							your company to build exceptional things.
						</InViewCore>
						<InViewCore
							type="button"
							delay={1.6}
							initial={{ y: "1em" }}
							whileInView={{ y: 0 }}
							className="rounded-lg bg-blue-400 px-6 py-3 sm:mt-7 mt-6 text-white tracking-wide"
						>
							Contact Me
						</InViewCore>
					</div>
				</div>
			</section>
			<About />

			<Projects />
			<ContactSection />
		</main>
	);
}
