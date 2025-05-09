import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList.jsx'
import MovieCard from './components/MovieCard.jsx'
import Button from './components/Button.jsx'
import SearchInput from './components/SearchInput.jsx'
import Header from './components/Header.jsx'
import Dropdown from './components/Dropdown.jsx'

import useFetchData from './hooks/useFetchData.jsx'
import { REQUEST_METHOD, DROPDOWN_OPTIONS } from './constants/constants.js'
import { getSelectValue, sortMovies } from './helper-functions/sortMovies.js'



const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [sortQuery, setSortQuery] = useState('');

  const {data, error, loading } = useFetchData(REQUEST_METHOD.GET, page)

  if (loading) {
    return <div>loading</div>
  }

  console.log(sortQuery);

  const filteredData = data.results.filter((data) => {
    if (query == '') {
      return data
    }  
    const trimmedQuery = query.toLowerCase().trimEnd().trimStart()
    return data.original_title.toLowerCase().includes(trimmedQuery);
  })

  const sortedMovies = sortMovies(filteredData, sortQuery)

  return ( 
    <div>
      <Header>
        <SearchInput placeholder={'Search..'}value={query} onChange={(e) => setQuery(e.target.value)}/>
        <Dropdown options={DROPDOWN_OPTIONS} onChange={() => {
          const sortQuery = getSelectValue()
          setSortQuery(sortQuery);
        }}/>
        <Button onClick={() => setQuery('')} text='Clear Search'/>
      </Header>
      <div className='main-content'>
        <MovieList>
          {
            sortedMovies.map((movie) => <MovieCard movie={movie}/>)
          }
        </MovieList>
        <div className='load-more'>
          <Button onClick={() => setPage(prevPage => prevPage + 1)}/>
        </div>
      </div>
    </div> 

  )}

export default App
