import './style/Projects.css';
import flipboard from '../images/flipboard.png'
import awesome_mix from '../images/awesome_mix.png'
import MainButton from './MainButton';
import Line from './Line'
import { NavbarButton } from './Navbar';


function Project(props) {
    return (
        <div className="project">
            <div className="general-container project-container">
                <img className="flipboard" src={props.image_src} />
            </div>
            <div className={props.classes}>
                <div className="small-subheading-text">{props.title}</div>
                <div className="small-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </div>
                <a className="project-button"><MainButton text="Try it!" /></a>
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
                <NavbarButton text="This Website!" />
                <NavbarButton text="Cryptocurrency Mining Rig" />
                <NavbarButton text="Tuktuk Admin Dashboard" />
            </div>
            <Line />
        </div>
    )
}

function Projects() {
    return (
        <div className="projects">
            <div className="projects-title">
                <div id="projects" className="subheading-text">Featured Projects</div>
                <Project classes="general-container project-info-right" title="Reactive Flipboard" image_src={flipboard} />
                <Project classes="general-container project-info-left" title="Awesome Mix" image_src={awesome_mix} />
                <ProjectNavbar />
            </div>
        </div>
    )
}
export default Projects;