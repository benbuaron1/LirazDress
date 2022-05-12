import {BsFacebook, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";


const SideBar = () => {
    return (
        <article>
            <div className="icon-bar" style={{zIndex: '7'}}>
                <a href="https://wa.link/yjlgky" className="whatsapp" target="_blank"><BsWhatsapp size={30} /></a>
                <a href="https://www.facebook.com/lirazy" target="_blank" className="facebook"><BsFacebook size={30}/></a>
                <a href='tel:0528962843' target="_blank" className="linkedin"><AiFillPhone size={30} /></a>
                <a href="https://instagram.com/liraznahmuka_" className="instagram"><BsInstagram size={30} /></a>


            </div>
        </article>
    )
}

export default SideBar