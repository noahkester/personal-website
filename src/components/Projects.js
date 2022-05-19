import './style/Projects.css';
import flipboard from '../images/flipboard.png'
import awesome_mix from '../images/awesome_mix.png'
import MainButton from './MainButton';
import Line from './Line'
import { NavbarButton } from './Navbar';
import { Link } from "react-router-dom";


function Project(props) {
    return (
        <div className="project">
            <div className="general-container project-container">
                <img className="flipboard" src={props.image_src} />
            </div>
            <div className={props.classes}>
                <div className="small-subheading-text">{props.title}</div>
                <div className="small-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus </div>
                <Link className="project-button" to={props.link}><MainButton text="Try it!" /></Link>
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
                <div className="subheading-text">Featured Projects</div>
                <div className="description-text project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</div>
                <Project classes="general-container project-info-right" title="Reactive Flipboard" image_src={flipboard} link="flipboard-blog" />
                <Project classes="general-container project-info-left" title="Awesome Mix" image_src={awesome_mix} link="awesome-mix-blog" />
                <ProjectNavbar />
            </div>
        </div>
    )
}
export default Projects;