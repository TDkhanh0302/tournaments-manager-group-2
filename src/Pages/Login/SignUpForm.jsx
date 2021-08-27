import React, { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import './style.css';

const SignUpForm = () => {
  const { users, writeDataTable, getUser } = useContext(TournamentsContext);

  const history = useHistory();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const reInputPasswordRef = useRef(null);
  const errPasswordRef = useRef(null);
  const errUsernameRef = useRef(null);

  const onInputData = () => {
    reInputPasswordRef.current.oninput = () => {
      errPasswordRef.current.innerText = '';
      errPasswordRef.current.classList.remove('invalid');
    };
  };

  const checkReInputPassword = () => {
    if (passwordRef.current.value === reInputPasswordRef.current.value) {
      errPasswordRef.current.innerText = '';
      errPasswordRef.current.classList.remove('invalid');
    } else {
      errPasswordRef.current.innerText = 'Mật khẩu không khớp';
      errPasswordRef.current.classList.add('invalid');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    const tournament_id = null;
    const newUser = [...users];

    for (let i = 0; i < newUser.length; i++) {
      if (newUser[i].username === usernameRef.current.value) {
        errUsernameRef.current.innerText = 'Tài khoản đã tồn tại';
        errUsernameRef.current.classList.add('invalid');
        usernameRef.current.focus();
        break;
      } else {
        newUser.push({ id, password, username, tournament_id });
        writeDataTable(newUser, 'users');
        history.push('/login');
        break;
      }
    }
  };

  useEffect(() => {
    getUser();

    reInputPasswordRef.current.onblur = () => {
      checkReInputPassword();
      onInputData();
    };
  }, []);

  return (
    <>
      <Header />
      {
        <div className="loginForm">
          <div className="container-flud d-block d-lg-flex">
            <div className="left sign d-none d-lg-block col col-lg-4">
              <div className="text-des">
                <p className="des ">
                  Join the millions who trust in us to manage their tournaments. More than
                  11,448,459 brackets created.
                </p>
              </div>
            </div>
            <div className="right col col-lg-8 justify-content-flex-start">
              <div className="login-main">
                <h3 className="title-login">Register</h3>
                <p className="des">
                  Get started easily by signing up to manage your tournaments and events!
                </p>
                <form onSubmit={handleSubmit} method="GET">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      ref={usernameRef}
                      type="text"
                      className="form-control"
                      id="username"
                      required
                    />
                    <span ref={errUsernameRef} className="err_message"></span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reInputPassword" className="form-label">
                      Nhập lại Password
                    </label>
                    <input
                      ref={reInputPasswordRef}
                      type="password"
                      className="form-control"
                      id="reInputPassword"
                      required
                    />
                    <span ref={errPasswordRef} className="err_message"></span>
                  </div>
                  <button className="btn btn-submit-form">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default SignUpForm;
