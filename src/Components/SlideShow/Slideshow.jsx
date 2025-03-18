import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Slideshow = ({ photos }) => {


    const [currentIndex, setCurrentIndex] = useState(0)
  
  // Handle empty photos array
  if (!photos || photos.length === 0) {
    return <div className="text-center p-4">No photos available</div>
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === photos.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }


  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
    {/* Main container with relative positioning */}
    <div className="w-full h-full relative overflow-hidden rounded-md">
      
      {/* CURRENT PHOTO */}
      <img 
        src={photos[currentIndex].image} 
        alt={photos[currentIndex].title || `Slide ${currentIndex + 1}`}
        className="w-full h-full object-contain relative transition duration-300 rounded-md"
      />

       {/* NAVIGATION */}
    <button 
      onClick={goToPrevious}
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-accent hover:opacity-70 text-white p-2 rounded-full transition cursor-pointer"
      aria-label="Previous photo"
    >
      <FiChevronLeft size={24} />
    </button>
    
    <button 
      onClick={goToNext}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent bg-opacity-50 hover:opacity-70 text-white p-2 rounded-full transition cursor-pointer"
      aria-label="Next photo"
    >
      <FiChevronRight size={24} />
    </button>
      
      
      
    </div>

   

    {/* INDICATORS */}
    <div className="absolute bottom-4 md:bottom-8 left-0 z-30 right-0 flex justify-center gap-1">
      {photos.map((_, index) => (
        <button 
          key={index} 
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-accent border border-accent' : 'bg-white opacity-50 border border-accent'}`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    {/* CAPTION --HIDDEN ON MOBILE */}
    <div className="hidden bottom-2 text-center italic -mt-2 mb-2 z-20 pb-4 left-0 right-0 text-primary p-2 text-sm">
          {photos[currentIndex].caption}
          
        </div>
  </div>
  )
}

export default Slideshow