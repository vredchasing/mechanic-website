import { forwardRef, useRef, useImperativeHandle } from "react";
import BookingTimeSlots from "./Booking/BookingTimeSlots";

const HomeBookingLeft = forwardRef((props, ref) => {
  // Forwarded ref for BookingTimeSlots
  const timeSlotsForwardedRefs = useRef();

  // Expose methods to the parent via useImperativeHandle
  useImperativeHandle(ref, () => ({
    open: () => {
      if (timeSlotsForwardedRefs.current?.open) {
        timeSlotsForwardedRefs.current.open();
      }
    },
    close: () => {
      if (timeSlotsForwardedRefs.current?.close) {
        timeSlotsForwardedRefs.current.close();
      }
    },
  }));

  return (
    <section className="home-booking-left-wrapper">
      <h1 className="home-booking-left-caption">LET US TAKE CARE OF IT.</h1>
      <p className="home-booking-left-caption2">
        We know how hard you work. Let us take it from here.
      </p>
      <p className="home-booking-left-caption3">
        Call or schedule online via the online booking{" "}
        <span className="home-booking-link">calendar.</span>
      </p>
      <BookingTimeSlots ref={timeSlotsForwardedRefs} />
    </section>
  );
});

export default HomeBookingLeft;
