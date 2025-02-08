export default function ExperienceSection() {
    const experiences = [
      {
        title: "Technical Consultant",
        company: "ManageEngine",
        date: "Sep 2024 – Jan 2025",
        responsibilities: [
          "Provided technical demonstrations of IT management software to potential clients.",
          "Assisted customers in implementing ManageEngine solutions for IT infrastructure monitoring.",
          "Developed documentation and trained clients on product features and best practices.",
        ],
      },
      {
        title: "Youth Development Coach III",
        company: "Texas Juvenile Justice Department",
        date: "Aug 2021 – Dec 2021",
        responsibilities: [
          "Provided direct supervision and care for offending youth in a residential correctional facility.",
          "Implemented intervention methods for behavior correction.",
          "Developed strong communication and conflict resolution skills.",
        ],
      },
      {
        title: "Boilermaker Mechanic Leadman",
        company: "Koch Specialty Plant Services",
        date: "Oct 2014 – May 2022",
        responsibilities: [
          "Managed a working crew and maintained direct communication with foremen and project managers.",
          "Accurately interpreted and executed distillation column blueprints and written instructions.",
          "Identified and addressed potential issues within the job scope in collaboration with plant engineers.",
          "Supervised work orders for entire structures from initiation to completion.",
          "Performed confined space entries for the removal and installation of critical components.",
          "Developed a strong sense of accountability and attention to detail.",
        ],
      },
    ];
  
    return (
      <section id="experience" className="w-full px-4 py-12 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>
  
        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline View */}
          <div className="hidden sm:block border-l-4 border-blue-500 pl-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold">{exp.title}</h2>
                <p className="text-lg text-gray-300">{exp.company}</p>
                <p className="text-md text-gray-400 italic">{exp.date}</p>
                <ul className="mt-2 list-disc pl-5 text-gray-300">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Mobile Stacked Card View */}
          <div className="sm:hidden space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">{exp.title}</h2>
                <p className="text-lg text-gray-300">{exp.company}</p>
                <p className="text-md text-gray-400 italic">{exp.date}</p>
                <ul className="mt-2 list-disc pl-5 text-gray-300">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  