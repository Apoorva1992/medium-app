import React, { useRef, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllData } from '../../redux/actions/post.action'
//import useHttp from '../../Utilities/use-http';
import classes from './StartingPageContent.module.css';
import Card from '../../cards/Card';
import PostCard from '../PostCard/PostCard';
import Button from '../../cards/Button';

const StartingPageContent = () => {

  const { allPosts } = useSelector((state) => state.allPosts)
  const [searchStr, setSearchStr] = useState("");

  const dispatch = useDispatch();

  useEffect(()=> {
    const getData = setTimeout(()=> {
      dispatch(
        getAllData()
      )
    }, 500);
    console.log(allPosts,"------allPosts")
    return () => clearTimeout(getData)
  },[])

  return (
    <section className='container mx-auto mt-10'>
      <div className='max-w-xs container mx-auto mt-10'>
        <input 
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          name="text"
          type="search"
          placeholder="Search"
          //onChange={(event) => handleOnChange(event)}
          //value={search}
        />
      </div>

      {/* search by category */}
      <div className='flex justify-center mt-4'>

        <button className='btn btn-warning mr-2'>General</button>
        <button className='btn btn-warning mr-2'>Politics</button>
        <button className='btn btn-warning mr-2'>Entertainment</button>
        <button className='btn btn-warning mr-2'>News</button>
        <button className='btn btn-warning mr-2'>Tech Buzz</button>
      </div>

      <div className='flex flex-wrap justify-between mt-10'>
        {
          allPosts?.map((post)=> {
            return(
              // <p>{post.title}</p>
              <PostCard key ={post.id} post={post}/>
            )
          })
        }
      </div>
    </section>
  );
};

export default StartingPageContent;
