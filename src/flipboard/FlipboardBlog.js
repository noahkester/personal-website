import { Flipboard, initializeBoard, handleWaveButton } from "./Flipboard"
import FlipboardNavbar from "./FlipboardNavbar"
import MainButton from "../components/MainButton"
import npm from "../images/npm.png"
import jquery from "../images/jquery.png"
import ijq from "../images/import.png"
import components from "../images/components.png"
import flipsquare from "../images/FlipSquare.png"
import setlocation from "../images/setlocation.png"
import spriteposition from "../images/spriteposition.png"
import animation from "../images/animation.png"
import setZ from "../images/SetZ.png"
import refactor from "../images/refactor.png"
import display from "../images/display.png"
import Line from "../components/Line"
import { NavbarButton } from "../components/Navbar"
import {useState} from "react"

function Setup() {
    return (
        <div data-aos="fade-right">
            <div className="subheading-text blog-element flipboard-heading">Setup</div>
            <div className="small-description-text">Start by creating a default react app using npm</div>
            <div className="flip-code">
                <img className="code-border" src={npm}></img>
            </div>
            <div className="small-description-text">Delete unnecessary files and start with a blank screen</div>
            <div className="small-description-text">JQuery is also extremely useful for accessing elements by id. Include the library by adding this link in the main HTML documents head</div>
            <div className="flip-code">
                <img className="code-border" src={jquery}></img>
            </div>
            <div className="small-description-text blog-element">And include the following import in the JS file</div>
            <div className="flip-code">
                <img className="code-border" src={ijq}></img>
            </div>
            <div className="small-description-text">This tutorial is going to be more high-level but if you want to follow along to make your own, make sure to explore the Github and follow along from there.</div>
        </div>
    )
}
function Components() {
    return (
        <div data-aos="fade-right">
            <div className="subheading-text blog-element flipboard-heading">Components</div>
            <div className="small-description-text blog-element">React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</div>
            <div className="small-description-text blog-element">The best way to think about the flipboard is as a collection of these individual components. Each FlipComponent is also made of 4 different FlipSquares that create the animation. The hierarchy can be thought of as a Flipboard made of FlipRows made of FlipComponents made of 2 FlipCards made of 2 FlipSquares.</div>
            <div className="flip-code">
                <img className="code-border" src={components}></img>
            </div>
            <div className="small-description-text blog-element">I know it’s a lot of ‘Flips’ but they will all be explained. When working with components it is best to start small and work up so we are going to start with a single FlipSquare.</div>
        </div>
    )
}
function FlipSquaresBlog() {
    return (
        <div data-aos="fade-right">
            <div className="subheading-text blog-element flipboard-heading">FlipSquares</div>
            <div className="small-description-text blog-element">Our FlipSquare is going to be a div with an image inside. Because each letter is cut horizontally in half, there are 2 FlipSquares that compose a FlipCard to show the whole letter. To create one FlipSquare, we need to get the dimensions of the image in our CSS. Width to height ratio is 4:6 for a full card which means a square is 4:3 (in CSS the width and height are 40px 30px).</div>
            <div className="flip-code">
                <img className="code-border" src={flipsquare}></img>
            </div>
            <div className="small-description-text blog-element">To actually render this component on the screen it is important to think about how this square is going to move on the screen. When a square is animated it either moves up or down and does not affect the squares around it. Positioning the square as ‘relative’ would be very difficult, so the positioning for each square is absolute. While there are many ways to position a square correctly on the screen with this approach, I created a method that automatically runs when the screen is refreshed that sets the locations of all the elements dynamically. This is done by setting the CSS top and left or right elements with calculations based on the screen width and height. Note: If the screen is too small to render all the elements in the board, a media query is triggered and the board is not rendered instead of every element dynamically resizing. This was done for simplicity when writing the code.</div>
            <div className="flip-code">
                <img className="code-border" src={setlocation}></img>
            </div>
            <div className="small-description-text blog-element">There are also methods to determine which image is rendered on each square. Instead of having 65 layer squares each with a rendered image, the board only has 2 and the square in the back is dynamically updated right before it is revealed to give the illusion of multiple images. It is updated using a sprite image and moving the viewframe based on the components letter state. The letter states are tracked and once it reaches the end of the sprite, it resets back to the beginning.</div>
            <div className="flip-code">
                <img className="code-border" src={spriteposition}></img>
            </div>
        </div>
    )
}
function FlipCardBlog() {
    return (
        <div data-aos="fade-right">
            <div className="subheading-text blog-element flipboard-heading">FlipCard</div>
            <div className="small-description-text blog-element">A FlipCard is composed of 2 FlipSquares. It actually shows an entire letter instead of just half of it. The main challenge with a flipcard is animating it to look like a physical train station flipboard. After researching and watching how the physical board animates, I found that it would look most realistic to animate the top FlipSquare moving down behind the bottom FlipSquare, and then right after, animate both of them moving down below revealing the new letter. This animation was done with SetTimeout functions that held animate methods for the squares. </div>
            <div className="flip-code">
                <img className="code-border" src={animation}></img>
            </div>
        </div>
    )
}
function FlipComponentsBlog() {
    return (
        <div data-aos="fade-right">
            <div className="subheading-text blog-element flipboard-heading">FlipComponent</div>
            <div className="small-description-text blog-element">A FlipComponent is composed of 2 FlipCards. This is done because once the front FlipCard is animated down, a new one must be already behind it to reveal the new letter. However, doing this with 65 cards layered is very expensive and inefficient (I learned this the hard way). Instead, it is much simpler to only have 2 that update on each flip. After the front card is moved down and reveals the back card, it must quickly move back in position behind the new card. This is done with another animation function being triggered and a new function called setZIndex. This function takes a FlipComponet and flips the z index layering so the previous front card can now be in the back.</div>
            <div className="flip-code">
                <img className="code-border" src={setZ}></img>
            </div>
        </div>
    )
}
function FlipRowBlog() {
    return (
        <div data-aos="fade-right">
            <div className="subheading-text blog-element flipboard-heading">FlipRow</div>
            <div className="small-description-text blog-element">Each row needs a few key components. First it needs all the FlipComponents that compose it. For the above example, I used 16 but it would be just as easy to render 3 or 100 because of Reacts components. Each row also needs a ‘hidden wall’ to hide some messy aspects of our animation. If you remember, when a flipcard animates, both FlipSquares move downward. Without a div element hiding this, you would be able to see this animation happen and it wouldn’t look great. Each FlipRow has a div that spans the board horizontally with a very high z-index to hide this.</div>
        </div>
    )
}
function FlipboardComponentBlog() {
    return (
        <div style={{ "paddingBottom": "50px" }} data-aos="fade-right">
            <div className="subheading-text blog-element flipboard-heading">Flipboard</div>
            <div className="small-description-text blog-element">Now the tricky part. The FlipBoard is just a collection of FlipRows but it has much more complex methods to actually get a message to be displayed from the user. When the FlipComponents are rendered, they have custom ids associated with them to access later. When a user types in a message, there is a custom method called that parses the string and centers it with whitespace to be perfectly 64 characters in length. This is done because there are 4 rows with 16 components each which totals to 64 components. Once this string is converted (or rejected if the input is too long), It is passed into the flipboard to render.</div>
            <div className="flip-code">
                <img className="code-border" src={refactor}></img>
            </div>
            <div className="small-description-text blog-element">The flipboard takes the associated index of the string with the id of the square. Index 0 of the string is component 0. If the letter to render is ‘B’, it will call a function ‘FlipRepeat’ that flips the corresponding component until the letter matches the current state. However, we also do not want each square to flip independently and then once it’s done moving on, we need them to all flip simultaneously. This is done by calling setTimeout which will run code after a time value has been reached which is 0 if it's not a wave function. After this is done, the last step is just retrieving the data from the user HTML input box and then running the display word function when the button is pressed.</div>
            <div className="flip-code">
                <img className="code-border" src={display}></img>
            </div>
        </div>
    )
}
const handleRefreshBoard = () => {
    initializeBoard();
}
function FlipboardBlog() {
    const [welcome, setWelcome] = useState(true);
    const check = () => {
        setWelcome(false);
        initializeBoard();
        handleWaveButton();
    }
    return (
        <div>
            <FlipboardNavbar />
            { welcome &&
            <div className="blur">
                <div className="info">
                    <div className="subheading-text">Welcome to the flipboard!</div>
                    <div className="description-text">Input text and animate the board with the ribbon above. Please wait for an animation to complete before trying a new one. Not available on screens smaller than 1300 pixels.</div>
                    <img
                        className="check"
                        src={require("../images/check.png")}
                        onClick={check}
                    />
                </div>
            </div>
            }
            <div>
                <div className="flipboard">
                    <div className="flipboard-display">
                        <Flipboard />
                        <div id="flipboard-row-0" className="flipboard-hide-row"></div>
                        <div id="flipboard-row-1" className="flipboard-hide-row"></div>
                        <div id="flipboard-row-2" className="flipboard-hide-row"></div>
                        <div id="flipboard-row-3" className="flipboard-hide-row"></div>
                        <div id="flipboard-row-4" className="flipboard-hide-row"></div>
                        <div className="flipboard-background"></div>
                    </div>
                </div>
                <div className="flipboard-blog">
                    <div className="flipboard-refresh" onClick={handleRefreshBoard}><NavbarButton text="Refresh Board" /></div>
                    <Line />
                    <div className="flipboard-blog-title blog-element" style={{ "paddingTop": "30px" }} data-aos="fade-up">
                        <div className="heading-text">Reactive Flipboard</div>
                        <div className="description-text" style={{ "paddingTop": "30px", "textAlign": "center" }}>This project beautifully emulates a train station flipboard by displaying interactive text. This project was built entirely from scratch using HTML, CSS, JavaScript, React, and JQuery.</div>
                        <a href="https://github.com/noahkester/personal-website/tree/main/src/flipboard" target="_blank" style={{ "paddingBottom": "50px", "paddingTop": "30px" }}><MainButton text="Github" /></a>
                    </div>
                    <Setup />
                    <Components />
                    <FlipSquaresBlog />
                    <FlipCardBlog />
                    <FlipComponentsBlog />
                    <FlipRowBlog />
                    <FlipboardComponentBlog />
                </div>
            </div>
        </div>
    );
}

export default FlipboardBlog;
