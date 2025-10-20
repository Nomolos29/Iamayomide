 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide08: FC = () => {
  return ( 
    <div className="container mx-auto px-4 py-8 max-h-[1117px] overflow-hidden"> 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">  
         
        <div className="lg:col-span-1 flex items-center justify-center p-4"> 
          <Image
            src="/images/sec2/handraising.png"  
            alt="Abstract diagram of human figure"
            width={380} 
            height={900}  
            layout="intrinsic"  
            objectFit="contain"
            className="w-full h-auto max-h-[900px] object-contain"  
          />
        </div>
 
        <div className="lg:col-span-1 p-4 flex flex-col justify-around font-serif text-black text-lg space-y-8">
          <div>
            <h4 className="text-brand-red text-2xl font-bold mb-2">Context</h4>
            <p>
              Commissioned by the Center for Practice Innovations (CPI), this white paper guides the
              strategic use of instructional delivery modes—ILT, VILT, hybrid, and self-paced—for scalable mental
              health workforce training across New York State agencies.
            </p>
          </div>
          <div>
            <h4 className="text-brand-red text-2xl font-bold mb-2">Problem</h4>
            <p>
              CPI needed a research-based yet accessible decision framework to select training modalities
              that maintain pedagogical quality, cost-efficiency, and learner equity while scaling state-wide
              programs.
            </p>
          </div>
          <div>
            <h4 className="text-brand-red text-2xl font-bold mb-2">My Role</h4>
            <p>
              Lead author and instructional designer —
              literature synthesis, comparative analysis,
              multilevel framework design, evaluation plan, and
              executive brief.
            </p>
          </div>
          <div>
            <h4 className="text-brand-red text-2xl font-bold mb-2">Stakeholders</h4>
            <p>
              CPI leadership and program managers, ID team,
              facilitators, frontline clinicians, and partner
              agencies
            </p>
          </div>
        </div>

             <div className="lg:col-span-1 p-4 flex flex-col space-y-6">
          <div className="bg-brand-red rounded-lg p-6 flex flex-col items-center">
            <Image
              src="/images/sec2/walking.png"  
              alt="Process icons"
              width={150}
              height={100}
              className="mb-4"
            />
            <h4 className="text-white text-3xl font-bold text-center">Process</h4>
          </div>
          
          <div className="font-serif text-black text-lg bg-brand-pink p-6 rounded-lg border border-brand-red h-full">  
            <ul className="list-disc pl-5 space-y-3">
              <li>Conducted comparative review of ILT / VILT / Hybrid / Asynch (use cases, risks, costs, equity).</li>
              <li>Designed a 4-level decision framework (1) Learning objectives, (2) Content & context, (3) Implementation planning, (4) Continuous evaluation with balanced scorecards.</li>
              <li>Authored specialized VILT guidance (session cadence, engagement every 5-7 minutes, role design, accessibility).</li>
              <li>Produced one-page modality sheets for ILT, VILT, Self-Paced eLearning, Quick Reference Guides, and Learner Communities.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide08;