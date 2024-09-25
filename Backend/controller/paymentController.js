const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Member = require('../models/Member');

// Create Payment
exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.json({ message: 'Payment created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating payment' });
  }
};

// Update Payment
exports.updatePayment = async (req, res) => {
  try {
    const paymentId = req.body.paymentId;
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    payment.PaymentStatus = req.body.PaymentStatus;
    await payment.save();
    res.json({ message: 'Payment updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating payment' });
  }
};

// Get Payment
exports.getPayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: 'Error getting payment' });
  }
};

// Delete Payment
exports.deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    await Payment.findByIdAndDelete(paymentId);
    res.json({ message: 'Payment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting payment' });
  }
};