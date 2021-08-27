import React from 'react';
function Slider() {
  return (
    <div className="text-center p-5">
      <h2 className="p-3">Top Games</h2>
      <div>
        <img className="p-3" src="./homepage img/logo-aov.png" alt="Arena of Valor" width="200px" />
        <img
          className="p-3"
          src="./homepage img/logo-efootball.png"
          alt="eFootball Pes"
          width="200px"
        />
        <img className="p-3" src="./homepage img/logo-csgo.png" alt="eFootball Pes" width="200px" />
        <img
          className="p-3"
          src="./homepage img/logo-fifaonline.png"
          alt="Fifa Online"
          width="200px"
        />
        <img
          className="p-3"
          src="./homepage img/logo-LOL.png"
          alt="Leage of Legends"
          width="200px"
        />
        <img className="p-3" src="./homepage img/logo-nba2k.png" alt="Nba 2K" width="200px" />
        <img className="p-3" src="./homepage img/logo-yugiou.png" alt="Yugi Oh!" width="200px" />
      </div>
    </div>
  );
}
export default Slider;
