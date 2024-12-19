import AboutSlider from "../Components/HomeComponents/AboutSlider"
import Banner from "../Components/HomeComponents/Banners/banner"
import HomeReviews from "../Components/HomeComponents/Reviews"
import BookingCalendar from "./Booking/Booking" 
import BookingTimeSlots from "./Booking/BookingTimeSlots"
import HomeBookingLeft from "./HomeBookingLeft"

function Home (){


    return(
        <section>
            <AboutSlider></AboutSlider>
            <section className="home-booking-master-wrapper">
                <HomeBookingLeft></HomeBookingLeft>
                <BookingCalendar></BookingCalendar>
            </section>
            <BookingTimeSlots></BookingTimeSlots>
            <HomeReviews></HomeReviews>
        </section>
    )

}

export default Home