const express = require ('express');
const router = express.Router();

//RETORNA  TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    })
})

//INSERE UM PEDIDOS
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    })
})

//RETORNA DADOS DE UM PEDIDOS
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Detalhes do pedido',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Pedido excluído'
        })
    }
})


//DELETA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido deletado'
    })
})



module.exports = router;