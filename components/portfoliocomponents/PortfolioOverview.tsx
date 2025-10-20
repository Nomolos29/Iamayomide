 

import type { FC } from 'react';
 
const portfolioItems = [
  { number: '01', title: 'DAOit', description: 'Decentralized school governance platform (pilot across 6 schools).', featured: true, color: 'text-brand-red' },
  { number: '02', title: 'CPI White Paper', description: 'Instructional design & knowledge product for workforce mental-health training.', featured: false, color: 'text-brand-red-secondary/50' },
  { number: '03', title: 'ExxonMobil ID Training', description: 'Corporate workshop on instructional design for internal teams.', featured: false, color: 'text-brand-red-secondary/30' },
  { number: '04', title: 'KBM Core Curriculum', description: 'AI Basics for interns + Blockchain foundations for learners (virtual and in-person training).', featured: false, color: 'text-brand-red-secondary/40' },
  { number: '05', title: 'Wearable Musical-Instrument Jacket', description: 'Storyboard & learning design using sound mapping for underserved schools.', featured: true, color: 'text-brand-red-secondary/70' },
  { number: '06', title: 'Group Facilitation Playbook', description: 'Step-by-step guide for building & nurturing groups and culture in organisations.', featured: false, color: 'text-brand-red-secondary/50' },
];
 
const StarIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
  </svg>
);
 
const ProjectItem: FC<{ item: typeof portfolioItems[0] }> = ({ item }) => {
  const starColor = item.featured ? 'text-brand-red' : 'text-brand-red-secondary';

  return (
    <div className="p-8 text-center">
      <div className="flex flex-col items-center gap-4">
        <StarIcon className={starColor} />
        <span className={`font-serif text-8xl font-bold ${item.color}`}>
          {item.number}
        </span>
        <h3 className={`font-bold text-xl ${item.featured ? 'text-brand-red' : 'text-brand-red-secondary/50'}`}>
          {item.title}
        </h3>
        <p className="text-brand-gray-dark text-base leading-relaxed max-w-xs mx-auto">
          {item.description}
        </p>
      </div>
    </div>
  );
};
 
const PortfolioOverview: FC = () => {
  return (
    <section className="relative bg-white pb-24 overflow-hidden">
       
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1728px] h-[219px] z-10">
        <svg
          className="absolute w-[2925px] h-[283px] left-[-930px] top-[-65px]"
          viewBox="0 0 1728 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1675.25 -54.9788C1780.37 -61.7905 1860.21 -65.9577 1913.77 -63.1382C1940.55 -61.728 1960.71 -58.5718 1974.16 -53.1535C1980.88 -50.4458 1985.89 -47.1862 1989.22 -43.3277C1992.54 -39.4798 1994.2 -35.0156 1994.2 -29.8454C1994.19 12.1386 1956.3 74.0375 1817.24 125.442C1678.21 176.836 1438.21 217.663 1034.42 217.596C630.641 217.528 139.564 176.58 -250.566 125.071C-445.63 99.3156 -615.447 70.9219 -736.491 43.6798C-797.016 30.0581 -845.33 16.7281 -878.503 4.16582C-895.093 -2.11653 -907.872 -8.19771 -916.494 -14.0134C-920.804 -16.9212 -924.055 -19.7499 -926.225 -22.4867C-928.393 -25.2226 -929.459 -27.8377 -929.459 -30.3339C-929.458 -35.369 -926.224 -39.8145 -919.705 -43.7112C-913.188 -47.607 -903.486 -50.8897 -890.789 -53.6077C-865.403 -59.042 -828.209 -62.1902 -781.014 -63.5884C-686.632 -66.3844 -552.368 -62.1788 -392.847 -55.3233C-73.8186 -41.6129 346.189 -17.3053 750.014 -17.2379C1153.84 -17.1704 1465.04 -41.3567 1675.25 -54.9788Z"
            className="fill-brand-red-secondary/10 stroke-brand-red"
          />
        </svg>
        <div className="absolute left-[526px] top-[107px] flex items-center gap-5">
            <h2 className="font-body text-brand-red text-[46px] font-normal">
              PORTFOLIO OVERVIEW
            </h2>
            <div className="font-body text-[36px]">
              <span className="font-bold">7</span> Projects
            </div>
        </div>
      </div>
 
      <div className="relative lg:pt-80"> 
        <div className="lg:hidden container mx-auto px-4 text-center mb-12">
          <div className="relative mb-12 h-20 bg-gradient-to-b from-brand-red-secondary/10 to-transparent rounded-t-[100%]" />
          <h2 className="font-body text-brand-red text-3xl md:text-4xl font-normal mb-4">
            PORTFOLIO OVERVIEW
          </h2>
          <div className="font-body text-2xl md:text-3xl">
            <span className="font-bold">7</span> Projects
          </div>
        </div>
 
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-brand-red-secondary">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.number}
                className={`
                  border-b border-brand-red-secondary
                  ${(index % 3 !== 2) ? 'lg:border-r' : ''} 
                  ${(index % 2 !== 1) ? 'md:border-r' : ''} 
                  border-brand-red-secondary
                `}
              >
                <ProjectItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;