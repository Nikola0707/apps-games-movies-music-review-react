import react, { useState } from 'react'// Component for reting stars
import ReactStars from "react-rating-stars-component";

const Rating = () => {

    // set state for rating star
    const [ratingStar, setRatingStar] = useState(0)

    const ratingChanged = (newRating) => {
        setRatingStar(newRating)
    }
    return (

        <div>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#8c9eff"
            />
        </div>

    )
}

export default Rating

