import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer-left">&copy; &nbsp; 2022 Kelompok 6</div>
          <div className="footer-right">
            <a href="/">Terms and Conditions</a>
            <a href="/">Privacy and Policy</a>
          </div>
        </div>
      </footer>
    );
  }
}
