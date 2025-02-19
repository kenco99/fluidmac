import Link from "next/link";
import { BiChevronDown, BiMenu, BiSolidPhoneCall, BiX } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<div className="bg-red-500/10 px-6 font-semibold flex md:justify-center flex-wrap gap-1 md:gap-5 items-center py-3">
				<a href="+918329008308" className="flex justify-center gap-1 items-center">
					<BiSolidPhoneCall className="text-red-500" />
					+91-9822384075/8329008308
				</a>
				<a href="mailto:sales@fluidmac.in,pp.abhijit@fluidmac.in" className="flex justify-center gap-1 items-center">
					<FaEnvelope className="text-red-500" />
					sales@fluidmac.in/pp.abhijit@fluidmac.in
				</a>
			</div>
			<header className="h-24 container flex justify-between items-center">
				<Link href="/">
					<img src="/fluidmac-25-years.png" className="max-w-44  lg:max-w-60" />
				</Link>
				<nav className="hidden md:flex text-center justify-center gap-5 text-lg font-semibold lg:gap-12 grow">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Popover>
						<PopoverTrigger>
							Products <BiChevronDown className="inline" size={20} />
						</PopoverTrigger>
						<PopoverContent className="bg-white max-w-48">
							<Link href="/products/hose-assemblies" className="block py-2">
								Hose Assemblies
							</Link>
							<Link href="/products/tube-assemblies" className="block py-2">
								Tube Assemblies
							</Link>
							<Link href="/products/hydraulic-fittings" className="block py-2">
								Hydraulic Fittings
							</Link>
						</PopoverContent>
					</Popover>
					<Link href="/facilities">Facilities</Link>
				</nav>
				<Link href="/contact">
					<Button className="hidden md:flex">Contact us</Button>
				</Link>
				<Button
					size="icon"
					variant="ghost"
					className="md:hidden"
					onClick={() => setOpen(!isOpen)}
					onBlur={() => setOpen(false)}
				>
					{isOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
				</Button>
			</header>
			<div
				className={cn(
					"md:hidden container absolute w-full pb-3 text-lg bg-white shadow-lg transform transition-all duration-200 ease-in z-50",
					{
						"translate-y-0 opacity-100": isOpen,
						"-translate-y-10 opacity-0": !isOpen,
					},
				)}
			>
				<Link href="/" className="block font-semibold w-full py-3 hover:opacity-90">
					Home
				</Link>
				<Link href="/about" className="block font-semibold w-full py-3 hover:opacity-90">
					About
				</Link>
				<div className="block font-semibold w-full py-3">Products</div>
				<div className="ml-4 space-y-3">
					<Link href="/products/hose-assemblies" className="block w-full hover:opacity-90">
						Hose Assemblies
					</Link>
					<Link href="/products/tube-assemblies" className="block w-full hover:opacity-90">
						Tube Assemblies
					</Link>
					<Link href="/products/hydraulic-fittings" className="block w-full hover:opacity-90">
						Hydraulic Fittings
					</Link>
				</div>
				<Link href="/facilities" className="block font-semibold w-full py-3 hover:opacity-90">
					Facilities
				</Link>
				<Link href="/contact">
					<Button size="sm" className="ml-auto flex">Talk to sales</Button>
				</Link>
			</div>
		</>
	);
};
