var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

router
	.route('/hotels')
	.get(ctrlHotels.hotelsGetAll) 
	.post(ctrlHotels.hotelsAddOne); 

router
	.route('/hotel/:hotelId')
	.get(ctrlHotels.hotelsGetOne)
	.put(ctrlHotels.hotelsUpdateOne)
	.delete(ctrlHotels.hotelsDeleteOne);

router
	.route('/hotel/:hotelId/reviews')
	.get(ctrlReviews.reviewsGetAll)  
	.post(ctrlUsers.authenticate, ctrlReviews.reviewsAddOne);
	
router
	.route('/hotel/:hotelId/reviews/:reviewId')
	.get(ctrlReviews.reviewsGetOne)
	.put(ctrlReviews.reviewsUpdateOne)
	.delete(ctrlReviews.reviewsDeleteOne);
	
router
	.route('/users/register')
	.post(ctrlUsers.register);
	
router
	.route('/users/login')
	.post(ctrlUsers.login);
	
	
	module.exports = router;