import React, { useContext, useEffect } from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import TournamentBannerBracketHost from '../../Component/TournamentBanner/TournamentBannerBracketHost';
import { useParams } from 'react-router-dom';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import Bracket from '../../Component/Brackets/brackets';

const TournamentBracketHost = () => {
  const { tournamentId } = useParams();
  const { players,getPlayers,getTournamentById, getTournaments } = useContext(TournamentsContext);
  const currentTour = getTournamentById(tournamentId);
  useEffect(() => {
    getTournaments();
    getPlayers();
  }, []);

  return (
    <div>
      <Header />
      <TournamentBannerBracketHost currentTour={currentTour} tournamentId={tournamentId} />
      <div className="tournamentContent">
        <div className="container container-flud">
          <Bracket currentTour={currentTour} tournamentId={tournamentId} listplayers = {players}></Bracket>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TournamentBracketHost;
