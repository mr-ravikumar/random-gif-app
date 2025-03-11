import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';



// api key ko mangwane ke liye use hota hai process.env naam ka ek object
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    // we can use it also or another method using a variable
    // const tagGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const [spinner, setSpinner] = useState(true)
    const [gif, setGif] = useState('');

    async function fetchData() {
        setSpinner(true)
        const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
        // i'm use destructuring method to get data from response
        const {data} = output;
        const imageURL = data.data.images.downsized_large.url;
        setGif(imageURL);
        setSpinner(false)
    }
    
    useEffect(() => {
        fetchData();
    },[])

    return {gif, spinner, fetchData};

}

export default useGif;