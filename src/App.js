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
      <Particles
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
