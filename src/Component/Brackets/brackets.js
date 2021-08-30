import $ from 'jquery';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../node_modules/jquery-bracket/dist/jquery.bracket.min.js';
import { TournamentsContext } from '../../contexts/TournamentsContext.jsx';
import './styles.css';

function Bracket(props) {
  const { tournamentId, currentTour } = props;
  const {
    tournaments,
    players,
    getTournaments,
    getPlayers,
    writeDataTable,
    userLogged,
    getUserLogged,
  } = useContext(TournamentsContext);
  const history = useHistory();

  var tourIndex = -1;
  for (var i = 0; i < tournaments?.length; i++) {
    if (tournaments[i].id == tournamentId) {
      tourIndex = i;
      break;
    }
  }
  var filter = [];
  for (let i = 0; i < players?.length; i++) {
    if (players[i]?.tournament_id == tournamentId) {
      filter.push(players[i]);
    }
  }

  const filters = [...filter];
  while (filters.length % 4 != 0) {
    filters.push(null);
  }
  console.log(filters);
  const loopNumber = Math.ceil(filters.length / 2);
  const newArr = [];
  let teamArr = [...filters];
  for (let i = 1; i <= loopNumber; i++) {
    newArr.push(teamArr.splice(0, 2));
  }

  var customData = {
    teams: newArr,
    results: [],
  };

  function edit_fn(container, data, doneCb) {
    var input = $('<input type="text">');
    input.val(data ? +data.name : '');
    if (data !== null) {
      container.html(input.val(data.name));
      input.focus();
      input.blur(function () {
        var inputValue = input.val();
        if (inputValue.length === 0) {
          for (let i = 0; i < filter.length; i++) {
            if (filter[i].id == data.id) {
              if (window.confirm('Delete player?')) {
                doneCb(null);
                filter.splice(i, 1);
                writeDataTable(filter, 'players');

                let players_count = 0;
                filter.forEach((player) => {
                  if (player.tournament_id == tournamentId) players_count++;
                });
                tournaments[tourIndex].player_count = players_count;
                writeDataTable(tournaments, 'tournaments');
              } else {
                inputValue = filters[i].name;
                doneCb({ name: inputValue });
              }
              break;
            }
          }
        } else {
          let check = true;
          if (!inputValue === data.name) {
            for (let i = 0; i < filter.length; i++) {
              if (filter[i].name == inputValue) {
                alert('Người chơi đã tồn tại');
                check = false;
                break;
              }
            }
          }
          for (let i = 0; i < filter.length; i++) {
            if (check) {
              if (filter[i].id == data.id) {
                if (window.confirm('Bạn có muốn đổi tên người chơi thành ' + inputValue + ' ?')) {
                  filter[i].name = inputValue;
                  writeDataTable(filter, 'players');
                } else {
                  inputValue = filter[i].name;
                }
              }
            } else {
              if (filter[i].id == data.id) {
                inputValue = filter[i].name;
              }
            }
            doneCb({ name: inputValue });
          }
        }
      });
    } else history.push('/tournament/players/' + tournamentId);
  }

  var scores = [];
  function saveFn(data, userData) {
    let result = data.results;
    scores.push({ tournamentId, result });
    // $('#saveOutput').text('POST ' + userData + ' ' + json);
    console.log('data', scores);
  }

  function render_fn(container, data, score, state) {
    switch (state) {
      case 'empty-bye':
        container.append('No team');
        return;
      case 'empty-tbd':
        container.append('Upcoming');
        return;

      case 'entry-no-score':
      case 'entry-default-win':
      case 'entry-complete':
        container
          .append(
            '<img width=30px height=20px src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png" /> '
          )
          .append(data.name);
        return;
    }
  }
  useEffect(() => {
    getPlayers();
    getTournaments();
    getUserLogged();
  }, []);

  $(function () {
    if (!userLogged || currentTour?.user_id !== userLogged.id) {
      console.log(customData);
      $('#matches .demo').bracket({
        init: customData,
        decorator: { edit: edit_fn, render: render_fn },
        teamWidth: 150,
        scoreWidth: 20,
        matchMargin: 40,
        roundMargin: 50,
      });
    } else {
      console.log(customData);
      $('#matches .demo').bracket({
        init: customData,
        save: function () {} /* without save() labels are disabled */,
        decorator: { edit: edit_fn, render: render_fn },
        teamWidth: 150,
        scoreWidth: 20,
        matchMargin: 40,
        roundMargin: 50,
      });
    }
  });

  return (
    <div>
      <span id="matchCallback" />
      <div id="matches">
        <div className="demo"></div>
      </div>
      <div id="matchesblank">
        <div className="demo"></div>
      </div>
    </div>
  );
}

export default Bracket;
