import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function MoviesList({ hidden }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      if (!hidden) {
        const response = await api.get('/movies');
        setMovies(response.data);
      }
    }
    getMovies();
  }, [hidden]);

  return (
    <>
      <div hidden={hidden}>
        <h2 className="title">Lista de filmes</h2>
        <table className="moviesTable">
          <tbody>
            <tr>
              <th>year</th>
              <th>title</th>
              <th>studios</th>
              <th>producers</th>
              <th>winner</th>
            </tr>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.year}</td>
                <td>{movie.title}</td>
                <td>{movie.studios}</td>
                <td>{movie.producers}</td>
                <td>{movie.winner === true ? 'yes' : 'no'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}