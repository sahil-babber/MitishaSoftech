import Header from "../../utilities/header/Header";
import Sliders from "../slider/Slider";
import Clients from "./clients/Clients";
import Collaborate from "./collaborate/Collaborate";
import Help from "./help/Help";
import Hero from "./herosection/Hero";
import "./Home.css";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Testimonial from "./testimonial/Testimonial";

function Home() {
  return (
    <>
    <Header/>
      <Hero/>

      
      {/* ==============how can we help you================================================================ */}
      <Help/>
      {/* ====================== Latest projects================================================================ */}
      <Projects/>
      {/* ===========clients section ================================= */}
      <Clients/>
      {/* ====================== Collaborate ================================================================ */}
      <Collaborate/>
      {/* ====================== Skills ================================================================ */}
      <Skills/>
      {/* ====================== Testimonial ================================================================ */}
      {/* <Testimonial/> */}
 
    </>
  );
}

export default Home;
