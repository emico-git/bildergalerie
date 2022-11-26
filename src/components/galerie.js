import React from 'react'
import { useState, useEffect } from 'react';

import '../App.css';

import Img1 from '../bilder/stock/1.jpg';
import Img2 from '../bilder/stock/2.jpg';
import Img3 from '../bilder/stock/3.jpg';
import Img4 from '../bilder/stock/4.jpg';
import Img5 from '../bilder/stock/5.jpg';
import Img6 from '../bilder/stock/6.jpg';
import Img7 from '../bilder/stock/7.jpg';
import Img8 from '../bilder/stock/8.jpg';
import Img9 from '../bilder/stock/9.jpg';
import Img10 from '../bilder/stock/10.jpg';
import Img11 from '../bilder/stock/11.jpg';
import Img12 from '../bilder/stock/12.jpg';


function Galerie() {

    let data_example =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        
    ]

    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(
                `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            const data = await response.json()
            setImages(data)
            console.log(data)
        }

        fetchImages()
    },[])

  return ( 
    <div className='content'>
        {!images ? (
        <div>
            <div className='emoticon3'/>
            <h1 className='loading'>Loading...</h1> 
        </div>)
        :
            <div className='gallery'>
                {images.map((item, index)=> {
                    return(
                        <div key={index}>
                            <img className='pics' src={item.urls.raw} />
                        </div>
                    )
                })}
            </div>
        }
    </div>
  )
}

export default Galerie