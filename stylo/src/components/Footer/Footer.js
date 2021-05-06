import React from "react";
import "../../styles/components/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/dir//Stylo+Stationery,+274,+1st+Floor,Parkash+Street,+Teliwara,+Sadar+Bazaar,+New+Delhi,+Delhi+110006/@28.6602011,77.1451748,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfd72fddca045:0xb5a5e8549b72869f!2m2!1d77.2152159!2d28.6602191"
            >
              <h5>B. Dayal & Sons</h5>
              <p>274, 1st Floor, Prakash Street</p>
              <p>Teliwara, Sadar Bazaar, New Delhi, 110006</p>
            </a>
          </div>
          <div>
            <h5>Rajender Rustagi</h5>
            <p>+91 98100 49121</p>
            <h5>Rakesh Rustagi</h5>
            <p>+91 9818280890</p>
          </div>
          <div>
            <h5>
              Designed, developed & maintained by{" "}
              <span className="accent">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/abhinrustagi"
                >
                  Abhin Rustagi
                </a>
              </span>{" "}
              &{" "}
              <span className="accent">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/nandikajain/"
                >
                  Nandika Jain
                </a>
              </span>
              .
            </h5>
          </div>
        </div>
        <p className="copy">&copy;Stylo Stationery. 2021. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
