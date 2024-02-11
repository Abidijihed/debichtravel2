import Carousel from './Carousel.js';
import React from 'react'
import Post from './Poste.js';

export default function Home() {
    const images=[
        "https://d1s8koojop3egi.cloudfront.net/photos/content/gallery/gallery7611/fevrieee.jpg",
         "https://www.maximatecc.com/wp-content/uploads/2017/02/White-Big-Shuttle-Bus-CMYK.jpg",
         "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/417436517_904026751724562_7770166546348885781_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=ev3Suu5u-YIAX_NNHzd&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAz1vENA9mWM9f40gUjdJS9noxacVhZ2NAqvTD_aShJ6A&oe=65CE905C",
         "https://i.pinimg.com/564x/a1/d5/05/a1d50592f5ffea8a25acde18d8b9feb7.jpg"
    
      ]
  return (
    <div>
      <Carousel images={images}/>
      <Post />
    </div>
  )
}
