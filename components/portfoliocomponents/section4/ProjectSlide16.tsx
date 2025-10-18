 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide16: FC = () => {
  return (
    <div className="container mx-auto p-4 bg-brand-light-pink">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
         
        <div className="flex flex-col gap-5">
          <InfoCard title="Context">
            This KBM-designed blockchain curriculum equips senior high school students and university students with job-ready Web3 knowledge through culturally responsive, hands-on instruction. The course introduces learners to digital wallets, governance, smart contracts, and DAO simulations, mapped to real-world scenarios like DAOit. Sessions are delivered virtually and in-person (2 hrs/day) with collaborative roles and a community-driven focus.
          </InfoCard>
          <InfoCard title="Problem">
            First-gen learners/those new to tech need structured, hands-on curricula that link directly to real projects, technological innovation and inclusion in whatever career pathways they choose in the future.
          </InfoCard>
          <InfoCard title="My Role">
            Lead instructional & curriculum designer responsible for scoping the curriculum, designing modules and learning experience flows, creating assessments, and managing a final demo day presentation.
          </InfoCard>
          <div className="bg-white rounded-2xl p-5 flex-grow flex flex-col">
            <h3 className="text-brand-red font-serif text-3xl md:text-2xl font-bold mb-3">Blockchain Fundamentals — 12 Weeks (Basic Class)</h3>
            <ul className="font-serif text-black text-xl list-disc list-inside space-y-2">
              <li>How the internet works; Web1/2/3 and real-world challenges.</li>
              <li>What's a Blockchain?:: Types (public/private/hybrid/consortium), common features.</li>
              <li>DeFi & CeFi: How DeFi works and key differences.</li>
              <li>NFTs & Marketplaces: What they are, types, and intro to trading.</li>
              <li>Metaverse & VR: Use cases in Web3.</li>
              <li>DAOs & Governance: Operations and voting models.</li>
              <li>Career Paths: Technical and non-technical roles.</li>
              <li>Capstone: Team-built MVP at the end of the program.</li>
            </ul>
            <button className="mt-4 bg-brand-red text-white font-serif font-bold text-xl py-2 px-5 rounded-xl self-start hover:bg-brand-red-dark transition-colors">
              Read more
            </button>
          </div>
        </div>
 
        <div className="flex flex-col gap-5">
          <ImageCard src="/images/sec4/abc.png" alt="ABC of Web3" />
          <ImageCard src="/images/sec4/crypto.png" alt="Crypto" />
          <ImageCard src="/images/sec4/decenrealization.png" alt="Decentralization" />
          <ImageCard src="/images/sec4/ethereum.png" alt="Decentralization" />
          <ImageCard src="/images/sec4/didyouknow.png" alt="Did you know" /> 
        </div>
 
        <div className="flex flex-col gap-3">
          <InfoCard title="Delivery and Tools">
            Virtual on-site with collaborative tools like; Google Collab, Miro, Telegram, Notion and rotating team roles.
          </InfoCard>
          <InfoCard title="Pedagogy & Assessment" fullHeight>
            The curriculum mandates students prove what they've learned by doing: class projects and hackathons lead into a final group task where every team builds a real MVP (Minimum Viable Product). Mentors kick off each track with one core idea that students grow across modules, so everyone ships an MVP before taking the final certificate challenge, boosting skills and confidence.
          </InfoCard>
          <InfoCard title="Outcomes">
            The K-12 blockchain curriculum delivered tech-literate, critical thinkers who collaborate effectively, ready for the digital world and non-obsolete careers.
          </InfoCard>
          <div className="bg-brand-red rounded-2xl p-5">
            <h3 className="text-white font-serif text-3xl font-bold mb-4">Testimonials</h3>
            <div className="flex flex-col gap-3">
              <Image src="/images/sec4/whatsapp11.png" alt="Testimonial 1" width={570} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatsapp12.png" alt="Testimonial 2" width={570} height={150} className="rounded-lg w-full" />
              <Image src="/images/sec4/whatsapp13.png" alt="Testimonial 3" width={570} height={150} className="rounded-lg w-full" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
 
const InfoCard: FC<{ title: string; children: React.ReactNode; fullHeight?: boolean }> = ({ title, children, fullHeight }) => (
  <div className={`bg-white rounded-2xl p-5 ${fullHeight ? 'flex-grow flex flex-col' : ''}`}>
    <h3 className="text-brand-red font-serif text-3xl font-bold mb-3">{title}</h3>
    <p className="font-serif text-black text-xl leading-relaxed text-justify">
      {children}
    </p>
  </div>
);

const ImageCard: FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="bg-brand-red rounded-2xl p-4 flex items-center justify-center">
        <Image src={src} alt={alt} width={600} height={340} className="rounded-lg w-full" />
    </div>
);

export default ProjectSlide16;