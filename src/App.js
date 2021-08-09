import React from 'react';
import { lazy, Suspense } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar/index';
import Hero from './components/sections/Hero/index';

/* Lazy load components */
const Projects = lazy(() => import('./components/sections/Projects/index'));
//const Stack = lazy(() => import('./components/sections/Stacks/index'));
const Footer = lazy(() => import('./components/layout/Footer/index'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="sheesh">Sheeesh...</div>}>
        <Projects />
        {/* <Stack /> */}
        <Footer />
        <div className="wave"></div>
      </Suspense>
    </div>
  );
}

export default App;
