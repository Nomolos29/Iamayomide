 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide19: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
         
        <div className="lg:col-span-1 flex flex-col gap-1 font-serif">
          <div>

            <h3 className="text-brand-red text-4xl font-bold mb-3">Context</h3>
            <p className="text-black text-xl leading-relaxed">
              Many teams, clubs, and organizations suffer from unclear purpose, weak cohesion, and stalled impact. I developed a facilitation system that operationalizes group theory into usable tools, prioritizing safety, belonging, purpose, and leadership skills in mission-driven contexts.
            </p>
          </div>
          <div>
            <h3 className="text-brand-red text-4xl font-bold mb-3">Problem</h3>
            <p className="text-black text-xl leading-relaxed">
              Groups often start with excitement but quickly fragment without structure or shared story. Leaders struggle to balance direction, cohesion, and inclusion, especially across diverse identities. Without intentional culture-building, cycles of avoidance, disengagement, or shallow connection emerge, reducing both impact and morale.
            </p>
          </div>
          <div>
            <h3 className="text-brand-red text-4xl font-bold mb-3">My Role</h3>
            <p className="text-black text-xl leading-relaxed">
              Compiler & designer — turned evidence-based slides into an operational playbook.
            </p>
          </div>
          <div>
            <h3 className="text-brand-red text-4xl font-bold mb-3">Audience</h3>
            <p className="text-black text-xl leading-relaxed">
              Team leads, program coordinators, onboarding new staff and community managers.
            </p>
          </div>
        </div>
 
        <div className="lg:col-span-3 flex items-center justify-center">
          <Image
            src="/images/sec6/image.png" 
            alt="A detailed playbook for group facilitation stages"
            width={900}
            height={908}
 
            className="rounded-lg shadow-lg w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default ProjectSlide19;