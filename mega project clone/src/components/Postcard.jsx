import React from 'react'
import appservice from '../appwrite/config'
import { Link } from 'react-router-dom'

function Postcard({$id , title, featuredimage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100  rounded-xl p-4 '>
            <div className='w-full justify-center mb-4'>
                {/* featured image is the id of the image 
                dollar id is the id of the post
                */}
                <img src={`${appservice.getfilepreview(featuredimage)}`} alt={title}
                className=' rounded-xl'
                />   
            </div>
            <h2 className=' text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default Postcard