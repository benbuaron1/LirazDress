import '../style/Design.css'
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {backModel, bottomModel, topModel} from "../ModelsData";

const Design = () => {

    const [chosenBottom,setChosenBottom] = useState(bottomModel[0])
    const [chosenTop,setChosenTop] = useState(topModel[0])
    const [chosenBack,setChosenBack] = useState(backModel[0])
    const [inputErr,setInputErr] = useState('')
    const [result,setResult] = useState('')
    const nameRef = useRef()
    const phoneRef = useRef()
    const colorRef = useRef()
    const [color,setColor] = useState()
    const changeBottomHandler = (value) => {
        setChosenBottom(value)
    }
    const changeTopHandler = (value) => {
        setChosenTop(value)
    }
    const changeBackHandler = (value) => {
        setChosenBack(value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (nameRef.current.value.trim() !== '' && phoneRef.current.value.trim() !== '') {
            axios.post('http://127.0.0.1:8000/api/order',
                {
                    customer_name:nameRef.current.value,
                    phone_number:phoneRef.current.value,
                    top_item:chosenTop.id,
                    back_item:chosenBack.id,
                    bottom_item:chosenBottom.id,
                    color:color,
                })
                .then(res => {
                    setResult(`${res.data.customer_name} היקרה, הזמנתך מספר ${res.data.id} נרשמה במערכת, צרי קשר על מנת להשלים את הרכישה!`);
                    setInputErr('')
                })
                .catch(err => console.log(err))
        } else {
            setInputErr('שדות הטופס חייבים להיות מלאים, נסה שנית')
        }
    }

    return (
        <section className='container design card card1'>
            <h1 style={{textAlign:"center",fontWeight:"bolder"}}>עצבי זאת בעצמך</h1>
            {/*<hr/>*/}
            <br/>

            <div className='main'>
                <div className='finalDes' style={{paddingBottom:'20px'}}>
                    <div>
                        <img style={{filter:`opacity(0.7) drop-shadow(0 0 0 ${color}`}} src={chosenTop.imgSrc} />
                    </div>
                    <div>
                        <img style={{filter:`opacity(0.7) drop-shadow(0 0 0 ${color}`}} src={chosenBack.imgSrc}/>
                    </div>
                    <div>
                        <img style={{filter:`opacity(0.7) drop-shadow(0 0 0 ${color}`}} src={chosenBottom.imgSrc} />
                    </div>

                </div>
                <div style={{display:"flex",alignItems:'center', direction:'rtl'}}>
                    חלק עליון:
                    {topModel.map((value,index) => {
                        return <img onClick={() => changeTopHandler(value)} className={chosenTop === value? 'smImg activePhoto' : 'smImg' } src={value.imgSrc} key={value.id} />
                    })}
                </div>
                <div style={{display:"flex",alignItems:'center', direction:'rtl'}}>
                    חלק אחורי:
                    {backModel.map((value,index) => {
                        return <img onClick={() => changeBackHandler(value)} className={chosenBack === value? 'smImg activePhoto' : 'smImg' } src={value.imgSrc} key={value.id} />
                    })}
                </div>
                <div style={{display:"flex",alignItems:'center', direction:'rtl'}}>
                    חלק תחתון:

                    {bottomModel.map((value,index) => {
                        return <img onClick={() => changeBottomHandler(value)} className={chosenBottom === value? 'smImg activePhoto' : 'smImg' } src={value.imgSrc} key={value.id} />
                    })}

                </div>
                <div style={{direction:'rtl',textAlign:'center'}}>
                    בחרי צבע:
                    <br/>
                    <input ref={colorRef} type='color' style={{width:'100px'}} onChange={() => setColor(colorRef.current.value) }  />
                </div>


            </div>

            <div className='order forms' style={{width:'50%',margin:'auto'}}>
                <h3 style={{marginTop:'30px'}}>
                    בצעי הזמנה
                </h3>
                <input ref={nameRef} type='text' placeholder='שם מלא' />
                <input ref={phoneRef} type='text' placeholder='מספר פלאפון' />
                <button onClick={submitHandler}>
                    שלח/י
                </button>
                <p>{inputErr}</p>
                <p style={{textAlign:'center' }}>{result}</p>
            </div>



        </section>
    )

}

export default Design