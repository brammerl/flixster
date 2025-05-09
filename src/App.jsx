import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList.jsx'
import MovieCard from './components/MovieCard.jsx'

import useFetchData from './hooks/useGetNowPlaying.jsx'
import { REQUEST_METHOD } from './constants/constants.js'


const App = () => {
  const [movies, setMovies] = useState([])

  const {data, error, loading } = useFetchData(REQUEST_METHOD.GET, import.meta.env.VITE_NOW_PLAYING_URL)


  if (loading) {
    return <div>loading</div>
  }

  return (  
    <MovieList>
      {
        data.results.map((movie) => <MovieCard movie={movie}/>)
      }
    </MovieList>
  )

}

export default App
