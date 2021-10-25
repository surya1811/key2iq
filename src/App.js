
import './App.css';
import Cover from './Components/Cover';
import About from './Components/About';
import Archi from './Components/Architecture';
import Concept from './Components/Concepts';
import Api from './Components/Api';
import Run from './Components/Run';
import Tutorials from './Components/Tutorial';
import Project from './Components/Project';
import Example from './Components/Example';
import Foot from './Components/Foot';
import Socialmedia from './Components/Socialmedia';
function App() {
  return (
    <div >
      <Cover/>
      <Socialmedia/>
      <About />
      <Archi />
      <Concept/>
      <Api />
      <Run />
      <Tutorials />
      <Project />
      <Example />
      <Foot/>
    </div>
  );
}

export default App;
