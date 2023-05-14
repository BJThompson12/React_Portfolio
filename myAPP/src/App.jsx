import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main'
import Work from './components/Work'

export default function App() {
  return (
    <>
     <Sidenav />
     <Main />
     <Work />
    </>
  );
}
