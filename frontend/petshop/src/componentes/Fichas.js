import React from 'react'
// import {  NavLink } from 'react-router-dom';

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

    <section>



{dados &&
        dados.animais.map((p) => (
          <div> <a onClick={handleClick}
          href={p.id}   >
            
            <h2>{p.id}</h2>
            <h1>{p.name}</h1>
          
            </a></div>
       

))}
    </section>
  )
}
