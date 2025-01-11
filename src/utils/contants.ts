export type ProductType = {
    id: number;
    name: string;
    image: string;
    page: string;
};

const Products: ProductType[] = [
    {
        id: 1,
        name: "Hose Assemblies",
        image: "/images/index/products/hose-assemblies.png",
        page: "/products/hose-assemblies",
    },
    {
        id: 2,
        name: "Tube Assemblies",
        image: "/images/index/products/tube-assemblies.png",
        page: "/products/tube-assemblies",
    },
    {
        id: 3,
        name: "Hydraulic Fittings",
        image: "/images/index/products/hydraulic-fittings.png",
        page: "/products/hydraulic-fittings",
    },
];

export { Products };
