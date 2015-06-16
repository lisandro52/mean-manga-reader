'use strict';

var express = require('express');
var controller = require('./manga.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:manga/:chapter/:page', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;