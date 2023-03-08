import React from 'react'
import Search from '../../components/Search/Search'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import Nav from '../../components/Nav/Nav'

const HomePage = () => {
  const handleOnSearchChange = (searchData) => {
    console.log('search')
  }
  return (
    <div>
      <Nav />
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  )
}

export default HomePage
