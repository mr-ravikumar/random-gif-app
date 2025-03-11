import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// api key ko mangwane ke liye use hota hai process.env naam ka ek object
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [spinner, setSpinner] = useState(true)
    // const [gif, setGif] = useState('');

    // async function fetchData() {
    //     setSpinner(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const output = await axios.get(url);
    //     // i'm use destructuring method to get data from response
    //     const {data} = output;
    //     const imageURL = data.data.images.downsized_large.url;
    //     setGif(imageURL);
    //     setSpinner(false)
    // }

    // useEffect(() => {
    //     fetchData();
    // },[])

    const {gif, spinner, fetchData} = useGif();


  return (
    <div className='flex flex-col items-center gap-y-5 mt-[15px] w-1/2 bg-green-500 rounded-lg border border-black'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

        {
            spinner ? <Spinner /> : <img className='p-5' src={gif} width={450} />
        }

        <button 
        onClick={() => fetchData()}
        className='mb-[15px] w-10/12 bg-yellow-400 rounded-lg text-lg py-2'>
            Generate
        </button>
    </div>
  )
}

export default Random;