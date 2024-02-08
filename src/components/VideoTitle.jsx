import React from 'react'

const  VideoTitle = ({title , overview}) => {
  return (
   <div >
    <h1 className='text-5xl font-bold mb-3'>{title}</h1>
    <p className='text-sm w-1/3'> {overview}</p>
    <div className='flex '>
      <button  className='px-10 py-3 mx-0 m-4 bg-white text-black hover:bg-opacity-90 font-bold text-xl rounded-lg'>Play</button>
      <button  className='px-10 py-3 m-4 bg-gray-600 text-white bg-opacity-40 font-bold text-xl rounded-lg'>More Info </button>
    </div>
   </div>
  )
}

export default VideoTitle