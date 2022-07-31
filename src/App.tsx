import React from 'react';
import { Routes, Route } from "react-router-dom";
import Movies from './components/Movies';
import Movie from './components/Movie';
import './App.css';

function App ()
{

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Movies /> } />
        <Route path="/:movieId" element={ <Movie /> } />
        <Route
          path="*"
          element={
            <main style={ { padding: "1rem" } }>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;