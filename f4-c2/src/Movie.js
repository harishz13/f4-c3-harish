import React, { useState } from 'react';


 function Movie(){
  const [genre, setGenre] = useState('');

  const handleFilterChange = (selectedGenre) => {
    setGenre(selectedGenre);
  };

  return (
    <div className='filter'>
      <h1>Top 15 Movies of All time</h1>
      <GenreFilter onFilterChange={handleFilterChange} />
      <MovieList genre={genre} />
    </div>
  );
};

const MovieList = ({ genre }) => {
  const movies = [
    { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, { title: 'The Godfather', genre: 'Crime', year: 1972 }, 
    { title: 'The Dark Knight', genre: 'Action', year: 2008 },
     { title: '12 Angry Men', genre: 'Drama', year: 1957 },
     {title: 'Schindlers List', genre: 'Drama', year: 1993 },
    { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 },
     { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, 
     { title: 'Inception', genre: 'Science Fiction', year: 2010 },
      { title: 'The Matrix', genre: 'Science Fiction', year: 1999 },
       { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 },
        { title: 'Saving Private Ryan', genre: 'War', year: 1998 },
         { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, 
         { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 },
          { title: 'The Lion King', genre: 'Animation', year: 1994 }
  ];

  const filteredMovies = genre ? movies.filter((movie) => movie.genre === genre) : movies;

  return (
    <table className='data'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody className='data1'>
        {filteredMovies.map((movie) => (
          <tr key={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const GenreFilter = ({ onFilterChange }) => {
  const genres = ['Drama','Crime', 'Action','Fantasy','Western','Science Fiction','Thriller','War',  'Animation'];

  const handleGenreClick = (selectedGenre) => {
    onFilterChange(selectedGenre);
  };

  return (
    <div className='filter'>
      <h2>Filter by Genre</h2>
      {genres.map((genre) => (
        <button key={genre} onClick={() => handleGenreClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default Movie;