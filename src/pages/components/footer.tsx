import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="bg-[#1E1E1E] text-white py-14">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Address Section */}
                    <div className="space-y-4">
                        <Image src="/images/index/footer/footer-logo.png" alt="FluidMAC" width={200} height={60} />
                        <p className="text-sm text-gray-400">
                            Plot#8, Kakoda Industrial Estate,
                            <br />
                            Curchorem, Goa - 403706
                        </p>

                        <Image
                            src="/images/index/footer/fluidmac-map.png"
                            alt="FluidMAC Location Map"
                            width={200}
                            height={150}
                            className="rounded-lg"
                        />
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h5 className="text-[#FF0000] font-medium mb-4">QUICK LINKS</h5>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/facilities">Facilities</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h5 className="text-[#FF0000] font-medium mb-4">FOLLOW US</h5>
                        <div className="flex gap-4">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="hover:text-[#FF0000] transition-colors"
                            >
                                <FaFacebookF size={20} />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="hover:text-[#FF0000] transition-colors"
                            >
                                <FaLinkedinIn size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h5 className="text-[#FF0000] font-medium mb-4">INFORMATION</h5>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms & Condition</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col items-center gap-4">
                    <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">Contact us</Button>
                    <p className="text-sm text-gray-400">Copyright © 2024 Fluidmac All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
