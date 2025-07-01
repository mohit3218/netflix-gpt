import React from 'react'
import { ERROR_404_URL } from '../utlis/constants'

const Error = () => {
  return (
    <div className='w-full'>
      <h1 className='font-bold text-black'>404 ERROR</h1>
      <img className='w-screen opacity-60 -mt-20' src={ERROR_404_URL} alt='404' />
    </div>
  )
}

export default Error