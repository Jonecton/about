import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div className="h-screen pl-1 sm:pl-4 overflow-y-scroll snap-y snap-mandatory scroll-smooth font-outfit text-lg font-extralight">
      <section id="home" className="h-screen w-full flex flex-col justify-center text-white snap-start space-y-2 sm:space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-medium">Jonathan <span className="text-black">Ecton</span></h1>
        <p className="text-black">Edinburg, TX · <a className="underline text-white"href="mailto:jonecton@gmail.com">jonecton@gmail.com</a></p>
        <p className="">B.S, Computer Science, 12.2023</p>
        <p className="">University of Texas, Rio Grande Valley</p>
      </section>

      <section id="about" className="h-screen w-full flex flex-col justify-center sm:items-center text-white snap-start">
        <h1 className="text-3xl font-semibold text-left sm:text-center sm:text-4xl">
          Hello, I'm <span className="text-black">Jon</span>, an aspiring software engineer from South Texas.
        </h1>
        <div className="mt-6 sm:max-w-3xl text-left sm:text-center">
          <p className="sm:text-2xl">
            Hello, my name is Jonathan Ecton, and I am a computer science graduate from the University of Texas Rio Grande Valley. 
            I am passionate about technology and enjoy learning new programming languages and frameworks. 
            In my free time, I like to work on personal projects and contribute to open source. 
            I am always looking for new challenges and opportunities to grow as a developer.
          </p>
        </div>
      </section>

      <section id="education" className="h-screen w-full flex flex-col justify-center sm:px-4 text-white snap-start">
      {/* Title */}
        <h1 className="sm:text-4xl text-3xl font-semibold sm:mb-8 text-left text-center hidden sm:block">Education</h1>

      {/* Timeline Container */}
        <div className="relative max-w-5xl sm:border-l-4 sm:border-blue-500 sm:pl-6">
        {/* UTRGV */}
          <div className="mb-1 sm:mb-8 sm:ml-6">
            <h2 className="text-2xl font-bold">
            <span className="sm:hidden">B.S. Computer Science</span> 
            <span className="hidden sm:inline">Bachelor of Science in Computer Science</span> 
          </h2>
          <p className="text-lg text-gray-300">
            <span className="sm:hidden">UT Rio Grande Valley Edinburg TX</span> {/* Mobile version */}
            <span className="hidden sm:inline">University of Texas Rio Grande Valley, Edinburg TX</span> {/* Desktop version */}
          </p>
          <p className="text-lg text-gray-300">December 2023</p>
          <p className="text-lg text-gray-300">GPA: 3.52</p>
          {/* Relevant Courses */}
          <div className="mt-1 sm:mt-4 bg-gray-800 p-2 sm:p-4 rounded-lg mr-1 sm:mr-0">
            <h3 className="text-lg font-semibold text-blue-300">Relevant Coursework</h3>
            <ul className="list-disc pl-5 text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-2">
              <li>Software Engineering 1 & 2</li>
              <li>Data Structures & Algorithms</li>
              <li className="hidden sm:list-item">Automata</li> 
              <li>Operating Systems</li>
              <li>
                <span className="sm:hidden">OOP in Java</span> {/* Mobile version */}
                <span className="hidden sm:inline">Object-Oriented Programming in Java</span> {/* Desktop version */}
              </li>
              <li>
                <span className="sm:hidden">Org of Program Languages</span> {/* Mobile version */}
                <span className="hidden sm:inline">Organization of Programming Languages</span> {/* Desktop version */}
              </li>
              <li>UX/UI Design</li>
              <li className="hidden sm:list-item">Digital Systems Engineering</li> {/* Hidden on mobile */}
            </ul>
          </div>
        </div>


    {/* South Texas College */}
        <div className="mb-8 sm:ml-6">
          <h2 className="text-2xl font-bold">
            <span className="sm:hidden">A.S. Computer Science</span> 
            <span className="hidden sm:inline">Associate of Science in Computer Science</span> 
          </h2>
          <p className="text-lg text-gray-300">South Texas College, McAllen TX</p>
          <p className="text-lg text-gray-300">December 2022</p>
          <p className="text-lg text-gray-300">Major GPA: 4.0</p>
          {/* Relevant Courses */}
          <div className="mt-1 sm:mt-4 bg-gray-800 p-2 sm:p-4 rounded-lg mr-1 sm:mr-0">
            <h3 className="text-lg font-semibold text-blue-300">Relevant Coursework</h3>
            <ul className="list-disc pl-5 text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>
                <span className="sm:hidden">Program Fundamentals I,II,III</span> {/* Mobile version */}
                <span className="hidden sm:inline">Programming Fundamentals 1, 2, & 3</span> {/* Desktop version */}
              </li>
              <li>C Programming in Linux</li>
              <li>
                <span className="sm:hidden">Assembly Programming</span> {/* Mobile version */}
                <span className="hidden sm:inline">Computer Organization (Assembly Programming)</span> {/* Desktop version */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


      <section id="skills" className="h-screen w-full flex items-center text-white snap-start">
      <SkillsSection />
      </section>

      <section id="projects" className="h-screen w-full flex items-center text-white snap-start">
        <h1 className="text-4xl">Projects</h1>
      </section>

      <section id="experience" className="h-screen w-full flex items-center text-white snap-start">
        <h1 className="text-4xl">Experience</h1>
      </section>
    </div>
  );
}
