 

import type { FC } from 'react';
import Image from 'next/image';
 
const roadmapItems = [
  {
    title: '(Q2-Q3) - Ambassador program',
    imageSrc: '/images/sec1/meeting1.png',  
  },
  {
    title: '(Q2-Q3) - School admin dashboards',
    imageSrc: '/images/sec1/meeting2.png',  
  },
  {
    title: '(Q4) - Micro-grants via smart contracts',
    imageSrc: '/images/sec1/meeting11.png',  
  },
  {
    title: '(Q4) - Research partnerships',
    imageSrc: '/images/sec1/meeting22.png', 
  },
];

 
const ProjectSlide05: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="font-serif text-brand-red text-4xl font-bold mb-8">Roadmap</h3>
      
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {roadmapItems.map((item, index) => (
          <div key={index}>
            <h4 className="font-serif text-black text-2xl mb-4">{item.title}</h4>
            
             
            <div className="p-10 rounded-2xl bg-gradient-to-br from-brand-light-pink to-brand-red">
             
              <div className="bg-white rounded-lg overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={672}   
                  height={269}  
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlide05;