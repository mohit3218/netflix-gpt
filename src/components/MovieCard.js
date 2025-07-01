import React from 'react'
import { IMG_URL_CDN } from '../utlis/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='Movie Card' src={IMG_URL_CDN + posterPath} />
    </div>
  )
}

export default MovieCard