import React from 'react';
import { useHistory } from 'react-router-dom';
import './TournamentThumb.css';

const TournamentThumb = (props) => {
  const { tournamentName, playersCount, gameName, id } = props;
  const history = useHistory();
  const viewTournament = () => {
    history.push(`/tournament/bracket/${id}`);
  };
  return (
    <div className="col-lg-3 sm-8 card_box">
      <div className="card-title mb-4">
        <img
          src="https://i2.wp.com/s3.amazonaws.com/challonge_app/misc/challonge_fireball_gray.png?ssl=1"
          alt="avt"
        />
        {tournamentName}
      </div>
      <div className="card-subtitle mb-2 text-muted">
        <i className="fas fa-gamepad me-3"></i>
        {gameName}
      </div>
      <div className="card-subtitle mb-2 text-muted">
        <i className="fas fa-users me-3"></i>
        {playersCount} participants
      </div>
      <div className="card-button">
        <button type="button" className="btn view-btn mt-3" onClick={viewTournament}>
          View
        </button>
      </div>
    </div>
  );
};

export default TournamentThumb;
