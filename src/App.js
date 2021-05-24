import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 60
            },
            "size": {
              "value": 4
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
    </>
  );
}

export default App;
