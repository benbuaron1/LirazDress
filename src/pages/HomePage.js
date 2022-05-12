import {Fragment, useState} from "react";
import Header from "../components/HomePageComp/Header";
import {AiFillPhone, AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";

import {Swiper,SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/bundle'
import {BsFacebook, BsInstagram, BsWhatsapp} from "react-icons/bs";
import ContactUs from "../components/HomePageComp/ContactUs";

const HomePage = () => {
    const [shipTimeShow,setShipTimeShow] = useState(false)
    const [paymentShow,setPaymentShow] = useState(false)
    const [locationShow,setLocationShow] = useState(false)
    // const sw = new Swiper()


    return <Fragment>


        <section className='HomePage'>

            <div className='container card AboutUs'>
                <h1 style={{color:'white'}}a>שאלות ותשובות</h1>
                <div className='card card1 question '>
                    <h3 style={{display:"flex",justifyContent:"space-between",alignItems:'center', flexDirection:'row-reverse'}} onClick={() => setShipTimeShow(!shipTimeShow)}>?תוך כמה זמן אקבל את השמלה שלי{!shipTimeShow?< AiOutlineArrowDown /> : <AiOutlineArrowUp />}</h3>
                    {<p style={{display:shipTimeShow?'':'none'}}>המשלוח נעשה על ידי חברת BOXIT שלה מעל 450 נקודות איסוף הפרושות בכל רחבי הארץ. ההתחייבות שלנו היא לספק את המוצרים תוך עד מקסימום 5 ימי עסקים לא משנה במקום המגורים של הלקוח, בהתאם להתחייבות של BOXIT כלפינו כבעלי עסק העובדים איתם.</p>}
                </div>

                <div className='card card1 question'>
                    <h3 style={{display:"flex",justifyContent:"space-between",alignItems:'center', flexDirection:'row-reverse'}} onClick={() => setPaymentShow(!paymentShow)}>?תוך כמה זמן אקבל את השמלה שלי{!paymentShow?< AiOutlineArrowDown /> : <AiOutlineArrowUp />}</h3>
                    {<p style={{display:paymentShow?'':'none'}}>ההזמנה באתר נעשית בתקני אבטחת מידע מחמירים ובחסות PayPal עסקים. כל המידע מאובטח  ופרטי האשראי אינם נשמרים אצלנו כלל.  ניתן לבצע גם הזמנות טלפוניות באמצעות העברה בנקאית וקיימת גם האפשרות להגיע למכירה ביתית ולשלם במזומן.</p>}
                </div>
                <div className='card card1 question'>
                    <h3 style={{display:"flex",justifyContent:"space-between",alignItems:'center', flexDirection:'row-reverse'}} onClick={() => setLocationShow(!locationShow)}>?איפה החנות שלכם נמצאת{!locationShow?< AiOutlineArrowDown /> : <AiOutlineArrowUp />}</h3>
                    {<p style={{display:locationShow?'':'none'}}>הסטודיו ממוקם בהרצליה ברחוב המנופים 18 , ניתן להגיע בתיאום מראש בלבד עקב מגפת הקורונה והרצון להיות נגישים לכמה שיותר לקוחות מכל רחבי הארץ.</p>}
                </div>
                <br/>
                <hr/>
                <br/>
                <h1 style={{color:'white'}}>צרו איתנו קשר</h1>
                <ContactUs />
            </div>

            <div className='container card AboutUs'>
                <h1 style={{color:'white'}}>קצת עלינו</h1>
                <div className='text card card1'>

                <p>
                    לירז דרסס הוא בוטיק שמלות, המותג שהוקם ב-2020 ע”י המעצבת לירז נחמוקה כמותג בוטיק ישראלי כחול לבן, המייצר שמלות ערב ואופנה עדכניים לכל אישה שרוצה להרגיש נשית, מרעננת ועדכנית.

                    כל פריט נוצר באהבה ומחשבה,
                    כל אחד מהם הוא סיפור,
                    הוא דמות, הוא אנחנו.

                    המותג נמכר בסטודיו שלנו בהרצליה
                    ברחוב המנופים 5 ובאמצעות אתר האינטרנט.

                    אתן מוזמנות לבקר ולהתאהב כל פעם מחדש.

                </p>
                    {/*<hr/>*/}
                    <br/>
                </div>


                <div className='Slider card card1'>
                <Swiper modules={[Pagination]} pagination={{clickable:true}} slidesPerView={1.8} spaceBetween={20}>
                    <SwiperSlide><img src='/images/pic2.jpg'/></SwiperSlide>
                    <SwiperSlide><img src='/images/pic1.jpg'/></SwiperSlide>
                    <SwiperSlide><img src='/images/pic2.jpg'/></SwiperSlide>
                    <SwiperSlide><img src='/images/pic1.jpg'/></SwiperSlide>
                    <SwiperSlide><img src='/images/pic2.jpg'/></SwiperSlide>
                    <SwiperSlide><img src='/images/pic1.jpg'/></SwiperSlide>

                </Swiper>
                </div>

            </div>
        </section>


    </Fragment>
}

export default HomePage