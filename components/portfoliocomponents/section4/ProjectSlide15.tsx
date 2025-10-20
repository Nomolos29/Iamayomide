 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide15: FC = () => {
  return (
    <div className="container mx-auto p-4 bg-brand-light-pink">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        
 
        <div className="flex flex-col gap-5">
          <InfoCard title="Context.">
            This curriculum track provides AI literacy for students and interns through a progressive fundamentals, intermediate & master classes via LMS platforms, live virtual and in-person sessions, through collaborative roles, and constructionist learning strategies with demo-day outputs.
          </InfoCard>
          <InfoCard title="Problem">
            First-generation tech learners in underserved communities need structured, hands-on, and accessible curricula that bridge foundational concepts with real-world applications in emerging tech fields.
          </InfoCard>
          <InfoCard title="My Role">
            Lead instructional & curriculum designer — scope, modules, LX flows, assessments, and demo day.
          </InfoCard>
          <div className="bg-white rounded-2xl p-5 flex-grow flex flex-col">
            <h3 className="text-brand-red font-serif text-4xl font-bold mb-3">AI Curriculum</h3>
            <p className="font-serif text-black text-xl leading-relaxed space-y-2">
              <span>AI Basics — 6 Modules (12 weeks).</span>
              <span>1. Evolution of AI — history, AI vs. human intelligence, futures/foresight.</span>
              <span>2. Foundations of ML — supervised/unsupervised/RL, preprocessing, metrics.</span>
              <span>3. Intro to Chatbots — intents/entities, NLP basics (tokenization, spaCy), rule-based bot.</span>
              <span>4. Advanced Chatbots — transformers (e.g., BERT/GPT APIs), context retention, retrieval/APIs.</span>
              <span>5. Interactive AI Backends — serving models with REST, data pipelines, Docker.</span>
              <span>6. Capstone — full chatbot + backend; deploy to cloud; present + doc.</span>
            </p>
            <button className="mt-4 bg-brand-red text-white font-serif font-bold text-xl py-2 px-5 rounded-xl self-start hover:bg-brand-red-dark transition-colors">
              Read more
            </button>
          </div>
        </div>
 
        <div className="flex flex-col gap-5">
            <ImageCard src="/images/sec4/part1.png" alt="Curriculum visual 1" />
            <ImageCard src="/images/sec4/part2.png" alt="Curriculum visual 2" />
            <ImageCard src="/images/sec4/part3.png" alt="Curriculum visual 1" />
            <ImageCard src="/images/sec4/part4.png" alt="Curriculum visual 2" />
        </div>
 
        <div className="flex flex-col gap-5">
          <InfoCard title="Delivery">
            Virtual live (2 hrs/day) with collaborative tools and rotating team roles.
          </InfoCard>
          <InfoCard title="Tools">
            Google Meet/Zoom; Google Colab; Miro/Jamboard; Google Classroom; Padlet/Notion. Rotating team roles: Concept, Visual/Model, Applied Research, Peer Facilitation.
          </InfoCard>
          <InfoCard title="Outcomes">
            Consistent learner progression from theory → working chatbot; pipeline to KBM internships and DAOit pilots.
          </InfoCard>
          <div className="bg-brand-red rounded-2xl p-5 flex-grow">
            <h3 className="text-white font-serif text-4xl font-bold mb-4">Testimonials</h3>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/sec4/whatsapp1.png" alt="Testimonial 1" width={275} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatapp2.png" alt="Testimonial 2" width={275} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatsapp3.png" alt="Testimonial 3" width={275} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatsapp4.png" alt="Testimonial 4" width={275} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatsapp1.png" alt="Testimonial 1" width={275} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatapp2.png" alt="Testimonial 2" width={275} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatsapp3.png" alt="Testimonial 3" width={275} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatsapp4.png" alt="Testimonial 4" width={275} height={150} className="rounded-lg w-full" />            
              <Image src="/images/sec4/whatsapp5.png" alt="Testimonial 5" width={275} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatapp2.png" alt="Testimonial 2" width={275} height={150} className="rounded-lg w-full" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
 
const InfoCard: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-5">
    <h3 className="text-brand-red font-serif text-4xl font-bold mb-3">{title}</h3>
    <p className="font-serif text-black text-xl leading-relaxed">
      {children}
    </p>
  </div>
);
 
const ImageCard: FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="bg-brand-red rounded-2xl p-3">
        <div className="bg-white rounded-xl p-5">
            <Image src={src} alt={alt} width={570} height={320} className="rounded-lg w-full" />
        </div>
    </div>
);

export default ProjectSlide15;