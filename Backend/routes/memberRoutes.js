const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// Member Routes
router.post('/register-member', memberController.registerMember);
router.get('/get-member/:id', memberController.getMember);
router.put('/update-member/:id', memberController.updateMember);
router.delete('/delete-member/:id', memberController.deleteMember);

module.exports = router;