import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer">
          <div class="footer-left">&copy; &nbsp; 2022 Kelompok 6</div>
          <div class="footer-right">
            <a href="/">Terms and Conditions</a>
            <a href="/">Privacy and Policy</a>
          </div>
        </div>
      </footer>
    );
  }
}
