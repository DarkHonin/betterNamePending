var express = require('express');
var app = express();
var path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')


app.get('/', function(req, res, next) {
    res.render('index');
});

app.get('/config.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'config.json'))
})
  

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    console.log(err)
    res.render('error');
  });
  
  module.exports = app;