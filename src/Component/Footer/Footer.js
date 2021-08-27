import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white-50 text-center p-5">
      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/haimu.99/" role="button">
              <i className="fab fa-facebook-f" />
            </a>

            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/mh1611__/" role="button">
              <i className="fab fa-instagram" />
            </a>
            {/* React */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/channel/UCXdbQ7bX9p0ENohyC7T1gKw" role="button">
            <i class="fab fa-youtube"></i>
            </a>
            {/* Github */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/TDkhanh0302/Nhom2_MockProject" role="button">
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Section: Social media */}
          {/* Section: Form */}
          <section className>
            <form action>
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter </strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  {/* Email input */}
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example2" className="form-control" placeholder='Email address' />
                  </div>
                </div>
                <div className="col-auto">
                  {/* Submit button */}
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          {/* Section: Form */}
          {/* Section: Text */}
          <section className="mb-4">
            <img id="footer-logo" src="https://live.staticflickr.com/65535/51403292507_1522328405_n.jpg" alt=""/>
            <p>
            Creative Way To Manage Your Tournaments
            </p>
          </section>
          {/* Section: Text */}
        </div>
          <div className="text-center p-3" >
            @ Product by Group 2
          </div>
      </footer>
      </footer>
      );
}

      export default Footer;
