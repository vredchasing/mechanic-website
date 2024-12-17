import { useEffect, useRef } from "react"

function AboutSlider (){


    const SliderContent = [
        {mainCaption:'QUALITY WORKSMANSHIP. AFFORDABLE PRICES.', smallCaption: '', imgSrc: '/about-slider-img3.jpg'},
        {mainCaption:'Yooo', smallCaption: '', imgSrc: ''},
        {mainCaption:'HIII', smallCaption: '', imgSrc: ''},
    ]

    // refs

    const aboutSliderRef = useRef(null)
    const aboutSlideRef = useRef([])
    const leftButtonRef = useRef(null)
    const rightButtonRef = useRef(null)


    //ref setters

    const setAboutSlideRef = (el, index) => {
        if (el) {
            aboutSlideRef.current[index] = el;
        }
    }

    // event listeners 
    useEffect(() => {
        if (leftButtonRef.current && rightButtonRef.current) {
          const leftButton = leftButtonRef.current;
          const rightButton = rightButtonRef.current;
    
          //click listeners for both buttons
          const handleLeftClick = () => {
            console.log('Left button clicked');
          };
          const handleRightClick = () => {
            console.log('Right button clicked');
          };
    
          leftButton.addEventListener('click', handleLeftClick);
          rightButton.addEventListener('click', handleRightClick);
          //clean up
          return () => {
            leftButton.removeEventListener('click', handleLeftClick);
            rightButton.removeEventListener('click', handleRightClick);
          };
        }
      }, []);

      useEffect(()=>{
        console.log(leftButtonRef.current)
      }, [])
    function CreateAboutSlider (){
        return (
            <section className="about-slider" ref={aboutSliderRef}>
                {SliderContent.map((slide, index)=>{
                    return(
                        <div className="about-slide-wrapper">
                            <div className="about-slide" ref={(el) => setAboutSlideRef(el, index)}>
                                <div className="about-slider-left-arrow-wrapper"  ref={leftButtonRef}>
                                    <img className="about-slider-left-arrow" src="/public/right-arrow.svg"></img>
                                </div>
                                <div className="about-slide-img-wrapper">
                                    <img className="about-slide-img" src={slide.imgSrc}></img>
                                </div>
                                <div className="about-slide-caption-wrapper">
                                    <h1 className="about-slide-main-caption">{slide.mainCaption}</h1>
                                    <p className="about-slide-small-caption">{slide.smallCaption}</p>
                                </div>
                                <div className="about-slider-right-arrow-wrapper" ref={rightButtonRef}>
                                    <img className="about-slider-right-arrow" src="/public/right-arrow.svg"></img>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    }
    return (
        <section className="about-slider-section">
            <CreateAboutSlider></CreateAboutSlider>
        </section>
    )

}

export default AboutSlider