const express = require('express');
const router = express.Router();
const Member = require('../models/Members');

// Register Member
exports.registerMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.json({ message: 'Member registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering member' });
  }
};

// Get Member
exports.getMember = async (req, res) => {
  try {
    const memberId = req.params.id;
    const member = await Member.findById(memberId);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (err) {
    res.status(500).json({ message: 'Error getting member' });
  }
};

// Update Member
exports.updateMember = async (req, res) => {
  try {
    const memberId = req.params.id;
    const member = await Member.findById(memberId);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    member.MemberName = req.body.MemberName;
    await member.save();
    res.json({ message: 'Member updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating member' });
  }
};

// Delete Member
exports.deleteMember = async (req, res) => {
  try {
    const memberId = req.params.id;
    await Member.findByIdAndDelete(memberId);
    res.json({ message: 'Member deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting member' });
  }
};