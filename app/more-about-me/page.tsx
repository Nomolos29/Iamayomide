import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_ICONS, SITE_CONFIG } from '@/lib/constants';
import { SocialIcon } from '@/lib/types';

const MoreAboutMe = () => {
  const achievements = [
    {
      title: "KBM Founder & CEO",
      organization: "Know the Blocks Maven",
      description: "Founded transformative initiatives that integrate AI, blockchain, and Web3 literacy into traditional education systems, empowering over 10,500 students across Africa.",
      year: "2022-Present"
    },
    {
      title: "DKG Alumnus",
      organization: "Delta Kappa Gamma Society International",
      description: "First Female educator in Nigeria to be inducted into the DKG, pioneering the first chapter in Nigeria and connecting international women educators.",
      year: "2023"
    },
    {
      title: "Web3 Educational Exposition Organizer",
      organization: "Self-Funded Initiative",
      description: "First Web3 educator to organize a self-funded Web3 Educational Exposition for underserved communities, introducing emerging technologies to government secondary schools.",
      year: "2023"
    },
    {
      title: "Government Partnership",
      organization: "Nigerian Government & LA School District",
      description: "Strategic collaborations including partnerships with the Nigerian government and the Los Angeles School District's STEM Literacy Editorial Exchange Program.",
      year: "2022-2024"
    }
  ];

  const skills = [
    "EdTech Innovation",
    "AI Literacy Advocacy",
    "Blockchain Education",
    "Web3 Technologies",
    "Educational Policy Development",
    "Community Building",
    "Strategic Partnerships",
    "Curriculum Design",
    "Digital Transformation",
    "Financial Inclusion"
  ];

  const socialIcons: SocialIcon[] = SOCIAL_ICONS;

  return (
    <main className="w-full flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] w-full px-5 md:px-10 py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="w-full md:w-1/2 flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-[36px] md:text-[60px] font-extrabold leading-tight">
              More About <span className="text-red-700">Me</span>
            </h1>
            <div className="h-1 w-[100px] bg-red-700"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I&apos;m passionate about democratizing access to emerging technologies through education. 
              My journey spans across EdTech innovation, AI literacy advocacy, and blockchain education, 
              all focused on empowering underserved communities to participate in the digital economy.
            </p>
            <Link href={SITE_CONFIG.bookingUrl} target="_blank">
              <button className="py-4 px-8 bg-gradient-to-r from-red-700 to-red-500 text-xl font-medium rounded-md text-white hover:opacity-90 transition-opacity w-fit">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative">
            <Image 
              src="/personalImage3.jpeg" 
              alt="Ayomide Arowolo-Ayodeji Professional" 
              width={400} 
              height={500} 
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-red-700 text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">10,500+</p>
              <p className="text-sm">Students Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full bg-red-700 py-16">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 text-center">
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-8">My Mission</h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto">
            To bridge the digital divide by making emerging technologies accessible and understandable 
            for everyone, regardless of their background, through innovative educational programs and 
            strategic community partnerships.
          </p>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="max-w-[1440px] w-full px-5 md:px-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4">Key Achievements</h2>
          <div className="h-1 w-[150px] bg-red-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-700 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                <span className="text-red-700 font-semibold bg-red-100 px-3 py-1 rounded-full text-sm">
                  {achievement.year}
                </span>
              </div>
              <p className="text-red-600 font-semibold mb-3">{achievement.organization}</p>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4">Skills & Expertise</h2>
            <div className="h-1 w-[150px] bg-red-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="max-w-[1440px] w-full px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[32px] md:text-[48px] font-bold mb-6">My Journey</h2>
            <div className="h-1 w-[100px] bg-red-700 mb-8"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                My passion for educational technology began with a simple observation: the vast disparity 
                in technological access and literacy across different communities. I realized that access 
                to emerging technologies isn&apos;t just about infrastructure—it&apos;s about fostering a mindset 
                shift and providing the right educational frameworks.
              </p>
              
              <p>
                Through Know the Blocks Maven (KBM), I&apos;ve pioneered innovative approaches to integrate 
                AI, blockchain, and Web3 literacy into traditional education systems. This work has reached 
                over 10,500 students and counting across Africa, creating pathways for young people to 
                participate in the global digital economy.
              </p>
              
              <p>
                As the first female educator in Nigeria to be inducted into the Delta Kappa Gamma Society 
                International, I&apos;ve established connections with international women educators, pioneering 
                collaborative efforts that transcend geographical boundaries.
              </p>
              
              <p>
                My approach focuses on removing both structural and psychological barriers that limit 
                students&apos; ability to see themselves as future professionals in emerging technologies. 
                Every program I develop considers not just the technical knowledge transfer, but the 
                confidence-building necessary for sustainable impact.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              <Image 
                src="/personalImage2.jpeg" 
                alt="Ayomide at KBM Event" 
                width={400} 
                height={300} 
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 w-full">
              <h3 className="text-xl font-bold mb-4 text-center">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                {socialIcons.map((social, index) => (
                  <Link 
                    href={social.link} 
                    key={index} 
                    target="_blank"
                    className="text-3xl text-red-700 hover:text-red-800 transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link href={SITE_CONFIG.bookingUrl} target="_blank">
                  <button className="py-3 px-6 bg-gradient-to-r from-red-700 to-red-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity">
                    Book a Meeting
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MoreAboutMe;