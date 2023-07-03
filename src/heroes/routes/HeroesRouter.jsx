import { Routes, Route, Navigate } from 'react-router-dom';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import { NavBar } from '../../ui';

export const HeroesRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={ <MarvelPage /> } />
          <Route path="dc" element={ <DcPage /> } />
          <Route path="search" element={ <SearchPage /> } />
          <Route path="hero/:id" element={ <HeroPage /> } />

          <Route path="/" element={ <Navigate to="/marvel" /> } />
        </Routes>
      </div>
    </>
  );
};
