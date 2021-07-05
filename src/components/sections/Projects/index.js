import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import ProjectItem from "./ProjectItem";
import { AiOutlineCaretDown } from 'react-icons/ai'

import styles from './projects.module.css'

const Projects = () => {

    const [repos, setRepos] = useState([]);
    const [slicer, setSlicer] = useState(6);

    const seeMore = () => setSlicer(slicer + 6);

    useEffect(() => {

        async function fetchData() {
            try {
                const res = await axios.get("https://api.github.com/users/AykutSarac/repos").then(res => res.data);

                const tempData = [...res];
                tempData.push({ id: 1, stargazers_count: 999, name: 'Growtopian Bot', html_url: 'https://growtopian.xyz', description: 'Growtopian is a Discord bot with various features' })

                const orderedArr = tempData.sort((a, b) => {
                    if (a.stargazers_count > b.stargazers_count) {
                        return -1
                    } else {
                        return 1
                    }
                })

                return orderedArr.map(data => {
                    return {
                        id: data.id,
                        name: data.name,
                        url: data.html_url,
                        desc: data.description
                    }
                })
            } catch (error) {
                console.error('An error occured while fetching data...');
            }

        }

        if (localStorage.getItem('repos')) {
            const storeRepos = JSON.parse(localStorage.getItem('repos'));
            setRepos(storeRepos);
        } else {
            fetchData().then(repos => {
                localStorage.setItem('repos', JSON.stringify(repos));
                setRepos(repos);
            });
        }

    }, []);

    return (
        <section id="projects">
            <h2>$ Projects</h2>
            <div className={styles.projectList}>
                {repos && repos.length > 0 && repos.slice(0, slicer).map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
            {slicer < repos.length && <button className={styles.seeMore} onClick={seeMore}>See More <AiOutlineCaretDown style={{ verticalAlign: 'middle' }} /></button>}
        </section>
    )
}

export default Projects
