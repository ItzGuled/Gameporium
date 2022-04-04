const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const rateRoutes = require('./rate-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/rates', rateRoutes);

module.exports = router;