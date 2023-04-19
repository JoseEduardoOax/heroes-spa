import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length < 1) return;
    navigate(`?q=${searchText}`);
  }

  return (
    <div className="container">

      <h1 className="title text-center">Search</h1>
      <hr />

      <form onSubmit={onSearchSubmit} className="grid grid--2-cols-40-60 m-top">
        <div>
          <h2 className="m-y subtitle">Searching</h2>

          <input
            type="text"
            placeholder="Search a hero"
            className="rounded-md m-right"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
          <button className="btn btn-primary">Search</button>
        </div>

        <div>
          <h2 className="m-y subtitle">Results</h2>

          {/* {
            (q === '') ? <div className="alert alert-info m-bottom"> Search a heroe</div>
              : (heroes.length === 0) && <div className="alert alert-success"> Not hero with <b>{q}</b></div>
          } */}

          <div className="alert alert-info animation-fade-center m-bottom"
            style={{ display: showSearch ? '' : 'none' }}
          > Search a heroe</div>

          <div className="alert alert-error animation-fade-center"
            style={{ display: showError ? '' : 'none' }}
          > Not hero with <b>{q}</b></div>

          <div className="grid grid--3-cols">
            {heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>

        </div>
      </form>
    </div>
  )
}
