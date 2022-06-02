
import amc from "../images/awesomemixcover.png"
import AwesomeMixNavbar from "./AwesomeMixNavbar";
import MainButton from "../components/MainButton";
import Line from "../components/Line"
import login from "../images/amlogin.png"
import dashboard from "../images/amdashboard.png"
import track from "../images/amtrack.png"
import server from "../images/rfidserver.png"
import "./AwesomeMix.css"

function Setup() {
    return (
        <div className="awesome-blog-component awesome-chapter" id="awesome-setup" data-aos="fade-left">
            <div className="subheading-text awesome-blog-component">Setup</div>
            <div className="small-subheading-text awesome-blog-component">Hardware Components:</div>
            <div style={{ "marginLeft": "30px" }}>
                <div className="small-description-text">• Raspberry Pi</div>
                <div className="small-description-text">• RFID reader module</div>
                <div className="small-description-text">• 5 jumper wires</div>
                <div className="small-description-text">• MicroSD card</div>
                <div className="small-description-text">• 7’ RP touch display screen (optional)</div>
                <div className="small-description-text">• Wooden box or container (optional)</div>
            </div>
            <div className="small-description-text">Note: If the Raspberry Pi is version is 2.0 or older, a wireless NIC is needed to access the internet and Spotify API</div>
            <div className="small-description-text">Note: A 5V power cable is needed to power the Raspberry Pi if not included. RP will not start properly or get stuck in a reboot loop if voltage is not correct</div>
            <div className="small-description-text">Note: The display screen and wooden box is used in this example for the Guardians of the Galaxy display. This project can be adapted to just scan without these components.</div>
            <div className="small-subheading-text awesome-blog-component">Software Components:</div>
            <div className="small-description-text">The Spotify API is used for playing the songs. A developer account is needed to interface with the API to authenticate users before logging in</div>
            <div className="small-description-text">ReactJS, NodeJS need to be installed on the Pi</div>
            <div className="small-description-text">The project is broken up into 2 different modules. Client and Server. The following need to be installed with npm for each module</div>
            <div style={{ "marginLeft": "30px" }}>
                <div className="small-description-text">Server: ExpressJS, MRFC555-rpi, Spotify-web-api-node, cors, body-parser, socket.io</div>
                <div className="small-description-text">Client: axios, body-parser, react-spotify-web-playback, socket.io-client</div>
            </div>
        </div>
    );
}
function Client() {
    return (
        <div className="awesome-blog-component awesome-chapter" id="awesome-client" data-aos="fade-left">
            <div className="subheading-text awesome-blog-component">Client</div>
            <div className="small-description-text">The Client is a React Web App that displays the Awesome Mix cassette tape and the song information. It has a play and pause button for the user to interface with by touching the screen but all song changes are handled by the RFID scanner</div>
            <div className="small-description-text">The architecture for the Client has the following main components:</div>
            <div style={{ "marginLeft": "30px" }}>
                <div className="small-description-text">• Login</div>
                <div className="small-description-text">• Dashboard</div>
                <div className="small-description-text">• TrackDisplay</div>
                <div className="small-description-text">• Player</div>
            </div>
            <div className="small-description-text">The Login screen authorizes the Spotify user by sending an authorization token to the API and getting a refresh token.</div>
            <div className="small-description-text">This screen interfaces with a backend server to get the API request to the client. Once the credentials are approved, the user is taken to the dashboard.</div>
            <div className="small-description-text">The Dashboard renders the cassette gif and shows the song information. This is the main screen for the frontend to display information</div>
            <div className="awesome-code">
                <img className="code-image" src={dashboard}></img>
            </div>
            <div className="small-description-text">The TrackDisplay is a hidden element that will display briefly on the Dashboard when songs are scanned or when a user clicks on the Dashboard</div>
            <div className="small-description-text">The Player is a Spotify API library that will play a song given a name and will also render a component to press play or skip parts of a song that was scanned</div>
            <div className="awesome-code">
                <img className="code-image" src={track}></img>
            </div>
        </div>
    );
}
function Server() {
    return (
        <div className="awesome-blog-component awesome-chapter" id="awesome-server" data-aos="fade-left">
            <div className="subheading-text awesome-blog-component">Server</div>
            <div className="small-description-text">The server utilizes REST API to interface with the Spotify API for user authentication. It refreshes authentication tokens and directs the client to the Dashboard when successfully logged in. </div>
            <div className="awesome-code">
                <img className="code-image" src={login}></img>
            </div>
            <div className="small-description-text">The server also has an interval function that constantly checks the RFID module for scanned cards and updates the current song playing if there is a change. This update is sent to the client using socket.io connections. Below is the code for reading RFID values and sending the data via socket.io</div>
            <div className="awesome-code">
                <img className="code-image last" src={server}></img>
            </div>
        </div>
    );
}

function AwesomeMixBlog() {
    return (
        <div>
            <AwesomeMixNavbar />
            <div className="awesome">
                <video className="awesome-video" width="1200" height="700" controls>
                    <source src="/Videos/awesomemix.mp4" type="video/mp4" />
                </video>
                <Line />
                <div className="awesome-title awesome-blog-component" style={{ "paddingTop": "30px" }}>
                    <div className="heading-text">Modern Record Player</div>
                    <div className="description-text" style={{ "paddingTop": "10px", "textAlign": "center" }}>The Modern Record Player is an adaption of the classic record player but instead of using vinyl, it will read an RFID card and interface with the Spotify API. Above is a demo with the scanner and Pi connected to a speaker and an optional UI that can be displayed from a built-in screen. Built with NodeJS, Spotify API, Socket.io, ReactJS</div>
                    <a href="https://github.com/noahkester/record-player" target="_blank" style={{ "paddingBottom": "50px", "paddingTop": "30px" }}><MainButton text="Github" /></a>
                </div>
                <Setup />
                <Client />
                <Server />
            </div>
        </div>
    );
}

export default AwesomeMixBlog;
