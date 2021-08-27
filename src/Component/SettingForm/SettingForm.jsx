import React, { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { TournamentsContext } from '../../contexts/TournamentsContext';

const SettingForm = ({ id }) => {
  const { getTournaments, tournaments, getTournamentById, writeDataTable } =
    useContext(TournamentsContext);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const gameRef = useRef(null);
  const history = useHistory();

  const updateTournament = () => {
    const tournamentFromId = [...tournaments];
    for (let i = 0; i < tournamentFromId.length; i++) {
      if (tournamentFromId[i].id == id) {
        tournamentFromId[i].name = nameRef.current.value;
        tournamentFromId[i].description = descriptionRef.current.value;
        tournamentFromId[i].game_name = gameRef.current.value;
      }
    }
    writeDataTable(tournamentFromId, 'tournaments');
    history.push(`/tournament/bracket/${id}`);
  };

  const deleteTournament = () => {
    let arrTournaments = [...tournaments];
    const newState = arrTournaments.filter((item) => {
      return item.id != id;
    });
    if (window.confirm('Delete this tournaments?')) {
      writeDataTable(newState, 'tournaments');
      history.push('/your-tournaments');
    }
  };

  useEffect(() => {
    getTournaments();
  }, []);

  useEffect(() => {
    let tournamentFromId = getTournamentById(id);
    nameRef.current.value = tournamentFromId?.name;
    descriptionRef.current.value = tournamentFromId?.description;
    gameRef.current.value = tournamentFromId?.game_name;
  }, [id]);

  return (
    <div>
      <div className="wrap pt-5">
        <div className="content row justify-content-center">
          <form className="col-8" action="">
            <div className="form_info">
              <div className="form_row row">
                <label className=" form_label" htmlFor="tournament_name">
                  Tournament name
                </label>
                <input
                  className="col-8 form-control"
                  type="text"
                  name="tournament_name"
                  id="tournament_name"
                  required
                  ref={nameRef}
                />
              </div>

              <div className="form_row row">
                <label className=" form_label" htmlFor="description">
                  Description
                </label>
                <textarea
                  ref={descriptionRef}
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
                  ref={gameRef}
                  className="col-8 form-control"
                  type="text"
                  name="tournament_name"
                  id="tournament_name"
                  required
                />
              </div>
            </div>
            <button onClick={updateTournament} type="button" className="btn view-btn m-3">
              Save
            </button>
            <button onClick={deleteTournament} type="button" className="btn view-btn m-3">
              Delete Tournament
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingForm;
