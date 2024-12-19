import { useRef } from "react"

function BookingTimeSlots (){


    const timeSlotsWrapperRef = useRef(null)

    return(
        <section className="booking-time-slots-wrapper" ref={timeSlotsWrapperRef}>
            <p>hello</p>
        </section>
    )

}

export default BookingTimeSlots