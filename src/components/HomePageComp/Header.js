import '../../style/Header.css'
import {Link} from "react-router-dom";
import {BsBag} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";

const Header = () => {
    return (
        <section className='container Header ' >
            <nav style={{display:'flex', gap:'10px'}}>
                <BsBag size={60} />

                <AiOutlineUser size={60} />
            </nav>
            <nav className='navBar'>

                <Link to='/contact_us'>צרו קשר</Link>
                <Link to='/design'>עיצוב אישי</Link>
                <Link to='/catalog'>הקטלוג שלנו</Link>
                <Link to='/'><img className='logo' src='/images/LogoLiraz.jpg'/></Link>

            </nav>


        </section>
    )

}

export default Header