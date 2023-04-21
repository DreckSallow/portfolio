import InViewCore from "@/components/animations/core/";
import { ButtonLink } from "@/components/animations/";
import { MontserratFont, PoppinsFont } from "@/lib/fonts";
import ContactSection from "@/sections/contact";
import About from "@/sections/home/About";
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
					<div className={MontserratFont.className}>
						<h1 className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold">
							Dikson Aranda
						</h1>
						<h3 className="text-3xl md:text-5xl text-accent font-bold mt-4">
							I bring websites to life with code
						</h3>
					</div>
					<div
						className={`flex items-start flex-column gap-4 font-light ${PoppinsFont.className}`}
					>
						<p className="text-base mt-6 text-normal">
							I'm frontend developer, passionate about technology, and focused
							on building better projects. Always for ways to expand my horizons
							and challenge myself. I'm sure that I can be an important part of
							your company to build exceptional things.
						</p>
						<ButtonLink
							href="https://calendly.com/dikson/meet"
							role="button"
							target="_blank"
							rel="noreferrer"
							className="rounded-md bg-accent px-6 py-2.5 sm:mt-7 mt-6 text-white tracking-wide font-medium"
							whileHover={{ scale: 1.05, opacity: 0.9 }}
						>
							Contact Me
						</ButtonLink>
					</div>
				</InViewCore>
			</section>
			<About />

			<Projects />
			<ContactSection />
		</main>
	);
}
