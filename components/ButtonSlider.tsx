import React, { useState } from 'react'

const ButtonSlider = () => {
    const [isSlide, setIsSlide] = useState('0')
  return (
    <div className="relative isolate font-medium text-white">
          <button
            className="rounded-full px-4 py-2"
            onClick={() => setIsSlide("0")}
          >
            Movie
          </button>
          <button
            className="rounded-full px-4 py-2"
            onClick={() => setIsSlide("1")}
          >
            Tv Series
          </button>

          <div
            className={`absolute isolate -z-10 bg-red-600 transition-all duration-500  ${isSlide === "0" ? "translate-x-0" : "w-[87px] translate-x-full"}  top-0 h-full w-20 rounded-full`}
          ></div>
        </div>
  )
}

export default ButtonSlider