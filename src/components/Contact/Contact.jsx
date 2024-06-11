import { getImageUrl } from "../../utlis";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email-icon" />
            <a href="mailto:kpmr123@gmail.com">kpmr123@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Linked-icon"
            />
            <a href="https://www.linkedin.com/in/mohammed-rashid-b74477179/">
              linkedin.com/mohammedrashid
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="github-icon"
            />
            <a href="https://github.com/kpmRashid">github.com/kpmrashid</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
