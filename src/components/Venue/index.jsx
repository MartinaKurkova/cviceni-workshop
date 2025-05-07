import "./index.css";

export const Venue = (props) => {
    return (
        <div className="venue">
            <div className="venue__img">
                <img src={props.photo} alt="venue" className="venue__photo" />
            </div>
            <div className="venue__text">
                <h3 className="venue__title">Místo konání:</h3>
                <ul className="venue__list">
                    <li className="venue__item"><strong>Název:</strong> {props.name}</li>
                    <li className="venue__item"><strong>Adresa:</strong> {props.street}, {props.city}</li>
                    <li className="venue__item"><strong>Instrukce:</strong> {props.instructions}</li>
                </ul>
            </div>
        </div>
    )
}