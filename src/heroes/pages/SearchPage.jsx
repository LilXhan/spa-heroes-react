import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import queryString from 'query-string';
import { HeroCard } from '../components/HeroCard';
import { getHeroByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  
  const heroes = getHeroByName(q);

  const { searchText, onChangeInput } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${ searchText.toLowerCase().trim() }`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={ onChangeInput }
              value={ searchText }
            />
            <button
              className="btn btn-primary mt-3"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '') ? (
              <div className="alert alert-primary">
                Search a Hero
              </div>
            ) :
            (heroes.length === 0) && (
              <div className="alert alert-danger">
                No hero with <b>{ q }</b>
              </div>
            )
          }
          
          {
            heroes?.map(heroe => (
              <HeroCard key={heroe.id} {...heroe} />
            ))
          }


        </div>
      </div>

    </>
  );
};
