import React from 'react'
import Search from '../../components/Search/Search'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const handleOnSearchChange = (searchData) => {
    console.log('search')
  }
  return (
    <div>
      <div>
        <div className="flex justify-start items-center p-5">
          <TiWeatherPartlySunny className="text-2xl" />
          <Link to={'/'} className="text-xl font-medium">
            Weather app
          </Link>
        </div>
      </div>
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  )
}

export default HomePage
