import React from 'react';
import ProjectCards from './ProjectCards'
import animeImg from '../assets/anime.jpg'
import landscapeImg from '../assets/landscape.jpg'
import weatherImg from '../assets/weather.jpg'
import schedulerImg from '../assets/scheduler.jpg'
import passwordImg from '../assets/password.jpg'
import comingSoonImg from '../assets/comingSoon.jpg'

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
        <ProjectCards img={weatherImg} title='Weather Dashboard' href='https://bjthompson12.github.io/API-Weather-Dashboard/'/>
        <ProjectCards img={schedulerImg} title='Workday Scheduler' href='https://bjthompson12.github.io/Workday-Daily-Planner/'/>
        <ProjectCards img={passwordImg} title='Password Generator' href='https://bjthompson12.github.io/Password_Generator/'/>
        <ProjectCards img={comingSoonImg} title='Coming Soon' href='https://www.comingsoon.net/movies/news/1288654-deadpool-3-working-title-unveiled-for-marvel-studios-sequel'/>
      </div>
    </div>
  );
};

export default Projects;