import { Products, ProductType } from "@/utils/contants";

const ProductCard = ({ product }: { product: ProductType }) => {
    return (
        <div className="bg-white p-6 rounded-lg w-fit border border-[#0070C0] basis-1/3 group hover:cursor-pointer">
            <p className="font-medium text-white bg-[#0070C0] w-fit px-2 py-1 rounded-lg">{product.name}</p>
            <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mt-6 h-[250px] w-full object-cover overflow-hidden"
            />

            <div className="flex items-center gap-2 mt-8 hover:cursor-pointer  w-fit">
                <svg width="24" height="24" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                <p className="text-sm font-medium text-[#FF0000] group-hover:text-black transition-colors duration-300">
                    Learn more
                </p>
            </div>
        </div>
    );
};

const OurProducts = () => {
    return (
        <div className="py-10 bg-[#F4F8FF]">
            <div className="container">
                <h2 className="text-center text-3xl font-bold text-[#0070C0]">Our Products</h2>

                <div className="flex items-center justify-center gap-4 mt-8">
                    {Products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
