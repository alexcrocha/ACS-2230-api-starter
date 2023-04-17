const express = require('express')
const router = express.Router();

const Cat = require('../models/cat')

router.get('/', (req, res) => {
    Cat.find().then((cats) => {
        return res.json({ cats })
    })
        .catch((err) => {
            throw err.message
        });
})

router.get('/:catId', (req, res) => {
    console.log(`Cat id: ${req.params.catId}`)
    Cat.findById(req.params.catId).then((cat) => {
        return res.json({ cat })
    })
        .catch((err) => {
            throw err.message
        });
})

router.post('/', (req, res) => {
    let cat = new Cat(req.body)
    cat.save().then(catResult => {
        return res.json({ cat: catResult })
    }).catch((err) => {
        throw err.message
    })
})

router.put('/:catId', (req, res) => {
    Cat.findByIdAndUpdate(req.params.catId, req.body).then((cat) => {
        return res.json({ cat })
    }).catch((err) => {
        throw err.message
    })
})

router.delete('/:catId', (req, res) => {
    Cat.findByIdAndDelete(req.params.catId).then(() => {
        return res.json({
            'message': 'Successfully deleted.',
            '_id': req.params.catId
        })
    })
        .catch((err) => {
            throw err.message
        })
})

module.exports = router
