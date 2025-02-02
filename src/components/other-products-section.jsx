import { useRouter } from "next/router";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const products = [
	{
		label: "Hose Assemblies",
		href: "/products/hose-assemblies",
		image: "/hose-assemblies/ha-preview.png",
	},
	{
		label: "Tube Assemblies",
		href: "/products/tube-assemblies",
		image: "/tube-assemblies/ta-preview.png",
	},
	{
		label: "Hydraulic Fittings",
		href: "/products/hydraulic-fittings",
		image: "/hydraulic-fittings/hf-preview.png",
	},
];

export const OtherProductsSection = () => {
	const { pathname, push } = useRouter();
	return (
		<div className="bg-blue-500/5 md:bg-transparent px-3 py-4 lg:px-16 lg:py-10 rounded-lg overflow-hidden">
			<h3 className="text-center text-blue-500 mb-4 font-bold text-xl lg:text-4xl lg:mb-12">Other Products</h3>
			<div className="flex gap-3 md:gap-20 overflow-x-auto lg:justify-center">
				{products.map((product, i) =>
					pathname !== product.href ? (
						<div
							key={i}
							className="border border-blue-500 p-3 md:p-7 max-w-52 md:max-w-80 rounded-lg"
							onClick={() => push(product.href)}
						>
							<div className="bg-blue-500 px-1 w-fit rounded-md text-white text-sm font-semibold md:text-3xl">
								{product.label}
							</div>
							<img src={product.image} alt={product.label} className="w-full h-40 md:h-64 object-cover my-4" />
							<div className="flex gap-1 text-red-500 items-center text-sm lg:text-xl">
								<BsArrowUpRightCircleFill />
								&nbsp;Learn more
							</div>
						</div>
					) : null,
				)}
			</div>
		</div>
	);
};
