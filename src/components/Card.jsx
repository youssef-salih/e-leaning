import React, { useRef, useEffect, useState } from "react";

const Card = ({ src, thumb, name }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="relative">
        <a href="#" className="w-full">
          {!isPlaying ? (
            <>
              <img
                src={thumb}
                alt="Video Thumbnail"
                className="w-96 h-auto"
                onClick={handleVideoClick}
              />
            </>
          ) : (
            <video
              src={src}
              className="w-96 h-auto"
              onClick={handleVideoClick}
              controls
              autoPlay
            />
          )}
        </a>
      </div>

      <div className="flex flex-row mt-2 gap-2">
        <div className="flex flex-col">
          <a href="#">
            <p className="text-gray-100 text-sm font-semibold">{name}</p>
            <p className="text-gray-100 text-sm font-semibold">{name}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
