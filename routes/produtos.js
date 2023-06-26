const express = require ('express');
const router = express.Router();

//RETORNA  TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    })
})

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Insere produtos'
    })
})

//RETORNA DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        })
    }
})

//ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Atualiza produto'
    })
})

//DELETA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto excluído'
    })
})



module.exports = router;