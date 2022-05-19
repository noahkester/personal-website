import "./style/Experience.css"
import ut_logo from '../images/ut_logo.png';
import tuktuk_logo from '../images/tuktuk.png';
import lockheed_logo from '../images/lockheed.png';
import rebellion_logo from '../images/rebellion.png';
import momentum_logo from '../images/momentum.png';
import { EducationBanner } from "./Banner";
function Education() {
    return (
        <div>
            <div className="education" data-aos="fade-up">
                <div className="general-container">
                    <img className="ut-logo" src={ut_logo} />
                </div>
                <div>
                    <div className="description-text education-text">University of Texas at Austin</div>
                    <div className="description-text education-text">Bachelors of Computer Science | Minor in Entrepreneurship</div>
                    <div className="description-text education-text">Graduation May 2024</div>
                </div>
            </div>
            <EducationBanner />
        </div>
    )
}
function ExperienceElement(props) {
    return (
        <div className="general-container experience-element" data-aos="fade-left">
            <img className="experience-logo" src={props.logo} />
            <div>
                <div className="small-subheading-text">{props.name}</div>
                <div className="small-description-text">{props.description}</div>
            </div>
        </div>
    )
}
function SubExperienceElement(props) {
    return (
        <div className="general-container sub-experience-element">
            <img className="sub-experience-logo" src={props.logo} />
            <div>
                <div className="small-subheading-text">{props.name}</div>
                <div className="small-description-text">{props.description}</div>
            </div>
        </div>
    )
}
function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline-circle"></div>
            <div className="timeline-subline">&nbsp;</div>
            <div className="timeline-circle"></div>
            <div className="timeline-subline">&nbsp;</div>
            <div className="timeline-circle"></div>
            <div className="timeline-subline">&nbsp;</div>
            <div className="timeline-circle"></div>
        </div>
    )
}
function AllExperience() {
    return (
        <div>
            <ExperienceElement logo={momentum_logo} name="Momentum" description="Coordinated logistics for the newest startup accelerator and incubator at University of Texas as a lead founding officer" />
            <ExperienceElement logo={tuktuk_logo} name="Tuktuk" description="Lead a SCRUM team of 5 engineers to develop an admin dashboard for Tuktuk which displayed critical real-time data" />
            <ExperienceElement logo={lockheed_logo} name="Lockheed Martin" description="Accelerated development of space flight simulation software by recognizing and diagnosing 27+ critical system errors
" />
            <ExperienceElement logo={rebellion_logo} name="Rebellion Photonics" description=" Developed a dynamic website and email database to boost company exposure and gain contact list of over 50 clients" />
        </div>
    );
}
function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="subheading-text" data-aos="fade-up">Education and Experience</div>
            <Education />
            <div className="experience-timeline">
                <Timeline />
                <AllExperience />
            </div>
        </div>
    );
}
export default Experience;