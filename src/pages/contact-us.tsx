import React from "react";
import TopBar from "./components/top-bar";
import PageHeader from "./components/page-header";
import Footer from "./components/footer";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
    return (
        <div>
            <TopBar />
            <PageHeader />
            
            {/* Hero Section */}
            <div className="container px-4 md:px-8 py-6 md:py-12">
                <div className="space-y-3 md:space-y-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0070C0]">Get In Touch With Us.</h1>
                    <p className="text-base md:text-lg text-gray-600">We're Here To Assist You.</p>
                    <div className="flex gap-2 md:gap-3">
                        <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-[#FF0000] transition-colors">
                            <FaFacebookF className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-[#FF0000] transition-colors">
                            <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 mt-4">
                        <Button variant="outline" className="bg-[#FFEDED] text-xs md:text-sm px-3 md:px-4">
                            About us
                        </Button>
                        <Button className="text-white text-xs md:text-sm px-3 md:px-4">Talk to sales</Button>
                    </div>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-[#0070C0] py-6 md:py-12">
                <div className="container px-4 md:px-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-white">Our Contact Information</h2>
                    <p className="mb-3 md:mb-4 text-sm md:text-base text-white/80">Reach us with the following:</p>
                    
                    {/* Mobile View */}
                    <div className="flex flex-col space-y-4 md:hidden">
                        <div className="flex items-center gap-2">
                            <IoIosCall className="text-white w-4 h-4" />
                            <p className="text-white text-xs">+91-9822384075/8329008308</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoMdMail className="text-white w-4 h-4" />
                            <p className="text-white text-xs">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <FaLocationDot className="text-white mt-1 w-4 h-4" />
                            <p className="text-white text-xs">Plot No.8, Kakoda Industrial Estate, Curchorem, Goa-403706, India</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <FaLocationDot className="text-white mt-1 w-4 h-4" />
                            <p className="text-white text-xs">Shed No. 2, Sy No. 45, Attibele, Muthanandra Village, Bangalore, Karnataka - 562107, India</p>
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:grid grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <IoIosCall className="text-white w-5 h-5" />
                                <p className="text-white text-sm">+91-9822384075/8329008308</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoMdMail className="text-white w-5 h-5" />
                                <p className="text-white text-sm">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaLocationDot className="text-white mt-1 w-5 h-5" />
                                <p className="text-white text-sm">Plot No.8, Kakoda Industrial Estate, Curchorem, Goa-403706, India</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <FaLocationDot className="text-white mt-1 w-5 h-5" />
                                <p className="text-white text-sm">Shed No. 2, Sy No. 45, Attibele, Muthanandra Village, Bangalore, Karnataka - 562107, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Office Locations */}
            <div className="container px-4 md:px-8 py-8 md:py-12">
                <div className="space-y-8 md:space-y-12">
                    {/* Head Office */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-900">Head Office (Goa)</h2>
                            <div className="space-y-3 md:space-y-4">
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#FF0000] text-xs uppercase tracking-wide">ADDRESS</h3>
                                    <p className="text-xs md:text-sm text-gray-700">Fluidmac Fluid Industries<br />Plot No.8, Kakoda Industrial Estate, Curchorem, Goa-403706, India</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#FF0000] text-xs uppercase tracking-wide">TELEPHONE</h3>
                                    <p className="text-xs md:text-sm text-gray-700">+91-9822384075/8329008308</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#FF0000] text-xs uppercase tracking-wide">EMAIL</h3>
                                    <p className="text-xs md:text-sm text-gray-700">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <Image 
                                src="/images/contact-us/goa-office-1.jpg" 
                                alt="Goa Office" 
                                width={400} 
                                height={300}
                                className="rounded-lg w-full"
                            />
                            <Image 
                                src="/images/contact-us/goa-office-2.jpg" 
                                alt="Goa Office" 
                                width={400} 
                                height={300}
                                className="rounded-lg w-full"
                            />
                        </div>
                    </div>

                    {/* Other Offices */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-900">Other Offices (Bangalore)</h2>
                            <div className="space-y-3 md:space-y-4">
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#FF0000] text-xs uppercase tracking-wide">ADDRESS</h3>
                                    <p className="text-xs md:text-sm text-gray-700">Shed No. 2, Sy No. 45, Attibele, Muthanandra Village,<br />Bangalore, Karnataka - 562107, India</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#FF0000] text-xs uppercase tracking-wide">TELEPHONE</h3>
                                    <p className="text-xs md:text-sm text-gray-700">+91-9822384075/8329008308</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#FF0000] text-xs uppercase tracking-wide">EMAIL</h3>
                                    <p className="text-xs md:text-sm text-gray-700">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <Image 
                                src="/images/contact-us/bangalore-office-1.jpg" 
                                alt="Bangalore Office" 
                                width={400} 
                                height={300}
                                className="rounded-lg w-full"
                            />
                            <Image 
                                src="/images/contact-us/bangalore-office-2.jpg" 
                                alt="Bangalore Office" 
                                width={400} 
                                height={300}
                                className="rounded-lg w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
