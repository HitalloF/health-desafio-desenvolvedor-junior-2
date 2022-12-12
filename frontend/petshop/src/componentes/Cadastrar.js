import React from 'react'
import styles from './styles/Cadastrar.module.css'
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
    <div className={styles.cadastro}>
      
    <div className={styles.form}>
      
      <form onSubmit={handleSubmit(addPost)}>
        
    <div >
      <h1>INFORMAÇÕES DO ANIMAL</h1>
        <label>Nome:  </label>
        <input type='text' name="name" {...register("name")}/>
    </div>
    <div className={styles.form}>
        <label>Idade:</label>
        <input type='number' name="idade" {...register("idade")} />
    </div>
    <div  className={styles.form}>
        <label>Raça:</label>
        <input type='text' name="raca" {...register("raca")} />
    </div>
    <div  className={styles.form}>
        <label>Tipo:</label>
        <input type='text' name="tipo" {...register("tipo")} />
    </div>
    <h1>INFORMAÇÕES DO CLIENTE</h1>
    <div  className={styles.form}>
        <label>Nome:</label>
        <input type='text' name="dono_nome" {...register("dono_nome")} />
    </div>
    <div  className={styles.form}>
        <label>Telefone:</label>
        <input type='text' name="dono_telefone" {...register("dono_telefone")} />
    </div>
    <div className={styles.button}>
      <button type='submit'>CADASTRAR</button>
    </div>
    </form>


    </div>
    </div>
  )
}

export default Cadastrar