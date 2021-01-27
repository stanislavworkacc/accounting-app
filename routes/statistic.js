const {Router} = require('express');
const router = Router();
const Category = require('../model/category')
const Statistic = require('../model/statistic');

router.get('/',  (req, res) => {
    res.render('statistic', {
        title: 'Все категории',
    })
});

router.get('/:id', async (req, res) => {

    const category = await Statistic.getById(req.params.id);
    
    console.log('CATEGORY', category)
    res.render('statisticPosition', {
        layout: 'statisticPosition',
        name: category.name,
        day: category.data,
        amount: category.amount,
        price: category.price,
        title: category.category,
        category: category,
    })
});

router.post('/',  async (req, res) => {
    const currentId = req.headers.referer.split('').splice(31, 36).join('');
    const category = await Category.getAll();
    const currentCategoryObject = category.filter(item => item.id === currentId);
    const date = new Date();
    const currentDate = String(date).slice(0,10);
    
    const currentCategoryName = currentCategoryObject[0].title
    console.log('REQ BODY dsad', req.body);


    const statistic = new Statistic(req.body, currentDate, currentCategoryName, currentId);
    statistic.save();
    res.redirect('/statistic');
    
});

module.exports = router;