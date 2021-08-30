import React, { useContext, useEffect, useRef } from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import TournamentThumb from '../../Component/TournamentThumb/TournamentThumb';
import { TournamentsContext } from '../../contexts/TournamentsContext';

const YourTournament = () => {
  const { tournaments, getTournaments } = useContext(TournamentsContext);
  const { userLogged, getUserLogged } = useContext(TournamentsContext);
  let showListTournaments = tournaments?.map((item, index) => {
    if (item.user_id === userLogged.id) {
      return (
        <TournamentThumb
          key={index}
          id={item.id}
          tournamentName={item.name}
          playersCount={item.player_count}
          gameName={item.game_name}
          host={item.user_id}
        />
      );
    }
  });
  useEffect(() => {
    getUserLogged();
  }, []);
  useEffect(() => {
    getTournaments();
  }, []);
  return (
    <div>
      <Header />
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="500">
            <img
              src="https://www.garena.vn/img/top-carousel-aov.32f1caee.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="500">
            <img
              src="https://www.garena.vn/img/top-carousel-bns.98d7d284.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="500">
            <img
              src="https://www.garena.vn/img/top-carousel-fo4.7747588a.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid  all-tournaments-list p-5">
        <div className="container">
          <div className="row text-center text-white p-3">
            <h2>MANAGE YOUR TOURNAMENTS</h2>
          </div>
          <div className="row justify-content-between">{showListTournaments}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default YourTournament;
