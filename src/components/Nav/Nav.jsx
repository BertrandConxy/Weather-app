import React from 'react'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className="nav flex justify-start items-center p-5">
        <TiWeatherPartlySunny className="text-2xl" />
        <Link to={'/'} className="nav-logo text-xl font-medium">
          Weather app
        </Link>
      </div>
    </div>
  )
}

export default Nav
