import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { updatePost } from '../../redux/actions/post.action';


export default function AddComment({postData, username}) {
    console.log(postData);
    let dispatch = useDispatch();
    let { updatedpostbyid } =  useSelector((state) => state.updatedpostbyid);
    let formik = useFormik({
        initialValues: {
            comment: "",
        },
        onSubmit: function (value) {
             console.log(value);
            // postData.comment

            let temp = {
                title: postData.title,
                post_content: postData.post_content,
                image: postData.image,
                category: postData.category,
                minread: postData.minread,
                username: postData.username,
                date: postData.date,
                clap: postData.clap,
                comment: [...postData.comment,{
                    name:'test@gmail.com',
                    comment: value.comment
                }],
                id: postData.id
            }
            console.log(temp,"---temp")
            dispatch(updatePost(postData.id, 'updateComment', temp));
                setTimeout(() => {
                console.log(updatedpostbyid);
                //setCount(updatedpostbyid.clap)
                //console.log(typeof(postbyid.date))
            }, 5000);
            
            
            // updateTodo({...value})
            //call reducer 
            // dispatch({
            //   type:"UPDATETODO",
            //   payload:{
            //     todoList: state.todoList,
            //     total: state.total,
            //     value:value
            //   }
            // })
            formik.resetForm();
        },
        validationSchema: Yup.object({
            comment: Yup.string().required("Please add comment before submitting"),
           
        }),
      });
  return (
    <section className='m-20'>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col'>
                    <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.comment}
                        name='comment'
                        placeholder='Add a comment'
                        className="shadow appearance-none border rounded w-1/2 h-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="textarea"
                    />
                    {formik.touched.comment && formik.errors.comment && (<span className='text-red-500 text-sm'>{formik.errors.comment}</span>)}

                </div>
               
                <button
                    className={`mt-3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-center `}
                    type='submit'
                >Post</button> 
            </form>
            
        </section>
  )
}
