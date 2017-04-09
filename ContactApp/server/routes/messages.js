/**
 * Created by Jordan on 4/6/2017.
 */



var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  // res.render('index', { title: 'CMS' });
  //res.sendFile(path.join(__dirname, 'dist/index.html'));
  var message = new Message({
    content: req.body.content
  })
  message.save(function(err, result){
    if(err){
      res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'Saved message',
      obj: result
    });
  })
});

module.exports = router;


