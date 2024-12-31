import { useRef, forwardRef, useImperativeHandle } from "react";

const BookingTimeSlots = forwardRef((props, ref) => {
  const timeSlotsWrapperRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: timeSlotsOpen,
    close: timeSlotsClose,
  }));

  function timeSlotsOpen() {
    const wrapper = timeSlotsWrapperRef.current;
    if (wrapper) {
      wrapper.style.clipPath = "inset(100% 0 0 0)";
      wrapper.style.transform = "scale(1)";
    }
  }

  function timeSlotsClose() {
    const wrapper = timeSlotsWrapperRef.current;
    if (wrapper) {
      wrapper.style.clipPath = "inset(0 0 0 0)";
    }
  }

  return (
    <section className="booking-time-slots-wrapper" ref={timeSlotsWrapperRef}>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </section>
  );
});

export default BookingTimeSlots;
