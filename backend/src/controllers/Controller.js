const Model = require('../models/Models')

module.exports = {
// Buscar todos
getall: async (req, res) => {
    try {
        const animais = await Model.findAll();

        if (!animais) {
            res.status(200).json({ message: "NÃO EXISTE CLIENTES CADASTRADOS" })
        }
        res.status(200).json({ animais })
    } catch {
        res.status(400).json({ erro })
    }
},

// Buscar pelo ID
getId : async (req, res)=>{
    try{
    const { id } = req.params
    const animal = await Model.findOne({ where: { id } })
    res.status(200).json(animal)
    }catch (error) {
        res.status(400).json({ erro })
    }
},
// Cadastrar 
post: async (req, res) => {
    try{
        const { name, idade, tipo, raca, dono_nome, dono_telefone } = req.body
        const animal = await Model.create({name, idade, tipo, raca, dono_nome, dono_telefone  })
        res.status(201).json({ animal })
    }catch{
        res.status(400).json({ animal })
    }
},
// Modificar 
   update: async (req, res) => {
    try {
        const { id } = req.params
        const { name, idade, tipo, raca, dono_nome, dono_telefone  } = req.body
        const animal = await Model.findOne({ where: { id } })
        if (!animal) {
            res.status(401).json({ message: "USUARIO NÃO ENCONTRADO" })
        } else {
            const animal = await Model.update({ name, idade, tipo, raca, dono_nome, dono_telefone }, { where: { id } })

            res.status(200).send({ animal })
        }
    } catch (error) {
        res.status(400).json({ erro })
    }
},
// Deletar ficha
delete: async (req, res) => {
    const { id } = req.params

    const animal = await Model.findOne({ where: { id } })
    if (!animal) {
        res.status(401).json({ message: "CLIENTE NÃO ENCONTRADO" })
    } else {
        const animal = await Model.destroy({ where: { id } })
        res.status(200).json({ ok: true })
    }
}
}