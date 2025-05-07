import "./index.css";

export const Instructor = (props) => {
    return (
        <div className="instructor">
            <div className="instructor__img">
                <img src={props.avatar} alt="instructor portrait" className="instructor__photo" />
            </div>
            <div className="instructor__text">
                <h3 className="instructor__title">Instruktor:</h3>
                <ul className="instructor__list">
                    <li className="instructor__item"><strong>Jméno:</strong> {props.name}</li>
                    <li className="instructor__item"><strong>E-mail:</strong> {props.email}</li>
                    <li className="instructor__item"><strong>Profese:</strong> {props.profession}</li>
                    <li className="instructor__item"><strong>Bio:</strong> {props.bio}</li>
                </ul>
            </div>
        </div>
    )
}