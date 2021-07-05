import React from 'react'
import { FaVuejs, FaReact } from 'react-icons/fa'
import { DiJavascript1, DiMongodb, DiHtml5, DiCss3, DiSass, DiNodejsSmall } from 'react-icons/di'
import { SiIbm } from 'react-icons/si'

import styles from './stacks.module.css'

const Stack = () => {

    return (
        <section id="stack">
            <h2>$ I Use,</h2>
            <div className={styles.stackList}>
                <FaReact className={styles.icon} size={80} color="cyan" />
                <FaVuejs className={styles.icon} size={80} style={{ 'color': '#42b883' }} />
                <DiJavascript1 className={styles.icon} size={80} style={{ 'color': '#f0db4f' }} />
                <DiMongodb className={styles.icon} size={80} style={{ 'color': '#4db33d' }} />
                <DiNodejsSmall className={styles.icon} size={80} style={{ 'color': '#68a063' }} />
                <DiHtml5 className={styles.icon} size={80} style={{ 'color': '#e34c26' }} />
                <DiCss3 className={styles.icon} size={80} style={{ 'color': '#264de4' }} />
                <DiSass className={styles.icon} size={80} style={{ 'color': '#cc6699' }} />
                <SiIbm className={styles.icon} size={80} style={{ 'color': 'var(--color-primary)' }} />
            </div>
        </section>
    )
}

export default Stack
