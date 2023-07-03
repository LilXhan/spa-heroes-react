import { heroes } from '../data/heroes'

export const getHeroByName = (name = '') => {
  if (name.length === 0) return [];

  name = name.trim().toLocaleLowerCase();
  return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));
};
