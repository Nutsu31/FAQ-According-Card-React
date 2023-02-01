import React, { useState } from 'react'
import { DATAS } from './data/datas'
import styles from '../components/Item.module.css'

const Item = (props) => {
const [isShow , setIsShow] = useState(0)

const handleChange = (item) => {
    if(isShow === item){
    setIsShow(null)
    }else{
    setIsShow(item)
    }
}

  return (
    DATAS.map((data) => {
        return (
        <div onClick={() => handleChange(data.id)}>
            <p className={isShow === data.id ? `${styles.active}`: `${styles.text}`}>{data.title}</p>

            {isShow === data.id? <p className={styles.text}>{data.content}</p> : null}
        </div>
        )
    })
  )
}

export default Item