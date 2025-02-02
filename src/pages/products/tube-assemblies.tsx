import { Header } from "@/components/header";
import { HighlightCard } from "@/components/highlight-card";
import { ContactCard } from "@/components/contact-card";
import { Footer } from "@/components/footer";
import { OtherProductsSection } from "@/components/other-products-section";

const HIGHLIGHTS = [
	"Sample leak testing done for each lot",
	"Latest gen leak proof cold reshaping of tube with captive seal coupling, rated up to 800 bar applications. (Suitable for high vibration & impulse load applications)",
	"Tubes & End Fittings Corrosion resistant for white rust up-to min. 120 Hours & red rust up-to min 360 Hrs",
	"Tube Assemblies meet or exceed NAS 1638 Grade 9 or ISO 4406:2021 – 20/17/14",
	"100% RP oil application to tube internals before dispatch",
];

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
					<img src="/tube-assemblies/hero.png" className="w-full" />
				</section>
				<section className="py-8 lg:py-16 text-center relative">
					<h2 className="text-red-500 font-bold text-sm lg:text-2xl mb-3 tracking-widest">ABOUT THE PRODUCT</h2>
					<p className="text-sm leading-7 lg:leading-9">
						FluidMAC offers a diverse range of metallic tube products & tube fittings as per industry standards & offer
						multiple options in end connection types on tube ends such as JIC, DIN, ORFS etc
					</p>
					<div className="absolute inset-0 bg-blue-500/10 blur-[140px]" />
				</section>
				<div className="flex gap-5 justify-center py-6 lg:py-12 flex-wrap lg:flex-nowrap items-center">
					<img src="/tube-assemblies/ta01.png" alt="tube assembly" className="max-w-56 md:w-1/2" />
					<img src="/tube-assemblies/ta02.png" alt="tube assembly" className="max-w-sm md:w-1/2" />
					<img src="/tube-assemblies/ta03.png" alt="tube assembly" className="max-w-56 md:w-1/2" />
				</div>
				<section className="py-8 lg:py-24 relative">
					<h2 className="text-center text-red-500 font-bold text-sm lg:text-2xl mb-6 tracking-widest">
						PRODUCT HIGHLIGHTS
					</h2>
					<div className="flex justify-center flex-wrap gap-x-5 gap-y-9">
						{HIGHLIGHTS.map((content, index) => (
							<HighlightCard key={index} content={content} />
						))}
					</div>
				</section>
				<section className="py-8 lg:py-24">
					<h2 className="text-center text-red-500 font-bold text-sm lg:text-2xl mb-6 tracking-widest">
						SALIENT FEATURES
					</h2>
					<div className="relative flex flex-col gap-3 md:gap-4 items-center">
						<div className="text-center text-sm md:text-xl bg-gray-100 px-10 py-5 w-fit rounded-xl mx-auto6eading-10">
							ISO 9001:2015 certified QMS & Active 5S program
						</div>
						<div className="text-center text-sm md:text-xl bg-gray-100 px-10 py-5 w-fit rounded-xl mx-auto leading-6">
							Seamless cold drawn steel tubes as per DIN 2391, EN 10305, DIN 1630 etc. as per customer requirements
						</div>
						<img
							src="/tube-assemblies/ta04.png"
							alt="hose assembly"
							className="mx-auto xl:absolute xl:-left-2 xl:-top-48 aspect-square h-60 md:h-72 object-contain"
						/>
						<div className="text-center text-sm md:text-xl bg-gray-100 px-10 py-5 w-fit rounded-xl mx-auto leading-6">
							Multiple end connection options offered as per customer requirements such as Cold forming & Cutting ring
							or Bite profile fittings as DIN 2353, 37° Flaring as per ISO 8434-2/SAE J533, ORFS Braze on fittings as
							per ISO 8434-3 & Welded end connectors as per requirements
						</div>
						<div className="text-center text-sm md:text-xl bg-gray-100 px-10 py-5 w-fit rounded-xl mx-auto leading-6">
							Rigorous process control and product failure analysis systems{" "}
						</div>
						<div className="text-center text-sm md:text-xl bg-gray-100 px-10 py-5 w-fit rounded-xl mx-auto leading-6">
							Corrosion resistant Zn-plating & yellow/ blue passivation (Cr free)
						</div>
						<img
							src="/tube-assemblies/ta05.png"
							alt="tube assembly"
							className="mx-auto xl:absolute xl:-right-2 xl:-top-48 aspect-square h-60 md:h-72 object-contain"
						/>
						<div className="text-center text-sm md:text-xl bg-gray-100 px-10 py-5 w-fit rounded-xl mx-auto leading-6">
							Corrosion resistant Zn-plating & yellow/ blue passivation (Cr free)
						</div>
					</div>
				</section>
				<OtherProductsSection />
				<ContactCard />
			</main>
			<Footer />
		</>
	);
}
