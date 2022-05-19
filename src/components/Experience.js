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
            <div className="education">
                <div className="general-container">
                    <img className="ut-logo" src={ut_logo} />
                </div>
                <div className="description-text education-text">University of Texas at Austin. Bachelors of Computer Science. Minor in Entrepreneurship. Graduation: May 2024</div>
            </div>
            <EducationBanner />
        </div>
    )
}
function ExperienceElement(props) {
    return (
        <div className="general-container experience-element">
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
        <div className = "timeline">
            <div className = "timeline-circle"></div>
            <div className="timeline-subline">&nbsp;</div>
            <div className = "timeline-circle"></div>
            <div className="timeline-subline">&nbsp;</div>
            <div className = "timeline-circle"></div>
            <div className="timeline-subline">&nbsp;</div>
            <div className = "timeline-circle"></div>
        </div>
    )
}
function AllExperience() {
    return (
        <div>
            <ExperienceElement logo={momentum_logo} name="Momentum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus" />
            <ExperienceElement logo={tuktuk_logo} name="Tuktuk" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus" />
            <ExperienceElement logo={lockheed_logo} name="Lockheed Martin" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus" />
            <ExperienceElement logo={rebellion_logo} name="Rebellion Photonics" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus" />
        </div>
    );
}
function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="subheading-text">Education and Experience</div>
            <Education />
            <div className="experience-timeline">
                <Timeline />
                <AllExperience />
            </div>
        </div>
    );
}
export default Experience;