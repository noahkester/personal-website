import './style/About.css';
import picture from '../images/picture.png'
import MainButton from './MainButton';
import useWindowDimensions from '../windowDimensions';

function ProfileImage() {
    const { height, width } = useWindowDimensions();
    if (width > 1064) {
        return (
            <div className="general-container about-container" data-aos="fade-right">
                <img className="profile-image" src={picture} />
            </div>
        )
    }
    else {
        return (
            <div className="general-container about-container-mobile" data-aos="fade-right">
                <img className="profile-image-mobile" src={picture} />
            </div>
        )
    }
}

function About() {
    const { height, width } = useWindowDimensions();
    return (
        <div id="about" className={"about " + ((width > 1064) ? "" : "mobile-about")}>
            <ProfileImage />
            <div className={(width > 1064) ? "about-text" : "about-text-mobile"} data-aos="fade-left">
                <div className="subheading-text">About Me</div>
                <div className="description-text">I'm a student at the University of Texas at Austin. Hook em! I have a passion creating projects that have impact.</div>
                <div className="description-text" style={{ paddingTop: '6px' }}>My interests include full-stack engineering, web-dev, mobile apps, blockchain, and project management.</div>
                <div className="about-text-element"><a href="https://www.linkedin.com/in/noah-kester/" target="_blank"><MainButton text="LinkedIn" /></a></div>
            </div>
        </div>
    )
}
export default About;
