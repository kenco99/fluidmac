import { Header } from "@/components/header";  
import { Footer } from "@/components/footer";
import { ContactCard } from "@/components/contact-card";

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main className="container pb-16 md:pb-32">
        {/* Hero Section */}
        <section className="bg-white py-12 text-center">
          <div className="container">
            <h1 className="text-3xl lg:[font-size:40px] text-blue-500 font-semibold mb-4">
              Facilities
            </h1>
            <p className="text-lg lg:[font-size:16px] mb-8 mx-auto">
              It is important to trust up in temporary workshops. The satisfactory array of hoses and fittings match internationally organized in multifarious configurations
            </p>
          </div>
        </section>

        {/* Hose Cutting Machines */}
        <section className="py-12">
          <div className="container grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-3">
              <img
                src="/facilities/desktop/uniflex hose cutting machine.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full hidden lg:block"
              />
              <img 
                src="/facilities/mobile/Uniflex_hose_cutting.png"
                alt="Uniflex Hose Cutting Machine"
                className="w-full lg:hidden"
              />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-blue-500 text-2xl lg:text-4xl font-bold mb-4">
                Hose Cutting Machines
              </h2> 
              <p className="text-lg mb-4">
                The warehouse also boasts two hose cutting machines from Manuli Techmaflex and Uniflex, ensuring precision in every cut.
              </p>
            </div>
          </div>
        </section>

        {/* Designated Hose Flushing Machines */}
        <section className="py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
            {/* Left Image */}
            <div className="lg:w-1/4">
              <img
                src="/facilities/desktop/hose flushing and cleaning station 1.png"
                alt="Hose flushing and cleaning station 1"
                className="w-full rounded-lg hidden lg:block"
              />
              <img
                src="/facilities/mobile/hose_flushing_cleaning_1.png"
                alt="Hose flushing and cleaning station 1"
                className="w-full rounded-lg lg:hidden"
              />
            </div>

            {/* Center Text */}
            <div className="lg:w-2/3 text-center">
              <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-8">
                Designated Hose Flushing And Cleaning Stations
              </h2>
              <p className="text-lg">
                To maintain the highest standards, ULTRACLEAN cleaning machines are strategically placed at designated hose flushing and cleaning stations. Every hose and tube assembly produced here meets or exceeds the rigorous NAS 1638 Grade 9 and ISO 4406:2021 standards of cleanliness
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/4">
              <img
                src="/facilities/desktop/hose flushing and cleaning station 2.png"
                alt="Hose flushing and cleaning station 2"
                className="w-full rounded-lg hidden lg:block"
              />
              <img
                src="/facilities/mobile/hose_flushing_cleaning_2.png"
                alt="Hose flushing and cleaning station 2"
                className="w-full rounded-lg lg:hidden"
              />
            </div>
          </div>
        </section>
        
        {/* Crimping Machines */}
        <section className="py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
            {/* Left Image */}
            <div className="lg:w-1/4">
              <img
                src="/facilities/desktop/crimping machine left.png"
                alt="Hose flushing and cleaning station 1"
                className="w-full rounded-lg hidden lg:block"
              />
              <img
                src="/facilities/mobile/crimping_machine_right.png"
                alt="Hose flushing and cleaning station 1"
                className="w-full rounded-lg lg:hidden"
              />
            </div>

            {/* Center Text */}
            <div className="lg:w-2/3 text-center">
              <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-8">
                Crimping machines
              </h2>
              <p className="text-lg text-center">
                This hub of activity is equipped with five state-of-the-art crimping machines:
              </p>
              <ol className="text-lg text-center list-decimal space-y-2 mt-4 list-inside">
                <li>UNIFLEX HM480 ¼" to 3 "ID Spiral Hose & up to 10" industrial hoses</li>
                <li>HM350 ¼" to 2 ½" ID Spiral Hose & upto 5" industrial hoses</li>
                <li>FINN power P32X - ¼" to 2" ID Spiral Hose</li>
                <li>Techmaflex S Crimp 240 PE38</li>
                <li>Techmaflex S Crimp 240 EVO</li>
              </ol>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/4">
              <img
                src="/facilities/desktop/crimping machine right.png"
                alt="Hose flushing and cleaning station 2"
                className="w-full rounded-lg hidden lg:block"
              />
              <img
                src="/facilities/mobile/crimping_machine.png"
                alt="Hose flushing and cleaning station 2"
                className="w-full rounded-lg lg:hidden"
              />
            </div>
          </div>
        </section>

        {/* Testing Machines */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-5xl text-blue-500 font-bold mb-8">
              Testing Machines
            </h2>
            <p className="text-lg lg:[font-size:18px] mb-12 font-normal">
              Safety and durability are paramount, and the facility facilitate fully automated testing machines. Among them is a fully automated SAC-based hose testing machine capable of handling pressures up to 28875 psi, designed by FluidMAC We also designed the hydrostatic hose testing machine to test hoses based on their specifications. Additionally we have Hydraulic pressure testing machine and the fully automatic DTC testing machine
            </p>
            <div className="mb-8">
              <div>
                <img
                  src="/facilities/desktop/testing machines.png"
                  alt="Fully automatic DTC testing machine"
                  className="w-full object-cover rounded-lg mb-2 hidden lg:block"
                />
                <img
                  src="/facilities/mobile/testing_machines.png"
                  alt="Fully automatic DTC testing machine"
                  className="w-full object-cover rounded-lg mb-2 lg:hidden"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Marking and Engraving */}
        <section className="py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
            {/* Left Image */}
            <div className="lg:w-1/4">
              <img
                src="/facilities/desktop/Roll making machine.png"
                alt="Hose flushing and cleaning station 1"
                className="w-full rounded-lg hidden lg:block"
              />
              <img
                src="/facilities/desktop/Roll making machine.png"
                alt="Hose flushing and cleaning station 1"
                className="w-full rounded-lg lg:hidden"
              />
            </div>

            {/* Center Text */}
            <div className="lg:w-2/3 text-center">
              <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-8">
              Marking And Engraving
              </h2>
              <p className="text-lg">
              For meeting and engineering, leak and warning protection marks and tags, dot matrix engraving machines are are hand. Ability to stand with fitting to the extremely working pressures for all specifications are engraved on regular tags
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/4">
              <img
                src="/facilities/desktop/dot matrix engraving.png"
                alt="Hose flushing and cleaning station 2"
                className="w-full rounded-lg hidden lg:block"
              />
              <img
                src="/facilities/mobile/dot_matrix_engraving.png"
                alt="Hose flushing and cleaning station 2"
                className="w-full rounded-lg lg:hidden"
              />
            </div>
          </div>
        </section>
        
        {/* CNC Tube Bending Machine */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-4 text-center">
                  CNC Tube Bending Machine
                </h2>
                <p className="text-lg text-center">
                  Our tube bending cell is equipped with two state-of-the-art CNC Bending Machines that enable us to produce best in class tube bending and assemblies in minimum turnaround times. With the help of our CNC Bending cell, we are capable of handling tubes from 4mm to 42mm OD. Our increased efficiency and safety in tube bending helps us deliver the  innovative solutions to our customers and always exceed their requirements and expectations. We are proud to meet the most intricate demands of the  fluid transfer  technology. 
                </p>
              </div>
              <img
                src="/facilities/desktop/CNC bending.png"
                alt="CNC tube bending machine"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg hidden lg:block"
              />
              <img
                src="/facilities/mobile/cnc_bending.png"
                alt="CNC tube bending machine"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg lg:hidden"
              />
            </div>  
          </div>
        </section>

        {/* Inspection Facilities */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-5xl text-blue-500 font-bold mb-6">
              Inspection Facilities 
            </h2>
            <p className="text-xl lg:[font-size:18px] mb-12 font-normal">
              The quality becomes a state-of-the in GT testing steel equipped with two automated testing machines, including a fully automatic SAC-based hose testing machine, capable of handling pressures up to 20,875 psi, designed by FLUIDMAC We also have the hydrostatic hose testing machine for fitting-end leakage testing. 
            </p>
            <p className="text-xl lg:[font-size:18px] mb-16 font-normal">
              For every new development time, a comprehensive Liquid Particle Inspection, including relevant test certificates and failure reports to ensure quality and performance. Additionally our supplier LPT machine is utilized for sample checks on pipes/ tubes periodic tool monitoring performance. We cater to customized requirements as maintaining the highest industry standards.
            </p>
          </div>  
        </section>
        
        <ContactCard />
      </main>
      <Footer />
    </>
  );
}