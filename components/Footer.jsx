import React from 'react'
import styles from "../styles/Footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.flexContainer}>
                    <div className={styles.brands}>

                    </div>
                    <div className={styles.articles}>

                    </div>
                </div>
                <div className={styles.copyright}>
                    <hr/>
                    <strong>DennisRono &copy; 2021</strong>
                </div>
            </div>
        </div>
    )
}
