import ContactUs from "../components/HomePageComp/ContactUs";
import '../style/Contact.css'

const ContactPage = () => {

    return (
        <section className='container contact' >
            <ContactUs />
            <div className='card card1 details '>
                <h3 style={{textAlign:'center'}}>פרטי יצירת קשר</h3>
                <p><span>כתובת: </span>הרצליה רחוב המנופים 18 </p>
                <p><span>פלאפון: </span>0528962843</p>
                <p><span> אימייל: </span>Liraznahmuka@gmail.com</p>
                <p><span>שעות פתיחה: </span>10:00-18:00 בתיאום מראש</p>
            </div>


        </section>
    )
}

export default ContactPage