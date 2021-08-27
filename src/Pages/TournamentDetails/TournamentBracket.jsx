import React, { useContext, useEffect, useRef } from 'react';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import TournamentBannerBracket from '../../Component/TournamentBanner/TournamentBannerBracket'

const TournamentBracket = () => {
    const { tournaments, getTournamentsByID} = useContext(TournamentsContext);
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

export default TournamentBracket