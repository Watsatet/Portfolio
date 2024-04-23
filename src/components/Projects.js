import './Projects.css';
import React from 'react'
import amazon from '../projectImages/amazon.png'
import amazon1 from '../videos/amazon.mp4'
import netflix from '../projectImages/netflix.png'
import netflix1 from '../videos/netflix.mp4'
import onePlus from '../projectImages/onePlus.png'
import onePlus1 from '../videos/onePlus.mp4'
import youtube from '../projectImages/youtube.png'
import youtube1 from '../videos/youtube.mp4'
import shadi from '../projectImages/shadi.png'
import shadi1 from '../videos/shadi.mp4'
import frozen from '../projectImages/frozen.png'
import frozen1 from '../videos/frozen.mp4'
import meals from '../projectImages/meals.png'
import meals1 from '../videos/meals.mp4'

let arr = [amazon, netflix,onePlus, youtube,shadi,frozen,meals]
let arr1 = [amazon1, netflix1,onePlus1, youtube1,shadi1,frozen1,meals1]

export default function Projects(props) {

  return (
    
    <div className='container'>
      {
        arr.map((e,i) => {
          // let video = arr1[i]
          return (
            <div className="v" key={i}>
              <img src={e} alt="" height={350} width={700} />
            </div>
          )
        })
      }
    </div>
  )
}
