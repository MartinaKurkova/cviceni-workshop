export const Venue = ({ name, city, street }) => {
    return(
        <div className="venue">
            <p>{name}</p>
            <p>{city}</p>
            <p>{street}</p>
        </div>
    )
}