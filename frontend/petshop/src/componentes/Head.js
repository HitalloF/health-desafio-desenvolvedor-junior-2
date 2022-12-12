import React from 'react'
import styles from './styles/Head.module.css'
const Head = () => {
  return (
    <>
    <nav className={styles.nav}>
      <ul>
        <li><a href='/fichas'>FICHAS</a></li>
        <li><a href='/cadastro'>CADASTRO</a></li>
        <li><a href='/find'>PROCURAR PELO ID</a></li>
      </ul>
    </nav>
    
    </>
  )
}

export default Head