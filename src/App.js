import "./App.css"
import { About } from "./components/About";
import { Contact } from "./components/Contacts";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
