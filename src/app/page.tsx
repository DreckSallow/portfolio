import InViewCore from "@/components/animations/core/";
import ContactSection from "@/sections/contact";
import About from "@/sections/home/about";
import Projects from "@/sections/home/projects/projects";

export default function Home() {
	return (
		<main className="fill">
			<section className="flex-center section bg-base text-normal">
				<InViewCore
					type="div"
					delay={0.1}
					initial={{ x: "-1em" }}
					whileInView={{ x: 0 }}
					className="flex flex-col max-w-4xl"
				>
					<div>
						<h1 className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold">
							Dikson Aranda
						</h1>
						<h3 className="text-3xl md:text-5xl text-accent font-bold mt-4">
							I bring websites to life with code
						</h3>
					</div>
					<div className="text-start flex-column sm:block">
						<p className="text-base md:text-lg mt-6 text-normal">
							I'm frontend developer, passionate about technology, and focused
							on building better projects. Always for ways to expand my horizons
							and challenge myself. I'm sure that I can be an important part of
							your company to build exceptional things.
						</p>
						<button
							role="button"
							className="rounded-lg bg-blue-400 px-6 py-3 sm:mt-7 mt-6 text-white tracking-wide"
						>
							Contact Me
						</button>
					</div>
				</InViewCore>
			</section>
			<About />

			<Projects />
			<ContactSection />
		</main>
	);
}
