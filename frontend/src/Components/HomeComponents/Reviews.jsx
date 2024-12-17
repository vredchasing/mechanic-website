function HomeReviews (){

    const reviews = [
        {name:'- Emily Smith', photo:'/public/about-slider-img1.jpg', review:'"Speedy service with an attention to detail and customer satisfaction."'},
        {name:'- Brain Kent', photo:'/public/profile-picture2.jpg', review:'"I went in for an oil change and they did it very quickly and professionally."'},
        {name:'- James M.', photo:'/public/profile-picture3.jpg', review:'"Great customer service, they work with integrity and excellence! Highly recommend them."'},
    ]

    function CreateReview ({review, index}){
        return (
            <div className="review-container">
                <div className="review-profile-container">
                    <img className="review-profile-img" src={review.photo}></img>
                </div>
                <div className="review-text-wrapper">
                    <div className="user-review-container">
                        <p className="user-review">{review.review}</p>
                    </div>
                    <h1 className="review-user-name">{review.name}</h1>
                </div>
            </div>
        )
    }

    return (
        <section className="reviews-main-wrapper">
            <div className="reviews-wrapper">
                {
                    reviews.map((review, index)=>{
                        return (
                            <CreateReview key={index} review={review} index={index}></CreateReview>
                        )
                    })
                }

            </div>
            <div className="home-reviews-caption-wrapper">
                <p className="home-reviews-caption">Would you like to write a review? Please visit this <p className="write-review-link">link.</p></p>
            </div>
        </section>
    )

}

export default HomeReviews