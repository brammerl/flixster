import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList.jsx'
import MovieCard from './components/MovieCard.jsx'
import Button from './components/Button.jsx'

import useFetchData from './hooks/useFetchData.jsx'
import { REQUEST_METHOD } from './constants/constants.js'


const App = () => {
  const [page, setPage] = useState(1);

  const {data, error, loading } = useFetchData(REQUEST_METHOD.GET, page)


  if (loading) {
    return <div>loading</div>
  }

  return (  
    <div className='main-content'>
      <MovieList>
        {
          data.results.map((movie) => <MovieCard movie={movie}/>)
        }
      </MovieList>
      <div className='load-more'>
        <Button onClick={() => setPage(prevPage => prevPage + 1)}/>
      </div>
    </div>

  )

}

export default App
