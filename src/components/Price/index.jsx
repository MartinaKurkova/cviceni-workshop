import "./index.css";

export const Price = (props) => {
    return (
        <div className="price__container">
            <p className="date">Datum konání: {props.date}</p>
            <p className="price">Cena: {props.price} Kč</p>
        </div>
    )
}