import react from 'react'
import './LandscapeCard.css'

//Component for star ratning
import Rating from '../Rating'

const LandscapeCard = (props) => {

    return (
        <div className="cardGames-container">
            <div>
                <img src={props.img} alt="img" />
                <div className="cardGames-titleAndStars">
                    <div><p className="card-title">{props.title}</p></div>
                    <div>
                        <Rating />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandscapeCard