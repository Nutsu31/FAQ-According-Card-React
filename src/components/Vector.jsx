import React from 'react'
import styles from './Vector.module.css'
import desktopIllustration from '../components/assets/illustration-woman-online-mobile.svg'

const Vector = () => {
  return (
    <div className={styles.illustrationDiv}>
        <img src={desktopIllustration} className={styles.img} />
    </div>
  )
}

export default Vector