
import { getImageUrl } from '../../utlis'
import styles from './About.module.css'

const About = () => {
  return (
   <section className={styles.container} id='about'>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
     <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="about-image" />
     <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon" />
        <div className={styles.aboutItemtext}>
          <h3>Frontend Developer</h3>
          <p>I’m a front-end developer with experience
in building responsive and optimized site</p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt="server-icon" />
        <div className={styles.aboutItemtext}>
          <h3>Backend Developer</h3>
          <p>I have experience developing fast and
optimised back-end systems and APIs</p>
        </div>
      </li>
      <li className={styles.aboutItem}>
        <img src={getImageUrl("about/uiIcon.png")} alt="design-icon" />
        <div className={styles.aboutItemtext}>
          <h3>Graphic Designer</h3>
          <p>7 Years Experience in Graphic Designing for creating social media marketing, printing and packaging designs</p>
        </div>
      </li>
     </ul>
    </div>

   </section>
  )
}

export default About