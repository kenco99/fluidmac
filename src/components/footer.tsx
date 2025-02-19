import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BiLogoFacebook, BiLogoLinkedinSquare } from "react-icons/bi";

export const Footer = () => (
	<footer className="bg-gray-900">
		<div className="container">
			<div className="w-full flex flex-col lg:flex-row gap-10 py-6 lg:py-28 justify-start lg:justify-between items-center lg:items-start text-center lg:text-left">
				<div className="max-w-72 flex flex-col gap-6 items-center md:items-start">
					<img src="/fluidmac-dark.png" alt="FluidMAC" className="w-72" />
					<p className="text-gray-300 text-sm">Plot#8, Kakoda Industrial Estate, Curchorem, Goa -403706</p>
					<img src="/map.png" alt="FluidMAC" className="w-72" />
				</div>
				<div className="flex gap-8 md:gap-10 text-left">
					<div className="flex flex-col gap-3 md:gap-4 text-sm md:text-lg text-white">
						<h6 className="text-red-500 font-bold">QUICK LINKS</h6>
						<Link href="/">Home</Link>
						<Link href="/about">About</Link>
						<Link href="/products/hose-assemblies">Hose Assemblies</Link>
						<Link href="/products/tube-assemblies">Tube Assemblies</Link>
						<Link href="/products/hydraulic-fittings">Hydraulic Fittings</Link>
					</div>
					<div className="flex flex-col gap-3 md:gap-4 text-sm md:text-lg text-white">
						<h6 className="text-red-500 font-bold">FOLLOW US</h6>
						<a href="https://www.facebook.com/share/15srAozVtq" target="_blank" className="flex gap-3 items-center">
							<BiLogoFacebook size={30} />
							Facebook
						</a>
						<a href="https://www.linkedin.com/company/fluidmac" target="_blank" className="flex gap-3 items-center">
							<BiLogoLinkedinSquare size={30} />
							LinkedIn
						</a>
					</div>
					<div className="flex flex-col gap-3 md:gap-4 text-sm md:text-lg text-white">
						<h6 className="text-red-500 font-bold">INFORMATION</h6>
						<Link href="/privacy">Privacy Policy</Link>
						<Link href="/terms">Terms & Conditions</Link>
						<Link href="/faq">FAQ</Link>
					</div>
				</div>
				<div>
					<h6 className="mb-4 text-2xl md:text-3xl font-bold text-white">Talk to sales</h6>
					<Link href="/contact">
						<Button>Contact us</Button>
					</Link>
				</div>
			</div>
			<p className="text-gray-300 text-xs lg:text-sm text-center lg:text-right pb-4">
				Copyright © 2024 Fluidmac All Rights Reserved
			</p>
		</div>
	</footer>
);
