import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { ProjectItem } from '@/lib/types';

const Portfolio = () => {
  const projects: ProjectItem[] = [
    {
      id: '1',
      title: 'KBM Abuja Web3 Expo',
      description: 'Self-funded Web3 Educational Exposition for underserved communities and government secondary schools with over 2,000 student participants in a hybrid event format.',
      image: '/communityImage1.jpeg',
      tags: ['Web3', 'Education', 'Community Outreach', 'Blockchain'],
      date: '2023',
      featured: true
    },
    {
      id: '2',
      title: 'AI Literacy Curriculum Development',
      description: 'Comprehensive curriculum designed to integrate AI literacy into traditional education systems across Africa, impacting over 10,500 students.',
      image: '/communityImage2.jpeg',
      tags: ['AI', 'Curriculum Design', 'EdTech', 'Literacy'],
      date: '2022-Present',
      featured: true
    },
    {
      id: '3',
      title: 'DKG Nigeria Chapter Establishment',
      description: 'Pioneer establishment of the first Delta Kappa Gamma chapter in Nigeria, connecting international women educators and fostering collaborative educational initiatives.',
      image: '/personalImage3.jpeg',
      tags: ['Leadership', 'International Partnership', 'Women in Education'],
      date: '2023',
      featured: true
    },
    {
      id: '4',
      title: 'Government Partnership Program',
      description: 'Strategic collaboration with the Nigerian government and Los Angeles School District\'s STEM Literacy Editorial Exchange Program to expand technology education access.',
      image: '/communityImage3.jpeg',
      tags: ['Government Partnership', 'STEM', 'Policy Development'],
      date: '2022-2024',
      featured: true
    },
    {
      id: '5',
      title: 'Blockchain Education Initiative',
      description: 'Comprehensive blockchain education program designed to introduce cryptocurrency, DeFi, and Web3 concepts to students in underserved communities.',
      tags: ['Blockchain', 'Cryptocurrency', 'DeFi', 'Financial Inclusion'],
      date: '2022-Present',
      featured: false
    },
    {
      id: '6',
      title: 'Digital Literacy Workshops',
      description: 'Series of workshops focused on basic digital literacy, computer skills, and internet safety for students and educators across rural communities.',
      tags: ['Digital Literacy', 'Workshops', 'Rural Education'],
      date: '2021-Present',
      featured: false
    },
    {
      id: '7',
      title: 'EdTech Innovation Hub',
      description: 'Establishment of innovation hubs in schools to provide hands-on experience with emerging technologies and foster entrepreneurial thinking.',
      tags: ['Innovation', 'Entrepreneurship', 'Technology Hub'],
      date: '2023-Present',
      featured: false
    },
    {
      id: '8',
      title: 'Women in Tech Mentorship',
      description: 'Mentorship program specifically designed to support young women pursuing careers in technology and STEM fields.',
      tags: ['Mentorship', 'Women in Tech', 'Career Development'],
      date: '2022-Present',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <main className="w-full flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 text-center">
          <h1 className="text-[36px] md:text-[60px] font-extrabold mb-6">
            My <span className="text-red-700">Portfolio</span>
          </h1>
          <div className="h-1 w-[150px] bg-red-700 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transformative educational initiatives that bridge the digital divide and empower communities
            through innovative technology programs and strategic partnerships.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-[1440px] w-full px-5 md:px-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-[120px] bg-red-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {project.image && (
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-700 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-red-700 font-semibold bg-red-100 px-3 py-1 rounded-full text-sm">
                    {project.date}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4">Other Initiatives</h2>
            <div className="h-1 w-[120px] bg-red-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                  <span className="text-red-700 font-semibold bg-red-100 px-2 py-1 rounded text-sm">
                    {project.date}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-[1440px] w-full px-5 md:px-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4">Impact Overview</h2>
          <div className="h-1 w-[120px] bg-red-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-red-700 mb-2">10,500+</div>
            <p className="text-gray-600">Students Impacted</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-red-700 mb-2">50+</div>
            <p className="text-gray-600">Partner Schools</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-red-700 mb-2">15+</div>
            <p className="text-gray-600">Countries Reached</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-red-700 mb-2">8+</div>
            <p className="text-gray-600">Major Initiatives</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-red-700 py-16">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 text-center">
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-8">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to expand access to emerging technologies and create
            meaningful educational impact in communities worldwide.
          </p>
          <Link href={SITE_CONFIG.bookingUrl} target="_blank">
            <button className="py-4 px-8 bg-white text-red-700 font-bold text-xl rounded-md hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;