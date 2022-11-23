import React, { useContext, useEffect, useState } from "react";
import ImageContext from '../store/ImageContext'
// import Button from "./atoms/Button";
// import Img from "./atoms/Img/Img";


export default function ImageConverter() {
    let [files,setFiles]=useState([])
    let [imageURL,setImageURL]=useState('')
    
    let contextData=useContext(ImageContext)

    const convert=(e)=> {
        // check max. file size is not exceeded
        // size is in bytes
      //   if (files[0].size > 2000000) {
      //     console.log("File too large");
      //     return;
      //   }
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
    
        reader.onload = () => {
          console.log(reader.result);
          setImageURL(reader.result)
          contextData.setBlogImage(reader.result) //base64encoded string
        };
        reader.onerror = error => {
          console.log("Error: ", error);
        };
      }
      return (
        <>
          <input
            accept="image/*"
            id="button-file"
            type="file"
            onChange={convert}
          />
        </>
      );
}
