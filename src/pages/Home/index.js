import React, { useState } from 'react';
import MoviesList from '../../components/MoviesList';
import Navbar from '../../components/Navbar';
import Winners from '../../components/Winners';
import './styles.css';

export default function Home() {
  const [moviesListVisible, setMoviesListVisible] = useState(false);
  const [winnersVisible, setWinnersVisible] = useState(false);

  function showMovies() {
    setMoviesListVisible(true);
    setWinnersVisible(false);
  }

  function showWinners() {
    setMoviesListVisible(false);
    setWinnersVisible(true);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="box" onClick={showMovies}>
          <label>Lista de filmes</label>
        </div>
        <div className="box" onClick={showWinners}>
          <label>Premiações</label>
        </div>
      </div>
      <MoviesList hidden={!moviesListVisible} />
      <Winners hidden={!winnersVisible} />
    </>
  )
}