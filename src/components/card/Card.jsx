import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from 'axios';

export default function Card({ title, isAdult, backdroPath, voteAverage, id }) {
  console.log('Card');
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/`;
  const imageURL = `https://image.tmdb.org/t/p/w500${backdroPath}`;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const get = async () => {
      console.log('Heloe');
      const { data } = await axios.get(`/movie/${id}`, {
        params: {
          append_to_response: 'videos',
        },
      });
      setVideo(data?.videos?.results[0]?.key);
    };
    get();
  }, [id]);

  return (
    <div
      className='card_warapper'
      style={{
        position: 'relative',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {!isHovered && <img src={imageURL} alt={`img-${id}`} />}
      {
        // If isHovered is true, then show the card_info
        isHovered && (
          <div className='card_info'>
            <iframe
              width='100%'
              height='100%'
              src={`${youtubeUrl}${video}`}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <h4>{title}</h4>
            <div>
              <span
                style={{
                  color: voteAverage > 7 ? 'green' : 'red',
                }}
              >
                Vote {Math.floor(voteAverage * 10)}%
              </span>
              <span>{isAdult ? '  A' : '  U/A'}</span>
            </div>
          </div>
        )
      }
    </div>
  );
}
