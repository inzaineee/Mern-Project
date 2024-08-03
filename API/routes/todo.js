const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message:'Get all todos'});
})

router.get('/:id', (req, res) => {
  res.json({message:`Get todo with id ${req.params.id}`});
})

router.post('/', (req, res) => {
    res.json({message:'Create todo'});
})

router.delete('/:id', (req, res) => {
    res.json({message:`Delete todo with id ${req.params.id}`});
})

router.patch('/:id', (req, res) => {
    res.json({message:`Update todo with id ${req.params.id}`});
})

module.exports = router;