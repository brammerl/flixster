import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList.jsx'
import MovieCard from './components/MovieCard.jsx'
import Button from './components/Button.jsx'
import SearchInput from './components/SearchInput.jsx'
import Header from './components/Header.jsx'

import useFetchData from './hooks/useFetchData.jsx'
import { REQUEST_METHOD } from './constants/constants.js'


const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const {data, error, loading } = useFetchData(REQUEST_METHOD.GET, page)

  if (loading) {
    return <div>loading</div>
  }

  const filteredData = data.results.filter((data) => {
    if (query == '') {
      return data
    }  
    const trimmedQuery = query.toLowerCase().trimEnd().trimStart()
    return data.original_title.toLowerCase().includes(trimmedQuery);
  })

  return ( 
    <div>
      <Header>
        <SearchInput placeholder={'Search..'} onChange={(e) =>  setQuery(e.target.value)} value={query}/>
          <Button/>
      </Header>
      <div className='main-content'>
        <MovieList>
          {
            filteredData.map((movie) => <MovieCard movie={movie}/>)
          }
        </MovieList>
        <div className='load-more'>
          <Button onClick={() => setPage(prevPage => prevPage + 1)}/>
        </div>
      </div>
    </div> 

  )}

export default App
