 
import type { FC } from 'react';
import Image from 'next/image';
 const features = [
  { icon: '/images/sec1/icon-blockchain.png', text: 'Blockchain voting with Snapshot + quadratic voting for fairness and low cost.' },
  { icon: '/images/sec1/icon-smart-contracts.png', text: 'Smart contracts to automate policy/budget/project execution.' },
  { icon: '/images/sec1/icon-sentiment.png', text: 'Sentiment & insight layer for real-time community feedback.' },
  { icon: '/images/sec1/icon-tokenized.png', text: 'Tokenized participation to reward proposals, votes, learning, and verified data contributions.' },
  { icon: '/images/sec1/icon-crisis.png', text: 'Crisis/Disaster response via GIS triggers that initiate emergency community votes (planned rollout).' },
  { icon: '/images/sec1/icon-ownership.png', text: 'Ownership & attribution for content and data provenance; optional Defi micro-grants/scholarships.' },
];
 
const ProjectSlide04: FC = () => {
  return ( 
    <div className="container mx-auto px-4 py-8"> 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
         
        <div className="h-full p-8 font-serif border-2 border-brand-red rounded-2xl bg-gradient-to-b from-brand-off-white to-brand-light-pink">
          <h3 className="text-brand-red text-4xl font-bold mb-4">Learners/Stakeholders.</h3>
          <p className="text-black text-xl mb-8">
            Students, teachers, school administrators; parents; KBM technical & community teams; external partners.
          </p>
          <Image
            src="/images/sec1/arrow.png"
            alt="Diagram of stakeholders"
            width={617}
            height={617}
            className="w-full h-auto"
          />
        </div> 
        <div className="h-full p-8 font-serif border-2 border-brand-red rounded-2xl flex flex-col bg-gradient-to-b from-brand-off-white to-brand-light-pink/25">
          <h3 className="text-brand-red text-4xl font-bold mb-8">Features & Solutions</h3> 
          <div className="flex-grow flex flex-col justify-between">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 relative">
                  <Image 
                    src={feature.icon}
                    alt={`Icon for ${feature.text.substring(0, 15)}`}
                    width={50}
                    height={50}
                  />
                </div>
                <p className="text-black text-xl">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide04;