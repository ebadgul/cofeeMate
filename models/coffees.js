var mongoose = require('mongoose');

var CoffeesSchema = new mongoose.Schema({
    paymenttype: String,
    amount: Number,
    name: String,
    shop: String,
    upvotes: {type: Number, default: 0}
});
module.exports = mongoose.model('Coffee', CoffeesSchema);