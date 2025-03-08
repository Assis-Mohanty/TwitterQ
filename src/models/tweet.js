const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max:[280, 'Tweet is too long']
    },
    
}, {timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process() {
    return `${this.content} \nCreated by: ${this.userEmail}`;
})

tweetSchema.pre('save', function(next) {
    console.log('Inside a hook');
    this.content = this.content + '....';
    next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;