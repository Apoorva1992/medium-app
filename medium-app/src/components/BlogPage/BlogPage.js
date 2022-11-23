import React, { useEffect, useState, useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns'
import classes from './BlogPage.module.css';

import { getPostData, updatePost } from '../../redux/actions/post.action';
import { FaHeart } from 'react-icons/fa';
import AddComment from './AddComment';
import AuthContext from '../../store/auth-context'

export default function BlogPage() {
    const authCtx = useContext(AuthContext);
    let { id } = useParams();
    console.log(id,"-----id")
    const [counterState, setCounterState] = useState(true)

    let dispatch = useDispatch();
    let { postbyid } = useSelector((state)=> state.postbyid);
    
    let { updatedpostbyid } =  useSelector((state) => state.updatedpostbyid)

    useEffect(() => {
       
        setTimeout(() => {
            dispatch(getPostData(id));
            console.log(postbyid);
        }, 2000);
    },[counterState]);

    const updateCount = () => {
        if(counterState) {
            // setCount(postbyid.clap + 1);
            setCounterState(false);
        
            dispatch(updatePost(id, 'incrementCounter', postbyid));
                setTimeout(() => {
                console.log(updatedpostbyid);
                //setCount(updatedpostbyid.clap)
                //console.log(typeof(postbyid.date))
            }, 5000);
        } else {
            setCounterState(true);
            //setCount(count - 1);
            dispatch(updatePost(id, 'decrementCounter', postbyid));
                setTimeout(() => {
                console.log(updatedpostbyid);
                //setCount(updatedpostbyid.clap)
                //console.log(typeof(postbyid.date))
            }, 5000);

        }
    };
    
  return (
    <>
        {postbyid && 
            
            <section className='flex flex-col m-10 items-center container mx-auto shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                <h2 className='text-slate-900 text-5xl'>{postbyid.title}</h2>
                
                <div className='w-1/2 bg-red mb-10 mt-4 '>
                    <img src={postbyid.image} />
                </div>
                <div className='pl-10'>
                    <div dangerouslySetInnerHTML={{ __html: postbyid.post_content }} className='text-slate-900 pt-5'></div>
                    <div className='text-slate-900 mt-2 flex items-center'>
                    
                        <span className='pr-5'>{postbyid.date}</span>
                        <span className='pr-5'>{postbyid.minread} Mins</span>
                        <span className='pr-1 '>{postbyid.clap} </span>
                        <button><FaHeart onClick={updateCount} className='ml-2' /></button>
                    </div>
                </div>
            </section>
        }
        <hr/>

            {authCtx.isLoggedIn && <AddComment username={authCtx.email} postData = {postbyid}/>}

            <div className='m-20'>
                {
                    postbyid?.comment?.map((com)=> {
                        return(
                            <div className={classes.commentBlock}>
                                <span className={classes.commentBlockName}>{com.name}</span>
                                <span className={classes.commentBlockCommet}>{com.comment}</span>
                                <span className={classes.commentBlockTime}>{com.lastupdated} </span>
                            </div>
                        )
                    })

                }
            </div>
            

        
        
    </>
  )
}
