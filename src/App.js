import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from 'react-particles-js';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      {/* <Particles
        params={{
          "particles": {
            "number": {
              "value": 30
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} /> */}
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 120,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.02
            },
            "move": {
              "direction": "right",
              "speed": 0.05
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "onHover": {
                "enable": true
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }} />
      <Header />
      <Navbar />
      <AboutMe />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
