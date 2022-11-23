import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE,
    POST_POST_DATA,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    UPDATE_COMMENT,
    UPDATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_FAILURE,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE
} from '../action.types';

//setting up firebase
// import { getDatabase } from "firebase/database";
// const database = getDatabase();


export const getAllData = () => async(dispatch) => {
    //let data_arr = []
    //let url = `https://react-practice-project-9c70a-default-rtdb.firebaseio.com/postsData.json`
    let url = `http://localhost:3000/posts`
    dispatch({
        type: GET_POSTS,
    });
    try {

        const response = await fetch(url);
        const data = await response.json();
        

        let newdata = data.shift()
        //console.log(data);
        dispatch({type: GET_POSTS_SUCCESS, payload:data});
         
    } catch(e) {
        dispatch({
            type:GET_POSTS_FAILURE,
            payload: e.message
        })
    }
}

export const postPostData = (data) => async(dispatch) => {
    // console.log("post post data",data);
    let final_data = {}
    //let url = 'https://react-practice-project-9c70a-default-rtdb.firebaseio.com/postsData.json'
    let url = 'http://localhost:3000/posts'
    dispatch({
        type: POST_POST_DATA,
    });
    try {
        const response = await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const data1 = await response.json();
        //console.log(data1,"---data check");
        dispatch({type: POST_DATA_SUCCESS, payload: data});
         
    } catch(e) {
        dispatch({
            type:POST_DATA_FAILURE,
            payload: e.message
        })
    }

}

export const getPostData = (id) => async(dispatch) => {
    console.log("---getPostData");
    let data_arr = []
    // var updatedid = id.slice(1);

    let url = `http://localhost:3000/posts/${id}`
    //console.log(url,"url ",updatedid)
    
    //let url = `https://react-practice-project-9c70a-default-rtdb.firebaseio.com/postsData/${updatedid}.json`
    //console.log(url)
    // var result = id.slice(1);
    // console.log(result)
    dispatch({
        type: GET_DATA,
    });
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data,'---getPostData');
        

        // //manipulating the data object to an array 
        // for(let key in data){
        //     //console.log(key,"-postData")
        //     data_arr.push({ id: key, value: data[key]})
        // }
        // //console.log(data_arr)
        dispatch({type: GET_DATA_SUCCESS, payload: data});
         
    } catch(e) {
        dispatch({
            type:GET_DATA_FAILURE,
            payload: e.message
        })
    }
}

export const updatePost = (id, type, param) => async(dispatch) => {
    console.log(id,"---id")
    console.log(param,"---param")
    // var updatedid = id.slice(1);
     //let url = `http://localhost:3000/posts/${id}`

    //console.log(param,"--------updatePost params-",updatedid)

    if(type === 'incrementCounter') {
        var updatedid = id.slice(1);
        let url = `http://localhost:3000/posts/${updatedid}`
        dispatch({
            type: UPDATE_POST,
        });
        try {
            const response = await fetch(url,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "title": param.title,
                    "post_content": param.post_content,
                    "image": param.image,
                    "category": param.category,
                    "minread": param.minread,
                    "username": param.username,
                    "date": param.date,
                    "clap": param.clap + 1,
                    "comment": param.comment,
                    "id": param.id
                })
            });
            const data = await response.json();
            console.log(data,"---radhika incremembt ")
            dispatch({type: UPDATE_POST_SUCCESS, payload: data});
             
        } catch(e) {
            dispatch({
                type:UPDATE_POST_FAILURE,
                payload: e.message
            })
        }
        

    }
    if(type === 'decrementCounter') {
        var updatedid = id.slice(1);
        let url = `http://localhost:3000/posts/${updatedid}`
        dispatch({
            type: UPDATE_POST,
        });
        try {
            const response = await fetch(url,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "title": param.title,
                    "post_content": param.post_content,
                    "image": param.image,
                    "category": param.category,
                    "minread": param.minread,
                    "username": param.username,
                    "date": param.date,
                    "clap": param.clap - 1,
                    "comment": param.comment,
                    "id": param.id
                })
            });
            const data = await response.json();
            console.log(data,"---radhika decrement")
            dispatch({type: UPDATE_POST_SUCCESS, payload: data});
             
        } catch(e) {
            dispatch({
                type:UPDATE_POST_FAILURE,
                payload: e.message
            })
        }
        

    }

    if(type === 'updateComment') {
        let url = `http://localhost:3000/posts/${id}`
        dispatch({
            type: UPDATE_POST,
        });
        try {
            const response = await fetch(url,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(param)
            });
            const data = await response.json();
            console.log(data,"---radhika decrement")
            dispatch({type: UPDATE_POST_SUCCESS, payload: data});
             
        } catch(e) {
            dispatch({
                type:UPDATE_POST_FAILURE,
                payload: e.message
            })
        }
        

    }

}