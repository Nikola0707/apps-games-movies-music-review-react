import React, { useState, useEffect } from 'react'
import appsImages from './assets/Apps/imagesObject'
import BootstrapCard from './BootstrapCard/BootstrapCard'
import '../components/assets/style/Apps.css'

const Apps = () => {

    const [renderCard, setRenderCard] = useState(null)

    useEffect(() => {
        const renderBootstrapCard = appsImages.map((item, index) => <BootstrapCard title={item.title} src={item.src} key={index} />)
        setRenderCard(renderBootstrapCard)
    }, [])



    return (
        <div className="Apps-container">
            <h2>Recommended for you</h2>
            <div className="Apps-container-grid">
                {renderCard}
            </div>
        </div>
    )
}

export default Apps