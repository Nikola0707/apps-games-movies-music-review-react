import React from 'react'

//images in this component
import needForSpeed from '../components/assets/Games/needForSpeed.jpg'
import juneJourney from '../components/assets/Games/journey.jpg'
import batman from '../components/assets/Games/batman.jpg'

import LandscapeCard from '../components/LandscapeCard/LandscapeCard'

const Games = () => {
    return (
        <div className="container">
            <h2>New Games</h2>
            <div className="gridCointainer">
                <LandscapeCard img={needForSpeed} title="Need for speed" />
                <LandscapeCard img={juneJourney} title="Junes Journey" />
                <LandscapeCard img={batman} title="Batman" />
            </div>
        </div>
    )
}

export default Games