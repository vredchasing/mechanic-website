import AboutSlider from "../Components/HomeComponents/AboutSlider"
import Banner from "../Components/HomeComponents/Banners/banner"
import HomeReviews from "../Components/HomeComponents/Reviews"
import BookingCalendar from "./Booking" 
import HomeBookingLeft from "./HomeBookingLeft"

function Home (){


    return(
        <section>
            <AboutSlider></AboutSlider>
            <section className="home-booking-master-wrapper">
                <HomeBookingLeft></HomeBookingLeft>
                <BookingCalendar></BookingCalendar>
            </section>
            <Banner></Banner>
            <HomeReviews></HomeReviews>
        </section>
    )

}

export default Home