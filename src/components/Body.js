import React, { useEffect, useState } from "react"
import axios from "axios"
import { TitleText, ImgExp, ImgDate } from "./Styles.js"

function BodyFunc(){ 
const [imgTitle, setTitle] = useState("")
const [imgExplanation, setExplanation] = useState("")
const [imgDate, setDate] = useState("")

useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=kZVOKXyE4GZ6Ta9L7mTfVdT7ZWomGgcTSJqU44GC")
        .then((result)=>{
            console.log(result.data)
            setTitle(result.data.title)
            setExplanation(result.data.explanation)
            setDate(result.data.date)
        },[])
    })

    return (
        <div className = "BodyComponent">
            <TitleText>Astronomy Photo of The Day: {imgTitle}</TitleText>
            <ImgExp>{imgExplanation}</ImgExp>
            <ImgDate>{imgDate}</ImgDate>
        </div>
    )

}

export default BodyFunc