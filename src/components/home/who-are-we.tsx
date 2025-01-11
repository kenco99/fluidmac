const WhoAreWe = () => {
    return (
        <div className="py-6 md:py-10">
            <div className="container flex flex-col md:flex-row justify-between gap-0 md:gap-14 px-4 md:px-8">
                <img
                    src="/images/index/machinery/machinery-collage.png"
                    alt="Who are we?"
                    className="h-[250px] md:h-[400px] object-contain mx-auto md:mx-0"
                />

                <div className="flex flex-col gap-3 text-center md:text-left md:my-auto">
                    <p className="text-base md:text-lg font-bold text-[#FF0000]">Who are we?</p>

                    <p className="text-2xl md:text-3xl font-medium text-[#0070C0]">O.E.M Experts</p>

                    <p className="text-xs md:text-sm font-medium text-[#4B4B4B] max-w-xl">
                        For the last 25+ years, we've built strong and productive relationships with OEM's across the
                        country, and pride ourselves on providing the industry's best service and support. Our
                        production capabilities allow us to support our OEM customers with high-volume, fully customized
                        hydraulic assemblies and kits, designed specifically for their unique requirements.
                    </p>

                    <p className="text-xs md:text-sm font-medium text-[#FF0000]">More info</p>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;
