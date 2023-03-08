import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../Data/api'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)
  const handleChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions,
      )
      const result = await response.json()
      return {
        options: result.data.map((city) => {
          return {
            label: `${city.name} - ${city.country}`,
            value: `${city.latitude} ${city.longitude}`,
          }
        }),
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="w-full mt-10">
      <AsyncPaginate
        className="w-[80%] md:w-[50%] lg:w-[50%] m-auto"
        placeholder="Search for a city..."
        debounceTimeout={1000}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}

export default Search
