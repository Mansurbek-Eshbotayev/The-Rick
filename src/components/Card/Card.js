import "./card.css"

export const Card = ({img,name,status,species,location,ganer}) => {
  return (
    <li className="card__item">
      <img className="card__img" src={img} alt={name} />
      <div className="info">
        <h2 className="card__title" >{name}</h2>
        <p className="card__text"><span>{status}</span>-<span>{species}</span></p>
        <p className="location">Last known location:</p>
        <span className="card__location">{location}</span>
        <p className="card__ganer">ganer: <span className="ganer">{ganer}</span></p>
      </div>
    </li>
  )
}

export default Card;
