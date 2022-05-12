import {useRef, useState} from "react";
import axios from "axios";

const ContactUs = () => {
    const [status,setStatus] = useState('')
    const nameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const descRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/contact_us',
            {full_name:nameRef.current.value,
                phone_number:phoneRef.current.value,
                email:emailRef.current.value,
                description:descRef.current.value
            }).then(res => res.status===200? setStatus('הטופס נשלח בהצלחה! נחזור אלייך בהקדם') : alert('קרתה תקלה, אנא בדוק שכל הנתונים שהזנת נכונים ונסה שנית!')).catch(err => setStatus('\'קרתה תקלה, אנא בדוק שכל הנתונים שהזנת נכונים ונסה שנית\''))

    }

    return (
        <div className='card card1'>
            <form className='forms' onSubmit={submitHandler}>
                <input ref={nameRef} required={true}  placeholder='שם מלא' type='text'/>
                <input ref={phoneRef} required={true} placeholder='מספר פלאפון' type='text'/>
                <input ref={emailRef} required={true} placeholder='אימייל' type='text'/>
                <input ref={descRef} required={true} placeholder='תיאור הפנייה' type='textarea'/>
                <br/>
                <button type='submit'>שלח</button>

            </form>
            <p>{status}</p>
        </div>
    )
}

export default ContactUs