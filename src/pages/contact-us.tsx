import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function ContactUsPage() {
	return (
		<>
			<Header />
			<main className="container pb-16 md:pb-32">
				<section className="py-8 lg:py-16">
					<div className="mb-8">
						<div className="flex justify-between items-start">
							<div>
								<span className="text-red-500 font-bold text-sm lg:text-xl tracking-widest">GET STARTED</span>
								<h1 className="text-blue-500 text-3xl lg:text-6xl font-bold mt-2">
									Get in touch with us.
									<br />
									We're here to assist you.
								</h1>
							</div>
							<div className="flex flex-col gap-4">
								<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
									<FaFacebookF className="text-gray-600" />
								</a>
								<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
									<FaLinkedinIn className="text-gray-600" />
								</a>
							</div>
						</div>
					</div>

					<div className="bg-[#0066CC] text-white rounded-[20px] p-8 lg:p-12 mb-16 relative overflow-hidden">
						{/* Decorative Elements */}
						{/* <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-white/10 translate-x-1/3 -translate-y-1/3" />
						<div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full bg-white/5 translate-x-1/4 translate-y-1/4" /> */}

						<div className="absolute right-0 bottom-0 w-[250px] md:w-[350px] lg:w-[496px] h-auto">
						<svg className="w-full h-auto" viewBox="0 0 496 296" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
<g clip-path="url(#clip0_257_45)">
<circle cx="268.974" cy="315.021" r="198.624" fill="white" fill-opacity="0.12"/>
<circle cx="130.897" cy="179.897" r="101.897" fill="#FFF9F9" fill-opacity="0.13"/>
</g>
<defs>
<clipPath id="clip0_257_45">
<rect width="496" height="296" fill="white"/>
</clipPath>
</defs>
</svg>
						</div>
						
						<div className="relative lg:min-h-[400px] flex flex-col lg:flex-row md:items-center">
							<div className="lg:w-1/3 lg:h-full flex md:items-center">
								<h2 className="text-[24px] md:text-[32px] font-bold leading-tight md:max-w-[100px] text-left">
									Our Contact Information
								</h2>
							</div>
							
							<div className="lg:w-2/3 lg:pl-12">
								<p className="text-base opacity-90 mb-8">Reach us with the following</p>
								<div className="space-y-6">
									<a href="tel:+918329008308" className="flex items-center gap-3 hover:opacity-90">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
											<path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
										</svg>
										+91-9822384075/8329008308
									</a>
									<a href="mailto:sales@fluidmac.in" className="flex items-center gap-3 hover:opacity-90">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
											<path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
										sales@fluidmac.in/pp.abhijit@fluidmac.in
									</a>
									<div className="flex items-start gap-3">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
											<path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="white" strokeWidth="1.5"/>
											<path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="white" strokeWidth="1.5"/>
										</svg>
										<div>
											<p>Fluidmac Hose Industries</p>
											<p>Plot No.8, Kakoda Industrial Estate,</p>
											<p>Curchorem, Goa-403706, India</p>
										</div>
									</div>
									<div className="flex items-start gap-3">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
											<path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="white" strokeWidth="1.5"/>
											<path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="white" strokeWidth="1.5"/>
										</svg>
										<div>
											<p>Shed No. 2, Sy No. 64, Attibele,</p>
											<p>Muthanandra Village, Bangalore,</p>
											<p>Karnataka – 562107, India</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-12">
						<div> 
							<h2 className="text-[#0066CC] text-2xl md:text-4x lg:text-3xl font-bold mb-4">Head Office (Goa)</h2>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-4">
									<div>
										<h3 className="text-[#FF0000] text-sm font-bold mb-2">ADDRESS</h3>
										<p className="font-mdeium text-sm">Fluidmac Hose Industries</p>
										<p className="font-medium text-sm">Plot No.8, Kakoda Industrial Estate, Curchorem, Goa-403706, India</p>
									</div>
									<div>
										<h3 className="text-[#FF0000] text-sm font-bold mb-2">TELEPHONE</h3>
										<p className="font-medium text-sm">+91-9822384075/8329008308</p>
									</div>
									<div>
										<h3 className="text-[#FF0000] text-sm font-bold mb-2">EMAIL</h3>
										<p className="font-medium text-sm">sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
									</div>
								</div>
								<div className="grid">
									<img src="/images/contact-us/head_office_goa.png" alt="Head Office Goa" className="w-full object-contain" />
								</div>
							</div>
						</div>

						<div>
							
							<div className="grid md:grid-cols-2 gap-8">
							<div >
									<img src="/images/contact-us/other_offices.png" alt="Other Office Bangalore" className="w-full object-contain" />
								</div>
								<div className="space-y-4">
								<h2 className="text-[#0066CC] text-2xl md:text-4x lg:text-3xl font-bold mb-4">Other Offices (Bangalore)</h2>
									<div>
										<h3 className="text-red-500 font-bold mb-2">ADDRESS</h3>
										<p>Shed No. 2, Sy No. 64, Attibele,</p>
										<p>Muthanandra Village, Bangalore, Karnataka – 562107, India</p>
									</div>
									<div>
										<h3 className="text-red-500 font-bold mb-2">TELEPHONE</h3>
										<p>+91-9822384075/8329008308</p>
									</div>
									<div>
										<h3 className="text-red-500 font-bold mb-2">EMAIL</h3>
										<p>sales@fluidmac.in/pp.abhijit@fluidmac.in</p>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
