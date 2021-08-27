import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerBracket from '../../Component/TournamentBanner/TournamentBannerBracket'

const TournamentBracketLogged = () => {
    return (
        <div>
            <Header/>
            <TournamentBannerBracket/>
            <div className='tournamentContent'>

            </div>
            <Footer/>
        </div>
    )
}

export default TournamentBracketLogged