import { useEffect, useRef } from 'react'
import bolt from '../../../assets/img/bolt.png'

import styles from './hero.module.css'

const Hero = () => {

    const elem = useRef(null);

    useEffect(() => {
        window.addEventListener("mousemove", parallax);

        // Magic happens here
        function parallax(e) {
            let _w = window.innerWidth / 2;
            //let _h = window.innerHeight / 2;
            let _mouseX = e.clientX;
            //let _mouseY = e.clientY;

            let depth = `${-(_mouseX - _w) * 0.05}%`;

            window.requestAnimationFrame(function(){
                elem.current.style.transform = `translateX(${depth})`;
             })
        }

        return () => {
            window.removeEventListener("mousemove", parallax);
        }
    }, [elem]);

    return (
        <section id="hero">
            <div className={styles.info}>
                <p>I'm a self taught developer and Software Engineering student from Turkey.</p>
                <br/>
                <p>If you still haven't noticed, I'm working in the field of web development developing both backend and frontend applications using various <i>fun</i> tools.</p>
            </div>
            <div className={styles.img}>
                <img src={bolt} ref={elem} id={styles.bolt} alt="lightning bolt" />
            </div>
        </section>
    )
}

export default Hero
