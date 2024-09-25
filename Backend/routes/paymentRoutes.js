const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Payment Routes
router.post('/create-payment', paymentController.createPayment);
router.post('/update-payment', paymentController.updatePayment);
router.get('/get-payment/:id', paymentController.getPayment);
router.delete('/delete-payment/:id', paymentController.deletePayment);

module.exports = router;