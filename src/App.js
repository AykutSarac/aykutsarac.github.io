import { lazy, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Navbar from './components/layout/Navbar/index';
import Hero from './components/sections/Hero/index';
const Projects = lazy(() => import('./components/sections/Projects/index'));
const Stack = lazy(() => import('./components/sections/Stacks/index'));
const Footer = lazy(() => import('./components/layout/Footer/index'));


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="sheesh">Sheeesh...</div>}>
          <Projects />
          <Stack />
          <Footer />
        </Suspense>
        <div className="wave"></div>
      </div>
    </Router>
  );
}

export default App;
