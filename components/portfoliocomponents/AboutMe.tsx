// components/portfoliocomponents/AboutMe.tsx
import React from 'react';
import Image from 'next/image';

const AboutMe: React.FC = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      {/* --- Desktop Layout (Literal Adaptation) --- */}
      <div className="hidden lg:block relative h-[1117px] max-w-[1728px] mx-auto">
        {/* Background Image */}
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/92e2648e6254ab2728aa0d05f96c16b68f1c638e?width=3234"
          alt="Abstract background texture"
          width={1617}
          height={994}
          className="absolute rounded-[20px]"
          style={{
            left: "32px",
            top: "91px",
          }}
        />

        <h2
          className="absolute text-brand-red font-heading-impact"
          style={{
            fontSize: "46px",
            fontWeight: 400,
            left: "80px",
            top: "157px",
          }}
        >
          About Me
        </h2>

        <div
          className="absolute text-black text-justify font-serif-georgia"
          style={{
            fontSize: "24px",
            lineHeight: "normal",
            width: "692px",
            left: "80px",
            top: "248px",
          }}
        >
          EdTech Educator, Project & Community Education Lead, and founder of
          KnowtheBlocks Maven (KBM). I design learning ecosystems that empower
          learners in school systems and corporate organizations, extending
          learning beyond classroom walls.
          <br />
          <br />
          My practice blends constructionist design, culturally responsive
          pedagogy, and group facilitation to build community, widen inclusion,
          and deliver real-world outcomes.
          <br />
          <br />
          Through DAOit, I support community participation and shared ownership
          in education, helping learners, families, and educators co-create
          solutions anywhere learning happens.
        </div>

        {/* Decorative SVGs */}
        <svg
          className="absolute"
          style={{ width: "91px", height: "86px", left: "718px", top: "523px" }}
          viewBox="0 0 92 87" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M91 0V86H-2.80887e-06" stroke="black" />
        </svg>
        <svg
          className="absolute"
          style={{ width: "100px", height: "77px", left: "84px", top: "674px" }}
          viewBox="0 0 101 78" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 78V1H101" stroke="black" />
        </svg>

        <div
          className="absolute text-black text-justify font-serif-georgia"
          style={{
            fontSize: "24px",
            lineHeight: "normal",
            width: "655px",
            left: "117px",
            top: "706px",
          }}
        >
          <span className="font-bold">Focus areas:</span>
          <br />
          <br />
          Learning experience (LX) design, curriculum & assessment, project &
          program management, community engagement & partnerships, inclusive
          out-of-school/extended learning, youth voice & co-creation, data
          strategy & continuous improvement, AI & blockchain literacy, group
          culture design.
        </div>

        {/* Profile Image with background squares */}
        <div
          className="absolute"
          style={{
            width: "595px",
            height: "593px",
            left: "998px",
            top: "270px",
          }}
        >
          <div className="absolute w-[282px] h-[282px] bg-brand-red-secondary/20 left-0 top-0" />
          <div className="absolute w-[282px] h-[282px] bg-brand-red-secondary/20 left-0 top-[311px]" />
          <div className="absolute w-[282px] h-[282px] bg-brand-red-secondary/20 left-[313px] top-0" />
          <div className="absolute w-[282px] h-[282px] bg-brand-red-secondary/20 left-[313px] top-[311px]" />

          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/fa83a3c2ad160e21cae5e8af1536fae8288ca3d9?width=1064"
            alt="Profile"
            width={532}
            height={532}
            className="absolute"
            style={{
              left: "37px",
              top: "34px",
            }}
          />
        </div>
      </div>

      {/* --- Tablet/Mobile Layout (Literal Adaptation) --- */}
      <div className="lg:hidden px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-brand-red text-4xl md:text-5xl font-bold mb-8 font-heading-impact">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 font-serif-georgia">
            <p className="text-lg md:text-xl text-justify">
              EdTech Educator, Project & Community Education Lead, and founder
              of KnowtheBlocks Maven (KBM). I design learning ecosystems that
              empower learners in school systems and corporate organizations,
              extending learning beyond classroom walls.
            </p>
            <p className="text-lg md:text-xl text-justify">
              My practice blends constructionist design, culturally responsive
              pedagogy, and group facilitation to build community, widen
              inclusion, and deliver real-world outcomes.
            </p>
            <p className="text-lg md:text-xl text-justify">
              Through DAOit, I support community participation and shared
              ownership in education, helping learners, families, and educators
              co-create solutions anywhere learning happens.
            </p>
            <div className="pt-4">
              <p className="text-lg md:text-xl text-justify">
                <span className="font-bold">Focus areas:</span>
                <br />
                <br />
                Learning experience (LX) design, curriculum & assessment,
                project & program management, community engagement &
                partnerships, inclusive out-of-school/extended learning, youth
                voice & co-creation, data strategy & continuous improvement, AI
                & blockchain literacy, group culture design.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[400px] mx-auto">
            <div className="relative aspect-square">
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="bg-brand-red-secondary/20" />
                <div className="bg-brand-red-secondary/20" />
                <div className="bg-brand-red-secondary/20" />
                <div className="bg-brand-red-secondary/20" />
              </div>
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/fa83a3c2ad160e21cae5e8af1536fae8288ca3d9?width=1064"
                alt="Profile"
                fill
                className="absolute inset-[10%] w-[80%] h-[80%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;