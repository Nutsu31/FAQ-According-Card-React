import React from 'react'
import styles from './Vector.module.css'
import desktopIllustration from '../components/assets/illustration-woman-online-desktop.svg'

const Vector = () => {
  return (
    <div className={styles.illustrationDiv}>
        <img src={desktopIllustration} />
    </div>
  )
}

export default Vector