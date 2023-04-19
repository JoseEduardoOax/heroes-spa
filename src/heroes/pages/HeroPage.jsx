import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1); //navega a la pagina anterior
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="container w-60 text-center">
      <div className="card-description grid--2-cols">

        <img src={`/assets/heroes/${id}.jpg`}
          alt=""
          className="w-100 animation-scale-forward-center" />

        <div className="card-description-information">
          <h1 className="uppercase">{hero.superhero}</h1>
          <h2 className="uppercase border-y">{hero.publisher}</h2>
          <h3>{hero.alter_ego}</h3>
          <p>{hero.first_appearance}</p>
          <p>{hero.characters}</p>
          <button className="btn btn-danger" type="button"
            onClick={onNavigateBack}
          >Regresar</button>
        </div>
      </div>
    </div>
  )
}
