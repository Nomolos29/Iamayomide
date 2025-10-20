import PortfolioHeader from '../../components/portfoliocomponents/PortfolioHeader';
import AboutMe from '../../components/portfoliocomponents/AboutMe';
import PortfolioOverview from '@/components/portfoliocomponents/PortfolioOverview';
import ProjectSlide01 from '@/components/portfoliocomponents/section01/ProjectSlide01';
import ProjectSlide02 from '@/components/portfoliocomponents/section01/ProjectSlide02';
import ProjectCarousel from '@/components/portfoliocomponents/ProjectCarousel';
import ProjectCarousel02 from '@/components/portfoliocomponents/ProjectCarousel02';
import ProjectCarousel03 from '@/components/portfoliocomponents/ProjectCarousel03';
import ProjectCarousel04 from '@/components/portfoliocomponents/ProjectCarousel04';
import ProjectCarousel06 from '@/components/portfoliocomponents/ProjectCarousel06';
import ProjectSection05 from '@/components/portfoliocomponents/section05/ProjectSection05';

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHeader />
      <AboutMe />
      <PortfolioOverview />
      <ProjectCarousel />
      <ProjectCarousel02 /> 
      <ProjectCarousel03 />
      <ProjectCarousel04 />
      <ProjectSection05 />
      <ProjectCarousel06 />  
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold">My Work</h2>
   
      </div>
    </main>
  );
}