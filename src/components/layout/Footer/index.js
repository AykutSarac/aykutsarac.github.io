import React from 'react'
import { FaGithub } from 'react-icons/fa'
import styles from './footer.module.css'

const index = () => {
    return (
        <footer className={styles.footer}>
            <a href="http://github.com/AykutSarac/aykutsarac.github.io"><FaGithub size={18} style={{ verticalAlign: 'middle' }} /> Check this website @ GitHub</a>
        </footer>
    )
}

export default index
