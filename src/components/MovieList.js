import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const startAutoScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (!scrollRef.current || isHovered) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Reset if end reached
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // every 3 seconds
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Start auto-scroll on mount
  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll(); // Cleanup on unmount
  }, []);

  // Pause/resume on hover
  useEffect(() => {
    if (isHovered) stopAutoScroll();
    else startAutoScroll();
  }, [isHovered]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };
  return (
    <div className="px-4 md:px-8 relative">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold py-4 text-white">
        {title}
      </h1>

      {/* Left Arrow */}
      <button
        className="hidden sm:flex items-center justify-center w-10 h-10 bg-gray-600 bg-opacity-70 text-white rounded-full absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-700"
        onClick={scrollLeft}
      >
        <span className="text-xl">&lt;</span>
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4"
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="hidden sm:flex items-center justify-center w-10 h-10 bg-gray-600 bg-opacity-70 text-white rounded-full absolute right-2 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-700"
        onClick={scrollRight}
      >
        <span className="text-xl">&gt;</span>
      </button>
    </div>
  );
};

export default MovieList;
