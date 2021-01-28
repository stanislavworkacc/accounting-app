const os = require('os');
const {Router} = require('express');
const Category = require('../model/category');
const router = Router();
const jsonParser = require('../index.js')

router.get('/', async (req, res) => {
    const category = await Category.getAll();
    res.render('category', {
        title: 'Все категории',
        isCategory: true,
        category
    })
});

router.get('/dataposition', async (req, res) => {
    const category = await Category.getAll();
    res.json(category)
});

router.get('/:id/edit', async (req, res) => {
    if(!req.query.allow) {
        return res.redirect('/')
    };

    const сategory = await Category.getById(req.params.id);

    res.render('category-edit', {
        layout: 'category-edit',
        title: `Редактировать ${сategory.title}`,
        сategory
    })
});

router.post('/edit', async (req, res) => {
    const currentId = req.headers.referer.split('').splice(31, 36).join('')
    console.log(currentId)
    await Category.update(req.body, currentId);
    res.redirect('/category');
})

router.get('/:id', async (req, res) => {
    console.log('FROM GET ID', req.params.id)
    const category = await Category.getById(req.params.id);

    res.render('tablePosCat', {
        layout: 'positionOfCategory', //'tablePosCat' //'positionOfCategory'
        title: `Позиции ${category.title}`,
        price: category.price,
        position: category.position,
        id: category.id,
        category,
    })
});


module.exports = router;