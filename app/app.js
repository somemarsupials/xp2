var express = require('express');
var app = express();

const PORT = 5000;

// THIS IS HOW WE WOULD USE RENDERING ENGINES
// app.engine('jade', require('jade').__express);
// app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// app.use(require('./middlewares/users'));
app.use(require('./controllers'));

app.listen(PORT, function() {
  console.log(`server up on P${PORT}`);
})
