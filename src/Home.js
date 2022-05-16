import './App.css';
import { Navbar } from './components/Navbar';
import Introduction from './components/Introduction'
import { SkillsBanner } from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import BottomNavbar from './components/BottomNavbar'

function Home() {
    return (
        <div>
            <Navbar />
            <Introduction />
            <SkillsBanner />
            <About />
            <Projects />
            <Experience />
            <BottomNavbar />
        </div>
    );
}

export default Home;
