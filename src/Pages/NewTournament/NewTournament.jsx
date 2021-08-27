import React, { useContext, useEffect, useRef } from 'react';
import './styles.css';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { useHistory } from 'react-router-dom';
import { TournamentsContext } from '../../contexts/TournamentsContext';


function NewTournament() {
  const { tournaments, writeDataTable, userLogged, getTournaments, getUserLogged } = useContext(TournamentsContext);
  const tournamentNameRef=useRef(null);
  const desRef=useRef(null);
  const gameNameRef=useRef(null);
  const typeRef=useRef(null);
  const has3rdMatchRef = useRef(null);
  const history = useHistory();
  const createTournament = (event) =>{
    event.preventDefault();
    const id=Date.now()
    const has3rdMatch = has3rdMatchRef.current.value
    const name=tournamentNameRef.current.value
    const description = desRef.current.value
    const player_count=0;
    const state=0;
    const user_id=userLogged.id;
    const game_name=gameNameRef.current.value
    const type= typeRef.current.value
    const newTournament = [...tournaments];
    newTournament.push({id, name, description, player_count, state, user_id, game_name, type, has3rdMatch});
    writeDataTable(newTournament,'tournaments')
    history.push(`/tournament/bracket/${id}`);
  }
  useEffect(() => {
    getTournaments()
    getUserLogged()
  }, []);
  return (
    <div>
      <Header/>
      <div className="wrap">
        <div className="head">
          <h2>New Tournament</h2>
        </div>
        <div className="content row justify-content-center">
          <form className="col-8" action="">
            <div className="form_info">
              <div className="form_row row">
                <label className=" form_label" htmlFor="tournament_name">
                  Tournament name
                </label>
                <input
                  ref={tournamentNameRef}
                  className="col-8 form-control"
                  type="text"
                  name="tournament_name"
                  id="tournament_name"
                  required
                />
              </div>

              <div className="form_row row">
                <label className=" form_label" htmlFor="description">
                  Description
                </label>
                <textarea
                  ref={desRef}
                  className="col-8 form-control"
                  name="description"
                  id="description"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>

              <div className="form_row row">
                <label className=" form_label" htmlFor="game">
                  Game
                </label>
                <input
                  ref={gameNameRef}
                  className="col-8 form-control"
                  type="text"
                  name="tournament_name"
                  id="tournament_name"
                  required
                />
              </div>

              <div className="form_row row">
                <label className=" form_label" htmlFor="format">
                  Type
                </label>
                <select
                  ref={typeRef}
                  className="col-8 form-control"
                  name="format"
                  id="format"
                  required
                >
                  <option value="single">Single Elimination</option>
                </select>
              </div>
              <div className="form-check form_row">
                <input className="form-check-input" type="checkbox" value="1" id="flexCheckDefault" ref={has3rdMatchRef} />
                <label className=" form_label" for="">
                  Include match for 3rd place
                </label>
              </div>
            </div>
            <button type="submit" className="btn view-btn m-3" onClick={createTournament}>
              Save and continue
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewTournament;
