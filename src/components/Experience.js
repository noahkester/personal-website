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
                <div className="experience-con">
                    <div className="small-subheading-text">{props.name}</div>
                    <div className="small-description-text" style={{ "marginLeft": "20px" }}>{props.role}</div>
                </div>
                <div className="small-description-text" style={{ "paddingRight": "20px" }}>{props.description}</div>
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
            <ExperienceElement logo={momentum_logo} name="Momentum" role = "Tech Lead" description="Coordinated logistics for the newest startup accelerator and incubator at University of Texas as a lead founding officer" />
            <ExperienceElement logo={tuktuk_logo} name="Tuktuk" role = "CTO" description="Led a SCRUM team to develop fullstack applications for a ridesharing company based in Austin" />
            <ExperienceElement logo={lockheed_logo} name="Lockheed Martin" role = "Software Engineering Intern" description="Accelerated development of space flight simulation software by recognizing and diagnosing critical system errors in C and Java" />
            <ExperienceElement logo={rebellion_logo} name="Rebellion Photonics" role = "Full Stack Developer"description="Developed a dynamic website and email database using ReactJS" />
        </div>
    );
}
function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="subheading-text" data-aos="fade-up">Education</div>
            <Education />
            <div className="subheading-text" data-aos="fade-up" style={{ "paddingTop": "100px" }}>Experience</div>
            <div className="experience-timeline">
                <Timeline />
                <AllExperience />
            </div>
        </div>
    );
}
export default Experience;