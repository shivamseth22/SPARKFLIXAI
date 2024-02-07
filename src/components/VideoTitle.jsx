import React from 'react'

const  VideoTitle = ({title , overview}) => {
  return (
   <>
    <h1 className='text-5xl font-bold mb-3'>{title}</h1>
    <p className='text-sm w-1/3'> {overview}</p>
    <div className='flex '>
      <button  className='px-10 py-3 mx-0 m-4 bg-gray-400 text-white font-bold text-xl rounded-lg'>Play</button>
      <button  className='px-10 py-3 m-4 bg-gray-400 text-white font-bold text-xl rounded-lg'>More Info </button>
    </div>
   </>
  )
}

export default VideoTitle