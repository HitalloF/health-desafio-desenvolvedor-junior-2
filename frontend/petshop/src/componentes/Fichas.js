import React from 'react'
import styles from './styles/Fichas.module.css'
import 'bootstrap/dist/css/bootstrap.css';
export const Fichas = () => {
const [dados,setDados] = React.useState('');


    React.useEffect(()=>{
       fetch('http://localhost:3000/fichas').then((r)=>r.json()).then((json)=> setDados(json));
    },[])

    console.log(setDados,dados)


    function handleClick(event){
      const id = event.target.innerText
      window.localStorage.setItem('Id', id)
      console.log(event.target.value)
    }


  return (

    <section className={styles.fichas}>



{dados &&
        dados.animais.map((p) => (
          
          <div className={styles.ficha}>
            
            <h1>Animal {p.tipo}:    {p.name}, </h1>
            <h1> Cliente: {p.dono_nome}</h1>
            
            <a onClick={handleClick}
          href={p.id} ><div className={styles.id}> <h2>{p.id}</h2></div>
            </a>
           </div>
       

))}
    </section>
  )
}
