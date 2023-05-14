import React from 'react';
import WorkCards from './WorkCards';

//array of current work
const data = [
  {
    year: 2020,
    title: 'Content Creator',
    duration: '3 years',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptates.',
  },
  {
    year: 2017,
    title: 'Google',
    duration: '3 years',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptates.',
  },
  {
    year: 2015,
    title: 'Amazon',
    duration: '2 years',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptates.',
  },
  {
    year: 2012,
    title: 'Facebook',
    duration: '3 years',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, voluptates.',
  },
];

const Work = () => {
  return (
    <div className='border-solid border-2 border-red-400 w-max'>
      <div id='work' className='border-solid border-2 border-blue-400'>
        <h1 className='text-4xl fotn-bold text-center text-black'>Work</h1>
        {data.map((item, idx) => (
          <WorkCards
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
