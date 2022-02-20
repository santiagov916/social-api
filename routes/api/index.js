const router = require('express').Router();
const userRoutes = require('./user-routes');

console.log('in there');
router.use('/users', userRoutes);

module.exports = router;