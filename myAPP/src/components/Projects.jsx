import React from 'react';
import ProjectCards from './ProjectCards'
import animeImg from '../assets/anime.jpg'
import landscapeImg from '../assets/landscape.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectCards img={animeImg} title='Animatch' href='https://animatch.herokuapp.com/'/>
        <ProjectCards img={landscapeImg} title='Artiscapes' href='https://bjthompson12.github.io/Sea-Wolves/'/>
      </div>
    </div>
  );
};

export default Projects;