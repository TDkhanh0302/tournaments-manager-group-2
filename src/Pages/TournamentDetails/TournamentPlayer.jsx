import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerPlayer from '../../Component/TournamentBanner/TournamentBannerPlayer'
import PlayerList from '../../Component/PlayerList/PlayerList'
const TournamentPlayer = () => {
    return (
        <div>
            <Header/>
            <TournamentBannerPlayer/>
            <div className='tournamentContent'>
                <PlayerList/>
            </div>
            <Footer/>
        </div>
    )
}

export default TournamentPlayer