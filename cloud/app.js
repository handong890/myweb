var express = require('express');
var app = express();

// App 全局配置
app.set('views','cloud/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());

require('./routes/indexRoute')(app);

app.listen();
