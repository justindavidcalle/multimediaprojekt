import { useState } from 'react'
import '../css/imageBoard.css'

import Img1 from '../images/AntikerHydrant.jpg'
import Img2 from '../images/ArnoldBürkel.jpg'
import Img3 from '../images/BrunnenZüri.jpg'

export default function ImageBoard(){
    
    let data =[
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        }
    ]

    const [model,setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc)
        setModel(true)
    }

    return(
        <>
        <div className='introduction'>
            <h1>Unsere Galerie</h1>
            <p>Dies sind unserer bisherigen Bilder, die wir bei unserer Reise mit Ihnen gemacht haben. Aus Urheberrechtsgründen sind die Bilder mit den Menschen nicht dargestellt.</p>
        
        </div>
        
        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt='img' />
            <i class="fa-solid fa-circle-xmark" onClick={()=> setModel(false)}></i>
        </div>

        <div className='gallery'>
            {data.map((item, index)=>{
                return(
                    <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} />
                    </div>
                )
            })

            }
        </div>
        
        
        </>
    )

}