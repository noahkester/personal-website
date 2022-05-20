import './style/Introduction.css';

function Titles() {
    return (
        <div className="heading-text h1-test">
            <span className="span-test">:</span>
            <div className="message">
                <div>Software Engineer.</div>
                <div>Web Developer.</div>
                <div>Start-up Enthusiast.</div>
            </div>
        </div>
    );
}

function Introduction() {
    return (
        <div id="introduction" className="introduction" data-aos="fade-right">
            <div className="introduction-text">
                <div className="heading-text">Hello! I'm Noah Kester.</div>
                <Titles />
                <div className="description-text">I’m a Computer Science major at the University of Texas, Hook Em! I have a passion for entrepreneurship and love using technology to build things that have true impact in my community</div>
            </div>
        </div>
    )
}
export default Introduction;