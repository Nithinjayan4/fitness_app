const mongoose = require('mongoose');

const membersSchema = new mongoose.Schema({
  MemberId: {
    type: String,
    unique: true,
    required: true
  },
  MemberName: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    validate: {
      validator: (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
      message: 'Invalid email format'
    }
  },
  BloodGroup: {
    type: String,
    required: true
  },
  Height: {
    type: Number,
    required: true
  },
  Weight: {
    type: Number,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  JoinDate: {
    type: Date,
    required: true
  },
  MedicalIssues: {
    type: String,
    required: true
  },
  Notes: {
    type: String,
    required: false
  },
  // Emergency contact
  ParentName: {
    type: String,
    required: true
  },
  ParentPhoneNumber: {
    type: String,
    required: true
  },
  ParentAddress: {
    type: String,
    required: true
  },
  // Payment details
  PaymentMethod: {
    type: String, // online/offline
    required: true,
    enum: ['online', 'offline']
  },
  OnlinePaymentType: {
    type: String, // phonepe/gpay/paytm/etc.
    required: function() {
      return this.PaymentMethod === 'online';
    },
    enum: ['phonepe', 'gpay', 'paytm', 'others']
  },
  PaymentStatus: {
    type: String, // paid/unpaid
    required: true,
    enum: ['paid', 'unpaid']
  },
  PaymentDate: {
    type: Date,
    required: true
  },
  PaymentAmount: {
    type: Number,
    required: true,
    validate: {
      validator: (amount) => {
        return amount > 0;
      },
      message: 'Payment amount must be positive'
    }
  },
  PaymentReceipt: {
    type: String, // receipt number or transaction id
    required: false
  },
  TransactionId: {
    type: String, // online payment transaction id
    required: function() {
      return this.PaymentMethod === 'online';
    }
  },
  NextDueDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Members', membersSchema);