import React from 'react';
import WorkCards from './WorkCards';

//array of current work
const data = [
  {
    year: 2021,
    title: 'Eclipse Reality - Software Delivery Manager',
    duration: '2 years',
    details:
      'Oversee the successful delivery of multiple software projects from conception to deployment, working closely with development teams and stakeholders to ensure on-time and on-budget project delivery. My expertise in project management, software development methodologies, and stakeholder communication enable me to deliver high-quality software solutions that meet business requirements.',
  },
  {
    year: 2018,
    title: 'AT&T Corp. - Network Engineer',
    duration: '3 years',
    details:
      'Responsible for designing, implementing, and maintaining the company\'s telecommunications network infrastructure. I ensured the network was secure, reliable, and scalable to meet the company\'s business needs, and also troubleshooted any issues that arose. I worked closely with other teams, such as software developers and network operations, to ensure seamless integration and optimal performance.',
  },
  {
  year: 2016,
  title: 'AT&T Corp. - Sr. Business Analyst',
  duration: '2 years',
  details:
    'Analyzed complex business problems and providing strategic solutions to improve business processes and increase efficiency. I collaborated with cross-functional teams to gather requirements, identify areas for improvement, and develop recommendations to meet business objectives. I also provided leadership and mentorship to junior analysts, ensuring their professional development and growth.',
},
{
  year: 2014,
  title: 'AT&T Corp. - QA Team Lead',
  duration: '2 years',
  details:
    'Oversaw the quality assurance process and ensuring that products met company and industry standards. I led a team of QA analysts, providing guidance and mentorship to improve their skills and performance. Collaborated with cross-functional teams to identify areas for improvement and implement corrective actions to improve product quality.',
},
{
  year: 2011,
  title: 'AT&T Corp. - Project Coordinator',
  duration: '3 years',
  details:
    'managed projects related to network infrastructure and ensured delivery on time and within budget. Assisted in developing project plans, track progress, and communicate updates to senior management. I also identified and mitigated potential risks, and ensured project deliverables met quality standards.',
},
];

const Work = () => {
  return (
      <div id='work' className='mx-2 p-6 px-16 py-16'>
        <h1 className='text-4xl fotn-bold text-center text-[#001b5e] mb-2'>Work</h1>
        {data.map((item, idex) => (
          <WorkCards
            key={idex}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
  );
};

export default Work;
