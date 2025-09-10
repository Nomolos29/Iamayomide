import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { BlogPost } from '@/lib/types';

const Resources = () => {
  const featuredArticles: BlogPost[] = [
    {
      id: '1',
      title: 'Bridging the Digital Divide: A Strategic Approach to EdTech Implementation in Underserved Communities',
      slug: 'bridging-digital-divide-edtech-implementation',
      excerpt: 'An in-depth analysis of effective strategies for implementing educational technology programs in communities with limited resources, based on real-world case studies and proven methodologies.',
      content: '',
      image: '/communityImage1.jpeg',
      publishedAt: '2024-01-15',
      tags: ['EdTech', 'Digital Divide', 'Community Development', 'Educational Policy'],
      readTime: 12
    },
    {
      id: '2',
      title: 'AI Literacy in African Education Systems: Challenges, Opportunities, and Implementation Framework',
      slug: 'ai-literacy-african-education-systems',
      excerpt: 'A comprehensive framework for integrating artificial intelligence literacy into traditional African education systems, addressing unique challenges and leveraging cultural strengths.',
      content: '',
      image: '/communityImage2.jpeg',
      publishedAt: '2024-02-08',
      tags: ['AI Literacy', 'African Education', 'Curriculum Development', 'Technology Integration'],
      readTime: 15
    },
    {
      id: '3',
      title: 'Building Sustainable Partnerships: Government Collaboration Models for Educational Technology Initiatives',
      slug: 'sustainable-partnerships-government-collaboration-edtech',
      excerpt: 'Insights into successful partnership models between educational technology initiatives and government institutions, with practical guidelines for sustainable collaboration.',
      content: '',
      image: '/personalImage3.jpeg',
      publishedAt: '2024-03-12',
      tags: ['Government Partnership', 'Sustainable Development', 'Policy Development', 'Public-Private Collaboration'],
      readTime: 10
    }
  ];

  const resources = [
    {
      category: 'Research Publications',
      items: [
        {
          title: 'Impact Assessment: Web3 Education in Secondary Schools',
          description: 'Comprehensive study on the effectiveness of blockchain and cryptocurrency education programs in government secondary schools.',
          format: 'PDF Report',
          pages: '45 pages'
        },
        {
          title: 'AI Literacy Curriculum Framework for Developing Nations',
          description: 'A structured curriculum framework designed specifically for integrating AI concepts into existing educational systems in developing countries.',
          format: 'PDF Guide',
          pages: '62 pages'
        }
      ]
    },
    {
      category: 'Educational Tools & Templates',
      items: [
        {
          title: 'Digital Literacy Assessment Tool',
          description: 'Standardized assessment framework for evaluating digital literacy levels in student populations.',
          format: 'Interactive Tool',
          pages: 'Web-based'
        },
        {
          title: 'Community Outreach Program Template',
          description: 'Complete template for designing and implementing technology education outreach programs.',
          format: 'Template Package',
          pages: '25+ documents'
        }
      ]
    },
    {
      category: 'Policy Briefs',
      items: [
        {
          title: 'Technology Education Policy Recommendations for Sub-Saharan Africa',
          description: 'Strategic policy recommendations for governments seeking to improve technology education infrastructure.',
          format: 'Policy Brief',
          pages: '18 pages'
        },
        {
          title: 'Financial Inclusion Through Digital Literacy: A Policy Framework',
          description: 'Comprehensive policy framework linking digital literacy initiatives to financial inclusion outcomes.',
          format: 'Policy Document',
          pages: '32 pages'
        }
      ]
    }
  ];

  return (
    <main className="w-full flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 text-center">
          <h1 className="text-[36px] md:text-[60px] font-extrabold mb-6">
            Resources & <span className="text-red-700">Insights</span>
          </h1>
          <div className="h-1 w-[150px] bg-red-700 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Access evidence-based research, practical frameworks, and strategic insights 
            for implementing technology education initiatives in diverse community contexts.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-[1440px] w-full px-5 md:px-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4">Featured Publications</h2>
          <div className="h-1 w-[120px] bg-red-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In-depth analysis and strategic insights from field experience and academic research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image!}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <time className="text-sm text-red-600 font-semibold">
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-sm text-gray-500">{article.readTime} min read</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-red-700 font-semibold hover:text-red-800 transition-colors text-sm">
                  Read Full Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Resource Categories */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4">Professional Resources</h2>
            <div className="h-1 w-[120px] bg-red-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools, frameworks, and research materials for educators, 
              policymakers, and development professionals.
            </p>
          </div>

          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-800 pr-4">
                          {item.title}
                        </h4>
                        <span className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded font-medium whitespace-nowrap">
                          {item.format}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{item.pages}</span>
                        <button className="text-red-700 font-semibold hover:text-red-800 transition-colors text-sm">
                          Access Resource →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-[1440px] w-full px-5 md:px-10 py-16 md:py-24">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4">Stay Informed</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Receive updates on new research publications, resource releases, and insights 
            from the field of educational technology and community development.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your professional email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-700 text-white font-semibold rounded-md hover:bg-red-800 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            Professional updates only. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Collaboration Call-to-Action */}
      <section className="w-full bg-red-700 py-16">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 text-center">
          <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-8">
            Collaborate on Research
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Interested in collaborative research opportunities or partnership in 
            educational technology initiatives? Let&apos;s discuss how we can work together.
          </p>
          <Link href={SITE_CONFIG.bookingUrl} target="_blank">
            <button className="py-4 px-8 bg-white text-red-700 font-bold text-xl rounded-md hover:bg-gray-100 transition-colors">
              Schedule Research Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Resources;