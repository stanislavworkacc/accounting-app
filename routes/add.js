const {Router} = require('express');
const router = Router();
const Category = require('../model/category')

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить категорию',
        isAdd: true
    });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    let tittle = req.body.title;
    let price = req.body.price;
    let position = req.body.position;
    
    const category = new Category(tittle, price, position);
    console.log(req.body);
    await category.save();

    res.redirect('/category');
});

module.exports = router;