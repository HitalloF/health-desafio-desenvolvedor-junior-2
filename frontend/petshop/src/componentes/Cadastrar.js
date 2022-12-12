import React from 'react'

import { useForm } from 'react-hook-form';


const Cadastrar = () => {

  const {register, handleSubmit, formState: {erros}} = useForm()


  const addPost = data => {
    fetch('http://localhost:3000/save',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)}).then(()=>{
        console.log("NOVO CLIENTE CADASTRADO")
      })
  }








  return (
    <div>
      <form onSubmit={handleSubmit(addPost)}>
    <div>
        <label>Nome</label>
        <input type='text' name="name" {...register("name")}/>
    </div>
    <div>
        <label>Idade</label>
        <input type='number' name="idade" {...register("idade")} />
    </div>
    <div>
        <label>Raça</label>
        <input type='text' name="raca" {...register("raca")} />
    </div>
    <div>
        <label>Tipo</label>
        <input type='text' name="tipo" {...register("tipo")} />
    </div>
    <h1>INFORMAÇÕES DO CLIENTE</h1>
    <div>
        <label>Nome</label>
        <input type='text' name="dono_nome" {...register("dono_nome")} />
    </div>
    <div>
        <label>Telefone</label>
        <input type='text' name="dono_telefone" {...register("dono_telefone")} />
    </div>
    <div>
      <button type='submit'>Submit</button>
    </div>
    </form>


    </div>
  )
}

export default Cadastrar