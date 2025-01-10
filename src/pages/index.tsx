import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <Image
          src="/images/index/logo/fluidmac-logo.png"
          alt="FluidMAC Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <button className="text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8">
        <div className="relative mb-8">
          <Image
            src="/images/index/hero/hero-collage.png"
            alt="Collage of hydraulic components and solutions"
            width={800}
            height={400}
            className="w-full object-cover rounded-lg"
            priority
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/index/hero/25-years-logo.png"
              alt="25 years of excellence"
              width={200}
              height={100}
              className="mx-auto object-contain"
              priority
            />
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Fluidmac has been at the forefront of fluid conveyance solutions, proudly serving industries with top-notch hydraulic hose assemblies, tube assemblies, and fittings. Renowned for excellence, we're your go-to source for precision engineered hydraulic components that keep the world moving smoothly.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full border border-blue-600">
            About us
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
            Talk to sales
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 py-8 bg-gray-50">
        <h3 className="text-xl font-semibold mb-6">Our products</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/images/index/products/hose-assemblies.png"
              alt="Hose Assemblies"
              width={150}
              height={150}
              className="w-full object-cover mb-4"
            />
            <button className="text-red-600 text-sm flex items-center">
              Learn more
              <span className="ml-2">→</span>
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/images/index/products/tube-assemblies.png"
              alt="Tube Assemblies"
              width={150}
              height={150}
              className="w-full object-cover mb-4"
            />
            <button className="text-red-600 text-sm flex items-center">
              Learn more
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 py-8">
        <h3 className="text-center text-blue-600 text-lg mb-6">
          Trusted by some Of the Best leading organizations
        </h3>
        <div className="mb-6">
          <Image
            src="/images/index/partners/partners.png"
            alt="Our trusted partners including Ammann, Liebherr, Terex, Schwing, Aquarius, Bemi, and Construction"
            width={800}
            height={200}
            className="w-full object-contain"
          />
        </div>
        
      </section>

      {/* OEM Section */}
      <section className="px-4 py-8">
        <div className="relative mb-6">
          <Image
            src="/images/index/machinery/machinery-collage.png"
            alt="Machinery"
            width={400}
            height={200}
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h4 className="text-red-600 font-semibold mb-2">WHO ARE WE ?</h4>
          <h3 className="text-xl font-bold mb-4">O.E.M Experts</h3>
          <p className="text-gray-600 text-sm mb-4">
            For the last 25 years, we've built strong and productive relationships with OEM's across the country, and pride ourselves on providing the industry's best service and support. Our production capabilities allow us to support our OEM customers with high-volume, fully customized hydraulic assemblies and kits, designed specifically for their unique requirements.
          </p>
          <button className="text-red-600 text-sm">More info</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-8">
        <Image
          src="/images/index/footer/footer-logo.png"
          alt="FluidMAC"
          width={150}
          height={50}
          className="mb-6"
        />
        <p className="text-sm text-gray-400 mb-4">
          Plot#8, Kakoda Industrial Estate,
          <br />
          Curchorem, Goa - 403706
        </p>
        
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-red-600 mb-4">QUICK LINKS</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-red-600 mb-4">FOLLOW US</h5>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-red-600 mb-4">INFORMATION</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Condition</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-800">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full mb-4">
            Talk to sales
          </button>
          <p className="text-sm text-gray-400">
            Copyright © 2024 Fluidmac All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  )
}
