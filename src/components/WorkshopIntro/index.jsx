import "./index.css";

export const WorkshopIntro = (props) => {
    return (
        <div className="intro">
            <h1 className="intro__title">{props.title}</h1>
            <p className="intro__text">{props.description}</p>
        </div>
    )
}