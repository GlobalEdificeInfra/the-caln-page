import { useState } from "react";
import Header from "@/components/Header";
import FooterBar from "@/components/sections/FooterBar";
import Contact from "@/components/sections/Contact";
import greenBg from "@/assets/Green BG.jpg";
import creamBg from "@/assets/Cream BG.png";
import aerialNight from "@/assets/Aerial_Night.jpeg";
import project1 from "@/projects/WhatsApp Image 2025-11-24 at 6.10.28 PM.jpeg";
import project2 from "@/projects/WhatsApp Image 2025-11-24 at 6.10.28 PM (1).jpeg";
import project3 from "@/projects/WhatsApp Image 2025-11-24 at 6.10.28 PM (2).jpeg";
import project4 from "@/projects/WhatsApp Image 2025-11-24 at 6.10.29 PM.jpeg";
import project5 from "@/projects/WhatsApp Image 2025-11-24 at 6.10.29 PM (1).jpeg";

// Month-wise progress data
const progressData = [
  {
    month: "November 2025",
    status: "In Progress",
    completion: 15,
    milestones: [
      "Foundation work completed for Tower A",
      "Excavation work in progress for Tower B",
      "Boundary wall construction ongoing",
      "Site office and labor quarters established",
    ],
  },
  {
    month: "October 2025",
    status: "Completed",
    completion: 12,
    milestones: [
      "Land clearance and leveling completed",
      "Soil testing and foundation design finalized",
      "Construction permits obtained",
      "Ground breaking ceremony conducted",
    ],
  },
  {
    month: "September 2025",
    status: "Completed",
    completion: 8,
    milestones: [
      "Project launch and sales commencement",
      "Architectural designs approved",
      "Environmental clearances obtained",
      "Vendor partnerships finalized",
    ],
  },
  {
    month: "August 2025",
    status: "Completed",
    completion: 5,
    milestones: [
      "Land acquisition completed",
      "Master plan design finalized",
      "RERA registration initiated",
      "Initial marketing activities started",
    ],
  },
];

const ProjectStatus = () => {
  const [selectedMonth, setSelectedMonth] = useState(progressData[0].month);

  const projectImages = [
    { image: project1 },
    { image: project2 },
    { image: project3 },
    { image: project4 },
    { image: project5 },
  ];

  const currentProgress = progressData.find(p => p.month === selectedMonth) || progressData[0];

  return (
    <div className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Header />
      
      <main className="pt-16 md:pt-20 overflow-x-hidden w-full">
        {/* Section 1: Hero - Project Status */}
        <section 
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end overflow-hidden"
          style={{
            backgroundImage: `url(${aerialNight})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 w-full">
            <div className="mx-auto w-full max-w-[1600px]">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white ">
                TIMELINE PROGRESS
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Dropdowns and Images - Green BG */}
        <section 
          className="py-10 md:py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            {/* Title and Description */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-luxury-gold mb-4 md:mb-6 uppercase  ">
                Timeline Progress
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                Track the progress of the project month by month.
              </p>
            </div>

            {/* 3 Column Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {projectImages.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <img 
                    src={item.image} 
                    alt={`Project progress ${index + 1}`} 
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Month-wise Progress Section - Commented out for now */}
            {/*
            <div className="mt-16 md:mt-20 lg:mt-24">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-luxury-gold text-center mb-8 md:mb-12">
                Month-wise Progress
              </h3>

              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
                {progressData.map((item) => (
                  <button
                    key={item.month}
                    onClick={() => setSelectedMonth(item.month)}
                    className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-sans text-sm md:text-base transition-all duration-300 ${
                      selectedMonth === item.month
                        ? "bg-luxury-gold text-white shadow-lg"
                        : "bg-white/10 text-white/80 hover:bg-white/20 border border-luxury-gold/50"
                    }`}
                  >
                    {item.month}
                  </button>
                ))}
              </div>

              <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-luxury-gold/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
                  <div>
                    <h4 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-2">
                      {currentProgress.month}
                    </h4>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      currentProgress.status === "In Progress" 
                        ? "bg-yellow-500/20 text-yellow-300" 
                        : "bg-green-500/20 text-green-300"
                    }`}>
                      {currentProgress.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:w-1/2">
                    <div className="flex justify-between text-sm text-white/80 mb-2">
                      <span>Overall Completion</span>
                      <span className="text-luxury-gold font-semibold">{currentProgress.completion}%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-luxury-gold to-yellow-400 rounded-full transition-all duration-500"
                        style={{ width: `${currentProgress.completion}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-serif text-lg md:text-xl text-white mb-4">Key Milestones</h5>
                  <ul className="space-y-3">
                    {currentProgress.milestones.map((milestone, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-white/90"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-luxury-gold/20 border border-luxury-gold flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-luxury-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="font-sans text-sm md:text-base">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-luxury-gold/30 transform md:-translate-x-1/2" />
                  
                  <div className="space-y-8 md:space-y-12">
                    {progressData.map((item, index) => (
                      <div 
                        key={item.month}
                        className={`relative flex items-center ${
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-luxury-gold border-4 border-luxury-green transform -translate-x-1/2 z-10" />
                        
                        <div className={`ml-12 md:ml-0 md:w-1/2 ${
                          index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                        }`}>
                          <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-luxury-gold/20 ${
                            selectedMonth === item.month ? "ring-2 ring-luxury-gold" : ""
                          }`}>
                            <h5 className="font-serif text-lg md:text-xl text-luxury-gold mb-1">{item.month}</h5>
                            <p className="text-white/70 text-sm">{item.completion}% Complete</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            */}
            </div>
        
        </section>

        {/* Section 2.5: Cream Background Buffer */}
        <section 
          className="py-10 md:py-20 overflow-hidden"
          style={{
            backgroundImage: `url(${creamBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
            <div className="text-center px-2">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-800 uppercase mb-4 md:mb-6">
                Witness The <span className="text-luxury-gold">Progress</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Stay updated with the latest developments at The Clan. Our commitment to transparency ensures you're 
                always informed about the progress of your future home. Every milestone brings us closer to delivering 
                the lifestyle you deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Us */}
        <Contact />
      </main>

      {/* Section 4: Footer */}
      <FooterBar />
    </div>
  );
};

export default ProjectStatus;

