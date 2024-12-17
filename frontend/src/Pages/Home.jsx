import AboutSlider from "../Components/HomeComponents/AboutSlider"
import Banner from "../Components/HomeComponents/Banners/banner"
import HomeReviews from "../Components/HomeComponents/Reviews"
import BookingCalendar from "./Booking" 

function Home (){


    return(
        <section>
            <AboutSlider></AboutSlider>
            <BookingCalendar></BookingCalendar>
            <Banner></Banner>
            <HomeReviews></HomeReviews>
        </section>
    )

}

export default Home