import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];
  
  if (!validPublisher.includes(publisher.trim())) {
    throw new Error(`${publisher} not defined`);
  }

  return heroes.filter(heroe => heroe.publisher === publisher.trim());
};
