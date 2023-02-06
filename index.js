const express = require('express');
const serveIndex = require('serve-index');

const app = express();
app.set('port', 3909);

app.use('/', serveIndex('D:\\Git-Projects\\servers\\ready-builds\\public'));
app.use('/', express.static('D:\\Git-Projects\\servers\\ready-builds\\public'));

app.listen(app.get('port'), () => {
  console.log(`Node app is running at http://192.168.1.39:${app.get('port')}`);
});
