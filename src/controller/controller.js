import { connection } from "../database/connection.js"
import { biblioteca } from "../model/biblioteca.js"
import { Sequelize } from 'sequelize'

export const getIndex =  async (req,res) => {
    try{
        const listBooks =  await biblioteca.findAll();
        console.log(listBooks)
        res.render("index.ejs",{listBooks})
    }catch(error){
        res.send(error.message)
    }
 
}

export const getDetalhes = async (req, res) => {
    try{
        const livroDetalhes = await biblioteca.findByPk(req.params.id);
        res.render('detalhes.ejs', {livroDetalhes})
    }catch(error) {
        res.send(error.message)
    }
}

export const getCadastro = (req, res) => {
   res.status(200).render('cadastro',{toggle:false})
}

export const postCadastro = async (req, res) => {
    try {
        const {nome, autor, descricao, genero, ano, img} = req.body
        await biblioteca.create({
            nome,autor,descricao,genero,ano,img
        })
        res.render('cadastro.ejs',{toggle:true})
    }catch(error) {
        res.send(error.message)
    }
}

export const getUpdate = async (req,res) => {
    const livros = await biblioteca.findByPk(req.params.id)
    res.status(200).render('update.ejs',{livros})
}

export const postUpdate = async (req, res) => {
    const {nome, autor, descricao, genero, ano, img} = req.body
    try{
        await biblioteca.update({
                nome: nome,
                autor: autor,
                descricao: descricao,
                genero: genero,
                ano: ano,
                img: img
            }, {
                where: {
                    id: req.params.id
                }
            })
      res.redirect('/')
    } catch(error) {
        res.status(500).send(err.message)
    }
}

export const getRemove = async (req, res) => {
    try {
        await biblioteca.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).redirect('/')
    } catch(error) {
        res.send(error.message)
    }
}