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
    // UPDATE_COMMENT,
    // UPDATE_COMMENT_SUCCESS,
    // UPDATE_COMMENT_FAILURE
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE
} from '../action.types'

const initialState = {
    allPosts: [],
    loadingAllPost: true,
    errorAllPost: null,
    postConfirmation: {},
    errorPostConfirmation: {},
    updatedpostbyid: {},
    errorPost: null
}

export const getAllDataReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return{
                ...state,
                loadingAllPost: true
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                allPosts:action.payload,
                loadingAllPost:false
            }

        case GET_POSTS_FAILURE:
            return {
                ...state,
                errorAllPost: action.payload,
                loadingAllPost: false
            }
        default:
            return state;

    }
};

export const postDataReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_POST_DATA:
            return{
                ...state,
                loadingAllPost: true
            };
        case POST_DATA_SUCCESS:
            return {
                ...state,
                postConfirmation:action.payload,
                loadingAllPost:false
            }

        case POST_DATA_FAILURE:
            return {
                ...state,
                errorPostConfirmation: action.payload,
                loadingAllPost: false
            }
        default:
            return state;
    }
}

export const getDataReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                loadingAllPost: true
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                postbyid:action.payload,
                loadingAllPost:false
            }

        case GET_DATA_FAILURE:
            return {
                ...state,
                errorPost: action.payload,
                loadingAllPost: false
            }
        default:
            return state;

    }
};

export const updateDataReducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATE_POST:
            return{
                ...state,
                loadingAllPost: true
            };
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                updatedpostbyid:action.payload,
                loadingAllPost:false
            }

        case UPDATE_POST_FAILURE:
            return {
                ...state,
                errorPost: action.payload,
                loadingAllPost: false
            }
        default:
            return state;

    }
};