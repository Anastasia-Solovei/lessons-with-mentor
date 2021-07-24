import { Component } from "react";
import axios from "axios";

import logo from "../../images/logo_footer.svg";
import styles from "./Footer.module.css";

import img1 from "../../images/footer/facebook.svg";
import img2 from "../../images/footer/instagram.svg";
import img3 from "../../images/footer/linkedin.svg";
import img4 from "../../images/footer/pinterest.svg";

class Footer extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    console.log("didMount");

    let url = "http://localhost:3004/footer";

    axios.defaults.baseURL = url;
    console.dir(axios.defaults.baseURL);

    axios
      .get()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          data,
        });
      });
    // fetch(url)
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   this.setState({
    //     data,
    //   });
    // });
  }

  componentDidUpdate() {
    console.log("didUpdate");
  }

  render() {
    console.log(this.state);
    const { about, showrooms, support, office } = this.state.data;
    return (
      <footer>
        <div className={styles.logo}>
          <img src={logo} alt="logo room" />
        </div>
        <div className={styles.menu}>
          <div className={styles.menu_items}>
            <h3>About</h3>
            <ul>
              {about &&
                about.map((el) => {
                  return (
                    <li key={el.id}>
                      <a href="/">{el.link}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={styles.menu_items}>
            <h3>Showrooms</h3>
            <ul>
              {showrooms &&
                showrooms.map((el) => {
                  return (
                    <li key={el.id}>
                      <a href="/">{el.link}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={styles.menu_items}>
            <h3>Support</h3>
            <ul>
              {support &&
                support.map((el) => {
                  return (
                    <li key={el.id}>
                      <a href="/">{el.link}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={styles.menu_items}>
            <h3>Office</h3>
            <ul>
              {office &&
                office.map((el) => {
                  return (
                    <li key={el.id}>
                      <a href="/">{el.link}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <h3>Follow us</h3>
          <ul className={styles.icons}>
            <li className={styles.icons_item}>
              <a href="/">
                <img src={img1} alt="facebook" />
              </a>
            </li>
            <li className={styles.icons_item}>
              <a href="/">
                <img src={img2} alt="instagram" />
              </a>
            </li>
            <li className={styles.icons_item}>
              <a href="/">
                <img src={img3} alt="linkedin" />
              </a>
            </li>
            <li className={styles.icons_item}>
              <a href="/">
                <img src={img4} alt="pinterest" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.subscribe}>
          <h3>Join our mailing list</h3>
          <p>Be the first to hear everything about ROOM.</p>
          <div className={styles.email_form}></div>
          <select className={styles.country}>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
          <div className={styles.agreement}>
            <div className={styles.checkbox}></div>
            <div className={styles.agreement_text}>
              Yes. I would like to receive marketing communications from ROOM
              about product updates and special offers. Please refer to ROOM’s
              Privacy Policy for more information about how we process your data
              (including how to unsubscribe).
            </div>
            <p className={styles.sign_up}>SIGN UP</p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
