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
                <div className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus ewrniu nfjsni osfodspsddpf fdkkkfr ir</div>
            </div>
        </div>
    )
}
export default Introduction;