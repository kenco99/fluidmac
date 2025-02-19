import { Products, ProductType } from "@/utils/contants";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductType }) => {
    return (
        <Link href={product.page} className="w-full md:w-1/3">
            <div className="bg-white p-4 md:p-6 rounded-lg w-full border border-[#0070C0] group hover:cursor-pointer">
                <p className="font-medium text-white bg-[#0070C0] w-fit px-2 py-1 rounded-lg text-sm md:text-base">
                    {product.name}
                </p>
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg mt-4 md:mt-6 h-[200px] md:h-[250px] w-full object-contain"
                />

                <div className="flex items-center gap-2 mt-6 md:mt-8 hover:cursor-pointer w-fit">
                    <svg
                        width="20"
                        height="20"
                        // md:width="24"
                        // md:height="24"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="20.5"
                            cy="20.5"
                            r="20.5"
                            fill="#FF0000"
                            className="group-hover:fill-black transition-colors duration-300"
                        />
                        <path
                            d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                            fill="white"
                        />
                    </svg>

                    <p className="text-xs md:text-sm font-medium text-[#FF0000] group-hover:text-black transition-colors duration-300">
                        Learn more
                    </p>
                </div>
            </div>
        </Link>
    );
};

const OurProducts = () => {
    return (
        <div className="py-8 md:py-10 bg-[#F4F8FF]">
            <div className="container px-4 md:px-8">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0070C0]">Our Products</h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mt-6 md:mt-8">
                    {Products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
