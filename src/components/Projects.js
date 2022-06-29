import './style/Projects.css';
import flipboard from '../images/flipboard.png'
import awesome_mix from '../images/awesome_mix.png'
import pgn_apps from '../images/pgnappcover.png'
import MainButton from './MainButton';
import Line from './Line'
import { NavbarButton } from './Navbar';
import { Link } from "react-router-dom";
import useWindowDimensions from '../windowDimensions';

function Project(props) {
    return (
        <div className="project" data-aos={props.fade}>
            <div className="general-container project-container">
                <img className="project-image" src={props.image_src} />
            </div>
            <div className={props.classes}>
                <div className="small-subheading-text">{props.title}</div>
                <div className="small-description-text">{props.description}</div>
                <div>
                    <Link className="project-button" to={props.link}><MainButton text="Try it!" /></Link>
                </div>
            </div>
        </div>
    )
}
function ProjectMobile(props) {
    return (
        <div className="project" data-aos={props.fade}>
            <div className="general-container project-container-mobile">
                <img className="project-image-mobile" src={props.image_src} />
            </div>
            <div className={props.classes}>
                <div className="small-subheading-text">{props.title}</div>
                <div className="small-description-text">{props.description}</div>
                <div>
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
            </div>
            <Line />
        </div>
    )
}

function Projects() {
    const { height, width } = useWindowDimensions();
    if (width > 1064) {
        return (
            <div id="projects" className="projects">
                <div className="projects-title">
                    <div className="subheading-text" data-aos="fade-up">Featured Projects</div>
                    <div className="description-text project-description" data-aos="fade-up">I develop apps and projects that blend interesting technologies with UI/UX design. Try some of them out and read how I build them in my blog and Github links.</div>
                    <Project classes="general-container project-info-right" title="Reactive Flipboard" image_src={flipboard} link="flipboard-blog" fade="fade-up" description="Beautifully animated text box that emulates a train station flipboard" />
                    <Project classes="general-container project-info-left" title="Modern Record Player" image_src={awesome_mix} link="awesome-mix-blog" fade="fade-right" description="Reads RFID values and plays songs from a Raspberry pi using the Spotify API" />
                    <Project classes="general-container project-info-right" title="Professional Development App" image_src={pgn_apps} link="pgn-app-blog" fade="fade-right" description="App for a professional development organization that tracks member status, events, and points for 100+ members" />
                    <ProjectNavbar />
                </div>
            </div>
        )
    }
    else {
        return (
            <div id="projects" className="projects">
                <div className="projects-title">
                    <div className="subheading-text" data-aos="fade-up">Projects</div>
                    <div className="description-text project-description-mobile" data-aos="fade-up">I develop apps and projects that blend interesting technologies with UI/UX design. Try some of them out and read how I build them in my blog and Github links.</div>
                    <ProjectMobile classes="general-container project-info-mobile" title="Reactive Flipboard" image_src={flipboard} link="flipboard-blog" fade="fade-up" description="Beautifully animated text box that emulates a train station flipboard" />
                    <ProjectMobile classes="general-container project-info-mobile" title="Modern Record Player" image_src={awesome_mix} link="awesome-mix-blog" fade="fade-right" description="Reads RFID values and plays songs from a Raspberry pi using the Spotify API" />
                    <ProjectMobile classes="general-container project-info-mobile" title="Professional Development App" image_src={pgn_apps} link="pgn-app-blog" fade="fade-right" description="App for a professional development organization that tracks member status, events, and points for 100+ members" />
                </div>
            </div>
        )
    }
}
export default Projects;