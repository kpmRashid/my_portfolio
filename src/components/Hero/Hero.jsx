
import styles from './Hero.module.css'
import { getImageUrl } from '../../utlis'

const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi I&apos;m Kpm Rashid</h1>
      <p className={styles.description}>I&apos;m a Frontend developer using React and Node Js. And a Creative graphic designer using Adobe Illustrator and Adobe Photoshop. Reach out if you&apos;d like to learn more!</p>
      <a className={styles.contactBtn} href="mailto:kpmr123@gmail.com">Contact Me</a>
    </div>
    <img className = {styles.heroImg}src={getImageUrl("hero/heroImage.png")} alt="Image of Me" />
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
   </section>
  )
}

export default Hero