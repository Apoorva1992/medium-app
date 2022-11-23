import React, {useContext, useEffect, useState} from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from 'react-redux';

import { postPostData } from '../../redux/actions/post.action'

//import ImageContext from '../../store/ImageContext';
import ImageConverter from '../ImageConverter';
import AuthContext from '../../store/auth-context'



// import ImageConverter from '../ImageConverter';
import ImageContext from '../../store/ImageContext'

export default function CreatePost(){

    const { postConfirmation } = useSelector((state) => state.postConfirmation)
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [featuredImage, setFeaturedImage] = useState('')
    const [category, setCategory] = useState([])
    const contextData = useContext(ImageContext);
    const authCtx = useContext(AuthContext);

    const saveData = async () => {
        console.log("save post is called " );
        const getData = setTimeout(()=> {
            dispatch(
              postPostData({title: title, 
                post_content: value,
                image: contextData.blogImage,
                category: category,
                minread: '10 mins',
                username: authCtx.email,
                date: new Date(),
                clap: 0,
                comment: []}
                )
            )
          }, 500);
    };
      const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script',
        'header', 'blockquote', 'code-block',
        'indent', 'list',
        'direction', 'align',
        'link', 'image', 'video', 'formula',
      ]

      const imgModules = {
        toolbar: [["image"]],
      };
    
      let modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
      };


    return (
        <div className='container mx-auto mt-10 flex flex-col justify-center shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            {/* <form> */}
                <div className='flex mt-4 items-center'>
                    <span className='mr-4 '>Post Title</span>
                    <input
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="blogTitle"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                     />
                </div>

                <div className='mt-4 flex items-center'>
                    <span className='mr-4 '>Select Category</span>
                    <select  
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>{
                            console.log(e.target.value)
                            setCategory([...category,e.target.value])
                            console.log(category);
                        }} 
                    name="categoy">
                        <option value="general">General</option>
                        <option value="politics">politics</option>
                        <option value="entertainment">Entertainemnt</option>
                        <option value="news">News</option>
                        <option value="tech">Tech Buzz</option>
                    </select>
                    {/* {
                        category.length===0?"":category.map((item)=>{
                            return (<span className='m-1 p-1 bg-black rounded text-white'>{item}</span>)
                            })
                    } */}
                </div>

                <div className='mt-4 flex '>
                    <span className='mr-5'>Featured Image</span>
                        <ImageConverter  /> 
                    {/* <img src={contextData.blogImage} /> */}
                    {/* <ReactQuill
                        theme="snow"
                        value={featuredImage}
                        modules={imgModules}
                        onChange={setFeaturedImage}
                        formats={formats}
                    /> */}


                </div>

                <div className='mt-4 flex'>
                    <span className='mr-5'>Post Content</span>
                    <ReactQuill theme="snow" value={value} modules={modules} onChange={setValue} formats={formats} />
                </div>

                <hr className='mt-20'></hr>

                <div className='mt-4'>
                    <h1>How it will look on the webpage</h1>
                    <div 
                        className="mt-10 h-64 postDiv shadow w-100 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        dangerouslySetInnerHTML={{ __html: value }} >
                    </div>
                </div>

                
                <hr></hr>

                <button className=' mt-10 btn btn-primary' onClick={() => {
                    saveData()
                }}>Add Blog</button>
                {/* <Post/> */}





            {/* </form> */}
        </div>
    )
}