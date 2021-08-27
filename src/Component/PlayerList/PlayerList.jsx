import React, { useContext } from 'react';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import PlayerItem from './PlayerItem';
import './PlayerList.css';

const PlayerList = ({ listplayers, tournaments, tournamentId }) => {
  const { writeDataTable } = useContext(TournamentsContext);

  var tourIndex = -1;
  for (var i = 0; i < tournaments?.length; i++) {
    if (tournaments[i].id == tournamentId) {
      tourIndex = i;
      break;
    }
  }
  const showListPlayer = listplayers?.map((player, index) => {
    
    const onDelete = (index) => {
      listplayers.splice(index, 1);
      writeDataTable(listplayers, 'players');
      let players_count = 0;
      listplayers.forEach((player) => {
        if (player.tournament_id == tournamentId) players_count++;
      });

      tournaments[tourIndex].player_count = players_count;
      writeDataTable(tournaments, 'tournaments');
    };

    const onEditPlayer = (index,nameupdate) =>{
      listplayers[index].name = nameupdate;
      writeDataTable(listplayers, 'players');
    }

    if (player.tournament_id === tournamentId) {
      return (
        <PlayerItem
          index={index}
          key={player.id}
          player={player}
          onDelete={onDelete}
          listplayers={listplayers}
          tournamentId={tournamentId}
          onEditPlayer={onEditPlayer}
        />
      );
    }
  });

  return <>{showListPlayer}</>;
};

export default PlayerList;
