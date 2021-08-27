import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import './Header.css';
import { useHistory } from 'react-router-dom';
function Header() {
  const { userLogged, getUserLogged, writeDataTable } = useContext(TournamentsContext);
  const usernameRef = useRef(null);
  const logoutRef = useRef(null);
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const history = useHistory();

  const checkUserLogged = () => {
    if (!userLogged) {
      usernameRef.current.classList.add('hidden');
      logoutRef.current.classList.add('hidden');
      loginRef.current.classList.remove('hidden');
      registerRef.current.classList.remove('hidden');
    } else {
      usernameRef.current.classList.remove('hidden');
      logoutRef.current.classList.remove('hidden');
      loginRef.current.classList.add('hidden');
      registerRef.current.classList.add('hidden');
    }
  };

  const handleLogout = () => {
    writeDataTable(null, 'userLogged');
    usernameRef.current.classList.add('hidden');
    logoutRef.current.classList.add('hidden');
    loginRef.current.classList.remove('hidden');
    registerRef.current.classList.remove('hidden');
  };
  const handleYourTournament = () => {
    if(!userLogged){
      alert('Please log in before enter your tournament!');
      history.push('/login')
    } else {
      history.push('/your-tournaments');
    }
  }
  
  useEffect(() => {
    getUserLogged();
    checkUserLogged();
  }, []);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://live.staticflickr.com/65535/51403292507_1522328405_n.jpg" height="32px"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link acvite" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tournaments">
                All Tournament
              </Link>
            </li>
            <li className="nav-item" onClick={handleYourTournament}>
              <Link className="nav-link" to="/your-tournaments">
                Your Tournament
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li ref={usernameRef} className="nav-item hidden">
              <Link className="nav-link" to="/your-tournaments">
                {userLogged?.username}
              </Link>
            </li>
            <li onClick={handleLogout} ref={logoutRef} className="nav-item sign-up hidden">
              <Link className="nav-link active" to="/">
                Logout
              </Link>
            </li>
            <li ref={loginRef} className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li ref={registerRef} className="nav-item sign-up">
              <Link className="nav-link active" to="/sign-up">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
