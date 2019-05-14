const express = require('express');

const Users = require('./userDb.js')
const router = express.Router();



router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

//GET router
router.get('/', async (req, res) => {
    try {
        const users = await Users.get(req.query);
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Error retriving the Users'})
    }
});

router.get('/:id', validateUserId, (req, res) => {
    res.status(200).json(req.user)
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

async function validateUserId(req, res, next) {
    try{
        const {id} = req.params;
        const user = await Users.findById(id)

        if(user){
            req.user = user;
            next();
        } else {
            next({message: 'User not found; invalid id'})
        }
    } catch (err) {
        res.status(500).json({message: 'Failed to process request'})
    }
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
