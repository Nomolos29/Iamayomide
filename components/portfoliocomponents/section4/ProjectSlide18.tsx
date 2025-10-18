 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide18: FC = () => {
  return (
    <div className="container mx-auto p-4 bg-brand-light-pink">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
         
        <div className="flex flex-col gap-5">
          <InfoCard title="Problem">
            Many tech training initiatives in underserved communities fail to deliver outcomes due to outdated content, inaccessible tools, weak community integration, and lack of hands-on, constructionist learning. Interns and students need relevant, scaffolded pathways into AI, blockchain, and applied digital work.
          </InfoCard>
          <InfoCard title="Role">
            I oversee the end-to-end design, implementation, and scaling of education programs focused on blockchain and AI literacy for underserved communities. My role includes coordinating instructional teams, managing learner cohorts, and maintaining alignment with KBM's community-led values. I facilitate partnerships with government agencies, NGOs, and international education stakeholders to co-develop curricula, organize demo showcases, and drive local-to-global integration of tools like DAOit. From onboarding schools to monitoring learning outcomes and securing pathways for student advancement, I manage every layer of program delivery to ensure cultural relevance, system impact, and sustainability.
          </InfoCard>
          <InfoCard title="Who It Serves">
            First-gen learners • Secondary school students • University interns • Tech clubs • Partner schools & EdTech NGOs
          </InfoCard>
          <InfoCard title="Key Features">
            -Dual-track curriculum: AI (chatbots, backend, ethics) & Blockchain (wallets, governance, smart contracts)
            <br />-Inquiry-based and culturally responsive design
            <br />-Weekly feedback, demo readiness, and peer evaluation
          </InfoCard>
          <InfoCard title="Tools">
            PowerBi, Notion, Loom, Miro, Google Workspace, Trello
          </InfoCard>
        </div>
 
        <div className="flex flex-col gap-5">
          <Image src="/images/sec4/1.png" alt="FCT Secondary Education Board" width={820} height={400} className="rounded-xl w-full" />
          <Image src="/images/sec4/2.png" alt="3MTT Partnership" width={820} height={400} className="rounded-xl w-full" />
          <Image src="/images/sec4/3.png" alt="SIDE Partnership" width={820} height={400} className="rounded-xl w-full" />
          <Image src="/images/sec4/4.png" alt="Ethereum Nomination" width={820} height={400} className="rounded-xl w-full" />
          <Image src="/images/sec4/5.png" alt="FCT Secondary Education Board" width={820} height={400} className="rounded-xl w-full" />
          

        </div>
 
        <div className="flex flex-col">
          <div className="bg-white rounded-2xl p-5 flex-grow">
            <h3 className="text-brand-red font-serif text-3xl font-bold mb-5">Key outcomes</h3>
            <div className="space-y-4">
              <OutcomeItem title="Scaled Learning Access">
                Launched and managed programs that reached 10,000+ students across 88+ schools, with over 65% female participation and 80% completion rate.
              </OutcomeItem>
              <OutcomeItem title="Curriculum-to-Community Pipeline">
                Transformed abstract tech concepts (AI, blockchain) into hands-on, culturally responsive experiences — leading to student-led capstone demos, DAO simulations, and proposals integrated into DAOit.
              </OutcomeItem>
              <OutcomeItem title="Stakeholder Collaboration">
                Coordinated multi-agency partnerships (e.g. Nigerian SEB, UNICEF prospects, Web3Bridge, international NGOs) to align curricula with local needs and secure learning continuity.
              </OutcomeItem>
              <OutcomeItem title="Instructor Enablement">
                Trained and supported facilitators through onboarding tools, planning templates, and feedback loops, creating a replicable and scalable delivery model.
              </OutcomeItem>
              <OutcomeItem title="Infrastructure for Evaluation">
                Implemented lightweight M&E systems using Google Sheets, Typeform, and cohort tracking tools to monitor learner progress, equity, and instructional quality.
              </OutcomeItem>
              <OutcomeItem title="Pathway Creation">
                Established learner pipelines from KBM programs into internships, DAOit participation, and career exploration, embedding outcome-oriented learning into every cohort.
              </OutcomeItem>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
 
const InfoCard: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-5">
    <h3 className="text-brand-red font-serif text-3xl font-bold mb-3">{title}</h3>
    <p className="font-serif text-black text-xl leading-relaxed text-justify">
      {children}
    </p>
  </div>
);

const OutcomeItem: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <p className="font-serif text-black text-xl leading-relaxed text-justify">
    <strong className="text-black font-bold block mb-1">{title}</strong>
    {children}
  </p>
);

export default ProjectSlide18;