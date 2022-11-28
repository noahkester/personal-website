import "./style/Experience.css"
import ut_logo from '../images/ut_logo.png';
import tuktuk_logo from '../images/tuktuk.png';
import lockheed_logo from '../images/lockheed.png';
import rebellion_logo from '../images/rebellion.png';
import momentum_logo from '../images/momentum.png';
import { EducationBanner } from "./Banner";
import useWindowDimensions from '../windowDimensions';

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
function EducationMobile() {
    return (
        <div>
            <div className="education-mobile" data-aos="fade-up">
                <div className="general-container">
                    <img className="ut-logo" src={ut_logo} />
                </div>
                <div className="description-text education-text-mobile" style={{ marginTop: '10px' }}>University of Texas at Austin</div>
                <div className="description-text education-text-mobile">Bachelors of Computer Science</div>
                <div className="description-text education-text-mobile">Minor in Entrepreneurship</div>
                <div className="description-text education-textmobile">Graduation May 2024</div>
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
                    <div className="small-description-text" style={{ "marginLeft": "20px"}}>{props.role}</div>
                </div>
                <div className="small-description-text" style={{ "paddingRight": "20px" }}>{props.description}</div>
            </div>
        </div>
    )
}
function ExperienceElementMobile(props) {
    return (
        <div className="general-container experience-element-mobile" data-aos="fade-left">
            <div className="mobile-row">
                <img className="experience-logo" src={props.logo} />
                <div>
                    <div className="small-subheading-text">{props.name}</div>
                    <div className="small-description-text">{props.role}</div>
                </div>
            </div>
            <div className="small-description-text" style={{ "paddingLeft": "20px" }}>{props.description}</div>
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
            <ExperienceElement logo={momentum_logo} name="Momentum" role="VP of Accelerator" description="" />
            <ExperienceElement logo={tuktuk_logo} name="Tuktuk" role="Startup CTO" description="" />
            <ExperienceElement logo={lockheed_logo} name="Lockheed Martin" role="Software Engineering Intern" description="" />
            <ExperienceElement logo={rebellion_logo} name="Rebellion Photonics" role="Web Development Intern" description="" />
        </div>
    );
}
function AllExperienceMobile() {
    return (
        <div>
            <ExperienceElementMobile logo={momentum_logo} name="Momentum" role="Technology Director" description="" />
            <ExperienceElementMobile logo={tuktuk_logo} name="Tuktuk" role="CTO" description="" />
            <ExperienceElementMobile logo={lockheed_logo} name="Lockheed Martin" role="Systems Engineering" description="" />
            <ExperienceElementMobile logo={rebellion_logo} name="Rebellion Photonics" role="Web Dev Intern" description="" />
        </div>
    );
}
function Experience() {
    const { height, width } = useWindowDimensions();
    if (width > 1064) {
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
    else {
        return (
            <div id="experience" className="experience">
                <div className="subheading-text" data-aos="fade-up">Education</div>
                <EducationMobile />
                <div className="subheading-text" data-aos="fade-up" style={{ "paddingTop": "100px" }}>Experience</div>
                <div className="experience-timeline">
                    <AllExperienceMobile />
                </div>
            </div>
        );
    }
}
export default Experience;