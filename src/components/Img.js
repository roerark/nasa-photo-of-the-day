import React, { useState, useEffect } from "react";
import axios from "axios"

function ImgFunc(){

const [picture, setPicture] = useState("")

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=kZVOKXyE4GZ6Ta9L7mTfVdT7ZWomGgcTSJqU44GC")
      .then((result) => {
        console.log(result.data)
        setPicture(result.data.url)
      })
  }, [])

  return(
      <div className="Img">
          <img src = {picture} alt="apod"></img>
      </div>
  )
}

  export default ImgFunc