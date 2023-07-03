import { getHeroesByPublisher } from "../helpers"
import PropTypes from 'prop-types';
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);
  
  return (
    <>
      <div className="row rows-col-1 row-cols-md-3 g-3">
        {heroes?.map(heroe => (
          <HeroCard 
            key={heroe.id} 
            {...heroe}
          />
        ))}
      </div>
    </>
  );
};

HeroList.displayName = HeroList;
HeroList.propTypes = {
  publisher: PropTypes.string
};