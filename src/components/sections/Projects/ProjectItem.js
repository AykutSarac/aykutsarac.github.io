import styles from './projects.module.css'

const ProjectItem = ({ project }) => {
    return (
        <a href={project.url} target="_blank" rel="noreferrer" className={styles.project}>
            <div className={styles.projectInfo}>
                <h3>{project.name}</h3>
                <div className={styles.description}>
                    {project.desc}
                </div>
            </div>
        </a>
    )
}

export default ProjectItem
