import React from 'react';
import Slider from './Slider';
import PortfolioOverviewHeader from './PortfolioOverviewHeader'; 
interface ProjectSlide {
  id: string;
  imageSrc: string;
  altText: string;
}

const slider1Projects: ProjectSlide[] = [
  {
    id: 'dao-slide-1',
    imageSrc: '/images/port101.png',  
    altText: 'DAOit App context and problem statement',
  },
  {
    id: 'dao-slide-2',
    imageSrc: '/images/port102.png',  
    altText: 'DAOit App target users and tech snapshot',
  },
  
  {
      id: 'dao-slide-3',
      imageSrc: '/images/port103.png',  
      altText: 'DAOit App further details',
  },
  {
    id: 'dao-slide-3',
    imageSrc: '/images/port104.png',  
    altText: 'DAOit App further details',
},
{
    id: 'dao-slide-3',
    imageSrc: '/images/port105.png',  
    altText: 'DAOit App further details',
},
];

const slider2Projects: ProjectSlide[] = [
    {
      id: 'other-proj-1',
      imageSrc: '/images/port201.png',
      altText: 'Placeholder project image one',
    },
    {
        id: 'other-proj-2',
        imageSrc: '/images/port202.png',
        altText: 'Placeholder project image two',
    },
    {
        id: 'other-proj-3',
        imageSrc: '/images/port203.png',
        altText: 'Placeholder project image three',
    },
    {
        id: 'other-proj-3',
        imageSrc: '/images/port204.png',
        altText: 'Placeholder project image three',
    },
];

const slider3Projects: ProjectSlide[] = [
    {
      id: '3-proj-1',
      imageSrc: '/images/port301.png',
      altText: 'Placeholder project image one',
    },
    {
        id: '3-proj-2',
        imageSrc: '/images/port302.png',
        altText: 'Placeholder project image two',
    },
    {
        id: '3-proj-3',
        imageSrc: '/images/port303.png',
        altText: 'Placeholder project image three',
    },
];

const slider4Projects: ProjectSlide[] = [
  {
    id: '4-proj-1',
    imageSrc: '/images/port401.png',
    altText: 'Placeholder project image one',
  },
  {
      id: '4-proj-2',
      imageSrc: '/images/port402.png',
      altText: 'Placeholder project image two',
  },
  {
      id: '4-proj-3',
      imageSrc: '/images/port403.png',
      altText: 'Placeholder project image three',
  },
  {
      id: '4-proj-4',
      imageSrc: '/images/port404.png',
      altText: 'Placeholder project image three',
  },
];

const slider5Projects: ProjectSlide[] = [
  {
    id: '5-proj-1',
    imageSrc: '/images/port501.png',
    altText: 'Placeholder project image one',
  },
];

const slider6Projects: ProjectSlide[] = [
  {
    id: '6-proj-1',
    imageSrc: '/images/port601.png',
    altText: 'Placeholder project image one',
  },
  {
      id: '6-proj-2',
      imageSrc: '/images/port602.png',
      altText: 'Placeholder project image two',
  },
];

const ProjectDeepDiveSection = () => {  
    return (
      <main className="min-h-screen bg-gray-100 p-4 sm:p-8 md:p-12">
        
        <div className="text-center mb-12">
        <div className="mb-24">
        <PortfolioOverviewHeader />
      </div>
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
  
        <section className="max-w-6xl mx-auto mb-16">
          <Slider slides={slider1Projects} />
        </section>
  
        <div className="text-center mb-12">
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
        <section className="max-w-6xl mx-auto">
          <Slider slides={slider2Projects} />
        </section>
        <div className="text-center mb-12">
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
        <section className="max-w-6xl mx-auto">
          <Slider slides={slider3Projects} />
        </section>
        <div className="text-center mb-12">
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
        <section className="max-w-6xl mx-auto">
          <Slider slides={slider4Projects} />
        </section>
        <div className="text-center mb-12">
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
        <section className="max-w-6xl mx-auto">
          <Slider slides={slider5Projects} />
        </section>
        <div className="text-center mb-12">
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto"></div>
        </div>
        <section className="max-w-6xl mx-auto">
          <Slider slides={slider6Projects} />
        </section>
  
      </main>
    );
  };
  
  export default ProjectDeepDiveSection