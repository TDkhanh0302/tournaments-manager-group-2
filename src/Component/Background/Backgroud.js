import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Background.css';
import { TournamentsContext } from '../../contexts/TournamentsContext';

function Background() {
  const { userLogged, getUserLogged } = useContext(TournamentsContext);
  const history = useHistory();
  const addTournament = () => {
    if (!userLogged) {
      alert('Please log in before create your new tournament!');
      history.push('/login');
    } else {
      history.push('/add-tournament');
    }
  };
  useEffect(() => {
    getUserLogged();
  }, []);

  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./homepage img/home-background.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <button type="button" className="btn create-btn" onClick={addTournament}>
                Create your tourament now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
