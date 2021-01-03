import React from 'react'
import Games from './Games'
import Apps from './Apps';
import TrendingNow from './TrendingNow/TrendingNow'

const Home = () => {
    return (
       <>
         <Games />
         <Apps />
         <TrendingNow />
       </>
    )
}

export default Home