import React from 'react'
// import {  NavLink } from 'react-router-dom';

export const Fichas = () => {
const [dados,setDados] = React.useState('');


    React.useEffect(()=>{
       fetch('http://localhost:3000/fichas').then((r)=>r.json()).then((json)=> setDados(json));
    },[])

    console.log(setDados,dados)

  return (
    <section>


{dados &&
        dados.animais.map((p) => (
          <a
          href={p.id}          
          >
            {p.name}
          </a>

))}
    </section>
  )
}
