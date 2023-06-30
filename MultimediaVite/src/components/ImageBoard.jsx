import { useState } from 'react'
import '../css/imageBoard.css'

import Img1 from '../images-iphone/image1.jpg'
import Img2 from '../images-iphone/image2.jpg'
import Img3 from '../images-iphone/image3.jpg'
import Img4 from '../images-iphone/image4.jpg'
import Img5 from '../images-iphone/image5.jpg'
import Img6 from '../images-iphone/image6.jpg'
import Img7 from '../images-iphone/image7.jpg'
import Img8 from '../images-iphone/image8.jpg'
import Img9 from '../images-iphone/image9.jpg'
import Img10 from '../images-iphone/image10.jpg'
import Img11 from '../images-iphone/image11.jpg'
import Img12 from '../images-iphone/image12.jpg'
import Img13 from '../images-iphone/image13.jpg'
import Img14 from '../images-iphone/image14.jpg'
import Img15 from '../images-iphone/image15.jpg'
import Img16 from '../images-iphone/image16.jpg'
import Img17 from '../images-iphone/image17.jpg'
import Img18 from '../images-iphone/image18.jpg'
import Img19 from '../images-iphone/image19.jpg'
import Img20 from '../images-iphone/image20.jpg'
import Img21 from '../images-iphone/image21.jpg'
import Img22 from '../images-iphone/image22.jpg'
import Img23 from '../images-iphone/image23.jpg'
import Img24 from '../images-iphone/image24.jpg'
import Img25 from '../images-iphone/image25.jpg'
import Img26 from '../images-iphone/image26.jpg'
import Img27 from '../images-iphone/image27.jpg'
import Img28 from '../images-iphone/image28.jpg'
import Img29 from '../images-iphone/image29.jpg'
import Img30 from '../images-iphone/image30.jpg'
import Img31 from '../images-iphone/image31.jpg'
import Img32 from '../images-iphone/image32.jpg'
import Img33 from '../images-iphone/image33.jpg'
import Img34 from '../images-iphone/image34.jpg'
import Img35 from '../images-iphone/image35.jpg'
import Img36 from '../images-iphone/image36.jpg'
import Img37 from '../images-iphone/image37.jpg'
import Img38 from '../images-iphone/image38.jpg'
import Img39 from '../images-iphone/image39.jpg'
import Img40 from '../images-iphone/image40.jpg'
import Img41 from '../images-iphone/image41.jpg'
import Img42 from '../images-iphone/image42.jpg'
import Img43 from '../images-iphone/image43.jpg'
import Img44 from '../images-iphone/image44.jpg'


export default function ImageBoard(){
    
    const data =[
        {
            "id": 1,
            "imgSrc": Img1
        },
        {
            "id": 2,
            "imgSrc": Img2
        },
        {
            "id": 3,
            "imgSrc": Img3
        },
        {
            "id": 4,
            "imgSrc": Img4
        },
        {
            "id": 5,
            "imgSrc": Img5
        },
        {
            "id": 6,
            "imgSrc": Img6
        },
        {
            "id": 7,
            "imgSrc": Img7
        },
        {
            "id": 8,
            "imgSrc": Img8
        },
        {
            "id": 9,
            "imgSrc": Img9
        },
        {
            "id": 10,
            "imgSrc": Img10
        },
        {
            "id": 11,
            "imgSrc": Img11
        },
        {
            "id": 12,
            "imgSrc": Img12
        },
        {
            "id": 13,
            "imgSrc": Img13
        },
        {
            "id": 14,
            "imgSrc": Img14
        },
        {
            "id": 15,
            "imgSrc": Img15
        },
        {
            "id": 16,
            "imgSrc": Img16
        },
        {
            "id": 17,
            "imgSrc": Img17
        },
        {
            "id": 18,
            "imgSrc": Img18
        },
        {
            "id": 19,
            "imgSrc": Img19
        },
        {
            "id": 20,
            "imgSrc": Img20
        },
        {
            "id": 21,
            "imgSrc": Img21
        },
        {
            "id": 22,
            "imgSrc": Img22
        },
        {
            "id": 23,
            "imgSrc": Img23
        },
        {
            "id": 24,
            "imgSrc": Img24
        },
        {
            "id": 25,
            "imgSrc": Img25
        },
        {
            "id": 26,
            "imgSrc": Img26
        },
        {
            "id": 27,
            "imgSrc": Img27
        },
        {
            "id": 28,
            "imgSrc": Img28
        },
        {
            "id": 29,
            "imgSrc": Img29
        },
        {
            "id": 30,
            "imgSrc": Img30
        },
        {
            "id": 31,
            "imgSrc": Img31
        },
        {
            "id": 32,
            "imgSrc": Img32
        },
        {
            "id": 33,
            "imgSrc": Img33
        },
        {
            "id": 34,
            "imgSrc": Img34
        },
        {
            "id": 35,
            "imgSrc": Img35
        },
        {
            "id": 36,
            "imgSrc": Img36
        },
        {
            "id": 37,
            "imgSrc": Img37
        },
        {
            "id": 38,
            "imgSrc": Img38
        },
        {
            "id": 39,
            "imgSrc": Img39
        },
        {
            "id": 40,
            "imgSrc": Img40
        },
        {
            "id": 41,
            "imgSrc": Img41
        },
        {
            "id": 42,
            "imgSrc": Img42
        },
        {
            "id": 43,
            "imgSrc": Img43
        },
        {
            "id": 44,
            "imgSrc": Img44
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
            <p>Dies sind unserer bisherigen Bilder, die wir bei unserer Reise mit Ihnen gemacht haben. Aus Urheberrechtsgründen sind die Bilder mit den Menschen nicht dargestellt. Viel Spass beim Herumstöbern!!</p>
        
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