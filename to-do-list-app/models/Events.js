const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  deadLine: Date,
  description: String,
  imageUrl: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
