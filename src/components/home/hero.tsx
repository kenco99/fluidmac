import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat h-[500px]"
            style={{ backgroundImage: 'url("/images/index/hero/hero-collage.png")' }}
        >
            <div className="absolute inset-0 bg-white opacity-70"></div>
            <div className="container py-16 relative">
                <div className="flex items-center justify-between flex-col w-full mx-auto gap-3">
                    <img src="/images/index/hero/25-years-minimal.png" className="h-[150px]" alt="Hero" />

                    <h1 className="text-center text-4xl font-bold max-w-lg text-[#0070C0]">
                        Of providing the arteries of hydraulic power
                    </h1>

                    <p className="text-center text-sm max-w-2xl font-medium mt-2">
                        FluidMAC has been at the forefront of fluid conveyance solutions, proudly serving industries
                        with top notch Hydraulic hose assemblies, Tube assemblies, and fittings. Renowned for
                        excellence, we’re your go-to source for precision engineered hydraulic components that keep the
                        world moving smoothly.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                    <Button variant={"outline"} className="bg-[#FFEDED]">
                        About us
                    </Button>

                    <Button className="text-white">Talk to sales</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
