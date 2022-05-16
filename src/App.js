//import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import Introduction from './components/Introduction'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Banner />
      <About />
      <Projects />
    </div>
  );
}

export default App;
