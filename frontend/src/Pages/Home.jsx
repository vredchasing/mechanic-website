import About from "../Components/HomeComponents/About"
import AboutSlider from "../Components/HomeComponents/AboutSlider"
import Banner from "../Components/HomeComponents/Banners/banner"
import HomeReviews from "../Components/HomeComponents/Reviews"
import BookingCalendar from "./Booking/Booking" 
import BookingTimeSlots from "./Booking/BookingTimeSlots"
import CarSelfService from "./Car Self Service/CarSelfService"
import HomeBookingLeft from "./HomeBookingLeft"

function Home (){


    return(
        <section>
            <CarSelfService></CarSelfService>
            <section className="home-booking-master-wrapper">
                <BookingCalendar></BookingCalendar>
            </section>
            <HomeReviews></HomeReviews>
        </section>
    )

}

export default Home