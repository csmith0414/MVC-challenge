const router = require('express').Router();
const commentsRoutes = require('./commentsRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/comment', commentsRoutes);
router.use('/users', userRoutes);
router.use('/blogPost', postRoutes);

module.exports = router;