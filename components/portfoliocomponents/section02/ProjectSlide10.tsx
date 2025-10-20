 //  ProjectSlide10.tsx
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide10: FC = () => {
  return (
    
   /* <div className="container mx-auto px-4 py-8 max-h-[1117px] min-h-[900px] flex flex-col overflow-hidden"> 
  
      <div className="bg-gray-800 text-white p-3 font-serif text-2xl lg:text-3xl font-bold mb-4 mx-auto rounded-t-lg max-w-full lg:max-w-[calc(66.66%_-_1rem)]">
        Continuous Evaluation Scorecard Template
        <p className="text-lg lg:text-xl font-normal mt-1">Center For Practice Innovations (CPI) - Learning Delivery Evaluation</p>
      </div>
 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 flex-grow items-stretch"> 
       
        <div className="lg:col-span-2 flex flex-col space-y-4 lg:space-y-6 overflow-y-auto custom-scrollbar">  
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-brand-red text-white font-serif text-xs lg:text-sm"> 
              <thead>
                <tr className="bg-brand-red-dark">
                  <th className="py-2 px-3 lg:px-4 text-left">Dimensions</th> 
                  <th className="py-2 px-3 lg:px-4 text-left">Key Performance Indicators (KPI)</th>
                  <th className="py-2 px-3 lg:px-4 text-left">Data Source</th>
                  <th className="py-2 px-3 lg:px-4 text-left">Collection Frequency</th>
                  <th className="py-2 px-3 lg:px-4 text-left">Target/Benchmark</th>
                  <th className="py-2 px-3 lg:px-4 text-left">Actual/Performance</th>
                  <th className="py-2 px-3 lg:px-4 text-left">Remarks/Recommendations</th>
                </tr>
              </thead>
              <tbody> 
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4 font-bold text-base" rowSpan={3}>Efficiency</td>  
                  <td className="py-1 px-3 lg:px-4">- Course completion rates (%)</td>
                  <td className="py-1 px-3 lg:px-4">LMS scores</td>
                  <td className="py-1 px-3 lg:px-4">End of each module</td>
                  <td className="py-1 px-3 lg:px-4">gt 90%</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4">- Average time to completion</td>
                  <td className="py-1 px-3 lg:px-4">LMS analytics</td>
                  <td className="py-1 px-3 lg:px-4">Monthly</td>
                  <td className="py-1 px-3 lg:px-4">Individual schedule</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4">- Cost per course trained</td>
                  <td className="py-1 px-3 lg:px-4">Finance records</td>
                  <td className="py-1 px-3 lg:px-4">Quarterly</td>
                  <td className="py-1 px-3 lg:px-4">Budget-aligned</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>

       
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4 font-bold text-base" rowSpan={3}>Engagement</td>
                  <td className="py-1 px-3 lg:px-4">- Learner participation in discussions (No)</td>
                  <td className="py-1 px-3 lg:px-4">LMS discussion forum logs</td>
                  <td className="py-1 px-3 lg:px-4">Weekly</td>
                  <td className="py-1 px-3 lg:px-4">gt 70%</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4">- Number of certifications attended</td>
                  <td className="py-1 px-3 lg:px-4">LMS attendance logs</td>
                  <td className="py-1 px-3 lg:px-4">Per course</td>
                  <td className="py-1 px-3 lg:px-4">100% attendance target</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4">- Learner satisfaction (1-5) overall</td>
                  <td className="py-1 px-3 lg:px-4">Survey results</td>
                  <td className="py-1 px-3 lg:px-4">End of course</td>
                  <td className="py-1 px-3 lg:px-4">gt 4</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                
                 
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4 font-bold text-base" rowSpan={3}>Outcomes</td>
                  <td className="py-1 px-3 lg:px-4">- Assessment average scores (%)</td>
                  <td className="py-1 px-3 lg:px-4">Test and quizzes results</td>
                  <td className="py-1 px-3 lg:px-4">Each assessment</td>
                  <td className="py-1 px-3 lg:px-4">gt 80%</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4">- Application of new practices</td>
                  <td className="py-1 px-3 lg:px-4">Post-training surveys</td>
                  <td className="py-1 px-3 lg:px-4">3 months post-course</td>
                  <td className="py-1 px-3 lg:px-4">gt 75%</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4">- Improvement in organizational capacity for mental health workforce</td>
                  <td className="py-1 px-3 lg:px-4">Organizational capacity feedback</td>
                  <td className="py-1 px-3 lg:px-4">Quarterly</td>
                  <td className="py-1 px-3 lg:px-4">Improvement noted</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
 
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4 font-bold text-base" rowSpan={3}>Stakeholder Feedback</td>
                  <td className="py-1 px-3 lg:px-4">- Facilitator feedback on learner concerns</td>
                  <td className="py-1 px-3 lg:px-4">Facilitator feedback form</td>
                  <td className="py-1 px-3 lg:px-4">Monthly</td>
                  <td className="py-1 px-3 lg:px-4">No concerns</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4">- Learner satisfaction with instructional outcomes</td>
                  <td className="py-1 px-3 lg:px-4">Learner feedback survey</td>
                  <td className="py-1 px-3 lg:px-4">Bi-annually</td>
                  <td className="py-1 px-3 lg:px-4">gt 8 on satisfaction</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
                <tr className="border-t border-brand-red-dark bg-brand-red">
                  <td className="py-1 px-3 lg:px-4">- Sustained support improvement</td>
                  <td className="py-1 px-3 lg:px-4">Support help logs</td>
                  <td className="py-1 px-3 lg:px-4">Monthly</td>
                  <td className="py-1 px-3 lg:px-4">Response within 24 hrs</td>
                  <td className="py-1 px-3 lg:px-4"></td>
                  <td className="py-1 px-3 lg:px-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
           <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-brand-gray-dark text-white font-serif text-xs lg:text-sm">  
              <thead>
                <tr className="bg-brand-gray-dark">
                  <th className="py-2 px-3 lg:px-4 text-left">Purpose</th> 
                  <th className="py-2 px-3 lg:px-4 text-left">Collaborate</th>
                  <th className="py-2 px-3 lg:px-4 text-left">Instruction</th>
                  <th className="py-2 px-3 lg:px-4 text-left">Action Items</th>
                  <th className="py-2 px-3 lg:px-4 text-left">Assignee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-600">
                  <td className="py-1 px-3 lg:px-4 align-top">  
                    The CPI-endorsed decision framework is designed to support continuous quality improvement of scalable, self-paced education delivery programs, aligned with CPI&apos;s educational frameworks.
                  </td>
                  <td className="py-1 px-3 lg:px-4 align-top">
                    Stakeholder engagement is key to all stakeholder success. Maintain alignment with stakeholder needs, promoting scalable education delivery with effective solutions.
                  </td>
                  <td className="py-1 px-3 lg:px-4 align-top">
                    <ul className="list-disc pl-4 space-y-1">  
                      <li>Communication for IDT and facilitators between rounds before mock-up/beta test and check quarterly or right after any major program shifts.</li>
                      <li>Weekly check-ins for the first month with project leads, QA, and feedback from SMEs. Then every two weeks for three months.</li>
                      <li>Weekly sync-up with Project Lead: review data & QA concerns.</li>
                      <li>Cohort close-out: Post-evaluations will assess all phases, modality, life and program outcome evaluations.</li>
                      <li>Formal Check-ins: For operational concerns before/after of the 4-level again.</li>
                      <li>QCR / Accessible / Content / QA and accessibility audits every monthly.</li>
                      <li>All content should be reviewed at the start and the end of each cohort.</li>
                      <li>Standardized weekly review. QA reports are reviewed monthly by the ID team.</li>
                      <li>Weekly sync-up with Project Lead: review data from one week of QA reviewed.</li>
                      <li>Post-cohort review: First 3 months, then within two weeks of cohort end.</li>
                      <li>Quarterly team review. Align usability, user budgets, and approve program revisions.</li>
                    </ul>
                  </td>
                  <td className="py-1 px-3 lg:px-4 align-top">
                    Create six new stakeholder personas.
                  </td>
                  <td className="py-1 px-3 lg:px-4 align-top">
                    Names of the project team.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
 
        <div className="lg:col-span-1 flex items-center justify-center p-4">
          <Image
            src="/images/sec2/chart-with-shapes.png"  
            alt="Abstract chart with connected shapes"
            width={500}
            height={500}
            layout="intrinsic"
            objectFit="contain"
            className="w-full h-auto max-h-[900px]" 
          />
        </div>
      </div>
    </div>*/
    <></>
  );
};

export default ProjectSlide10; 