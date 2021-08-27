import React, { useContext, useEffect, useRef } from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import TournamentBannerPlayerHost from '../../Component/TournamentBanner/TournamentBannerPlayerHost';
import PlayerAdd from '../../Component/PlayerAdd/PlayerAdd';
import PlayerList from '../../Component/PlayerList/PlayerList';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import { useParams } from 'react-router-dom';

const TournamentPlayerHost = () => {
  const { tournamentId } = useParams();
  const { players, tournaments, getPlayers, getTournamentById, getTournaments,userLogged,getUserLogged} =
    useContext(TournamentsContext);
  const playerAddRef = useRef(null);
  const currentTour = getTournamentById(tournamentId);

  const checkHost  = () =>{
    if (!userLogged|| currentTour.user_id !== userLogged.id){
      playerAddRef.current.classList.add('hidden');
    }
    else
    playerAddRef.current.classList.remove('hidden');
  }

  useEffect(() => {
    getPlayers();
    getTournaments();
    getUserLogged();
    checkHost();
  }, []);
  return (
    <div>
      <Header />
      <TournamentBannerPlayerHost 
        currentTour={currentTour} 
        tournamentId={tournamentId} />
      <div className="tournamentContent">
        <div className ="addPlayerdiv" ref={playerAddRef}>
        <PlayerAdd
            listplayers={players} 
            tournaments={tournaments} 
            tournamentId={tournamentId} />
        </div>
        <div className="container pt-3">
          <PlayerList 
            listplayers={players} 
            tournaments={tournaments} 
            tournamentId={tournamentId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TournamentPlayerHost;
