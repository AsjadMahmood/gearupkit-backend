const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: {type: Number, required: true},
    timeStamp: {type: Date},
    deviceUserName: {type: String},
    latitude: {type: Number},
    longitude:{type: Number},
    altitude: {type: Number},
    heartRate: {type: Number},
    gyroX: {type: Number, default:0},
    gyroY: {type: Number, default:0},
    gyroZ: {type: Number, default:0},
    acceX: {type: Number, default:0},
    acceY: {type: Number, default:0},
    acceZ: {type: Number, default:0},
    climb: {type: Number, default:0},
    direction: {type: Number},
    speed: {type: Number},
    horizontal: {type: Number},
    vertical: {type: Number},
    accuracy_level: {type: Number},
    battery_level:{type: Number},
});


// Export the model
module.exports = mongoose.model('User', UserSchema);