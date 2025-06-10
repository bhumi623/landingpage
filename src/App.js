import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectManagement from "./components/ProjectManagement";
import TeamCollaboration from "./components/TeamCollaboration";
import "./components/styles/main.scss";
import { Fragments } from 'react';
import Pricing from './components/pricing.jsx';
import Taskey from './components/taskey.jsx';
import Data from './components/data.jsx';
import Custom from './components/custom.jsx';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
    <ProjectManagement/>
    <TeamCollaboration/>


    <Custom/>
    <Pricing/>
    <Taskey/>
    <Data/>
    </>
  );
}

export default App;