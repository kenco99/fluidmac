import { Header } from "@/components/header";
import { HighlightCard } from "@/components/highlight-card";
import { ContactCard } from "@/components/contact-card";
import { Footer } from "@/components/footer";
import { OtherProductsSection } from "@/components/other-products-section";

const HIGHLIGHTS = [
	"100% proof pressure testing as per SAE J343",
	"Hose Assemblies rated for 1 million Impulse cycles as per ISO 6803",
	"Unjointed, single piece fittings – (No-Weld & No-Braze)",
	"End Fittings Corrosion resistant for white rust up-to min. 120 Hours & red rust up-to min 360 Hrs including deformed parts. (Plating as per ASTM B633 or DIN 50979)",
	"Hose Assemblies meet or exceed NAS 1638 Grade 9 or ISO 4406:2021 – 20/17/14",
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
						Mining, Earth moving equipment, Automotive, Injection Molding, Construction and Engineering sectors. since
						1999, our top-tier solutions keep the wheels of industry turning smoothly.
					</p>
					<img src="/hose-assemblies/hero.png" className="w-full" />
				</section>
				<section className="py-8 lg:py-24 text-center relative">
					<h2 className="text-red-500 font-bold text-sm lg:text-2xl mb-3 tracking-widest">ABOUT THE PRODUCT</h2>
					<p className="text-sm leading-7 lg:leading-9">
						FluidMAC presents a rich portfolio of hose assemblies to meet SAE, DIN, EN, IS, NCB and other industry
						standards, as well as client's specifications. Our hydraulic hose assemblies are engineered to deliver
						exceptional performance across a range of demanding applications.
						<br />
						Available in several configurations including single and double wire-braided, 4-spiral and 6-spiral, and
						reinforced synthetic rubber, our assemblies are tailored to meet the specific needs of high-pressure
						applications, delivering both durability and flexibility
						<br />
						We specialize in Low pressure hose assemblies, Medium pressure hose assemblies, High pressure hose
						assemblies and Industrial hoses such as Air/ water hoses, Water suction and discharge hoses, Concrete end
						hoses, Pneumatic hoses, Lubrication/ grease hoses, Fuel line hoses, Minimess hoses"
					</p>
					<div className="absolute inset-0 bg-blue-500/10 blur-[140px]" />
				</section>
				<div className="flex gap-5 justify-center py-6 lg:py-12 flex-wrap lg:flex-nowrap">
					<img src="/hose-assemblies/ha01.png" alt="hose assembly" className="max-w-lg md:w-1/2" />
					<img src="/hose-assemblies/ha02.png" alt="hose assembly" className="max-w-lg md:w-1/2" />
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
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							ISO 9001:2015 certified QMS & Active 5S program
						</div>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Hoses from best known brands such as Parker, Manuli, Gates, Semperit & Eaton
						</div>
						<img
							src="/hose-assemblies/ha03.png"
							alt="hose assembly"
							className="shadow-lg bg-white mx-auto xl:absolute xl:-left-2 xl:top-12 aspect-square h-60 md:h-72 object-contain border rounded-xl"
						/>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							12 months/ 3000 working hours warranty for hose assemblies (under normal conditions)
						</div>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Automated Pressure testing facility up to 2000 Bar & In-house SST & Millipore testing facility
						</div>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Rigorous process control and product failure analysis systems{" "}
						</div>
						<img
							src="/hose-assemblies/ha04.png"
							alt="hose assembly"
							className="shadow-lg bg-white mx-auto xl:absolute xl:-right-2 xl:top-12 aspect-square h-60 md:h-72 object-contain border rounded-xl"
						/>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Automated Pressure testing facility up to 2000 Bar & In-house SST & Millipore testing facility
						</div>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Level 3 PPAP provided for all new development items accompanied with relevant test certificates
						</div>
						<div className="text-center text-xs md:text-sm bg-gray-100 px-8 py-4 w-fit rounded-xl mx-auto leading-5">
							Hose Accessories such as metallic spring guard, PVC spiral guard, Heat-Fire resistant sleeves, Whip
							Checks, etc. provided as per requirements.
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
