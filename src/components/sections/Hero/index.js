import styles from './hero.module.css'

const Hero = () => {
    return (
        <section id="hero">
            <div className={styles.info}>
                <p>I'm a self taught developer and Software Engineering student from Turkey.</p>
                <br/>
                <p>If you still haven't noticed, I'm working in the field of web development developing both backend and frontend applications using various <i>fun</i> tools.</p>
            </div>
            <div className={styles.img}>
                <img src="/bolt.png" id={styles.bolt} alt="lightning bolt" />
            </div>
        </section>
    )
}

export default Hero
