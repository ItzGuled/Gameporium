const router = require('express').Router();
const { User, Comment, Rate } = require('../../models');
//>>> withAuth

// GET /api/users
router.get('/', (req,res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    })
})

// GET /api/users/1
router.get('/:id', (req,res) => {})

// POST /api/users
router.post('/', (req,res) => {})

// POST (login) /api/users/login
router.post('/login', (req,res) => {})

// POST (logout) /api/users/logout
router.post('/logout', (req,res) => {})

// PUT /api/users/1
router.put('/:id', (req,res) => {})

// DELETE /api/users/1
router.delete('/:id', (req,res) => {})



module.exports = router;