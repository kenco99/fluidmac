import { Button } from "@/components/ui/button";

const PageHeader = () => {
    return (
        <div className="container py-4 flex justify-between items-center">
            <img src="/images/index/logo/fluidmac-logo.png" alt="Fluidmac" />

            <div className="flex items-center gap-14">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">About Us</p>
                <p className="cursor-pointer">Products</p>
                <p className="cursor-pointer">Contact Us</p>
            </div>

            <Button className="text-white">Contact us</Button>
        </div>
    );
};

export default PageHeader;
