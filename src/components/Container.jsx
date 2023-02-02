import React from 'react'
import styles from '../components/Container.module.css'
import Item from './Item'
import Vector from './Vector'

const Container = () => {

  return (
    <div className={styles.container}>
      <Vector />
      <div className={styles.flexBox}>
        <h1>FAQ</h1>
        <Item />
      </div>
    </div>
  )
}

export default Container



