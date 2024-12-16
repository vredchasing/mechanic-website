function AboutSlider (){


    const SliderContent = [
        {mainCaption:'QUALITY WORKSMANSHIP. AFFORDABLE PRICES.', smallCaption: '', imgSrc: '/about-slider-img1.jpg'},
        {mainCaption:'Yooo', smallCaption: '', imgSrc: ''},
        {mainCaption:'HIII', smallCaption: '', imgSrc: ''},
    ]

    function CreateAboutSlider (){
        return (
            <section className="about-slider">
                {SliderContent.map((slide, index)=>{
                    return(
                        <div className="about-slide-wrapper">
                            <div className="about-slide">
                                <div className="about-slide-img-wrapper">
                                    <img className="about-slide-img" src={slide.imgSrc}></img>
                                </div>
                                <div className="about-slide-caption-wrapper">
                                    <h1 className="about-slide-main-caption">{slide.mainCaption}</h1>
                                    <p className="about-slide-small-caption">{slide.smallCaption}</p>
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