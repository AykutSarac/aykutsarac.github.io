import React from 'react'
import styles from './navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <nav id={styles.nav}>
            <h1>
                <a href="/">$ Welcome to my page, I'm <span style={{ 'color': '#c300ff' }}>Aykut</span>.</a>
            </h1>
            <ul className={`${showMenu ? styles.hide : styles.show}`} onClick={toggleMenu}>
                <GrFormClose size={45} className={styles.closeMenu} />
                <li><a href="/">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                {/* <li><a href="#stack">Stack</a></li> */}
                <li><a href="https://github.com/AykutSarac">GitHub</a></li>
            </ul>
            <GiHamburgerMenu size={30} className={styles.menu} onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar
