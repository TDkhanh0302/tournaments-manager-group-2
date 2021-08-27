import React, { useContext, useEffect, useRef } from 'react';
import './style.css';
import Header from '../../Component/Header/Header';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const { users, getUser, writeDataTable } = useContext(TournamentsContext);
  const history = useHistory();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const errPasswordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const listUser = [...users];

    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].username === username && listUser[i].password == password) {
        writeDataTable(listUser[i], 'userLogged');
        history.push('/');
        break;
      } else {
        errPasswordRef.current.innerText = 'Sai tên đăng nhập hoặc mật khẩu';
        errPasswordRef.current.classList.add('invalid');
        usernameRef.current.focus();
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header />
      {
        <div className="loginForm">
          <div className="container-flud d-block d-lg-flex">
            <div className="left  d-none d-lg-block col col-lg-4">
              <div className="text-des">
                <p className="des">
                  Join the millions who trust in us to manage their tournaments. More than
                  11,448,459 brackets created.
                </p>
              </div>
            </div>
            <div className="right col col-lg-8">
              <div className="login-main">
                <h3 className="title-login">Login</h3>
                <p className="des">
                  Welcome back! Please enter your details or log in with your social media account.
                </p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">
                      Username
                    </label>
                    <input
                      ref={usernameRef}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      required
                    />
                    <span ref={errPasswordRef} className="err_message"></span>
                  </div>
                  <button onClick={handleSubmit} type="submit" className="btn btn-submit-form mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default LoginForm;
