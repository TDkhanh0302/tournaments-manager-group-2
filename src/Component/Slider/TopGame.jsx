import React from 'react';
import './style.css'
import Slider from "react-slick";
function TopGame() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 4,
    speed: 500
  };
  return (
    <div>
      <div className="top-game text-center p-5">
        <h2 className="p-3">TOP GAMES</h2>
        <div className="container">
          <Slider {...settings}>
            <div className='slider-item'>
              <img className='p-3' src="./homepage img/logo-aov.png" alt="Arena of Valor" width="300px" />
            </div>
            <div className='slider-item'>
              <img className='p-3' src="./homepage img/logo-efootball.png" alt="eFootball Pes" width="300px" />
            </div>
            <div className='slider-item'>
              <img className='p-3' src="./homepage img/logo-csgo.png" alt="eFootball Pes" width="300px" />
            </div>
            <div className='slider-item'>
              <img className='p-3' src="./homepage img/logo-fifaonline.png" alt="Fifa Online" width="300px" />
            </div>
            <div className='slider-item'>
              <img className='p-3' src="./homepage img/logo-LOL.png" alt="Leage of Legends" width="300px" />
            </div>
            <div className='slider-item'>
              <img className='p-3' src="./homepage img/logo-nba2k.png" alt="Nba 2K" width="300px" />
            </div>
            <div className='slider-item'>
              <img className='p-3' src="./homepage img/logo-yugiou.png" alt="Yugi Oh!" width="300px" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="top-game-mobile text-center p-5">
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
    </div>


  )
}
export default TopGame;