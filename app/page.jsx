'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      accent: 'from-sky-500/30 via-blue-500/20 to-purple-500/10',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      accent: 'from-violet-500/30 via-purple-500/20 to-indigo-500/10',
      skills: ['PHP', 'Node.js', 'Express', 'Java', 'MongoDB', 'MySQL'],
    },
    {
      title: 'Tools',
      accent: 'from-emerald-500/30 via-cyan-500/20 to-blue-500/10',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Cursor.AI'],
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Home Section */}
      <section 
      id="home" 
      ref={(el) => (sectionRefs.current.home = el)}
      className="min-h-screen flex items-center bg-primary"
      style={{ backgroundColor: 'primary' }} // Fallback color
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Better padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="order-1 lg:order-1 animate-fade-in">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto profile-photo-glow">  
              <Image
                src="/images/pramira1-1.jpg"
                alt="Pramira Mindula"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
                onError={(e) => {
                  console.error('Image failed to load');
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
          </div>

          {/* Introduction */}
          <div className="order-2 lg:order-2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Pramira Mindula
              </span>
            </h1>
            <p className="text-xl mb-4 text-white">
              A passionate Software Engineering student and a web developer.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              I love building innovative, functional, and user-focused web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>

              <a
                href="/Pramira_Mindula_CV.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={(el) => (sectionRefs.current.about = el)}
        className="min-h-screen py-16 bg-gray-800" // Using standard Tailwind classes as fallback
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div> {/* Using blue-500 as accent fallback */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Photo */}
            <div className="animate-fade-in">
              <div className="relative w-80 h-80 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[36rem] lg:h-[36rem] mx-auto">
                <Image
                  src="/images/Pramira3.png"
                  alt="Pramira Mindula - About"
                  fill
                  className="rounded-2xl object-cover shadow-xl"
                  priority
                  onError={(e) => {
                    console.error('About image failed to load');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-white">Education and Background</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2 text-white">University</h4>
                  <p className="text-white text-m font-bold">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <p className="text-gray-300">BSc (Hons) in Information Technology Specialising in Software Engineering</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2 text-white">School</h4>
                  <p className="text-white text-m font-bold">Central College Kuliyapitiya</p>
                  <p className="text-gray-300">Advanced Level Education</p>
                  <p className="text-gray-300">Ordinary Level Education</p>
                </div>

                <div className="bg-gray-400 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">Passion</h4>
                  <p className="text-gray-800">
                    I'm passionate about web development, software engineering, and creating innovative projects 
                    that solve real-world problems. I enjoy learning new technologies and building applications 
                    that make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section 
        id="resume" 
        ref={(el) => (sectionRefs.current.resume = el)}
        className="section-padding bg-primary"
      >
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#ffffff'}}>Skills & Education</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
            {skillCategories.map(({ title, accent, skills }) => (
              <div key={title} className="fade-in bg-secondary/90 p-8 rounded-2xl shadow-lg card-hover border border-white/5 backdrop-blur-sm">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/80 bg-gradient-to-r ${accent}`}>
                  <span className="h-2 w-2 rounded-full bg-white"></span>
                  {title}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-primary/30 border border-white/10 shadow-inner hover:border-accent/70 transition-colors duration-200"
                    >
                      <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
                      <span className="text-white font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{color: '#ffffff'}}>Education Timeline</h3>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent"></div>
                
                <div className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-6 bg-secondary p-6 rounded-xl shadow-lg">
                    <h4 className="text-lg font-semibold" style={{color: '#ffffff'}}>Sri Lanka Institute of Information Technology</h4>
                    <p className="text-accent font-medium">2023 - Present</p>
                    <p style={{color: '#ffffff'}}>BSc (Hons) in Information Technology <br></br>Specialising in Software Engineering</p>
                  </div>
                </div>

                <div className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-6 bg-secondary p-6 rounded-xl shadow-lg">
                    <h4 className="text-lg font-semibold" style={{color: '#ffffff'}}>Esoft Metro Collage</h4>
                    <p className="text-accent font-medium">2022 - 2023</p>
                    <p style={{color: '#ffffff'}}>Diploma in English</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-6 bg-secondary p-6 rounded-xl shadow-lg">
                    <h4 className="text-lg font-semibold" style={{color: '#ffffff'}}>Central Collage Kuliyapitiya</h4>
                    <p className="text-accent font-medium">2013 - 2022</p>
                    <p style={{color: '#ffffff'}}>Advanced Level Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={(el) => (sectionRefs.current.projects = el)}
        className="section-padding bg-secondary"
      >
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#ffffff'}}>My Projects</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Project 1 */}
            <Link href={`/projects/${"apartment"}`}>
            <div className="fade-in bg-secondary rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <Image
                  src="/images/Apartment-Home.png"
                  alt="Online Apartment Sales System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#ffffff'}}>Online Apartment Sales System</h3>
                <p className="mb-4 text-justify" style={{color: '#ffffff'}}>
                  A basic platform for buying and selling apartments with sessions and  
                  user authentication.<br/> Year One Group Project
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">HTML</span>
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">PHP</span>
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">Javascript</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Project 2 */}
            <Link href={`/projects/${"bridal"}`}>
            <div className="fade-in bg-secondary rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <Image
                  src="/images/Bridal-Home.png"
                  alt="Bridal Dress Renting System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#ffffff'}}>Bridal Dress Renting System</h3>
                <p className="mb-4 text-justify" style={{color: '#ffffff'}}>
                  A web application for dress rental with billing management, session handling, 
                  and inventory tracking for bridal shops.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">HTML</span>
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">PHP</span>
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">JavaScript</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Project 3 */}
            <Link href={`/projects/${"aqualink"}`}>
            <div className="fade-in bg-secondary rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <Image
                  src="/images/AquaLink.png"
                  alt="Ornamental Fish Selling System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{color: '#ffffff'}}>AquaLink</h3>
                <p className="mb-4 text-justify" style={{color: '#ffffff'}}>
                  An inventory management dashboard to manage current stock, item assigning with real-time tracking, 
                  PDF Generation.<br/>
                  Year 2 Semester 2 Group Project
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">MERN Stack</span>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={(el) => (sectionRefs.current.contact = el)}
        className="section-padding bg-primary"
      >
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#ffffff'}}>Get In Touch</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-8" style={{color: '#ffffff'}}>Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <a 
                    href="mailto:pramir2003@gmail.com" 
                    className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <div>
                    <p style={{color: '#d1d5db'}}>Email</p>
                    <a 
                      href="mailto:pramir2003@gmail.com" 
                      className="font-medium underline" 
                      style={{color: '#ffffff'}}
                    >
                      pramir2003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a 
                    href="https://wa.me/94740302602" 
                    target="_blank" 
                    className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <div>
                    <p style={{color: '#d1d5db'}}>Phone</p>
                    <a 
                      href="https://wa.me/94740302602" 
                      target="_blank" 
                      className="font-medium underline" 
                      style={{color: '#ffffff'}}
                    >
                      +94 74 0302 602
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{color: '#d1d5db'}}>Location</p>
                    <p className="font-medium" style={{color: '#ffffff'}}>Malabe, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4" style={{color: '#ffffff'}}>Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Pramira-Mindula" target="blank" className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/pramira-mindula/" target="blank" className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/pramira_mindula/" target="blank" className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form 
              onSubmit={(e) => {
                const name = e.target.name.value;
                const nameRegex = /^[A-Za-z\s]+$/;

                if (!nameRegex.test(name)) {
                  e.preventDefault();
                  alert("Name can contain only letters and spaces.");
                }
              }}

              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="space-y-6"
            >
              {/* Required Access Key */}
              <input type="hidden" name="access_key" value="dc4a7619-6e5e-4128-bbb9-2d68c188cf46" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: '#ffffff'}}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: '#ffffff'}}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: '#ffffff'}}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto container-padding text-center">
          <p className="text-text-light">
            © 2025 Pramira Mindula. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
//Pramira Mindula