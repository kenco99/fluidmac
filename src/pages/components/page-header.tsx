import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const NavItems = () => {
    return (
        <>
            <Link href="/" className="cursor-pointer">
                Home
            </Link>
            <Link href="/about" className="cursor-pointer">
                About Us
            </Link>
            <Link href="/products" className="cursor-pointer">
                Products
            </Link>
            <Link href="/contact" className="cursor-pointer">
                Contact Us
            </Link>
        </>
    );
};

const PageHeader = () => {
    return (
        <div className="container py-4 flex justify-between items-center">
            <img src="/images/index/logo/fluidmac-logo.png" alt="Fluidmac" className="h-8 md:h-auto" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-14">
                <NavItems />
            </div>

            <div className="hidden md:block">
                <Button className="text-white">Contact us</Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <div className="flex flex-col gap-6 mt-10">
                        <div className="flex flex-col gap-4">
                            <NavItems />
                        </div>
                        <Button className="text-white w-full">Contact us</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default PageHeader;
