import './style/About.css';
import picture from '../images/picture.png'
import MainButton from './MainButton';

function ProfileImage() {
    return (
        <div>
            <img className="profile-image" src={picture} />
        </div>
    )
}

function About() {
    return (
        <div id="about" className="about">
            <div className="general-container about-container" data-aos="fade-right">
                <ProfileImage />
            </div>
            <div className="about-text" data-aos="fade-left">
                <div className="subheading-text">About Me</div>
                <div className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus ewrniu nfjsni osfodspsddfdkkkfr ir</div>
                <div className="about-text-element"><a href="https://www.linkedin.com/in/noah-kester/" target="_blank"><MainButton text="LinkedIn" /></a></div>
            </div>
        </div>
    )
}
export default About;