import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import SettingForm from '../../Component/SettingForm/SettingForm';
import TournamentBannerSetting from '../../Component/TournamentBanner/TournamentBannerSetting';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import './TournamentDetails.css';
const TournamentSetting = () => {
  const { tournamentId } = useParams();
  const { getTournamentById, getTournaments } = useContext(TournamentsContext);
  const currentTour = getTournamentById(tournamentId);
  useEffect(() => {
    getTournaments();
  }, []);
  return (
    <div>
      <Header />
      <TournamentBannerSetting 
        currentTour={currentTour} 
        tournamentId={tournamentId} 
      />
      <div className="tournamentContent">
        <SettingForm id={tournamentId} />
      </div>
      <Footer />
    </div>
  );
};

export default TournamentSetting;
