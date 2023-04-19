import { Link } from "react-router-dom"

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego == characters) return (<></>);

  return <span>{characters}</span>
}

export const HeroCard = ({
  id
  , superhero
  , alter_ego
  , characters
}) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`

  // const charactersByHero = <p>{characters}</p>

  return (
    <div className="comic-card">
      <h3 className="text-center p-y">{superhero}</h3>

      <img className="w-100" src={heroImageUrl} alt={superhero} />
      <h4 className="text-center p-y">{alter_ego}</h4>

      {/* <CharactersByHero characters={characters} alter_ego={alter_ego} /> */}
      <Link className="btn-more w-100 text-center" to={`/hero/${id}`}>
        Mas...
      </Link>
    </div>
  )
}
