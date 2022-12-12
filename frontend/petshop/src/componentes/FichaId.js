import React from 'react'

const FichaId = () => {
const [dados, setDados] = React.useState('');


React.useEffect(()=>{
    fetch(`http://localhost:3000/${localStorage.getItem('Id')}`).then((r)=>r.json())
    .then((json)=> setDados(json))


},[])

    console.log(dados, setDados)
  return (


    <section>
      
            
        <div>
        <div>
            <div><h1>Nome: {dados.name}</h1>
                <div>
                    <h2>Idade: {dados.idade}</h2>
                    <h2>Raça: {dados.raca }</h2>
                    <h2>Tipo: {dados.tipo}</h2>
                </div>
            </div>
            
            <div>{dados.dono_nome}</div>
        </div>
    </div>


    </section>
  ) 
}

export default FichaId