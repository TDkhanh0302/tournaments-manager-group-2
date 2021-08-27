import $ from 'jquery';
// import jQuery from 'jquery';
import { useContext, useEffect } from 'react';
// import '../../../node_modules/jquery-bracket/dist/jquery.bracket.min.js';
import { TournamentsContext } from '../../contexts/TournamentsContext.jsx';
require('../../../node_modules/jquery-bracket/dist/jquery.bracket.min.js');

function Bracket(props) {
  const { tournamentId } = props;
  const { players, getPlayers } = useContext(TournamentsContext);
  console.log(players);

  // let filter = [];
  // console.log(tournamentId);
  // for (let i = 0; i < players?.length; i++) {
  //   if (players[i]?.tournament_id == tournamentId) {
  //     filter.push(players[i]);
  //   }
  // }
  // console.log(filter);

  // var team = [];
  // for (let i = 0; i < players?.length; i++) {
  //   if (team.length == 0) {
  //     team.push([{ name: players[i].name }, null]);
  //   }
  //   let count = team.length - 1;
  //   if (team[count][1] == null) {
  //     team[count][1] = { name: players[i].name };
  //   } else {
  //     team[count + 1] = [{ name: players[i].name }, null];
  //   }
  // }
  // console.log(team);

  var customData = {
    teams: [],
    results: [],
  };

  useEffect(() => {
    getPlayers();
  }, []);

  function edit_fn(container, data, doneCb) {
    var input = $('<input type="text">');
    input.val(data ? +data.name : '');
    container.html(input);
    input.focus();
    input.blur(function () {
      var inputValue = input.val();
      if (inputValue.length === 0) {
        doneCb(null); // Drop the team and replace with BYE
      } else {
        doneCb({ name: inputValue });
      }
    });
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

  $(function () {
    $('#matches .demo').bracket({
      init: customData,
      save: function () {} /* without save() labels are disabled */,
      decorator: { edit: edit_fn, render: render_fn },
      teamWidth: 150,
      scoreWidth: 20,
      matchMargin: 40,
      roundMargin: 50,
    });
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
