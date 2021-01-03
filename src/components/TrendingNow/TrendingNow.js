import React, { useEffect, useState } from 'react'
import LandscapeCard from '../LandscapeCard/LandscapeCard'
import trendingImages from '../TrendingNow/TrendingNowImages.js'

const TrendingNow = () => {
    const [renderCards, setRendernCards] = useState(null)

    useEffect(() => {
        const renderLandscapeCard = trendingImages.map((item, index) => <LandscapeCard img={item.src} title={item.title} key={index} />)
        setRendernCards(renderLandscapeCard)
    }, [])

    return (
        <>
            <h2>Trending Now</h2>
            <div className="gridCointainer">
                {renderCards}
            </div>

        </>
    )

}

export default TrendingNow