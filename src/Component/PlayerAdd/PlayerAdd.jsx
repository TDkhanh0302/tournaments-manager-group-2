import React, { useContext, useEffect, useRef } from 'react';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import './PlayerAdd.css';
const PlayerAdd = ({ listplayers, tournaments, tournamentId }) => {
  const { writeDataTable } = useContext(TournamentsContext);

  const playerRef = useRef(null);
  const errPlayerNameRef = useRef(null);

  const onInputData = () => {
    playerRef.current.oninput = () => {
      errPlayerNameRef.current.innerText = '';
      errPlayerNameRef.current.classList.remove('invalid');
    };
  };

  const handleAddPlayer = (event) => {
    event.preventDefault();
    const id = Date.now();
    const final_rank = 1;
    const name = playerRef.current.value;
    const tournament_id = tournamentId;
    var tourIndex = -1;
    const listTours = [...tournaments];
    console.log(listTours);
    for (var i = 0; i < listTours.length; i++) {
      if (listTours[i].id == tournamentId) {
        tourIndex = i;
        break;
      }
    }

    let check = true;
    if (playerRef.current.value === '') {
      errPlayerNameRef.current.innerText = 'Chưa điền tên người chơi';
      errPlayerNameRef.current.classList.add('invalid');
      playerRef.current.focus();
      check = false;
    }
    for (let i = 0; i < listplayers.length; i++) {
      if (
        listplayers[i].name === playerRef.current.value &&
        listplayers[i].tournament_id === tournamentId
      ) {
        errPlayerNameRef.current.innerText = 'Tên người chơi đã tồn tại';
        errPlayerNameRef.current.classList.add('invalid');
        playerRef.current.focus();
        check = false;
        break;
      }
    }

    if (check) {
      listplayers.push({ final_rank, id, name, tournament_id });
      writeDataTable(listplayers, 'players');
      let players_count = 0;
      listplayers.forEach((player) => {
        if (player.tournament_id == tournamentId) players_count++;
      });
      listTours[tourIndex].player_count = players_count;
      writeDataTable(listTours, 'tournaments');
    }
    playerRef.current.value = '';
  };

  useEffect(() => {
    playerRef.current.onblur = () => {
      onInputData();
    };
  }, []);

  return (
    <div>
      <div className="container pt-3">
        <form>
          <div className="row">
            <input
              className="col-sm-3 form-control add-player me-2"
              type="text"
              name="tournament_name"
              id="tournament_name"
              ref={playerRef}
            />
            <button
              className="col-sm-2 col-md-1 btn view-btn add-btn"
              type="submit"
              onClick={handleAddPlayer}
            >
              Add
            </button>
            <span ref={errPlayerNameRef} className="err_message"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerAdd;
