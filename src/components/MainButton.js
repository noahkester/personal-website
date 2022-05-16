import "./style/MainButton.css";

function MainButton(props) {
    return (
        <div className="main-button">
            <div className="main-button-text">
                {props.text}
            </div>
        </div>
    );
}

export default MainButton;
