import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";


const DressCard = (props) => {
    const [liked,setLiked] = useState(false)


    return (
        <div className='card itemCard' style={{backgroundColor:'rgba(60, 148, 255, 0.4)'}}>
            <img src={`http://127.0.0.1:8000${props.imgSrc}`} alt={'none'} />

            <div style={{display:"flex",justifyContent:'space-around'}}>
                <button style={{cursor:"pointer"}} className='btnLike' onClick={() => setLiked(!liked)}>{!liked? <FcLikePlaceholder size={40} /> : <FcLike size={40}/>}</button>
                <div>
                    <h3>{props.title}</h3>
            <p>מחיר: {props.price} שח</p>
            <p>מידה: {props.size}</p>
                </div>

            </div>
        </div>
    )
}

export default DressCard