const {Router} = require('express');
const router = Router();
const Statistic = require('../model/statistic');

router.get('/', async (req, res) => {
    const allReport  =  await Statistic.getAll();
    const onlyCategories = allReport.
                        map(item => item.category);
    const onlyId = allReport.
                    map(item => item.id);
    const onlyDay = allReport.
                    map(item => item.data);
    

    res.render('homepage', {
        title: 'Статистика',
        allReport: allReport,
        isHome: true,
        onlyCategories,
    })
});

module.exports = router;