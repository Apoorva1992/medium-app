import ImageContext from "./ImageContext";
import React,{useState} from "react";

export default function ImageContextProvider(props){
    let [blogImage, setBlogImage] = useState('');

    return (
        <ImageContext.Provider value={{blogImage,setBlogImage}}>
            {props.children}
        </ImageContext.Provider>
    )
}
