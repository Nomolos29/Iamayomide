 
import type { FC } from 'react';
import Image from 'next/image';
 
const DecorativeSideBorder: FC = () => (
  <div className="h-full w-[9px] bg-[repeating-linear-gradient(transparent,transparent_40px,theme(colors.brand-red-secondary/50)_40px,theme(colors.brand-red-secondary/50)_122px)]">
  </div>
);

 
const ProjectSlide01: FC = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      
 
      <div className="absolute top-0 left-0 h-full hidden lg:block">
        <DecorativeSideBorder />
      </div>
      <div className="absolute top-0 right-0 h-full hidden lg:block">
        <DecorativeSideBorder />
      </div> 
      <div className="container mx-auto px-4">
  
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-red text-2xl">→</span>
          <p className="font-serif text-brand-gray-dark text-lg">
            Each case below follows: Context • Problem • My Role • Learners/Stakeholders • Process • Artifacts • Outcomes • Evidence to Verify • Reflection
          </p>
        </div> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
           
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/images/sec1/tree.png"
              alt="A diagram of the DAOit learning ecosystem"
              width={970}
              height={553}
              className="w-full h-auto"
            />
            <Image
              src="/images/sec1/daoit.png"
              alt="DAOit Logo"
              width={201.25}
              height={197}
            />
          </div>
 
          <div className="relative font-serif text-white p-12 h-full flex flex-col bg-gradient-to-b from-brand-red to-brand-red-dark">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[repeating-linear-gradient(white,white_10px,transparent_10px,transparent_20px)]"></div>
            
            <div className="flex-grow flex flex-col justify-between">
         
              <div>
                <h3 className="text-4xl font-bold mb-4">Context</h3>
                <p className="text-lg leading-relaxed">
                  External platform enabling students, teachers, and admins to co-create proposals, vote, and track decisions via a transparent, token-based model, while creating a verifiable community of people passionate about contributing to the education ecosystem. Pilot prepared May–Aug 2025 and launched across six Nigerian secondary schools in the beta phase.
                </p>
              </div>
 
              <div>
                <h3 className="text-4xl font-bold mb-4">Problem</h3>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                  <li>Students/teachers are left out of key decisions; processes are slow and top-down.</li>
                  <li>Limited tools for real-time input, crisis response, and trust-building.</li>
                  <li>Schools aren’t designed for a digital, decentralized world.</li>
                </ul>
              </div>
 
              <div>
                <h3 className="text-4xl font-bold mb-4">My Role.</h3>
                <p className="text-lg leading-relaxed">
                  Founder/Lead Designer & Data Lead — product vision, pilot playbook, readiness model (people/product/team), training & adoption, data strategy, reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide01;