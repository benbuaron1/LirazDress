import '../style/Catalog.css';
import DressCard from "../components/CatalogComp/DressCard";
import {useEffect, useState} from "react";
import axios from "axios";


const Catalog = () => {
    const [dresses,setDresses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/dresses').then(res =>
        {setDresses(res.data)})
    },[])

    return (
        <section className='container'>
            <main className='catalog'>
                <h3>העיצובים שלנו</h3>
                <div className='list'>
                    {dresses === [] ? 'Loading' :
                    dresses.map((value,index) => {
                        return <DressCard key={index} title={value.dress_name} price={value.price} imgSrc={value.featured_image} size={value.size} />
                    })}

                </div>

            </main>

        </section>
    )
}
export default Catalog