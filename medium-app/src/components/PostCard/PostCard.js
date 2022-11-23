import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FaHeart } from 'react-icons/fa';

export default function PostCard(props) {
  //console.log(props)
  
    return (
        <div className='max-w-sm bg-red mb-10'>
            <img className=' w-96 h-64' src={`${props.post.image}`} />
            
            <div className='flex flex-row'>
              <div className="p-4 md:p-6 ">
                <h3 className="font-semibold mb-2 text-s leading-tight sm:leading-normal ">
                  <Link to={`/blog/${props.post.id}`} post={props.post.id} className='hover:text-black'>{props.post.title}</Link>
                </h3>
                <div className="text-sm flex items-center">
                  <p className="leading-none">{format(new Date(props.post.date), 'yyyy-MM-dd')}</p>
                </div>
              </div>
              <div className='ml-auto text-white p-2 rounded mb-auto mt-auto bg-yellow-500 flex items-center'>
                <p className=''>{props.post.clap}</p>
                <FaHeart className='ml-2' />
              </div>
            </div>

            <div className='ml-auto text-white p-2 rounded mb-auto mt-auto bg-yellow-500 flex items-center'>
                <p className=''>{props.post.category}</p>
            </div>
            
        </div>
    )
}
