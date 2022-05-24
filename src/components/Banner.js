import "./style/Banner.css"
import Line from "./Line"
import css_image from '../images/css.svg'
import js_image from '../images/javascript.svg'
import html5_image from '../images/html5.svg'
import python_image from '../images/python.svg'
import git_image from '../images/git.svg'
import react_image from '../images/react.svg'
import c_image from '../images/c.svg'
import docker_image from '../images/docker.svg'
import java_image from '../images/java.svg'
import electron_image from '../images/electron.svg'
import redis_image from '../images/redis.svg'
import mysql_image from '../images/mysql.svg'
import github_image from '../images/github.svg'

function BannerElement(props) {
    return (
        <div className="banner-element">
            <div className="vertical-line"></div>
            <div className={props.ticker_class}>
                <div className="ticker-components">
                    <img className="ticker-component banner-image" src={props.img_src} />
                    <div className="ticker-component description-text">{props.text}</div>
                </div>
            </div>
        </div>
    )
}
function SkillsBanner() {
    return (
        <div>
            <Line />
            <div className="ticker-tape-container">
                <div className="ticker-tape img-ticker-0">
                    <BannerElement ticker_class={"ticker-element"} img_src={css_image} text="CSS" />
                    <BannerElement ticker_class={"ticker-element"} img_src={js_image} text="JavaScript" />
                    <BannerElement ticker_class={"ticker-element"} img_src={html5_image} text="HTML5" />
                    <BannerElement ticker_class={"ticker-element"} img_src={python_image} text="Python" />
                    <BannerElement ticker_class={"ticker-element"} img_src={git_image} text="Git" />
                    <BannerElement ticker_class={"ticker-element"} img_src={react_image} text="React" />
                    <BannerElement ticker_class={"ticker-element"} img_src={c_image} text="C++" />
                    <BannerElement ticker_class={"ticker-element"} img_src={docker_image} text="Docker" />
                    <BannerElement ticker_class={"ticker-element"} img_src={java_image} text="Java" />
                    <BannerElement ticker_class={"ticker-element"} img_src={electron_image} text="Electron" />
                    <BannerElement ticker_class={"ticker-element"} img_src={redis_image} text="Redis" />
                    <BannerElement ticker_class={"ticker-element"} img_src={mysql_image} text="MySQL" />
                    <BannerElement ticker_class={"ticker-element"} img_src={github_image} text="GitHub" />

                    <BannerElement ticker_class={"ticker-element"} img_src={css_image} text="CSS" />
                    <BannerElement ticker_class={"ticker-element"} img_src={js_image} text="JavaScript" />
                    <BannerElement ticker_class={"ticker-element"} img_src={html5_image} text="HTML5" />
                    <BannerElement ticker_class={"ticker-element"} img_src={python_image} text="Python" />
                    <BannerElement ticker_class={"ticker-element"} img_src={git_image} text="Git" />
                    <BannerElement ticker_class={"ticker-element"} img_src={react_image} text="React" />
                    <BannerElement ticker_class={"ticker-element"} img_src={c_image} text="C++" />
                    <BannerElement ticker_class={"ticker-element"} img_src={docker_image} text="Docker" />
                    <BannerElement ticker_class={"ticker-element"} img_src={java_image} text="Java" />
                    <BannerElement ticker_class={"ticker-element"} img_src={electron_image} text="Electron" />
                    <BannerElement ticker_class={"ticker-element"} img_src={redis_image} text="Redis" />
                    <BannerElement ticker_class={"ticker-element"} img_src={mysql_image} text="MySQL" />
                    <BannerElement ticker_class={"ticker-element"} img_src={github_image} text="GitHub" />
                </div>
            </div>
            <Line />
        </div>
    );
}
function EducationBanner() {
    return (
        <div>
            <Line />
            <div className="ticker-tape-container">
                <div className="ticker-tape img-ticker-1">
                    <BannerElement ticker_class={"large-ticker-element"} text="Data Structures" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Operating Systems" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Discrete Math" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Computer Architecture" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Matrices and Linear Algebra" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Competative Programming" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Mobile Computing" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Algorithms" />

                    <BannerElement ticker_class={"large-ticker-element"} text="Data Structures" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Operating Systems" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Discrete Math" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Computer Architecture" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Matrices and Linear Algebra" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Competative Programming" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Mobile Computing" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Algorithms" />

                    <BannerElement ticker_class={"large-ticker-element"} text="Data Structures" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Operating Systems" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Discrete Math" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Computer Architecture" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Matrices and Linear Algebra" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Competative Programming" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Mobile Computing" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Algorithms" />

                    <BannerElement ticker_class={"large-ticker-element"} text="Data Structures" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Operating Systems" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Discrete Math" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Computer Architecture" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Matrices and Linear Algebra" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Competative Programming" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Mobile Computing" />
                    <BannerElement ticker_class={"large-ticker-element"} text="Algorithms" />

                </div>
            </div>
            <Line />
        </div>
    );
}
export { SkillsBanner, EducationBanner };