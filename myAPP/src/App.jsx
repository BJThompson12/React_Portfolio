import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main'
import Work from './components/Work'

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
     </div>
    </>
  );
}
