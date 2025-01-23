import React from "react";
import TopBar from "./components/top-bar";
import PageHeader from "./components/page-header";
import Footer from "./components/footer";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
    return (
        <div>
            <TopBar />
            <PageHeader />
            
            {/* Hero Section */}
            <div className="container py-8 md:py-12">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch With Us.</h1>
                    <p className="text-lg text-gray-600">We're Here To Assist You.</p>
                    <div className="flex gap-3 md:gap-4">
                        <Link href="https://facebook.com" target="_blank" className="text-gray-700 hover:text-[#FF0000] transition-colors">
                            <FaFacebookF size={20} className="w-5 h-5 md:w-6 md:h-6" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-gray-700 hover:text-[#FF0000] transition-colors">
                            <FaLinkedinIn size={20} className="w-5 h-5 md:w-6 md:h-6" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-[#FFEDED] py-8 md:py-12">
                <div className="container">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8">Our Contact Information</h2>
                    <p className="mb-4 text-gray-600">Reach us with the following:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-center gap-2 md:gap-3">
                                <IoIosCall className="text-[#FF0000] w-5 h-5 md:w-6 md:h-6" size={20} />
                                <p className="text-gray-800 text-sm md:text-base">+91-9822384075/8329008308</p>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <IoMdMail className="text-[#FF0000] w-5 h-5 md:w-6 md:h-6" size={20} />
                                <p className="text-gray-800 text-sm md:text-base">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-3">
                                <FaLocationDot className="text-[#FF0000] mt-1 w-5 h-5 md:w-6 md:h-6" size={20} />
                                <p className="text-gray-800 text-sm md:text-base">Plot No.8, Kakoda Industrial Estate, Curchorem, Goa-403706, India</p>
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start gap-2 md:gap-3">
                                <FaLocationDot className="text-[#FF0000] mt-1 w-5 h-5 md:w-6 md:h-6" size={20} />
                                <p className="text-gray-800 text-sm md:text-base">Shed No. 2, Sy No. 45, Attibele, Muthanandra Village, Bangalore, Karnataka - 562107, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Office Locations */}
            <div className="container py-12">
                <div className="space-y-12">
                    {/* Head Office */}
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-gray-900">Head Office (Goa)</h2>
                        <div className="space-y-4 md:space-y-6">
                            <div className="space-y-1 md:space-y-2">
                                <h3 className="font-medium text-[#FF0000] text-xs md:text-sm">ADDRESS</h3>
                                <p className="text-gray-700 text-sm md:text-base">Fluidmac Fluid Industries<br />Plot No.8, Kakoda Industrial Estate, Curchorem, Goa-403706, India</p>
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <h3 className="font-medium text-[#FF0000] text-xs md:text-sm">TELEPHONE</h3>
                                <p className="text-gray-700 text-sm md:text-base">+91-9822384075/8329008308</p>
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <h3 className="font-medium text-[#FF0000] text-xs md:text-sm">EMAIL</h3>
                                <p className="text-gray-700 text-sm md:text-base">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <Image 
                                    src="/images/contact/goa-office-1.jpg" 
                                    alt="Goa Office" 
                                    width={400} 
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Image 
                                    src="/images/contact/goa-office-2.jpg" 
                                    alt="Goa Office" 
                                    width={400} 
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Other Offices */}
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-gray-900">Other Offices (Bangalore)</h2>
                        <div className="space-y-4 md:space-y-6">
                            <div className="space-y-1 md:space-y-2">
                                <h3 className="font-medium text-[#FF0000] text-xs md:text-sm">ADDRESS</h3>
                                <p className="text-gray-700 text-sm md:text-base">Shed No. 2, Sy No. 45, Attibele, Muthanandra Village,<br />Bangalore, Karnataka - 562107, India</p>
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <h3 className="font-medium text-[#FF0000] text-xs md:text-sm">TELEPHONE</h3>
                                <p className="text-gray-700 text-sm md:text-base">+91-9822384075/8329008308</p>
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <h3 className="font-medium text-[#FF0000] text-xs md:text-sm">EMAIL</h3>
                                <p className="text-gray-700 text-sm md:text-base">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <Image 
                                    src="/images/contact/bangalore-office-1.jpg" 
                                    alt="Bangalore Office" 
                                    width={400} 
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                                <Image 
                                    src="/images/contact/bangalore-office-2.jpg" 
                                    alt="Bangalore Office" 
                                    width={400} 
                                    height={300}
                                    className="rounded-lg w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
