import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav id={styles.nav}>
            <h2>$ Welcome to my page, I'm <span style={{ 'color':  '#c300ff' }}>Aykut</span>.</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#stack">Stack</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://github.com/AykutSarac">GitHub</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
