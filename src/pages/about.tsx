import { Header } from "@/components/header";  
import { Footer } from "@/components/footer";
import { ContactCard } from "@/components/contact-card";

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main>
        

        {/* About Section */}
        <section className="bg-white py-12 lg:py-24">
          <div className="container">
            <h1 className="text-3xl lg:text-6xl text-blue-500 font-semibold mb-12 text-center">
              About
            </h1>
            
            <div className="bg-blue-50 p-6 lg:p-12 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Left Column */}
                <div className="text-center lg:text-left">
                  <h2 className="text-red-500 font-bold mb-4 lg:text-1xl">EARLY BEGINNINGS</h2>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-blue-500">
                    Started In <span className="text-red-500">1999</span> By 3 
                    Enterprising Engineers, Today A <span className="text-red-500">LEADING PLAYER</span>
                  </h3>
                  <p className="text-gray-700">
                    FluidMAC was established in 1999 at Kakoda, Goa, and has built its reputation as one of the 
                    premier manufacturer and distributor of fluid conveyance products, specifically hydraulic 
                    hose assemblies, tube assemblies, and hydraulic fittings & components.
                  </p>
                </div>

                {/* Center Column */}
                <div className="flex justify-center items-center">
                  <img 
                    src="/about/desktop/25_years.png"
                    alt="25 Years Anniversary"
                    className="hidden lg:block max-w-[200px]"
                  />
                  <img 
                    src="/about/mobile/25_years.png"
                    alt="25 Years Anniversary"
                    className="lg:hidden max-w-[150px]"
                  />
                </div>

                {/* Right Column */}
                <div className="flex justify-center items-center">
                  <img 
                    src="/about/desktop/fluidmac.png"
                    alt="25 Years Anniversary"
                    className="hidden lg:block max-w-[400px] w-full"
                  />
                  <img 
                    src="/about/mobile/fluid_mac.png"
                    alt="25 Years Anniversary"
                    className="lg:hidden max-w-[300px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conception */}
        <section className="py-12 lg:py-24">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
              <h2 className="text-blue-500 text-2xl lg:text-4xl font-bold mb-4 text-center">
              Conception
              </h2> 
              <p className="text-lg mb-4 text-center">
              Fluid power plays an all critical role in economic development, given the convergence of contemporary automation & motion control technologies. The realization that hoses & tubes are virtually the "arteries of power" especially hydraulic power, all across the global industry sector propelled 3 enterprising engineers to be part of this economic revolution in 1999.
              </p>
            </div>
            <div>
              <img
                src="/about/desktop/humble_beginings.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full hidden lg:block"
              />
              <img 
                src="/about/mobile/humble beginnings.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full lg:hidden"
              />
            </div>
           
          </div>
        </section>

        {/* Expansion */}
        <section className="py-12 lg:py-24">
        <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-8 text-center">
              Expansion
            </h2>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
              <img
                src="/about/desktop/expansion_team&facility.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full hidden lg:block"
              />
              <img 
                src="/about/mobile/expansion_team_and_facility.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full lg:hidden"
              />
            </div>
            <div>
              <img
                src="/about/desktop/expansion_expanded_ops.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full hidden lg:block"
              />
              <img 
                src="/about/mobile/expansion_expanded_ops.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full lg:hidden"
              />
            </div>
           
          </div>
         <div className="container items-center">
         <p className="text-medium mb-4 text-center px-4 lg:px-14 py-4 lg:py-12">
         With fast expanding footprint right across India, FluidMAC Hose Industries began in 2007, a new generation company with increased production capacity & multi-functional capabilities to serve not only the retail after market but also contract manufacturing & export business segments.
          </p>
         </div>
        </section>

        {/* Growth */}
        <section className="py-12 lg:py-24">
        <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-8 text-center">
              Growth
            </h2>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
              <img
                src="/about/desktop/growth_2_floors_added.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full hidden lg:block"
              />
              <img 
                src="/about/mobile/growth_2013_2_floors.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full lg:hidden"
              />
            </div>
            <div>
              <img
                src="/about/desktop/growth_excon.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full hidden lg:block"
              />
              <img 
                src="/about/mobile/growth_excon_2019.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full lg:hidden"
              />
            </div>
           
          </div>
         <div className="container items-center">
         <p className="text-medium mb-4 text-center px-4 lg:px-14 py-4 lg:py-12">
         With their professional standing as their only seed capital, they began with local services in Goa predominantly catering to the mining sector.  Owing to their strong sense of quality & corporate values, FluidMAC grew rapidly to become a premier name in designing, manufacturing of fluid conveyance products.
          </p>
         </div>
        </section>

        {/* Bangalore unit */}
        <section className="py-12 lg:py-24">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
              <img
                src="/about/desktop/Blr_unit.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full hidden lg:block"
              />
              <img 
                src="/about/mobile/Blr unit.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full lg:hidden"
              />
            </div>
          <div>
              <h2 className="text-blue-500 text-2xl lg:text-4xl font-bold mb-4 text-center">
              Bangalore Unit
              </h2> 
              <p className="text-lg mb-4 text-center">
              We're excited to announce the opening of our new manufacturing unit in Attibele, Bangalore! This facility is designed to better serve our local OEM customers, enhancing our capacity to deliver high-quality products and solutions tailored to their needs. With this strategic move, we aim to strengthen our partnerships and support the growing demand in the region.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Vision Section */}
        <section className="bg-white py-12 lg:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                {/* Mission */}
                <div>
                  <div className="flex flex-col items-start mb-2">
                    <img 
                      src="/about/target.png" 
                      alt="Mission" 
                      className="w-6 h-6 mb-1"
                    />
                    <h2 className="text-lg text-red-500 font-semibold">MISSION</h2>
                  </div>
                  <ul className="space-y-1 text-gray-800 text-sm">
                    <li>To be the "Premier" producer and supplier of complete hose & tubing solutions.</li>
                    <li>To always stay ahead of customer expectations and market challenges.</li>
                    <li>To follow best business practices.</li>
                  </ul>
                </div>

                {/* Vision */}
                <div>
                  <div className="flex flex-col items-start mb-2">
                    <img 
                      src="/about/eye.png" 
                      alt="Vision" 
                      className="w-6 h-6 mb-1"
                    />
                    <h2 className="text-lg text-red-500 font-semibold">VISION</h2>
                  </div>
                  <p className="text-gray-800 text-sm">
                    Highly evolved Fluid conveying systems enabling advanced use of fluid power aiding rapid acceleration of economic development around the world.
                  </p>
                </div>

                {/* Core Values */}
                <div>
                  <div className="flex flex-col items-start mb-2">
                    <img 
                      src="/about/hand.png" 
                      alt="Core Values" 
                      className="w-6 h-6 mb-1"
                    />
                    <h2 className="text-lg text-red-500 font-semibold">CORE VALUES</h2>
                  </div>
                  <p className="text-gray-800 text-sm">
                    QUALITY DRIVEN, INNOVATION, LEADERSHIP
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center items-center">
                <img 
                  src="/about/desktop/group_pic.png"
                  alt="Team Group Photo"
                  className="hidden lg:block w-full rounded-lg shadow-lg"
                />
                <img 
                  src="/about/mobile/group_pic.png"
                  alt="Team Group Photo"
                  className="lg:hidden w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <div className="px-6 py-8 lg:px-10 lg:py-12">
          <ContactCard />
        </div>
      </main>
      <Footer />
    </>
  );
}