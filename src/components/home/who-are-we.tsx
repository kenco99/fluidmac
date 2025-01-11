const WhoAreWe = () => {
    return (
        <div className="py-10">
            <div className="container flex justify-between gap-14">
                <img
                    src="/images/index/machinery/machinery-collage.png"
                    alt="Who are we?"
                    className="h-[400px] object-contain mr-auto"
                />

                <div className="flex flex-col my-auto gap-3">
                    <p className="text-lg font-bold text-[#FF0000]">Who are we?</p>

                    <p className="text-3xl font-medium text-[#0070C0]">O.E.M Experts</p>

                    <p className="text-sm font-medium text-[#4B4B4B]">
                        For the last 25+ years, we’ve built strong and productive relationships with OEM’s across the
                        country, and pride ourselves on providing the industry’s best service and support. Our
                        production capabilities allow us to support our OEM customers with high-volume, fully customized
                        hydraulic assemblies and kits, designed specifically for their unique requirements.
                    </p>

                    <p className="text-sm font-medium text-[#FF0000]">More info</p>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;
