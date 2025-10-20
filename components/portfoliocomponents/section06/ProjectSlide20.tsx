 
import type { FC, ReactNode } from 'react';
 
const PhasePill: FC<{ children: ReactNode; smallText?: boolean }> = ({ children, smallText = false }) => (
  <div 
    className={`bg-white rounded-full w-full py-3 px-4 text-center text-brand-red font-serif flex items-center justify-center whitespace-nowrap overflow-hidden
      ${smallText ? 'text-sm md:text-base' : 'text-base md:text-lg'}`}
  >
    {children}
  </div>
);
 
const InfoItem: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="font-display font-extrabold text-xl mb-2">{title}</h3>
    <p className="font-serif text-xl">{children}</p>
  </div>
);

const ProjectSlide20: FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-12 py-8">
 
      <div className="relative bg-brand-red rounded-2xl overflow-hidden p-6 lg:p-10 text-white">
 
        <div className="absolute -top-40 -right-52 w-[1216px] h-[1216px] rounded-full bg-brand-red-dark z-0"></div>
        
        <div className="relative z-10">
          <h2 className="font-display font-extrabold text-4xl mb-12">Playbook</h2>

          <div className="space-y-10">
     
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">PHASE 1 — Foundation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PhasePill smallText>Safety → Vulnerability → Purpose (sequentially layered)</PhasePill>
                <PhasePill smallText>Set startup agreements: norms, roles, meeting flow, feedback culture.</PhasePill>
                <PhasePill smallText>Define "why now?" — share story of formation, shared stakes.</PhasePill>
              </div>
            </div>
 
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">PHASE 2 — First 2 sessions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PhasePill>Focus: Belonging + Clarity</PhasePill>
                <PhasePill smallText>Clarify: purpose, leader role, structure, rules, expectations.</PhasePill>
                <PhasePill>Observe: interaction patterns, silence types</PhasePill>
              </div>
            </div>
 
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">PHASE 3 — Core Skills for Leaders</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PhasePill>OARS: Open Qs, Affirm, Reflect, Summarize</PhasePill>
                <PhasePill>Link ideas; name themes; draw parallels</PhasePill>
                <PhasePill smallText>Draw out / Cut off: respectful interruption & quiet invitation</PhasePill>
              </div>
            </div>
 
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">PHASE 4 — Deepening Cohesion</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PhasePill>Use 0–10 cohesion check-ins.</PhasePill>
                <PhasePill smallText>Prompt personal storytelling tied to purpose.</PhasePill>
                <PhasePill smallText>Use evocative activities (e.g., "letter to self").</PhasePill>
              </div>
            </div>
 
            <div className="space-y-4">
              <h3 className="font-serif text-2xl">PHASE 5 — Transition & Termination</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PhasePill smallText>Prep exits early: review goals, hold appreciation circle.</PhasePill>
                <PhasePill>Use "termination letter to self"</PhasePill>
                <PhasePill>Normalize endings as natural</PhasePill>
              </div>
            </div>
          </div>

          <p className="font-serif text-lg text-center mt-16 max-w-5xl mx-auto">
            The playbook integrates Daniel Coyle's shared purpose model, Tuckman's group stages, APA's cultural humility stance, and HGSE's tools (OARS, tone, process). Includes: startup norms, tone-setting, cut-off/draw-out cues, deepening strategies, a 90-day plan, and exit rituals. Every phase links back to the question: "Are we growing toward cohesion?"
          </p>
        </div>
      </div>
       
      <div className="py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <InfoItem title="Artifacts.">
          Facilitator one‑pager; session templates; first‑90‑days plan; termination checklist; reflection prompts.
        </InfoItem>
        <InfoItem title="Outcomes/Impact.">
          Faster cohesion, clearer purpose, better endings, and reusable rituals.
        </InfoItem>
        <InfoItem title="Evidence to Verify (attach snapshots):">
          Agendas; sign‑ins; feedback forms; end‑of‑cycle letters to self.
        </InfoItem>
        <InfoItem title="Sources used from my files:">
          Class 1–6 Groups & Culture slides (safety/belonging, OARS, Tuckman stages, termination exercises).
        </InfoItem>
      </div>
    </div>
  );
};

export default ProjectSlide20;