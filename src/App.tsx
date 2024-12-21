import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import About from './components/sobre';

function App() {
  return (
    <div className="min-h-screen relative">
      <Background
        type="video"
        videoUrl="/assets/videos/video.mp4"
      />
      <Header />
      <Hero />
      <Sections />
      <About />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
