import './style/Projects.css';
import flipboard from '../images/flipboard.png'
import awesome_mix from '../images/awesome_mix.png'
import MainButton from './MainButton';
import Line from './Line'
import { NavbarButton } from './Navbar';
import { Link } from "react-router-dom";
import { initializeBoard, handleWaveButton } from "../flipboard/Flipboard"
var loadFlipboard = () => {
    if (document.body.clientWidth > 1300) {
        setTimeout(function () {
            initializeBoard();
            handleWaveButton();
        }, 2000);
    }
}

function Project(props) {
    return (
        <div className="project" data-aos={props.fade}>
            <div className="general-container project-container">
                <img className="project-image" src={props.image_src} />
            </div>
            <div className={props.classes}>
                <div className="small-subheading-text">{props.title}</div>
                <div className="small-description-text">{props.description}</div>
                <div onClick={loadFlipboard}>
                    <Link className="project-button" to={props.link}><MainButton text="Try it!" /></Link>
                </div>
            </div>
        </div>
    )
}

function ProjectNavbar() {
    return (
        <div className="project-navbar">
            <Line />
            <div className="navbar-buttons">
                <NavbarButton text="Other Projects:" />
                <Link to="website-blog"><NavbarButton text="This Website!" /></Link>
                <Link to="mining-rig-blog"><NavbarButton text="Cryptocurrency Mining Rig" /></Link>
                <Link to="tuktuk-blog"><NavbarButton text="Tuktuk Admin Dashboard" /></Link>
            </div>
            <Line />
        </div>
    )
}

function Projects() {
    return (
        <div id="projects" className="projects">
            <div className="projects-title">
                <div className="subheading-text" data-aos="fade-up">Featured Projects</div>
                <div className="description-text project-description" data-aos="fade-up">I enjoy developing apps and projects that blend interesting technologies with UI/UX design. Try some of them out and read how I build them in my blog and github links.</div>
                <Project classes="general-container project-info-right" title="Reactive Flipboard" image_src={flipboard} link="flipboard-blog" fade="fade-up" description="Beautifully animated text box that emulates a train station flipboard" />
                <Project classes="general-container project-info-left" title="Awesome Mix" image_src={awesome_mix} link="awesome-mix-blog" fade="fade-right" description="Modern record player that reads RFID values and plays songs from the Spotify API" />
                <ProjectNavbar />
            </div>
        </div>
    )
}
export default Projects;