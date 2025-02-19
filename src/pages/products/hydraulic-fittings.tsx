import { Header } from "@/components/header";
import { OtherProductsSection } from "@/components/other-products-section";
import { ContactCard } from "@/components/contact-card";
import { Footer } from "@/components/footer";

export default function HoseAssembliesPage() {
	return (
		<>
			<Header />
			<main className="container pb-16 md:pb-32">
				<section className="text-center py-8 lg:py-24">
					<h1 className="font-semibold text-blue-500 text-3xl lg:text-6xl mb-2">Our Products</h1>
					<p className="leading-7 lg:leading-9 lg:text-2xl mb-12 lg:mb-20">
						From rugged hydraulic hose assemblies and sleek metallic tube assemblies to precision fittings, we fuel
						Mining, Earth moving equipment, Automotive, Injection Molding, Construction and Engineering sectors. Since
						1999, our top-tier solutions keep the wheels of industry turning smoothly.
					</p>
					<img src="/hydraulic-fittings/hero.png" className="w-full" />
				</section>
				<section className="py-8 lg:py-24 text-center relative">
					<h2 className="text-red-500 font-bold text-sm lg:text-2xl mb-3 tracking-widest">ABOUT THE PRODUCT</h2>
					<p className="text-sm leading-7 lg:leading-9">
						FluidMAC offers a comprehensive range of hydraulic components and fittings designed to ensure reliable
						performance and safety in hydraulic hose and metallic tube assemblies in line with SAE, DIN (DKO/ DKL), BSP,
						JIC, ORFS, Metric, NPTF and JIS standards. Our extensive selection of fittings includes adapters, couplings,
						and connectors that ensure seamless integration and leak-free connections in hydraulic systems.diverse range
						of metallic tube products & tube fittings as per industry standards & offer multiple options in end
						connection types on tube ends such as JIC, DIN, ORFS etc
					</p>
					<div className="absolute inset-0 bg-blue-500/10 blur-[140px]" />
				</section>
				<div className="flex gap-5 justify-center py-6 lg:py-12 flex-wrap lg:flex-nowrap [&_img]:object-cover">
					<img
						src="/hydraulic-fittings/hf01.png"
						alt="hydraulic fittings"
						className="w-48 border rounded-lg aspect-[9/16]"
					/>
					<img
						src="/hydraulic-fittings/hf02.png"
						alt="hydraulic fittings"
						className="w-96 border rounded-lg aspect-video"
					/>
					<img
						src="/hydraulic-fittings/hf03.png"
						alt="hydraulic fittings"
						className="w-96 border rounded-lg aspect-video"
					/>
					<img
						src="/hydraulic-fittings/hf04.png"
						alt="hydraulic fittings"
						className="w-48 border rounded-lg aspect-[9/16]"
					/>
				</div>
				<section className="py-8 lg:py-24">
					<h2 className="text-center text-red-500 font-bold text-sm lg:text-2xl mb-6 tracking-widest">
						SALIENT FEATURES
					</h2>
					<div className="relative flex flex-col gap-3 md:gap-4 items-center">
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Surface finish: Trivalent zinc electroplating with yellow or blue passivation (as per ASTM B633)
						</div>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							SST life of minimum 120 hours - no white rust and 360 hours - no red rust
						</div>
						<img
							src="/hydraulic-fittings/hf05.png"
							alt="hydraulic fittings"
							className="shadow-lg bg-white mx-auto xl:absolute xl:-left-2 xl:top-14 w-60 md:w-72 object-cover border rounded-xl"
						/>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Capability to achieve higher SST requirements as per customer specifications
						</div>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Interlocking end fitting design for high pressure hose assembly systems
						</div>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Single piece, un-jointed & Interlocking design, EN-1A steel & SAE1018 steel fittings, SS304/316 & Brass
							fittings
						</div>
						<img
							src="/hydraulic-fittings/hf06.png"
							alt="hydraulic fittings"
							className="shadow-lg bg-white mx-auto xl:absolute xl:-right-2 xl:top-14 w-60 md:w-72 object-cover border rounded-xl"
						/>
					</div>
				</section>
				<OtherProductsSection />
				<ContactCard />
			</main>
			<Footer />
		</>
	);
}
