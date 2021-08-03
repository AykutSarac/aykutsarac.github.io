import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
    return (
        <section id="hero">
            <div className={styles.info}>
                <p>I'm a passionate software developer who is a fan of continous learning.</p>
                <br/>
                <p>I have experience in developing both backend and frontend systems, I love contributing to Open Source, following the trends of evolving technology and science. </p>
            </div>
            <div className={styles.img}>
                <img src="/bolt.png" id={styles.bolt} alt="lightning bolt" />
            </div>
        </section>
    )
}

export default Hero
