const User = require('../models/user.model');
const data = require('../data/dataset.json')
//Simple version, without validation or sanitation
exports.user_create = function (req, res) {
    console.log(req.body);
    let user = new User(req.body);
     user.save()
    .then(user => {
      res.status(200).json({'user': 'user in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
};

exports.user_details = function (req, res) {
    user.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_get = function (req, res) {
    User.find(function (err, users){
        if(err){
          console.log(err);
        }
        else {
          console.log('user',users[0]);
            
          res.json(users);
        }
      });
};

exports.user_update = function (req, res) {
    user.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
        if (err) return next(err);
        res.send('user udpated.');
    });
};

exports.user_delete = function (req, res) {
    user.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};