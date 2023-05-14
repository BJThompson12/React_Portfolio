import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main'
import About from './components/About';
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'



export default function App() {
  const mystyle = {
    backgroundColor: '#F8F8FF',
  };
  return (
    <>
    <div style={mystyle}>
     <Sidenav />
     <Main />
     <Work />
     <Projects />
     <Contact />
     </div>
    </>
  );
}
