import React from 'react'

const CurrentWeather = () => {
  return (
    <div className="w-full mt-5">
      <div className="w-[70%] md:w-[40%] lg:w-[40%] m-auto border border-3 bg-gray-100 shadow-lg rounded-md flex flex-col px-4 py-2">
        <div className="flex justify-between">
          <div className="mt-6">
            <h3 className="text-2xl font-bold">Kigali</h3>
            <p className="text-md">Sunny</p>
          </div>
          <img alt="weather" className="w-[30%]" src="icons/01d.png" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <h3 className="text-5xl font-bold self-center">18° C</h3>
          <div>
            <h4 className="font-bold underline">Details</h4>
            <div className="flex justify-between">
              <p>Feels like:</p>
              <p>18° C</p>
            </div>
            <div className="flex justify-between">
              <p>Wind:</p>
              <p>2 m/s</p>
            </div>
            <div className="flex justify-between">
              <p>Humidity:</p>
              <p>15 %</p>
            </div>
            <div className="flex justify-between">
              <p>Pressure:</p>
              <p>15 hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
